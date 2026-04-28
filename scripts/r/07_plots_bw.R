###
# rq1
###

# forest plot

simp_y_labs <- c(
  "Intercept",
  "LexTALE",
  "EQ",
  "Absolute interrogative",
  "Falling-Q variety",
  "LexTALE × EQ",
  "LexTALE × Absolute interrogative",
  "EQ × Absolute interrogative",
  "LexTALE × Falling-Q variety",
  "EQ × Falling-Q variety",
  "Absolute interrogative × Falling-Q variety",
  "LexTALE × EQ × Absolute interrogative",
  "LexTALE × EQ × Falling-Q variety",
  "LexTALE × Absolute interrogative × Falling-Q variety",
  "EQ × Absolute interrogative × Falling-Q variety",
  "LexTALE × EQ × Absolute interrogative × Falling-Q variety"
)


simp_labs_tib <- tibble(
  y = simp_y_labs,
  x = -4.75
) %>%
  mutate(y = fct_relevel(
    y,
    "Intercept",
    "LexTALE",
    "EQ",
    "Absolute interrogative",
    "Falling-Q variety",
    "LexTALE × EQ",
    "LexTALE × Absolute interrogative",
    "EQ × Absolute interrogative",
    "LexTALE × Falling-Q variety",
    "EQ × Falling-Q variety",
    "Absolute interrogative × Falling-Q variety",
    "LexTALE × EQ × Absolute interrogative",
    "LexTALE × EQ × Falling-Q variety",
    "LexTALE × Absolute interrogative × Falling-Q variety",
    "EQ × Absolute interrogative × Falling-Q variety",
    "LexTALE × EQ × Absolute interrogative × Falling-Q variety"
  ))

m_rq1_forest_bw <- as_tibble(m_rq1) %>% 
  select(starts_with("b_")) %>% 
  pivot_longer(everything(), names_to = "Parameter", values_to = "Estimate") %>% 
  mutate(Parameter = case_when(
    Parameter == "b_Intercept" ~ "Intercept",
    Parameter == "b_lextale_std" ~ "LexTALE",
    Parameter == "b_eq_std" ~ "EQ",
    Parameter == "b_sentence_typeinterrogativeMtotalMyn" ~ "Absolute interrogative",
    Parameter == "b_caribbean1" ~ "Falling-Q variety",
    
    Parameter == "b_lextale_std:eq_std" ~ "LexTALE × EQ",
    Parameter == "b_lextale_std:sentence_typeinterrogativeMtotalMyn" ~ "LexTALE × Absolute interrogative",
    Parameter == "b_eq_std:sentence_typeinterrogativeMtotalMyn" ~ "EQ × Absolute interrogative",
    Parameter == "b_lextale_std:caribbean1" ~ "LexTALE × Falling-Q variety",
    Parameter == "b_eq_std:caribbean1" ~ "EQ × Falling-Q variety",
    Parameter == "b_sentence_typeinterrogativeMtotalMyn:caribbean1" ~ "Absolute interrogative × Falling-Q variety",
    
    Parameter == "b_lextale_std:eq_std:sentence_typeinterrogativeMtotalMyn" ~ "LexTALE × EQ × Absolute interrogative",
    Parameter == "b_lextale_std:eq_std:caribbean1" ~ "LexTALE × EQ × Falling-Q variety",
    Parameter == "b_lextale_std:sentence_typeinterrogativeMtotalMyn:caribbean1" ~ "LexTALE × Absolute interrogative × Falling-Q variety",
    Parameter == "b_eq_std:sentence_typeinterrogativeMtotalMyn:caribbean1" ~ "EQ × Absolute interrogative × Falling-Q variety",
    Parameter == "b_lextale_std:eq_std:sentence_typeinterrogativeMtotalMyn:caribbean1" ~ "LexTALE × EQ × Absolute interrogative × Falling-Q variety",
    
    TRUE ~ Parameter
  ),
  Parameter = fct_relevel(Parameter,
                          "Intercept",
                          "LexTALE",
                          "EQ",
                          "Absolute interrogative",
                          "Falling-Q variety",
                          "LexTALE × EQ",
                          "LexTALE × Absolute interrogative",
                          "EQ × Absolute interrogative",
                          "LexTALE × Falling-Q variety",
                          "EQ × Falling-Q variety",
                          "Absolute interrogative × Falling-Q variety",
                          "LexTALE × EQ × Absolute interrogative",
                          "LexTALE × EQ × Falling-Q variety",
                          "LexTALE × Absolute interrogative × Falling-Q variety",
                          "EQ × Absolute interrogative × Falling-Q variety",
                          "LexTALE × EQ × Absolute interrogative × Falling-Q variety")
  ) %>%
  ggplot(., aes(x = Estimate, y = Parameter)) + 
  coord_cartesian(xlim = c(-5, .6)) + 
  scale_x_continuous(expand = c(0, 0)) + 
  geom_vline(xintercept = 0, lty = 3) + 
  geom_text(data = simp_labs_tib, hjust = 0, vjust = 0.5, size = 2.25, 
            aes(y = y, x = x, label = y), family = "Times") + 
  stat_halfeye(slab_alpha = 0.5, pch = 21, point_fill = "white", 
               point_size = 1.5) + 
  scale_y_discrete(limits = rev) + 
  theme(axis.text.y = element_blank(), axis.ticks.y = element_blank()) +
  labs(x = NULL, y = NULL)

ggsave(
  filename = here::here("figs", "m_rq1_forest_bw.jpeg"),
  plot = m_rq1_forest_bw,
  width = 14,
  height = 6,
  dpi = 300
)


###

# accuracy by speaker variety * sentence type * lextale

# Conditional effects
conditions <- data.frame(
  caribbean = setNames(c(0,1),
                       c("Rising-Q variety","Falling-Q variety")))

lt_st_me <- conditional_effects(
  m_rq1, 
  effects = "lextale_std:sentence_type", 
  re_formula = NA, 
  method = "posterior_epred", 
  spaghetti = FALSE, 
  ndraws = 300,
  int_conditions = list(lextale_std = c(-2.1, -1, 0, 1, 2.1)),
  conditions = conditions)

# Set labs for plot
sentence_labs <- c(
  "Broad focus\nstatement",
  "Absolute\ninterrogative" 
)

# Main plot

rq_1_lextale_by_utterance_type_bw <- plot(lt_st_me, plot = FALSE, 
                                          line_args = list(size = 2))[[1]] +
  aes(linetype = sentence_type) +
  geom_line(color = "black", size = 2) +
  scale_linetype_manual(
    values = c("solid", "twodash"),
    labels = sentence_labs
  ) +
  scale_fill_grey(start = 0.7, end = 0.9) +
  scale_x_continuous(expand = c(0, 0)) +
  coord_cartesian(ylim = c(0, 1.01)) +
  geom_hline(yintercept = 0.5, lty = 3) +
  labs(
    y = "P(correct)",
    x = "LexTALE score",
    linetype = "Sentence type"
  ) +
  ds4ling::ds4ling_bw_theme(base_size = 12) +
  theme(legend.position = "none")

ggsave(
  filename = here::here("figs", "rq_1_lextale_by_utterance_type_bw.jpeg"),
  plot = rq_1_lextale_by_utterance_type_bw,
  width = 14,
  height = 6,
  dpi = 300
)

###

# accuracy by speaker variety * sentence type * eq

# Conditional effects
conditions <- data.frame(
  caribbean = setNames(c(0,1),
                       c("Rising-Q variety","Falling-Q variety")))

eq_st_me <- conditional_effects(
  m_rq1, 
  effects = "eq_std:sentence_type", 
  re_formula = NA, 
  method = "posterior_epred", 
  spaghetti = FALSE, 
  ndraws = 300,
  int_conditions = list(eq_std = c(-2.1, -1, 0, 1, 2.1)),
  conditions = conditions)

# Set labs for plot
sentence_labs <- c(
  "Broad focus\nstatement",
  "Absolute\ninterrogative")

rq_1_eq_by_utterance_type_bw <-
  plot(
    eq_st_me, plot = FALSE, line_args = list(size = 0))[[1]] +
  aes(linetype = effect2__) +
  geom_line(aes(group = effect2__),
    color = "black",
    size  = 1.5
  ) +
  scale_fill_grey(start = 0.8, end = 0.9) +
  scale_linetype_manual(
    name   = NULL,
    labels = sentence_labs,
    values = c("solid", "twodash")
  ) +
  scale_x_continuous(expand = c(0, 0)) +
  coord_cartesian(ylim = c(0, 1.01)) +
  geom_hline(yintercept = 0.5, lty = 3) +
  labs(y = NULL, x = "EQ") +
  ds4ling::ds4ling_bw_theme(base_size = 12) +
  theme(
    legend.position = c(0.75, 0.95),
    legend.background = element_blank(),
    legend.key = element_blank(),
    axis.text.y = element_blank(), axis.ticks.y = element_blank()) +
  guides(
    fill = "none",
    color = "none",
    linetype = guide_legend(
      nrow = 1,
      override.aes = list(
        color = "black",
        size = 5)))

ggsave(
  filename = here::here("figs", "rq_1_eq_by_utterance_type_bw.jpeg"),
  plot = rq_1_eq_by_utterance_type_bw,
  width = 14,
  height = 6,
  dpi = 300
)

# patchwork eq + lextale

rq1_eq_lextale_patchwork_bw <- rq_1_lextale_by_utterance_type_bw + rq_1_eq_by_utterance_type_bw

ggsave(
  filename = here::here("figs", "rq1_eq_lextale_patchwork_bw.jpeg"),
  plot = rq1_eq_lextale_patchwork_bw,
  width = 14,
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
                           c("Broad focus\ndeclarative", "Absolute\ninterrogative")),
  caribbean = setNames(c(0,1),
                       c("Rising-Q variety","Falling-Q variety"))
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
                                  spaghetti = FALSE, 
                                  ndraws = 300, 
                                  ncol = 2, 
                                  conditions = conditions, 
                                  int_conditions = int_conditions
)

rq1_3way_bw <- plot(lt_eq_3way, plot = FALSE, line_args = list(size = 1.5))[[1]] +
  aes(linetype = factor(eq_std)) +
  geom_line(
    aes(group = interaction(effect2__, eq_std)),
    color = "black",
    size = 1.5
  ) +
  scale_fill_manual(values = c("white","white","white")) +
  scale_linetype_manual(
    name = "Empathy quotient",
    values = c("-1" = "twodash", "0" = "dashed", "1" = "solid")
  ) +
  facet_grid(caribbean ~ sentence_type,
             labeller = labeller(
               sentence_type = c(
                 "declarative-broad-focus" = "Broad focus declarative",
                 "interrogative-total-yn" = "Absolute interrogative"
               ),
               caribbean = c("0" = "Rising-Q variety", "1" = "Falling-Q variety")
             )) +
  scale_x_continuous(expand = c(0, 0), limits = c(-2.1, 2.1)) +
  coord_cartesian(ylim = c(0, 1)) +
  geom_hline(yintercept = 0.5, lty = 3) +
  labs(y = "P(correct)", x = "LexTALE score") +
  ds4ling::ds4ling_bw_theme(base_size = 12) +
  theme(
    legend.position = c(0.98, 0.9),
    legend.justification = c("right", "top"),
    legend.background = element_blank(),
    legend.key = element_blank()
  ) +
  guides(
    fill = "none",
    color = "none",
    linetype = guide_legend(
      nrow = 1,
      override.aes = list(
        color = "black",
        size = 5)))

ggsave(
  filename = here::here("figs", "rq1_3way_bw.jpeg"),
  plot = rq1_3way_bw,
  width = 14,
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
  "Exposure group",
  "LexTALE × EQ",
  "LexTALE × Exposure group",
  'EQ × Exposure group',
  'LexTALE × EQ × Exposure group'
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
    "Exposure group",
    "LexTALE × EQ",
    "LexTALE × Exposure group",
    'EQ × Exposure group',
    'LexTALE × EQ × Exposure group'
  ))

m_rq2_forest_bw <- as_tibble(m_rq2) %>% 
  select(starts_with("b_")) %>% 
  pivot_longer(everything(), names_to = "Parameter", values_to = "Estimate") %>% 
  mutate(Parameter = case_when(
    Parameter == "b_Intercept" ~ "Intercept",
    Parameter == "b_lextale_std" ~ "LexTALE",
    Parameter == "b_eq_std" ~ "EQ",
    Parameter == "b_group1" ~ "Exposure group",
    Parameter == "b_lextale_std:eq_std" ~ "LexTALE × EQ",
    Parameter == "b_lextale_std:group1" ~ "LexTALE × Exposure group",
    Parameter == "b_eq_std:group1" ~ "EQ × Exposure group",
    Parameter == "b_lextale_std:eq_std:group1" ~ "LexTALE × EQ × Exposure group",
    TRUE ~ Parameter
  ),
  Parameter = fct_relevel(Parameter,
                          "Intercept",
                          "LexTALE",
                          "EQ",
                          "Exposure group",
                          "LexTALE × EQ",
                          "LexTALE × Exposure group",
                          'EQ × Exposure group',
                          'LexTALE × EQ × Exposure group')
  ) %>%
  ggplot(., aes(x = Estimate, y = Parameter)) + 
  coord_cartesian(xlim = c(-2.75, 1.01)) + 
  scale_x_continuous(expand = c(0, 0)) + 
  geom_vline(xintercept = 0, lty = 3) + 
  geom_text(data = simp_labs_tib, hjust = 0, vjust = 0.5, size = 2.25, 
            aes(y = y, x = x, label = y), family = "Times") + 
  stat_halfeye(slab_alpha = 0.5, pch = 21, point_fill = "white", 
               point_size = 1.5) + 
  scale_y_discrete(limits = rev) + 
  theme(axis.text.y = element_blank(), axis.ticks.y = element_blank()) +
  labs(x = NULL, y = NULL)

ggsave(
  filename = here::here("figs", "m_rq2_forest_bw.jpeg"),
  plot = m_rq2_forest_bw,
  width = 14,
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
  spaghetti = FALSE, 
  ndraws = 300,
  int_conditions = list(lextale_std = c(-2.1, -1, 0, 1, 2.1)))

group_labs <- c("Control group","Exposure group")

# Main plot

rq_2_lextale_by_group_bw <- plot(lt_st_me_rq2, plot = FALSE, line_args = list(size = 0))[[1]] +
  aes(linetype = group) +
  geom_line(color = "black", size = 2) +
  scale_linetype_manual(
    values = c("solid", "twodash"),
    labels = sentence_labs
  ) +
  scale_fill_grey(start = 0.7, end = 0.9) +
  scale_x_continuous(expand = c(0, 0)) +
  coord_cartesian(ylim = c(0, 1.01)) +
  geom_hline(yintercept = 0.5, lty = 3) +
  labs(
    y = "P(correct)",
    x = "LexTALE score",
    linetype = "Sentence type"
  ) +
  ds4ling::ds4ling_bw_theme(base_size = 12) +
  theme(legend.position = "none")

ggsave(
  filename = here::here("figs", "rq_2_lextale_by_group_bw.jpeg"),
  plot = rq_2_lextale_by_group_bw,
  width = 14,
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
  spaghetti = FALSE, 
  ndraws = 300,
  int_conditions = list(eq_std = c(-2.1, -1, 0, 1, 2.1)))

group_labs <- c("Control\ngroup","Exposure\ngroup")

# Main plot

rq_2_eq_by_group_bw <- plot(
  eq_st_me_rq2, plot = FALSE, line_args = list(size = 0))[[1]] +
  aes(linetype = effect2__) +
  geom_line(aes(group = effect2__),
            color = "black",
            size  = 1.5
  ) +
  scale_fill_grey(start = 0.7, end = 0.9) +
  scale_linetype_manual(
    name   = NULL,
    labels = group_labs,
    values = c("solid", "twodash")
  ) +
  scale_x_continuous(expand = c(0, 0)) +
  coord_cartesian(ylim = c(0, 1.01)) +
  geom_hline(yintercept = 0.5, lty = 3) +
  labs(y = "P(correct)", x = "EQ") +
  ds4ling::ds4ling_bw_theme(base_size = 12) +
  theme(
    legend.position = c(0.75, 0.9),
    legend.background = element_blank(),
    legend.key = element_blank()
  ) +
  guides(
    fill = "none",
    color = "none",
    linetype = guide_legend(
      nrow = 1,
      override.aes = list(
        color = "black",
        size = 5)))

ggsave(
  filename = here::here("figs", "rq_2_eq_by_group_bw.jpeg"),
  plot = rq_2_eq_by_group_bw,
  width = 14,
  height = 6,
  dpi = 300
)

###

# patchwork eq ~ lextale

rq2_eq_lextale_patchwork_bw <- rq_2_lextale_by_group_bw + rq_2_eq_by_group_bw

ggsave(
  filename = here::here("figs", "rq2_eq_lextale_patchwork_bw.jpeg"),
  plot = rq2_eq_lextale_patchwork_bw,
  width = 14,
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
                    c("Control group","Exposure group"))
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
                                      spaghetti = FALSE, 
                                      ndraws = 300, 
                                      ncol = 2, 
                                      conditions = conditions, 
                                      int_conditions = int_conditions
)

rq2_3way_bw <- plot(rq2_lt_eq_3way, plot = FALSE, line_args = list(size = 1.5))[[1]] +
  aes(linetype = factor(eq_std)) +
  geom_line(
    aes(group = interaction(effect2__, eq_std)),
    color = "black",
    size = 1.5
  ) +
  scale_fill_manual(values = c("white","white","white")) +
  scale_linetype_manual(
    name = "Empathy quotient",
    values = c("-1" = "twodash", "0" = "dashed", "1" = "solid")
  ) +
  scale_x_continuous(expand = c(0, 0), limits = c(-2.1, 4.1)) +
  coord_cartesian(ylim = c(0, 1)) +
  geom_hline(yintercept = 0.5, lty = 3) +
  labs(y = "P(correct)", x = "LexTALE score") +
  ds4ling::ds4ling_bw_theme(base_size = 12) +
  theme(
    legend.position = c(0.98, 0.98),
    legend.justification = c("right", "top"),
    legend.background = element_blank(),
    legend.key = element_blank()
  ) +
  guides(
    fill = "none",
    color = "none",
    linetype = guide_legend(
      nrow = 1,
      override.aes = list(
        color = "black",
        size = 5)))

ggsave(
  filename = here::here("figs", "rq2_3way_bw.jpeg"),
  plot = rq2_3way_bw,
  width = 14,
  height = 6,
  dpi = 300
)

### Lextale distributions ###

rq1_lextale <- rq1 %>%
  group_by(participant_id) %>%
  summarise(lextale_tra = mean(lextale_tra), .groups = "drop") %>%
  mutate(group = "") %>%
  ggplot(aes(x = group, y = lextale_tra)) +
  geom_violin(fill = "grey90", color = "grey50", alpha = 0.5, width = 0.8) +
  geom_boxplot(width = 0.2, fill = "white", outlier.shape = NA) +
  geom_jitter(width = 0.1, size = 2, color = "black", alpha = 0.7) +
  labs(x = "RQ1 dataset", y = "LexTALE score") +
  ds4ling::ds4ling_bw_theme(base_size = 13) +
  coord_cartesian(ylim = c(-20,42))

ggsave(
  filename = here::here("figs", "rq1_lextale.jpeg"),
  plot = rq1_lextale,
  width = 14,
  height = 6,
  dpi = 300
)

rq2_lextale <- rq2 %>%
  group_by(participant_id, group) %>%
  summarise(lextale_tra = mean(lextale_tra), .groups = "drop") %>%
  mutate(group = as.factor(if_else(
    group == 0, "control", "exposure"))) %>%
  ggplot(., aes(x = group, y = lextale_tra)) +
  geom_violin(fill = "grey90", color = "grey50", alpha = 0.5, width = 0.8) +
  geom_boxplot(width = 0.2, fill = "white", outlier.shape = NA) +
  geom_jitter(width = 0.1, size = 2, color = "black", alpha = 0.7) +
  labs(x = "RQ2 dataset", y = NULL) +
  ds4ling::ds4ling_bw_theme(base_size = 13) +
  coord_cartesian(ylim = c(-20,42)) +
  theme(axis.text.y = element_blank(), axis.ticks.y = element_blank())

ggsave(
  filename = here::here("figs", "rq2_lextale.jpeg"),
  plot = rq2_lextale,
  width = 14,
  height = 6,
  dpi = 300
)

lextale_distributions <- rq1_lextale + rq2_lextale

ggsave(
  filename = here::here("figs", "lextale_distributions.jpeg"),
  plot = lextale_distributions,
  width = 14,
  height = 6,
  dpi = 300
)

### empathy distributions

rq1_eq <- rq1 %>%
  group_by(participant_id) %>%
  summarise(eq_score = mean(eq_score), .groups = "drop") %>%
  mutate(group = "") %>%
  ggplot(aes(x = group, y = eq_score)) +
  geom_violin(fill = "grey90", color = "grey50", alpha = 0.5, width = 0.8) +
  geom_boxplot(width = 0.2, fill = "white", outlier.shape = NA) +
  geom_jitter(width = 0.1, size = 2, color = "black", alpha = 0.7) +
  labs(x = "RQ1 dataset", y = "EQ") +
  ds4ling::ds4ling_bw_theme(base_size = 13) +
  coord_cartesian(ylim = c(10,81))

ggsave(
  filename = here::here("figs", "rq1_eq.jpeg"),
  plot = rq1_eq,
  width = 14,
  height = 6,
  dpi = 300
)

rq2_eq <- rq2 %>%
  group_by(participant_id, group) %>%
  summarise(eq_score = mean(eq_score), .groups = "drop") %>%
  mutate(group = as.factor(if_else(
    group == 0, "control", "exposure"))) %>%
  ggplot(., aes(x = group, y = eq_score)) +
  geom_violin(fill = "grey90", color = "grey50", alpha = 0.5, width = 0.8) +
  geom_boxplot(width = 0.2, fill = "white", outlier.shape = NA) +
  geom_jitter(width = 0.1, size = 2, color = "black", alpha = 0.7) +
  labs(x = "RQ2 dataset", y = NULL) +
  ds4ling::ds4ling_bw_theme(base_size = 13) +
  coord_cartesian(ylim = c(10,81)) +
  theme(axis.text.y = element_blank(), axis.ticks.y = element_blank())

ggsave(
  filename = here::here("figs", "rq2_eq.jpeg"),
  plot = rq2_eq,
  width = 14,
  height = 6,
  dpi = 300
)

eq_distributions <- rq1_eq + rq2_eq

ggsave(
  filename = here::here("figs", "eq_distributions.jpeg"),
  plot = eq_distributions,
  width = 14,
  height = 6,
  dpi = 300
)