###
# rq1
###

# forest plot

simp_y_labs <- c(
  "Intercept",
  "LexTALE",
  "EQ",
  "Absolute interrogative",
  "Caribbean",
  "LexTALE × EQ",
  "LexTALE × Absolute interrogative",
  "EQ × Absolute interrogative",
  "LexTALE × Caribbean",
  "EQ × Caribbean",
  "Absolute interrogative × Caribbean",
  "LexTALE × EQ × Absolute interrogative",
  "LexTALE × EQ × Caribbean",
  "LexTALE × Absolute interrogative × Caribbean",
  "EQ × Absolute interrogative × Caribbean",
  "LexTALE × EQ × Absolute interrogative × Caribbean"
)


simp_labs_tib <- tibble(
  y = simp_y_labs,
  x = -2.5
) %>%
  mutate(y = fct_relevel(
    y,
    "Intercept",
    "LexTALE",
    "EQ",
    "Absolute interrogative",
    "Caribbean",
    "LexTALE × EQ",
    "LexTALE × Absolute interrogative",
    "EQ × Absolute interrogative",
    "LexTALE × Caribbean",
    "EQ × Caribbean",
    "Absolute interrogative × Caribbean",
    "LexTALE × EQ × Absolute interrogative",
    "LexTALE × EQ × Caribbean",
    "LexTALE × Absolute interrogative × Caribbean",
    "EQ × Absolute interrogative × Caribbean",
    "LexTALE × EQ × Absolute interrogative × Caribbean"
  ))

m_rq1_forest <- as_tibble(m_rq1) %>% 
  select(starts_with("b_")) %>% 
  pivot_longer(everything(), names_to = "Parameter", values_to = "Estimate") %>% 
  mutate(Parameter = case_when(
    Parameter == "b_Intercept" ~ "Intercept",
    Parameter == "b_lextale_std" ~ "LexTALE",
    Parameter == "b_eq_std" ~ "EQ",
    Parameter == "b_sentence_typeinterrogativeMtotalMyn" ~ "Absolute interrogative",
    Parameter == "b_caribbean1" ~ "Caribbean",
    
    Parameter == "b_lextale_std:eq_std" ~ "LexTALE × EQ",
    Parameter == "b_lextale_std:sentence_typeinterrogativeMtotalMyn" ~ "LexTALE × Absolute interrogative",
    Parameter == "b_eq_std:sentence_typeinterrogativeMtotalMyn" ~ "EQ × Absolute interrogative",
    Parameter == "b_lextale_std:caribbean1" ~ "LexTALE × Caribbean",
    Parameter == "b_eq_std:caribbean1" ~ "EQ × Caribbean",
    Parameter == "b_sentence_typeinterrogativeMtotalMyn:caribbean1" ~ "Absolute interrogative × Caribbean",
    
    Parameter == "b_lextale_std:eq_std:sentence_typeinterrogativeMtotalMyn" ~ "LexTALE × EQ × Absolute interrogative",
    Parameter == "b_lextale_std:eq_std:caribbean1" ~ "LexTALE × EQ × Caribbean",
    Parameter == "b_lextale_std:sentence_typeinterrogativeMtotalMyn:caribbean1" ~ "LexTALE × Absolute interrogative × Caribbean",
    Parameter == "b_eq_std:sentence_typeinterrogativeMtotalMyn:caribbean1" ~ "EQ × Absolute interrogative × Caribbean",
    Parameter == "b_lextale_std:eq_std:sentence_typeinterrogativeMtotalMyn:caribbean1" ~ "LexTALE × EQ × Absolute interrogative × Caribbean",
    
    TRUE ~ Parameter
  ),
  Parameter = fct_relevel(Parameter,
                          "Intercept",
                          "LexTALE",
                          "EQ",
                          "Absolute interrogative",
                          "Caribbean",
                          "LexTALE × EQ",
                          "LexTALE × Absolute interrogative",
                          "EQ × Absolute interrogative",
                          "LexTALE × Caribbean",
                          "EQ × Caribbean",
                          "Absolute interrogative × Caribbean",
                          "LexTALE × EQ × Absolute interrogative",
                          "LexTALE × EQ × Caribbean",
                          "LexTALE × Absolute interrogative × Caribbean",
                          "EQ × Absolute interrogative × Caribbean",
                          "LexTALE × EQ × Absolute interrogative × Caribbean")
  ) %>%
  ggplot(., aes(x = Estimate, y = Parameter)) + 
  coord_cartesian(xlim = c(-2.75, 2.75)) + 
  scale_x_continuous(expand = c(0, 0)) + 
  geom_vline(xintercept = 0, lty = 3) + 
  geom_text(data = simp_labs_tib, hjust = 0, vjust = 0.5, size = 2.25, 
            aes(y = y, x = x, label = y), family = "Times") + 
  stat_halfeye(slab_alpha = 0.5, pch = 21, point_fill = "white", 
               slab_fill = viridis::viridis_pal(option = "B", begin = 0.25)(1), 
               point_size = 1.5) + 
  scale_y_discrete(limits = rev) + 
  theme(axis.text.y = element_blank(), axis.ticks.y = element_blank())

ggsave(
  filename = here::here("figs", "m_rq1_forest.png"),
  plot = m_rq1_forest,
  width = 8,
  height = 6,
  dpi = 300
)


###

# accuracy by speaker variety * sentence type * lextale

# Conditional effects
conditions <- data.frame(
  caribbean = setNames(c(0,1),
                       c("Non-Caribbean","Caribbean")))

lt_st_me <- conditional_effects(
  m_rq1, 
  effects = "lextale_std:sentence_type", 
  re_formula = NA, 
  method = "posterior_epred", 
  spaghetti = TRUE, 
  ndraws = 300,
  int_conditions = list(lextale_std = c(-2.1, -1, 0, 1, 2.1)),
  conditions = conditions)

# Set labs for plot
sentence_labs <- c(
  "Broad focus\nstatement",
  "Absolute\ninterrogative" 
  )

# Main plot

my_palette <- viridis::viridis_pal(option = "B", end = 0.85)(2)

rq_1_lextale_by_utterance_type <- plot(lt_st_me, plot = FALSE, line_args = list(size = 4))[[1]] +
  scale_x_continuous(expand = c(0, 0)) +
  coord_cartesian(ylim = c(0, 1.01)) +
  geom_line(aes(group = effect2__, color = effect2__), size = 1.5) +
  geom_hline(yintercept = 0.5, lty = 3) +
  scale_color_manual(name = NULL, labels = sentence_labs,
                     values = alpha(my_palette, 0.1)) +
  labs(y = "P(correct)", x = "LexTALE score") +
  ds4ling::ds4ling_bw_theme(base_size = 12) +
  theme(
    legend.background = element_blank(),
    legend.position = c(0.5, 0.08),
    legend.direction = "horizontal",
    legend.key.size = unit(0.7, "cm"),
    legend.text.align = 0.5
  ) +
  guides(color = guide_legend(override.aes = list(fill = NA, size = 2)))

ggsave(
  filename = here::here("figs", "rq_1_lextale_by_utterance_type.png"),
  plot = rq_1_lextale_by_utterance_type,
  width = 8,
  height = 6,
  dpi = 300
)

###

# accuracy by speaker variety * sentence type * eq

# Conditional effects
conditions <- data.frame(
  caribbean = setNames(c(0,1),
                       c("Non-Caribbean","Caribbean")))

eq_st_me <- conditional_effects(
  m_rq1, 
  effects = "eq_std:sentence_type", 
  re_formula = NA, 
  method = "posterior_epred", 
  spaghetti = TRUE, 
  ndraws = 300,
  int_conditions = list(eq_std = c(-2.1, -1, 0, 1, 2.1)),
  conditions = conditions)

# Set labs for plot
sentence_labs <- c(
  "Broad focus\nstatement",
  "Absolute\ninterrogative")

my_palette <- viridis::viridis_pal(option = "B", end = 0.85)(2)

rq_1_eq_by_utterance_type <- plot(eq_st_me, plot = FALSE, line_args = list(size = 4))[[1]] +
  scale_x_continuous(expand = c(0, 0)) +
  coord_cartesian(ylim = c(0, 1.01)) +
  geom_line(aes(group = effect2__, color = effect2__), size = 1.5) +
  geom_hline(yintercept = 0.5, lty = 3) +
  scale_color_manual(name = NULL, labels = sentence_labs,
                     values = alpha(my_palette, 0.1)) +
  labs(y = "P(correct)", x = "EQ") +
  ds4ling::ds4ling_bw_theme(base_size = 12) +
  theme(
    legend.background = element_blank(),
    legend.position = c(0.5, 0.08),
    legend.direction = "horizontal",
    legend.key.size = unit(0.7, "cm"),
    legend.text.align = 0.5
  ) +
  guides(color = guide_legend(override.aes = list(fill = NA, size = 2)))

ggsave(
  filename = here::here("figs", "rq_1_eq_by_utterance_type.png"),
  plot = rq_1_eq_by_utterance_type,
  width = 8,
  height = 6,
  dpi = 300
)

###

# accuracy by speaker variety * sentence type * eq * lextale

facet_replace_3way <- tibble(
  correct = 0.95, 
  lextale_std = -0.9, 
  cond__ = c("Absolute\ninterrogative", "Broad focus\ndeclarative"), 
  labs = c("Absolute interrogative", "Broad focus declarative")
) %>% 
  mutate(cond__ = fct_relevel(cond__, "Broad focus\ndeclarative"))

# Set conditions for facetting
conditions <- expand.grid(
  sentence_type = setNames(c('declarative-broad-focus', 'interrogative-total-yn'), 
                           c("Broad focus\ndeclarative", "Interrogative\ny/n")),
  caribbean = setNames(c(0,1),
                       c("Non-Caribbean","Caribbean"))
)

# Get wide range of EQ estimates
int_conditions <- list(
  eq_std = setNames(c(-1, 0, 1), 
                    c("-1", "0", "1"))
)

# Generate plot
lt_eq_3way <- conditional_effects(m_rq1, 
                                  effects = "lextale_std:eq_std", 
                                  re_formula = NA, 
                                  method = "posterior_epred", 
                                  spaghetti = TRUE, 
                                  ndraws = 300, 
                                  ncol = 2, 
                                  conditions = conditions, 
                                  int_conditions = int_conditions
)

rq1_3way <- plot(lt_eq_3way, plot = FALSE, line_args = list(size = 5))[[1]] +
  aes(color = factor(eq_std)) +
  geom_line(aes(group = effect2__), size = 2) +
  coord_cartesian(xlim = c(-1, 4.2), ylim = c(0, 1)) +
  scale_x_continuous(expand = c(0, 0)) +
  geom_hline(yintercept = 0.5, lty = 3) +
  scale_color_manual(
    name = "Empathy quotient",
    values = viridis::viridis_pal(option = "B", end = 0.8)(3)
  ) +
  facet_grid(caribbean ~ sentence_type,
             labeller = labeller(
               sentence_type = c(
                 "Broad focus\ndeclarative" = "Broad focus declarative",
                 "Absolute\ninterrogative" = "Absolute interrogative"
               ),
               caribbean = c("0" = "Non-Caribbean", "1" = "Caribbean")
             )) +
  labs(y = "P(correct)", x = "LexTALE score") +
  ds4ling::ds4ling_bw_theme(base_size = 13) +
  theme(
    legend.position = c(0.8, 0.95),
    legend.background = element_blank(),
    legend.direction = "horizontal",
    legend.key.size = unit(0.7, "cm"),
    legend.text.align = 0.5,
    legend.title = element_text(size = 10, color = "grey45"),
    strip.background = element_blank()
  )

ggsave(
  filename = here::here("figs", "rq1_3way.png"),
  plot = rq1_3way,
  width = 8,
  height = 6,
  dpi = 300
)

################################################################################
###
# RQ2
###

# forest plot

simp_y_labs <- c(
  "Intercept",
  "LexTALE",
  "EQ",
  "Experimental group",
  "LexTALE × EQ",
  "LexTALE × Experimental group",
  'EQ × Experimental group',
  'LexTALE × EQ × Experimental group'
)

simp_labs_tib <- tibble(
  y = simp_y_labs,
  x = -2.5
) %>%
  mutate(y = fct_relevel(
    y,
    "Intercept",
    "LexTALE",
    "EQ",
    "Experimental group",
    "LexTALE × EQ",
    "LexTALE × Experimental group",
    'EQ × Experimental group',
    'LexTALE × EQ × Experimental group'
  ))

m_rq2_forest <- as_tibble(m_rq2) %>% 
  select(starts_with("b_")) %>% 
  pivot_longer(everything(), names_to = "Parameter", values_to = "Estimate") %>% 
  mutate(Parameter = case_when(
    Parameter == "b_Intercept" ~ "Intercept",
    Parameter == "b_lextale_std" ~ "LexTALE",
    Parameter == "b_eq_std" ~ "EQ",
    Parameter == "b_group1" ~ "Experimental group",
    Parameter == "b_lextale_std:eq_std" ~ "LexTALE × EQ",
    Parameter == "b_lextale_std:group1" ~ "LexTALE × Experimental group",
    Parameter == "b_eq_std:group1" ~ "EQ × Experimental group",
    Parameter == "b_lextale_std:eq_std:group1" ~ "LexTALE × EQ × Experimental group",
    TRUE ~ Parameter
  ),
  Parameter = fct_relevel(Parameter,
                          "Intercept",
                          "LexTALE",
                          "EQ",
                          "Experimental group",
                          "LexTALE × EQ",
                          "LexTALE × Experimental group",
                          'EQ × Experimental group',
                          'LexTALE × EQ × Experimental group')
  ) %>%
  ggplot(., aes(x = Estimate, y = Parameter)) + 
  coord_cartesian(xlim = c(-2.75, 2.75)) + 
  scale_x_continuous(expand = c(0, 0)) + 
  geom_vline(xintercept = 0, lty = 3) + 
  geom_text(data = simp_labs_tib, hjust = 0, vjust = 0.5, size = 2.25, 
            aes(y = y, x = x, label = y), family = "Times") + 
  stat_halfeye(slab_alpha = 0.5, pch = 21, point_fill = "white", 
               slab_fill = viridis::viridis_pal(option = "B", begin = 0.25)(1), 
               point_size = 1.5) + 
  scale_y_discrete(limits = rev) + 
  theme(axis.text.y = element_blank(), axis.ticks.y = element_blank())

ggsave(
  filename = here::here("figs", "m_rq2_forest.png"),
  plot = m_rq2_forest,
  width = 8,
  height = 6,
  dpi = 300
)

###

# accuracy by group * lextale

# Conditional effects
lt_st_me_rq2 <- conditional_effects(
  m_rq2, 
  effects = "lextale_std:group", 
  re_formula = NA, 
  method = "posterior_epred", 
  spaghetti = TRUE, 
  ndraws = 300,
  int_conditions = list(lextale_std = c(-2.1, -1, 0, 1, 2.1)))

group_labs <- c("Control","Experimental")

# Main plot

my_palette <- viridis::viridis_pal(option = "B", end = 0.85)(2)

rq_2_lextale_by_group <- plot(lt_st_me_rq2, plot = FALSE, line_args = list(size = 4))[[1]] +
  scale_x_continuous(expand = c(0, 0)) +
  coord_cartesian(ylim = c(0, 1.01)) +
  geom_line(aes(group = effect2__, color = effect2__), size = 1.5) +
  geom_hline(yintercept = 0.5, lty = 3) +
  scale_color_manual(name = NULL, labels = group_labs,
                     values = alpha(my_palette, 0.1)) +
  labs(y = "P(correct)", x = "LexTALE score") +
  ds4ling::ds4ling_bw_theme(base_size = 12) +
  theme(
    legend.background = element_blank(),
    legend.position = c(0.5, 0.08),
    legend.direction = "horizontal",
    legend.key.size = unit(0.7, "cm"),
    legend.text.align = 0.5
  ) +
  guides(color = guide_legend(override.aes = list(fill = NA, size = 2)))

ggsave(
  filename = here::here("figs", "rq_2_lextale_by_group.png"),
  plot = rq_2_lextale_by_group,
  width = 8,
  height = 6,
  dpi = 300
)

# accuracy by group * eq

# Conditional effects
eq_st_me_rq2 <- conditional_effects(
  m_rq2, 
  effects = "eq_std:group", 
  re_formula = NA, 
  method = "posterior_epred", 
  spaghetti = TRUE, 
  ndraws = 300,
  int_conditions = list(eq_std = c(-2.1, -1, 0, 1, 2.1)))

group_labs <- c("Control","Experimental")

# Main plot

my_palette <- viridis::viridis_pal(option = "B", end = 0.85)(2)

rq_2_eq_by_group <- plot(eq_st_me_rq2, plot = FALSE, line_args = list(size = 4))[[1]] +
  scale_x_continuous(expand = c(0, 0)) +
  coord_cartesian(ylim = c(0, 1.01)) +
  geom_line(aes(group = effect2__, color = effect2__), size = 1.5) +
  geom_hline(yintercept = 0.5, lty = 3) +
  scale_color_manual(name = NULL, labels = group_labs,
                     values = alpha(my_palette, 0.1)) +
  labs(y = "P(correct)", x = "LexTALE score") +
  ds4ling::ds4ling_bw_theme(base_size = 12) +
  theme(
    legend.background = element_blank(),
    legend.position = c(0.5, 0.08),
    legend.direction = "horizontal",
    legend.key.size = unit(0.7, "cm"),
    legend.text.align = 0.5
  ) +
  guides(color = guide_legend(override.aes = list(fill = NA, size = 2)))

ggsave(
  filename = here::here("figs", "rq_2_eq_by_group.png"),
  plot = rq_2_eq_by_group,
  width = 8,
  height = 6,
  dpi = 300
)

###

# accuracy by group * eq * lextale

facet_replace_3way <- tibble(
  correct = 0.95, 
  lextale_std = -0.9, 
  cond__ = c("Control","Experimental"), 
  labs = c("Control", "Experimental")
) %>% 
  mutate(cond__ = fct_relevel(cond__, "Control"))

# Set conditions for facetting
conditions <- data.frame(
  group = set_names(c('0','1'),
                    c("Control","Experimental"))
)

# Get wide range of EQ estimates
int_conditions <- list(
  eq_std = setNames(c(-1, 0, 1), 
                    c("-1", "0", "1"))
)

# Generate plot
rq2_lt_eq_3way <- conditional_effects(m_rq2, 
                                  effects = "lextale_std:eq_std", 
                                  re_formula = NA, 
                                  method = "posterior_epred", 
                                  spaghetti = TRUE, 
                                  ndraws = 300, 
                                  ncol = 2, 
                                  conditions = conditions, 
                                  int_conditions = int_conditions
)

rq2_3way <- plot(rq2_lt_eq_3way, plot = FALSE, line_args = list(size = 5))[[1]] +
  aes(color = factor(eq_std)) +
  geom_line(aes(group = effect2__), size = 2) +
  coord_cartesian(xlim = c(-1, 4.2), ylim = c(0, 1)) +
  scale_x_continuous(expand = c(0, 0)) +
  geom_hline(yintercept = 0.5, lty = 3) +
  scale_color_manual(
    name = "Empathy quotient",
    values = viridis::viridis_pal(option = "B", end = 0.8)(3)
  ) +
  labs(y = "P(correct)", x = "LexTALE score") +
  ds4ling::ds4ling_bw_theme(base_size = 13) +
  theme(
    legend.position = c(0.8, 0.95),
    legend.background = element_blank(),
    legend.direction = "horizontal",
    legend.key.size = unit(0.7, "cm"),
    legend.text.align = 0.5,
    legend.title = element_text(size = 10, color = "grey45"),
    strip.background = element_blank()
  )

ggsave(
  filename = here::here("figs", "rq2_3way.png"),
  plot = rq2_3way,
  width = 8,
  height = 6,
  dpi = 300
)

### experimental lextale X eq interaction
exp_lex_eq_slopes_eq_lextale <- m_rq2_post %>% 
  transmute(
    slope_neg1 = b_lextale_std + `b_lextale_std:eq_std` * (-1) + `b_lextale_std:group1` + `b_lextale_std:eq_std:group1` * (-1),
    slope_0    = b_lextale_std + `b_lextale_std:group1`,
    slope_1    = b_lextale_std + `b_lextale_std:eq_std` * 1 + `b_lextale_std:group1` + `b_lextale_std:eq_std:group1` * 1
  )

exp_lex_eq_diffs <- exp_lex_eq_slopes_eq_lextale %>%
  mutate(
    diff_neg1_0 = slope_0 - slope_neg1,
    diff_0_1    = slope_1 - slope_0,
    diff_neg1_1 = slope_1 - slope_neg1
  ) %>%
  select(diff_neg1_0, diff_0_1, diff_neg1_1)

diff_neg1_0 <- tibble(exp_lex_eq_diffs$diff_neg1_0) %>% my_posterior_summary()
diff_0_1    <- tibble(exp_lex_eq_diffs$diff_0_1) %>% my_posterior_summary()
diff_neg1_1 <- tibble(exp_lex_eq_diffs$diff_neg1_1) %>% my_posterior_summary()

# Extract the posterior draws for diff_neg1_1
diff_draws <- exp_lex_eq_diffs %>%
  select(diff_neg1_1) %>%
  tidyr::unnest(cols = everything())  # if it's a list-column of draws

# Calculate median and 95% HDI
diff_summary <- describe_posterior(diff_draws$diff_neg1_1, ci = 0.95)

median_val <- diff_summary$Median
hdi_low <- diff_summary$CI_low
hdi_high <- diff_summary$CI_high

# Plot
rq2_diffplot <- ggplot(diff_draws, aes(x = diff_neg1_1)) +
  geom_density(fill = "skyblue", alpha = 0.5) +      # posterior density
  geom_vline(xintercept = 0, linetype = "dashed", color = "red") + # zero reference
  geom_segment(aes(x = hdi_low, xend = hdi_high, y = 0, yend = 0), 
               color = "darkblue", size = 2) +       # 95% HDI
  geom_point(aes(x = median_val, y = 0), color = "darkblue", size = 3) + # median
  labs(
    x = "Difference in LexTALE slopes (EQ +1 vs -1)",
    y = "Posterior density",
    title = "Difference plot for LexTALE × EQ in Experimental Group"
  ) +
  theme_minimal()

ggsave(
  filename = here::here("figs", "rq2_diffplot.png"),
  plot = rq2_diffplot,
  width = 8,
  height = 6,
  dpi = 300
)
