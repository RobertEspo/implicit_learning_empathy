###
# Completion times
###

# tasks

combined_task_times_task_dur <- combined_task_times_trial_dur %>%
  group_by(participant_id, task, group) %>%
  summarize(
    sum_dur = sum(duration, na.rm = TRUE),
    .groups = "drop"
  ) %>%
  group_by(task, group) %>%
  summarize(
    mean_dur = mean(sum_dur)/60,
    sd_dur = sd(sum_dur)/60
  ) %>%
  as.data.frame()

# total time 

## rq1
control_mean_time <- control_all_tasks %>% 
  summarise(mean_exp_time = mean(exp_time, na.rm = TRUE) / 60,
            sd_exp_time = sd(exp_time, na.rm = TRUE) / 60)

## rq2
experimental_mean_time <- experimental_all_tasks %>% 
  summarise(mean_exp_time = mean(exp_time, na.rm = TRUE) / 60,
            sd_exp_time = sd(exp_time, na.rm = TRUE) / 60)

###
# demographic info
###

demo_rq1_sex <- demo_rq1 %>%
  count(sex)

demo_rq2_control_sex <- demo_rq2 %>%
  filter(group == 0) %>%
  count(sex)

demo_rq2_experimental_sex <- demo_rq2 %>%
  filter(group == 1) %>%
  count(sex)

demo_rq1 %>%
  count(two_langs)

demo_rq2 %>%
  count(two_langs)

###
# lextale
###

rq1_lextale_summary <- rq1 %>%
  group_by(participant_id) %>% 
  summarise(lextale_tra = first(lextale_tra)) %>%  # one value per participant
  summarise(
    Mean = mean(lextale_tra, na.rm = TRUE),
    SD   = sd(lextale_tra, na.rm = TRUE),
    Min  = min(lextale_tra, na.rm = TRUE),
    Max  = max(lextale_tra, na.rm = TRUE)
  ) %>%
  mutate(Dataset = "RQ1") %>%
  select(Dataset, everything())

rq2_lextale_summary <- rq2 %>%
  mutate(group = ifelse(group==0,"control","exposure")) %>%
  group_by(group, participant_id) %>%
  summarise(lextale_tra = first(lextale_tra)) %>% 
  group_by(group) %>%
  summarise(
    Mean = mean(lextale_tra, na.rm = TRUE),
    SD   = sd(lextale_tra, na.rm = TRUE),
    Min  = min(lextale_tra, na.rm = TRUE),
    Max  = max(lextale_tra, na.rm = TRUE)
  ) %>%
  mutate(Dataset = paste0("RQ2 (", group, ")")) %>%
  select(Dataset, Mean, SD, Min, Max)

lextale_table <- bind_rows(rq1_lextale_summary, rq2_lextale_summary)

###
# empathy
###
rq1_eq_summary <- rq1 %>%
  group_by(participant_id) %>% 
  summarise(eq_score = first(eq_score)) %>%  # one value per participant
  summarise(
    Mean = mean(eq_score, na.rm = TRUE),
    SD   = sd(eq_score, na.rm = TRUE),
    Min  = min(eq_score, na.rm = TRUE),
    Max  = max(eq_score, na.rm = TRUE)
  ) %>%
  mutate(Dataset = "RQ1") %>%
  select(Dataset, everything())

rq2_eq_summary <- rq2 %>%
  mutate(group = ifelse(group==0,"control","exposure")) %>%
  group_by(group, participant_id) %>%
  summarise(eq_score = first(eq_score)) %>% 
  group_by(group) %>%
  summarise(
    Mean = mean(eq_score, na.rm = TRUE),
    SD   = sd(eq_score, na.rm = TRUE),
    Min  = min(eq_score, na.rm = TRUE),
    Max  = max(eq_score, na.rm = TRUE)
  ) %>%
  mutate(Dataset = paste0("RQ2 (", group, ")")) %>%
  select(Dataset, Mean, SD, Min, Max)

eq_table <- bind_rows(rq1_eq_summary, rq2_eq_summary)

###
# rq1
###

# model posterior
m_rq1_post <- as_tibble(m_rq1)

# estimates ---------------------------------------------------------------
## Logit scale
noncarib_decl <- transmute(m_rq1_post, 
                           noncarib_decl = b_Intercept
) %>% 
  my_posterior_summary()

noncarib_abs_int <- transmute(m_rq1_post, 
                              noncarib_abs_int = b_Intercept + b_sentence_typeinterrogativeMtotalMyn
) %>% 
  my_posterior_summary()

carib_decl <- transmute(m_rq1_post, 
                        carib_decl = b_Intercept + b_caribbean1
) %>% 
  my_posterior_summary()

carib_abs_int <- transmute(m_rq1_post, 
                           carib_abs_int = b_Intercept + b_caribbean1 + b_sentence_typeinterrogativeMtotalMyn +
                             `b_sentence_typeinterrogativeMtotalMyn:caribbean1`
) %>% 
  my_posterior_summary()

### Posterior cells (probability scale)

posterior_cells_rq1 <- m_rq1_post %>%
  transmute(
    `Non-Caribbean: Declarative` =
      plogis(b_Intercept),
    
    `Non-Caribbean: AbsInt` =
      plogis(b_Intercept + b_sentence_typeinterrogativeMtotalMyn),
    
    `Caribbean: Declarative` =
      plogis(b_Intercept + b_caribbean1),
    
    `Caribbean: AbsInt` =
      plogis(
        b_Intercept +
          b_caribbean1 +
          b_sentence_typeinterrogativeMtotalMyn +
          `b_sentence_typeinterrogativeMtotalMyn:caribbean1`
      )
  )

rq1_estimates <- posterior_cells_rq1 %>%
  pivot_longer(
    cols = everything(),
    names_to = "Cell",
    values_to = "Predicted_Prob"
  ) %>%
  separate(
    Cell,
    into = c("Variety", "Sentence_Type"),
    sep = ": ",
    remove = TRUE
  ) %>%
  group_by(Variety, Sentence_Type) %>%
  summarize(
    Estimate  = mean(Predicted_Prob),
    Lower_HPD = quantile(Predicted_Prob, 0.025),
    Upper_HPD = quantile(Predicted_Prob, 0.975),
    .groups = "drop"
  ) %>%
  arrange(Variety, Sentence_Type) %>%
  mutate(
    across(Estimate:Upper_HPD, ~ . * 100)
  )


# LexTALE slopes ----------------------------------------------------------
noncarib_decl_lex <- transmute(m_rq1_post, 
                               noncarib_decl_lex = b_lextale_std
) %>% 
  my_posterior_summary()

noncarib_abs_int_lex <- transmute(m_rq1_post, 
                                  noncarib_abs_int_lex = b_lextale_std + `b_lextale_std:sentence_typeinterrogativeMtotalMyn`
) %>% 
  my_posterior_summary()

carib_decl_lex <- transmute(m_rq1_post, 
                            carib_decl_lex = b_lextale_std + `b_lextale_std:caribbean1`
) %>% 
  my_posterior_summary()

carib_abs_int_lex <- transmute(m_rq1_post, 
                               carib_abs_int_lex = b_lextale_std +
                                 `b_lextale_std:sentence_typeinterrogativeMtotalMyn` +
                                 `b_lextale_std:caribbean1` +
                                 `b_lextale_std:sentence_typeinterrogativeMtotalMyn:caribbean1`
) %>% 
  my_posterior_summary()

## posterior cells

rq1_posterior_cells_lex <- m_rq1_post %>%
  transmute(
    `Non-Caribbean: Declarative` =
      b_lextale_std,
    
    `Non-Caribbean: AbsInt` =
      b_lextale_std +
      `b_lextale_std:sentence_typeinterrogativeMtotalMyn`,
    
    `Caribbean: Declarative` =
      b_lextale_std +
      `b_lextale_std:caribbean1`,
    
    `Caribbean: AbsInt` =
      b_lextale_std +
      `b_lextale_std:sentence_typeinterrogativeMtotalMyn` +
      `b_lextale_std:caribbean1` +
      `b_lextale_std:sentence_typeinterrogativeMtotalMyn:caribbean1`
  )

rq1_lex_estimates <- rq1_posterior_cells_lex %>%
  pivot_longer(
    cols = everything(),
    names_to = "Cell",
    values_to = "Lex_Effect"
  ) %>%
  separate(Cell, into = c("Variety", "Sentence_Type"), sep = ": ") %>%
  group_by(Variety, Sentence_Type) %>%
  summarize(
    Estimate  = mean(Lex_Effect),
    Lower_HPD = quantile(Lex_Effect, 0.025),
    Upper_HPD = quantile(Lex_Effect, 0.975),
    .groups = "drop"
  ) %>%
  arrange(Variety, Sentence_Type) %>%
  mutate(
    OR        = exp(Estimate),
    OR_low    = exp(Lower_HPD),
    OR_high   = exp(Upper_HPD)
  )

# EQ slopes ---------------------------------------------------------------
noncarib_decl_eq <- transmute(m_rq1_post, 
                              noncarib_decl_eq = b_eq_std
) %>% 
  my_posterior_summary()

noncarib_abs_int_eq <- transmute(m_rq1_post, 
                                 noncarib_abs_int_eq = b_eq_std + `b_eq_std:sentence_typeinterrogativeMtotalMyn`
) %>% 
  my_posterior_summary()

carib_decl_eq <- transmute(m_rq1_post, 
                           carib_decl_eq = b_eq_std + `b_eq_std:caribbean1`
) %>% 
  my_posterior_summary()

carib_abs_int_eq <- transmute(m_rq1_post, 
                              carib_abs_int_eq = b_eq_std +
                                `b_eq_std:sentence_typeinterrogativeMtotalMyn` +
                                `b_eq_std:caribbean1` +
                                `b_eq_std:sentence_typeinterrogativeMtotalMyn:caribbean1`
) %>% 
  my_posterior_summary()

## posterior cells

rq1_posterior_cells_eq <- m_rq1_post %>%
  transmute(
    `Non-Caribbean: Declarative` =
      b_eq_std,
    
    `Non-Caribbean: AbsInt` =
      b_eq_std +
      `b_eq_std:sentence_typeinterrogativeMtotalMyn`,
    
    `Caribbean: Declarative` =
      b_eq_std +
      `b_eq_std:caribbean1`,
    
    `Caribbean: AbsInt` =
      b_eq_std +
      `b_eq_std:sentence_typeinterrogativeMtotalMyn` +
      `b_eq_std:caribbean1` +
      `b_eq_std:sentence_typeinterrogativeMtotalMyn:caribbean1`
  )

rq1_eq_estimates <- rq1_posterior_cells_eq %>%
  pivot_longer(
    cols = everything(),
    names_to = "Cell",
    values_to = "LogOdds"
  ) %>%
  separate(Cell, into = c("Variety", "Sentence_Type"), sep = ": ") %>%
  group_by(Variety, Sentence_Type) %>%
  summarize(
    Estimate   = mean(LogOdds),
    Lower_HPD  = quantile(LogOdds, 0.025),
    Upper_HPD  = quantile(LogOdds, 0.975),
    .groups = "drop"
  ) %>%
  mutate(
    OR        = exp(Estimate),
    OR_low    = exp(Lower_HPD),
    OR_high   = exp(Upper_HPD)
  )

# LexTALE × EQ slopes -----------------------------------------------------
noncarib_decl_lex_eq <- m_rq1_post %>% 
  transmute(`b_lextale_std:eq_std`) %>% 
  my_posterior_summary()

noncarib_abs_int_lex_eq <- m_rq1_post %>% 
  transmute(`b_lextale_std:eq_std` + `b_lextale_std:eq_std:sentence_typeinterrogativeMtotalMyn`) %>% 
  my_posterior_summary()

carib_decl_lex_eq <- m_rq1_post %>% 
  transmute(`b_lextale_std:eq_std` + `b_lextale_std:eq_std:caribbean1`) %>% 
  my_posterior_summary()

carib_abs_int_lex_eq <- m_rq1_post %>% 
  transmute(`b_lextale_std:eq_std` + `b_lextale_std:eq_std:sentence_typeinterrogativeMtotalMyn` +
              `b_lextale_std:eq_std:caribbean1` + `b_lextale_std:eq_std:sentence_typeinterrogativeMtotalMyn:caribbean1`) %>% 
  my_posterior_summary()

## posterior cells

rq1_posterior_cells_lex_eq <- m_rq1_post %>%
  transmute(
    `Non-Caribbean: Declarative` =
      `b_lextale_std:eq_std`,
    
    `Non-Caribbean: AbsInt` =
      `b_lextale_std:eq_std` +
      `b_lextale_std:eq_std:sentence_typeinterrogativeMtotalMyn`,
    
    `Caribbean: Declarative` =
      `b_lextale_std:eq_std` +
      `b_lextale_std:eq_std:caribbean1`,
    
    `Caribbean: AbsInt` =
      `b_lextale_std:eq_std` +
      `b_lextale_std:eq_std:sentence_typeinterrogativeMtotalMyn` +
      `b_lextale_std:eq_std:caribbean1` +
      `b_lextale_std:eq_std:sentence_typeinterrogativeMtotalMyn:caribbean1`
  )

rq1_lex_eq_estimates <- rq1_posterior_cells_lex_eq %>%
  pivot_longer(
    cols = everything(),
    names_to = "Cell",
    values_to = "LogOdds"
  ) %>%
  separate(Cell, into = c("Variety", "Sentence_Type"), sep = ": ") %>%
  group_by(Variety, Sentence_Type) %>%
  summarize(
    Estimate   = mean(LogOdds),
    Lower_HPD  = quantile(LogOdds, 0.025),
    Upper_HPD  = quantile(LogOdds, 0.975),
    .groups = "drop"
  ) %>%
  mutate(
    OR      = exp(Estimate),
    OR_low  = exp(Lower_HPD),
    OR_high = exp(Upper_HPD)
  ) %>%
  arrange(Variety, Sentence_Type)

### examples of proficiency * eq interaction

# define lextale and eq levels
rq1_lex_levels <- c(2)
rq1_eq_levels  <- c(-2, 2)

# define varieties and sentence types
rq1_varieties <- c("Non-Caribbean", "Caribbean")
rq1_sentence_types <- c("Declarative", "AbsInt")

# get all combinations
rq1_combos <- expand.grid(
  LexTALE = rq1_lex_levels,
  EQ = rq1_eq_levels,
  Variety = rq1_varieties,
  Sentence_Type = rq1_sentence_types
)

rq1_exp_probs <- m_rq1_post %>%
  crossing(rq1_combos) %>%  
  mutate(
    lp = b_Intercept +
      b_lextale_std * LexTALE +
      b_eq_std * EQ +
      b_sentence_typeinterrogativeMtotalMyn * (Sentence_Type == "AbsInt") +
      b_caribbean1 * (Variety == "Caribbean") +
      `b_lextale_std:eq_std` * LexTALE * EQ +
      `b_lextale_std:sentence_typeinterrogativeMtotalMyn` * LexTALE * (Sentence_Type == "AbsInt") +
      `b_eq_std:sentence_typeinterrogativeMtotalMyn` * EQ * (Sentence_Type == "AbsInt") +
      `b_lextale_std:caribbean1` * LexTALE * (Variety == "Caribbean") +
      `b_eq_std:caribbean1` * EQ * (Variety == "Caribbean") +
      `b_sentence_typeinterrogativeMtotalMyn:caribbean1` * (Sentence_Type == "AbsInt") * (Variety == "Caribbean") +
      `b_lextale_std:eq_std:sentence_typeinterrogativeMtotalMyn` * LexTALE * EQ * (Sentence_Type == "AbsInt") +
      `b_lextale_std:eq_std:caribbean1` * LexTALE * EQ * (Variety == "Caribbean") +
      `b_lextale_std:sentence_typeinterrogativeMtotalMyn:caribbean1` * LexTALE * (Sentence_Type == "AbsInt") * (Variety == "Caribbean") +
      `b_eq_std:sentence_typeinterrogativeMtotalMyn:caribbean1` * EQ * (Sentence_Type == "AbsInt") * (Variety == "Caribbean") +
      `b_lextale_std:eq_std:sentence_typeinterrogativeMtotalMyn:caribbean1` * LexTALE * EQ * (Sentence_Type == "AbsInt") * (Variety == "Caribbean"),
    prob = plogis(lp)
  ) %>%
  group_by(LexTALE, EQ, Variety, Sentence_Type) %>%
  summarize(
    Estimate_prob = mean(prob),
    Lower_HPD    = quantile(prob, 0.025),
    Upper_HPD    = quantile(prob, 0.975),
    .groups = "drop"
  ) %>%
  arrange(Variety, Sentence_Type, LexTALE, EQ) %>%
  filter(Variety == "Non-Caribbean",
         Sentence_Type == "AbsInt")



###############################################################################

###
# rq2
###

# Group

m_rq2_post <- as_tibble(m_rq2)

# control group
ctrl <- transmute(m_rq2_post, 
                           ctrl = b_Intercept
) %>% 
  my_posterior_summary()

# experimental group
exp <- transmute(m_rq2_post, 
                  exp = b_Intercept + b_group1
) %>% 
  my_posterior_summary()

## posterior cells

rq2_posterior_cells_group <- m_rq2_post %>%
  transmute(
    Control = b_Intercept,
    Experimental = b_Intercept + b_group1
  )

rq2_group_estimates <- rq2_posterior_cells_group %>%
  pivot_longer(
    cols = everything(),
    names_to = "Group",
    values_to = "logit"
  ) %>%
  group_by(Group) %>%
  summarize(
    Estimate_logit = mean(logit),
    Lower_HPD_logit = quantile(logit, 0.025),
    Upper_HPD_logit = quantile(logit, 0.975),
    Estimate_prob = mean(plogis(logit)),
    Lower_HPD_prob = quantile(plogis(logit), 0.025),
    Upper_HPD_prob = quantile(plogis(logit), 0.975),
    .groups = "drop"
  )

# Lextale

# Control group LexTALE effect
ctrl_lextale <- transmute(m_rq2_post, 
                          ctrl_lex = b_lextale_std
) %>% 
  my_posterior_summary()

# Experimental group LexTALE effect
exp_lextale <- transmute(m_rq2_post, 
                         exp_lex = b_lextale_std + `b_lextale_std:group1`
) %>% 
  my_posterior_summary()

# EQ

# Control group EQ effect
ctrl_eq <- transmute(m_rq2_post, 
                          ctrl_eq = b_eq_std
) %>% 
  my_posterior_summary()

# Experimental group EQ effect
exp_eq <- transmute(m_rq2_post, 
                         exp_eq = b_eq_std + `b_eq_std:group1`
) %>% 
  my_posterior_summary()

# EQ x Lextale x Group

# Control group EQ × LexTALE effect
ctrl_lex_eq <- transmute(m_rq2_post,
                         ctrl_lex_eq = `b_lextale_std:eq_std`
) %>%
  my_posterior_summary()

# Experimental group EQ × LexTALE effect
exp_lex_eq <- transmute(m_rq2_post,
                        exp_lex_eq = `b_lextale_std:eq_std` + `b_lextale_std:eq_std:group1`
) %>%
  my_posterior_summary()

## Posterior cells including individual effects for lextale & eq

rq2_posterior_cells_lex_eq <- m_rq2_post %>%
  transmute(
    ctrl_lex = `b_lextale_std`,
    exp_lex  = `b_lextale_std` + `b_lextale_std:group1`,
    ctrl_eq  = `b_eq_std`,
    exp_eq   = `b_eq_std` + `b_eq_std:group1`
  )

rq2_posterior_lex_eq_summary <- rq2_posterior_cells_lex_eq %>%
  pivot_longer(
    cols = everything(),
    names_to = "Effect",
    values_to = "log_odds"
  ) %>%
  group_by(Effect) %>%
  summarize(
    Estimate_logit = mean(log_odds),
    Lower_HPD_logit = quantile(log_odds, 0.025),
    Upper_HPD_logit = quantile(log_odds, 0.975),
    Estimate_OR = exp(mean(log_odds)),
    Lower_HPD_OR = exp(quantile(log_odds, 0.025)),
    Upper_HPD_OR = exp(quantile(log_odds, 0.975)),
    .groups = "drop"
  )

# eq * lextale interaction

## posterior cells

rq2_posterior_cells_lex_eq <- m_rq2_post %>%
  transmute(
    `Control` =
      `b_lextale_std:eq_std`,
    
    `Experimental` =
      `b_lextale_std:eq_std` + `b_lextale_std:eq_std:group1`
  )

rq2_lex_eq_estimates <- rq2_posterior_cells_lex_eq %>%
  pivot_longer(
    cols = everything(),
    names_to = "Group",
    values_to = "LogOdds"
  ) %>%
  group_by(Group) %>%
  summarize(
    Estimate   = mean(LogOdds),
    Lower_HPD  = quantile(LogOdds, 0.025),
    Upper_HPD  = quantile(LogOdds, 0.975),
    .groups = "drop"
  ) %>%
  mutate(
    OR      = exp(Estimate),
    OR_low  = exp(Lower_HPD),
    OR_high = exp(Upper_HPD)
  ) %>%
  arrange(Group)

### examples of proficiency * eq interaction

# Define levels for each variable
lex_levels <- c(4)
eq_levels  <- c(-2, 2)
group_levels <- c(0, 1) # 0 = control, 1 = experimental

# Make all combinations
rq2_combos <- expand.grid(
  LexTALE = lex_levels,
  EQ      = eq_levels,
  Group   = group_levels
)

rq2_exp_probs <- m_rq2_post %>%
  crossing(rq2_combos) %>%
  mutate(
    lp = b_Intercept +
      b_lextale_std * LexTALE +
      b_eq_std * EQ +
      b_group1 * Group +
      `b_lextale_std:eq_std` * LexTALE * EQ +
      `b_lextale_std:group1` * LexTALE * Group +
      `b_eq_std:group1` * EQ * Group +
      `b_lextale_std:eq_std:group1` * LexTALE * EQ * Group,
    prob = plogis(lp)
  ) %>%
  group_by(LexTALE, EQ, Group) %>%
  summarize(
    Estimate_prob = mean(prob),
    Lower_HPD    = quantile(prob, 0.025),
    Upper_HPD    = quantile(prob, 0.975),
    .groups = "drop"
  ) %>%
  arrange(Group, LexTALE, EQ) %>%
  filter(Group == 1) %>%
  select(-Group)

rq2_exp_probs_plot <- m_rq2_post %>%
  crossing(rq2_combos) %>%
  mutate(
    lp = b_Intercept +
      b_lextale_std * LexTALE +
      b_eq_std * EQ +
      b_group1 * Group +
      `b_lextale_std:eq_std` * LexTALE * EQ +
      `b_lextale_std:group1` * LexTALE * Group +
      `b_eq_std:group1` * EQ * Group +
      `b_lextale_std:eq_std:group1` * LexTALE * EQ * Group,
    prob = plogis(lp)
  ) %>%
  group_by(LexTALE, EQ, Group) %>%
  summarize(
    Estimate_prob = mean(prob),
    Lower_HPD    = quantile(prob, 0.025),
    Upper_HPD    = quantile(prob, 0.975),
    .groups = "drop"
  ) %>%
  arrange(Group, LexTALE, EQ) %>%
  filter(Group == 1) %>%
  select(-Group) %>%
  mutate(EQ = factor(EQ, levels = sort(unique(EQ)))) %>%
  ggplot(., aes(x = factor(LexTALE), y = Estimate_prob, fill = EQ)) +
  geom_col(position = position_dodge(width = 0.8), width = 0.7) +
  geom_errorbar(aes(ymin = Lower_HPD, ymax = Upper_HPD),
                position = position_dodge(width = 0.8), width = 0.2) +
  scale_y_continuous(labels = scales::percent_format(accuracy = 1)) +
  labs(
    x = "LexTALE Level (SDs)",
    y = "Estimated Probability of Correct Response",
    fill = "EQ Level (SDs)",
    title = "Experimental Group: Predicted Accuracy by LexTALE and EQ"
  ) +
  theme_minimal(base_size = 14) +
  theme(
    legend.position = "top",
    axis.text.x = element_text(face = "bold")
  )
