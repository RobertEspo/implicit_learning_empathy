# Source libs  and helpers ----------------------------------------------------

# source(here::here("scripts", "r", "01_helpers.R"))

#-------------------------------------------------------------------------------
attention_check_experimental <- exp_list %>%
  map_dfr(~ {
    df <- .x
    
    if (!"end_exp.stopped" %in% names(df)) return(NULL)
    
    df %>%
      mutate(
        participant_id = as.factor(participant_id),
        attention_checks = as.integer(word %in% c("click the 0 key.", "click the 1 key.")),
        passed_check_trial = attention_checks * key_resp_lextale_trial.corr
      ) %>%
      group_by(participant_id) %>%
      summarise(
        check_pass = as.integer(sum(passed_check_trial, na.rm = TRUE) == 2),
        .groups = "drop"
      ) %>%
      filter(check_pass == 0)
  })

attention_check_control <- ctrl_list %>%
  map_dfr(~ {
    df <- .x
    
    if (!"end_exp.stopped" %in% names(df)) return(NULL)
    
    df %>%
      mutate(
        participant_id = as.factor(participant_id),
        attention_checks = as.integer(word %in% c("click the 0 key.", "click the 1 key.")),
        passed_check_trial = attention_checks * key_resp_lextale_trial.corr
      ) %>%
      group_by(participant_id) %>%
      summarise(
        check_pass = as.integer(sum(passed_check_trial, na.rm = TRUE) == 2),
        .groups = "drop"
      ) %>%
      filter(check_pass == 0)
  })

