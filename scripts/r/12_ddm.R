source(here::here("scripts", "r", "02_load_data.R"))

# Get subset of questions
rq2_ddm <- filter(rq2, rt_raw < 10)

model_f <- bf(
  rt_raw | dec(correct) ~ 1,
  bs ~ 1,
  ndt ~ 1,
  bias ~ 1
)

get_prior(model_f,
          family = wiener(
            link_bs = "log",
            link_ndt = "log",
            link_bias = "logit"),
          data = rq2_ddm
          )

prior_ddm <- c(
  prior("normal(0, 1)", class = "Intercept"),
  prior("normal(0, 5)", class = "Intercept", dpar = "bs"),
  prior("normal(0.2, 1)", class = "Intercept", dpar = "ndt"),
  prior("normal(0.5, 1)", class = "Intercept", dpar = "bias")
)

make_stancode(
  model_f, 
  family = wiener(
    link_bs = "identity", 
    link_ndt = "identity", 
    link_bias = "identity"),
  data = rq2_ddm, 
  prior = prior_ddm)

tmp_dat <- make_standata(
  formula = model_f, 
  family = wiener(
    link_bs = "identity", 
    link_ndt = "identity", 
    link_bias = "identity"),
  data = rq2_ddm, 
  prior = prior_ddm)

str(tmp_dat, 1, give.attr = FALSE)

initfun <- function() {
  list(
    b = rnorm(tmp_dat$K),
    b_bs = runif(tmp_dat$K_bs, 1, 2), #1, 2
    b_ndt = runif(tmp_dat$K_ndt, 0.1, 0.15), 
    b_bias = rnorm(tmp_dat$K_bias, 0.5, 0.1) 
  )
}

test <- brm(
  formula = model_f,
  data = filter(rq2_ddm, participant_id == "55885869fdf99b4020ba0b64"),
  prior = prior_ddm,
  sample_prior = TRUE,
  inits = initfun,
  family = wiener(
    link_bs = "identity", 
    link_ndt = "identity",
    link_bias = "identity"),
  backend = "cmdstanr", 
  chains = 4, warmup = 10000, iter = 15000, thin = 10, 
  cores = 4, 
  control = list(adapt_delta = 0.99999999), 
  file = here("models", "ddm", "test")
)

for (subj in unique(rq2_ddm$participant_id)) {
  print(subj)
  
  participant_m <- brm(
    formula = model_f,
    data = filter(rq2_ddm, participant_id == subj), 
    prior = prior_ddm,
    sample_prior = TRUE,
    inits = initfun,
    family = wiener(
      link_bs = "identity", 
      link_ndt = "identity",
      link_bias = "identity"),
    backend = "cmdstanr", 
    chains = 4, warmup = 10000, iter = 15000, thin = 10, cores = 4, 
    control = list(adapt_delta = 0.99999999), 
    file = here("models", "ddm", subj), 
  )
  
  participant_m <- add_criterion(
    participant_m, 
    criterion = c("loo", "bayes_R2"), 
    file = here("models", "ddm", subj))
}

if (F) {
  
  # Load rds files and get model summary estimates for bs, ndt, bias
  ddm_estimates <- load_models(path = here("models", "ddm"), "rds") %>% 
    map(fixef) %>% 
    map_df(as_tibble, rownames = "param", .id = "participant_id") %>% 
    filter(participant_id != "test") %>% 
    select(participant_id, param, estimate = Estimate, se = Est.Error) %>% 
    filter(param %in% c("Intercept", "bs_Intercept", "ndt_Intercept", "bias_Intercept")) %>% 
    mutate(
      effect = case_when(
        param == "Intercept"       ~ "drift_rate",
        param == "bs_Intercept"    ~ "boundary_separation",
        param == "ndt_Intercept"   ~ "non_decision_time",
        param == "bias_Intercept"  ~ "starting_bias"
      )
    ) %>% 
    left_join(
      select(rq2_ddm, participant_id, lextale_std, eq_std, group) %>% distinct, 
      by = "participant_id"
    ) %>% 
    write_csv(here("data", "tidy", "ddm_estimates.csv"))
  
}

# --------------------------------------------------------------------------- #
# Drift rate and boundary separation models -----------------------------------

#
# Measurement error model
#

# Model formula
ddm_mem_formula <- bf(
  estimate | resp_se(se, sigma = TRUE) ~ 1 + lextale_std * eq_std * group + 
    (1 + lextale_std * eq_std | participant_id)
)

# Get priors of model
get_prior(ddm_mem_formula, 
          family = gaussian(), 
          data = ddm_estimates)

# Set weakly informative priors for drift rate
dr_priors <- c(
  prior(normal(1, 0.5), class = "Intercept"), 
  prior(normal(0, 0.3), class = "b"), 
  prior(cauchy(0, 0.3), class = "sd"), 
  prior(cauchy(0, 0.1), class = "sigma"), 
  prior(lkj(2), class = "cor")
)

bs_priors <- c(
  prior(normal(2, 0.5), class = "Intercept"), 
  prior(normal(0, 0.5), class = "b"), 
  prior(cauchy(0, 0.3), class = "sd"), 
  prior(cauchy(0, 0.1), class = "sigma"), 
  prior(lkj(2), class = "cor")
)

# Fit measurement error model for drift rate
mem_drift_rate <- brm(
  formula = ddm_mem_formula, 
  prior = dr_priors, 
  family = gaussian(), 
  cores = 4, chains = 4, iter = 12000, warmup = 2000, thin = 10, 
  control = list(max_treedepth = 15, adapt_delta = 0.99), 
  backend = "cmdstanr", 
  data = filter(ddm_estimates, effect == "drift_rate"), 
  file = here("models", "mem_drift_rate")
)

# Fit measurement error model for drift rate
mem_boundary_separation <- brm(
  formula = ddm_mem_formula, 
  prior = bs_priors, 
  family = gaussian(), 
  cores = 4, chains = 4, iter = 12000, warmup = 2000, thin = 10, 
  control = list(max_treedepth = 15, adapt_delta = 0.99), 
  backend = "cmdstanr", 
  data = filter(ddm_estimates, effect == "boundary_separation"), 
  file = here("models", "mem_boundary_separation")
)

# Trial simulation ------------------------------------------------------------

#
# General structure: 
#

#   CONTROL            EXPERIMENTAL
#   low emp low emp    low emp low emp
#   low lex hi lex     low lex hi lex
#   P1      P2         P5      P6


# Load models
mem_boundary_separation <- readRDS(here("models", "mem_boundary_separation.rds"))
mem_drift_rate <- readRDS(here("models", "mem_drift_rate.rds"))

# Create new data to predict
bs_new_dat <- expand_grid(
  group = c(0, 1), 
  lextale_std = c(-1, 1), 
  eq_std = c(-1, 1)
) %>%
  mutate(participant = "pop", se = 0)

dr_new_dat <- expand_grid(
  group = c(0, 1), 
  lextale_std = c(-1, 1), 
  eq_std = c(-1, 1)
) %>%
  mutate(participant = "pop", se = 0)


# Get predictions, store in list
dr_bs_est <- bind_rows(
  predict(mem_boundary_separation, newdata = bs_new_dat, 
          re_formula = NA, allow_new_levels = TRUE) %>% 
    as_tibble() %>% 
    bind_cols(bs_new_dat, .) %>%
    mutate(effect = "bs"), 
  
  predict(mem_drift_rate, newdata = dr_new_dat, 
          re_formula = NA, allow_new_levels = TRUE) %>% 
    as_tibble() %>% 
    bind_cols(dr_new_dat, .) %>%
    mutate(effect = "dr")
) %>% 
  transmute(
    val    = Estimate,
    effect,
    group  = if_else(group == 1, "experimental", "control"),
    eq     = if_else(eq_std == -1, "low", "high"),
    lt     = if_else(lextale_std == -1, "low", "high")
  ) %>% 
  printy::super_split(group, eq, lt, effect)

# Run 2000 simulations for each condition
ddm_sims <- bind_rows(
  sim_ddm(group = "experimental", eq = "low", lt = "low",
          drift_rate = dr_bs_est$experimental$low$low$dr$val, 
          boundary_separation = dr_bs_est$experimental$low$low$bs$val / 2,
          bias = 0, ndt = 0.57, n_sims = 1000, seed = 20250916), 
  sim_ddm(group = "experimental", eq = "low", lt = "high",
          drift_rate = dr_bs_est$experimental$low$high$dr$val, 
          boundary_separation = dr_bs_est$experimental$low$high$bs$val / 2,
          bias = 0, ndt = 0.57, n_sims = 1000, seed = 20250916), 
  sim_ddm(group = "experimental", eq = "high", lt = "low",
          drift_rate = dr_bs_est$experimental$high$low$dr$val, 
          boundary_separation = dr_bs_est$experimental$high$low$bs$val / 2,
          bias = 0, ndt = 0.57, n_sims = 1000, seed = 20250916), 
  sim_ddm(group = "experimental", eq = "high", lt = "high",
          drift_rate = dr_bs_est$experimental$high$high$dr$val, 
          boundary_separation = dr_bs_est$experimental$high$high$bs$val / 2,
          bias = 0, ndt = 0.57, n_sims = 1000, seed = 20250916), 
  
  sim_ddm(group = "control", eq = "low", lt = "low",
          drift_rate = dr_bs_est$control$low$low$dr$val, 
          boundary_separation = dr_bs_est$control$low$low$bs$val / 2,
          bias = 0, ndt = 0.57, n_sims = 1000, seed = 20250916), 
  sim_ddm(group = "control", eq = "low", lt = "high",
          drift_rate = dr_bs_est$control$low$high$dr$val, 
          boundary_separation = dr_bs_est$control$low$high$bs$val / 2,
          bias = 0, ndt = 0.57, n_sims = 1000, seed = 20250916), 
  sim_ddm(group = "control", eq = "high", lt = "low",
          drift_rate = dr_bs_est$control$high$low$dr$val, 
          boundary_separation = dr_bs_est$control$high$low$bs$val / 2,
          bias = 0, ndt = 0.57, n_sims = 1000, seed = 20250916), 
  sim_ddm(group = "control", eq = "high", lt = "high",
          drift_rate = dr_bs_est$control$high$high$dr$val, 
          boundary_separation = dr_bs_est$control$high$high$bs$val / 2,
          bias = 0, ndt = 0.57, n_sims = 1000, seed = 20250916)
) %>% 
  mutate(
    facet_lab = case_when(
      group == "experimental" & eq == "low"  & lt == "low"  ~ "EQ: Low, LexTALE: low", 
      group == "experimental" & eq == "low"  & lt == "high" ~ "EQ: low, LexTALE: high", 
      group == "experimental" & eq == "high" & lt == "low"  ~ "EQ: high, LexTALE: low", 
      group == "experimental" & eq == "high" & lt == "high" ~ "EQ: high, LexTALE: high", 
      group == "control" & eq == "low"  & lt == "low"  ~ "EQ: Low, LexTALE: low", 
      group == "control" & eq == "low"  & lt == "high" ~ "EQ: low, LexTALE: high", 
      group == "control" & eq == "high" & lt == "low"  ~ "EQ: high, LexTALE: low", 
      group == "control" & eq == "high" & lt == "high" ~ "EQ: high, LexTALE: high"
    ), 
    facet_lab = fct_relevel(facet_lab, 
                            "EQ: Low, LexTALE: low", "EQ: low, LexTALE: high", 
                            "EQ: high, LexTALE: low", "EQ: high, LexTALE: high")
  ) %>% 
  group_by(group, eq, lt, sim_n) %>% 
  mutate(final_step = max(step), 
         final_val = value[final_step], 
         response = if_else(final_val > 0, "correct", "incorrect")) %>% 
  write_csv(., here("data", "tidy", "ddm_sims.csv"))

# Plotting functions ----------------------------------------------------------

# Calculate binwidth for histograms
fd_bw <- function(x) {
  out <- 2 * IQR(x) / length(x)^(1/3)
  return(out)
}

minimal_adj <- function(...) {
  list(
    theme_minimal(base_size = 12, base_family = "Times"), 
    theme(
      axis.title.y = element_text(hjust = 0.95), 
      axis.title.x = element_text(hjust = 0.95),
      panel.grid.major = element_line(colour = 'grey90', size = 0.15),
      panel.grid.minor = element_line(colour = 'grey90', size = 0.15))
  )
}

# Participant check
check_participant <- function(data = rq2_ddm, id) {
  
  p1_accuracy <- data %>% 
    filter(participant_id == id) %>% 
    ggplot(., aes(x = participant_id, y = correct)) + 
    stat_summary(fun.data = mean_se, geom = "pointrange", 
                 position = position_dodge(0.25)
    ) + 
    geom_text(aes(label = lextale_tra, x = 1.4, y = 0.5)) + 
    geom_text(aes(label = eq_score, x = 0.6, y = 0.5)) + 
    coord_cartesian(ylim = c(0, 1))
  
  p2_rts <- data %>% 
    filter(participant_id == id) %>% 
    ggplot(., aes(x = participant_id, y = rt_adj)) + 
    geom_hline(yintercept = 0, size = 3, color = "white") + 
    geom_jitter(alpha = 0.5, width = 0.2, 
                aes(color = factor(correct))) + 
    geom_text(nudge_x = -0.35, 
              aes(label = ifelse(correct == 0, speaker_variety, ''))) + 
    stat_summary(fun.data = mean_se, geom = "pointrange") + 
    scale_color_brewer(name = NULL, palette = "Set1", 
                       labels = c("incorrect", "correct"))
  
  print(p1_accuracy + p2_rts)
  
}

# -----------------------------------------------------------------------------
# MEM Boundary separation and drift rate --------------------------------------
mem_bs_dr_estimates <- bind_rows(
  as_tibble(mem_drift_rate) %>% 
    select(starts_with("b_")) %>% 
    pivot_longer(everything(), names_to = "params", values_to = "estimate") %>% 
    mutate(effect = "dr"),
  as_tibble(mem_boundary_separation) %>% 
    select(starts_with("b_")) %>% 
    pivot_longer(everything(), names_to = "params", values_to = "estimate") %>% 
    mutate(effect = "bs")) %>% 
  mutate(labs = case_when(
    params == "b_Intercept" ~ "Intercept", 
    params == "b_group1" ~ "Group", 
    params == "b_lextale_std" ~ "LexTALE", 
    params == "b_eq_std" ~ "EQ", 
    params == "b_lextale_std:group1" ~ "Group x\nLexTALE", 
    params == "b_eq_std:group1" ~ "Group x\nEQ", 
    params == "b_lextale_std:eq_std" ~ "LexTALE x EQ", 
    params == "b_lextale_std:eq_std:group1" ~ "Group x\nLexTALE x EQ"), 
    labs = fct_relevel(labs, "Intercept", "Group", "LexTALE", "EQ", 
                       "LexTALE x EQ", "Group x\nLexTALE", "Group x\nEQ", "Group x\nLexTALE x EQ")) %>% 
  ggplot(., aes(x = estimate, y = labs, shape = effect)) + 
  scale_x_continuous(expand = c(0, 0)) + 
  coord_cartesian(xlim = c(-0.5, 2.1)) + 
  geom_vline(xintercept = 0, lty = 3) + 
  stat_halfeye(aes(fill = effect), point_size = 1.5, stroke = 0.5, 
               position = position_dodge(0.5), point_fill = "white") +
  scale_shape_manual(name = NULL, values = c(21, 24), 
                     labels = c("Boundary shift", "Drift rate")) + 
  scale_fill_viridis_d(name = NULL, option = "B", begin = 0.3, end = 0.75, 
                       labels = c("Boundary shift", "Drift rate")) + 
  scale_y_discrete(limits = rev, position = "left") + 
  labs(y = NULL, x = "Estimate") + 
  ds4ling::ds4ling_bw_theme(base_size = 13) + 
  theme(legend.position = c(0.8, 0.2), legend.background = element_blank())

# DDM simulations -------------------------------------------------------------

# Calculate mean decision thresholds
bs_means <- ddm_sims %>% 
  group_by(group, eq, lt, facet_lab) %>% 
  summarize(bs_max = max(value), bs_min = min(value), .groups = "drop") %>% 
  pivot_longer(cols = c("bs_max", "bs_min"), 
               names_to = "bound", values_to = "threshold") %>% 
  mutate(facet_lab = fct_relevel(
    facet_lab, "EQ: Low, LexTALE: low", "EQ: low, LexTALE: high", "EQ: high, LexTALE: low"))

ddm_experimental <- ddm_sims %>% 
  filter(group == "experimental") %>% 
  mutate(facet_lab = fct_relevel(facet_lab, "EQ: Low, LexTALE: low", 
                                 "EQ: low, LexTALE: high", "EQ: high, LexTALE: low")) %>% 
  ggplot(., aes(x = step, y = value)) + 
  facet_wrap(~ facet_lab) + 
  scale_y_continuous(breaks = seq(-1.5, 1.5, 1), 
                     labels = seq(-1.5, 1.5, 1)) + 
  coord_cartesian(xlim = c(0, 25), ylim = c(-1.6, 1.6)) + 
  geom_line(aes(group = sim_n), show.legend = F, color = "grey50", 
            alpha = 0.15, size = 0.15) + 
  stat_summary(aes(group = response), fun = mean, geom = "line", 
               color = "white", size = 2) +
  stat_summary(aes(group = response), fun = mean, geom = "line", 
               color = "#cc0033", size = 1) +
  geom_hline(yintercept = 0, color = "black") + 
  geom_vline(xintercept = 0, color = "black") + 
  geom_hline(data = filter(bs_means, group == "experimental"), 
             aes(yintercept = threshold), color = "grey35", lty = 3) + 
  labs(title = "Experimental Group", y = "Boundary separation", x = "Time step") + 
  minimal_adj(base_size = 13)

ddm_control <- ddm_sims %>% 
  filter(group == "control") %>% 
  mutate(facet_lab = fct_relevel(facet_lab, "EQ: Low, LexTALE: low", 
                                 "EQ: low, LexTALE: high", "EQ: high, LexTALE: low")) %>% 
  ggplot(., aes(x = step, y = value)) + 
  facet_wrap(~ facet_lab) + 
  scale_y_continuous(position = "right", breaks = seq(-1.5, 1.5, 1), 
                     labels = seq(-1.5, 1.5, 1)) + 
  coord_cartesian(xlim = c(0, 25), ylim = c(-1.6, 1.6)) + 
  geom_line(aes(group = sim_n), show.legend = F, color = "grey50", 
            alpha = 0.15, size = 0.15) + 
  stat_summary(aes(group = response), fun = mean, geom = "line", 
               color = "white", size = 2) +
  stat_summary(aes(group = response), fun = mean, geom = "line", 
               color = "#cc0033", size = 1) +
  geom_hline(yintercept = 0, color = "black") + 
  geom_vline(xintercept = 0, color = "black") + 
  geom_hline(data = filter(bs_means, group == "control"), 
             aes(yintercept = threshold), color = "grey35", lty = 3) + 
  labs(title = "Control Group", y = NULL, x = "Time step") + 
  minimal_adj(base_size = 13)

ddm_simulations <- ddm_experimental + ddm_control
