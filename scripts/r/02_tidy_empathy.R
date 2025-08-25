###############################################################################
# Tidy empathy quotient data --------------------------------------------------
###############################################################################

# Source libs  and helpers ----------------------------------------------------

# source(here::here("scripts", "r", "01_helpers.R"))

# Tidy empathy -----------------------------------------------------------------------------

required_eq_cols <- "end_exp.stopped"

eq_data_experimental <- exp_list %>%
  map_dfr(~ {
    df <- .x
    if (!all(required_eq_cols %in% names(df))) return(NULL)
    
    df %>%
      mutate(
        participant_id = factor(participant_id),
        eq_response = slider_eq_trial.response,
        group = 1,
        score = case_when(
          is_agree_score    == 1 & eq_response == "strongly agree"    ~ 2, 
          is_agree_score    == 1 & eq_response == "slightly agree"    ~ 1, 
          is_disagree_score == 1 & eq_response == "strongly disagree" ~ 2, 
          is_disagree_score == 1 & eq_response == "slightly disagree" ~ 1, 
          TRUE ~ 0
        )
      ) %>%
      summarise(
        participant_id = unique(participant_id),
        eq_score = sum(score, na.rm = TRUE),
        familiar_with_fall = unique(`Are you familiar with Caribbean (e.g., Caribbean, Puerto Rican) or Galician Spanish?`),
        learner = unique(`At what age did you begin learning Spanish?`),
        two_langs = unique(`Are you proficient in any languages other than English/Spanish?`),
        group = unique(group),
        exp_time = end_exp.stopped
      ) %>%
      mutate(participant_id = as.factor(participant_id)) %>%
      na.omit()
  })


eq_data_control <- ctrl_list %>%
  map_dfr(~ {
    df <- .x  # already a data frame
    if (!all(required_eq_cols %in% names(df))) return(NULL)
    
    df %>%
      mutate(
        participant_id = factor(participant_id),
        eq_response = slider_eq_trial.response,
        group = 0,
        score = case_when(
          is_agree_score    == 1 & eq_response == "strongly agree"    ~ 2, 
          is_agree_score    == 1 & eq_response == "slightly agree"    ~ 1, 
          is_disagree_score == 1 & eq_response == "strongly disagree" ~ 2, 
          is_disagree_score == 1 & eq_response == "slightly disagree" ~ 1, 
          TRUE ~ 0
        )
      ) %>%
      summarise(
        participant_id = unique(participant_id),
        eq_score = sum(score, na.rm = TRUE),
        familiar_with_fall = unique(`Are you familiar with Caribbean (e.g., Caribbean, Puerto Rican) or Galician Spanish?`),
        learner = unique(`At what age did you begin learning Spanish?`),
        two_langs = unique(`Are you proficient in any languages other than English/Spanish?`),
        group = unique(group),
        exp_time = end_exp.stopped
      ) %>%
      mutate(participant_id = as.factor(participant_id)) %>%
      na.omit()
  })
