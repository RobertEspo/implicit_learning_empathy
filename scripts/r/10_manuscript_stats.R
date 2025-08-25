###
# Completion times
###
# rq1
control_mean_time <- rq1 %>% 
  summarise(mean_exp_time = mean(exp_time, na.rm = TRUE) / 60) %>%
  .[[1]]
experimental_mean_time <- rq2 %>% 
  summarise(mean_exp_time = mean(exp_time, na.rm = TRUE) / 60) %>%
  .[[1]]


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
  mutate(group = ifelse(group==0,"control","experimental")) %>%
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
  mutate(group = ifelse(group==0,"control","experimental")) %>%
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

# Experimental group eq x lextale effect examples

lex_levels <- c(1, 2)

# Compute linear predictors and probabilities
exp_lex_eq_probs <- m_rq2_post %>%
  transmute(
    # LexTALE = 1
    lp_neg1_lex1 = b_Intercept +
      b_lextale_std * lex_levels[1] +
      b_eq_std * (-1) +
      b_group1 +
      `b_lextale_std:eq_std` * lex_levels[1] * (-1) +
      `b_lextale_std:group1` * lex_levels[1] +
      `b_eq_std:group1` * (-1) +
      `b_lextale_std:eq_std:group1` * lex_levels[1] * (-1),
    
    lp_pos1_lex1 = b_Intercept +
      b_lextale_std * lex_levels[1] +
      b_eq_std * 1 +
      b_group1 +
      `b_lextale_std:eq_std` * lex_levels[1] * 1 +
      `b_lextale_std:group1` * lex_levels[1] +
      `b_eq_std:group1` * 1 +
      `b_lextale_std:eq_std:group1` * lex_levels[1] * 1,
    
    # LexTALE = 2
    lp_neg1_lex2 = b_Intercept +
      b_lextale_std * lex_levels[2] +
      b_eq_std * (-1) +
      b_group1 +
      `b_lextale_std:eq_std` * lex_levels[2] * (-1) +
      `b_lextale_std:group1` * lex_levels[2] +
      `b_eq_std:group1` * (-1) +
      `b_lextale_std:eq_std:group1` * lex_levels[2] * (-1),
    
    lp_pos1_lex2 = b_Intercept +
      b_lextale_std * lex_levels[2] +
      b_eq_std * 1 +
      b_group1 +
      `b_lextale_std:eq_std` * lex_levels[2] * 1 +
      `b_lextale_std:group1` * lex_levels[2] +
      `b_eq_std:group1` * 1 +
      `b_lextale_std:eq_std:group1` * lex_levels[2] * 1
  ) %>%
  mutate(
    # Absolute probabilities
    prob_neg1_lex1 = plogis(lp_neg1_lex1),
    prob_pos1_lex1 = plogis(lp_pos1_lex1),
    prob_neg1_lex2 = plogis(lp_neg1_lex2),
    prob_pos1_lex2 = plogis(lp_pos1_lex2),
    
    # Absolute percent-point differences
    diff_pp_lex1 = (prob_pos1_lex1 - prob_neg1_lex1) * 100,
    diff_pp_lex2 = (prob_pos1_lex2 - prob_neg1_lex2) * 100,
    
    # Relative percent change (relative to EQ = -1)
    diff_pct_lex1 = (prob_pos1_lex1 - prob_neg1_lex1) / prob_neg1_lex1 * 100,
    diff_pct_lex2 = (prob_pos1_lex2 - prob_neg1_lex2) / prob_neg1_lex2 * 100
  )

# Summarize medians and 95% HDIs
diff_summary <- exp_lex_eq_probs %>%
  pivot_longer(
    cols = c(diff_pp_lex1, diff_pp_lex2, diff_pct_lex1, diff_pct_lex2),
    names_to = c("type", "LexTALE_level"),
    names_pattern = "diff_(pp|pct)_lex(\\d)",
    values_to = "draw"
  ) %>%
  group_by(type, LexTALE_level) %>%
  summarise(
    median = median(draw),
    hdi_low = hdi(draw, ci = 0.95)$CI_low,
    hdi_high = hdi(draw, ci = 0.95)$CI_high,
    .groups = "drop"
  )