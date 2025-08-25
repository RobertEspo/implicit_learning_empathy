# Tidy lexTALE data -----------------------------------------------------------

# Source libs  and helpers ----------------------------------------------------

# source(here::here("scripts", "r","01_helpers.R"))

# -----------------------------------------------------------------------------




# calculate score 
# Score = N yes to words – 2 * N yes to nonwords 
#
# or 
#
# The LexTALE score consists of the percentage of correct responses, 
# corrected for the unequal proportion of words and nonwords in the test by 
# averaging the percentages correct for these two item types. 
# We call this measure % correctav (averaged % correct). 
# It is calculated as follows:
# ((n_corr_real / n_real_words * 100) + (n_corr_nonse / n_nonse_words * 100)) / 2




# Tidy lexTALE ----------------------------------------------------------------

required_lextale_cols <- "end_exp.stopped"

lextale_data_experimental <- exp_list %>%
  map_dfr(~ {
    df <- .x
    
    if (!all(required_lextale_cols %in% names(df))) return(NULL)
    
    df %>%
      mutate(participant_id = as.character(participant_id)) %>%
      select(
        participant_id, 
        key_resp_lextale_trial.keys, 
        key_resp_lextale_trial.corr, 
        word,
        familiar_with_fall = `Are you familiar with Caribbean (e.g., Caribbean, Puerto Rican) or Galician Spanish?`,
        learner            = `At what age did you begin learning Spanish?`,
        two_langs          = `Are you proficient in any languages other than English/Spanish?`
      ) %>%
      na.omit() %>%
      filter(!word %in% c("click the 0 key.", "click the 1 key.")) %>%
      mutate(
        response = key_resp_lextale_trial.keys, 
        is_correct = key_resp_lextale_trial.corr, 
        is_incorrect = if_else(is_correct == 0, 1, 0), 
        is_real = case_when(
          response == 1 & is_correct == 1 ~ "real", 
          response == 1 & is_correct == 0 ~ "nonse", 
          response == 0 & is_correct == 1 ~ "nonse", 
          response == 0 & is_correct == 0 ~ "real"
        ),  
        real_correct    = if_else(is_real == "real"  & is_correct == 1, 1, 0), 
        real_incorrect  = if_else(is_real == "real"  & is_correct == 0, 1, 0), 
        nonse_correct   = if_else(is_real == "nonse" & is_correct == 1, 1, 0), 
        nonse_incorrect = if_else(is_real == "nonse" & is_correct == 0, 1, 0)
      ) %>%
      group_by(participant_id) %>%
      reframe(
        # keep survey answers (assumes they're the same per participant)
        familiar_with_fall = first(familiar_with_fall),
        learner            = first(learner),
        two_langs          = first(two_langs),
        
        real_correct = sum(real_correct),
        real_incorrect = sum(real_incorrect),
        nonse_correct = sum(nonse_correct),
        nonse_incorrect = sum(nonse_incorrect),
        n_real = real_correct + real_incorrect,
        n_nonse = nonse_correct + nonse_incorrect,
        n = n_real + n_nonse,
        lextale_avg = score_lextale(
          n_real = n_real, 
          n_nonse = n_nonse,
          n_real_correct = real_correct, 
          n_nonse_correct = nonse_correct
        ),
        lextale_tra = score_lextale(
          n_real_correct = real_correct,
          n_nonse_incorrect = nonse_incorrect
        )
      ) %>%
      mutate(group = 1,
             participant_id = as.factor(participant_id)) %>%
      select(
        participant_id, group, lextale_avg, lextale_tra, 
        familiar_with_fall, learner, two_langs
      )
  })

lextale_data_control <- ctrl_list %>%
  map_dfr(~ {
    df <- .x
    
    if (!all(required_lextale_cols %in% names(df))) return(NULL)
    
    df %>%
      mutate(participant_id = as.character(participant_id)) %>%
      select(
        participant_id, 
        key_resp_lextale_trial.keys, 
        key_resp_lextale_trial.corr, 
        word,
        familiar_with_fall = `Are you familiar with Caribbean (e.g., Caribbean, Puerto Rican) or Galician Spanish?`,
        learner            = `At what age did you begin learning Spanish?`,
        two_langs          = `Are you proficient in any languages other than English/Spanish?`
      ) %>%
      na.omit() %>%
      filter(!word %in% c("click the 0 key.", "click the 1 key.")) %>%
      mutate(
        response = key_resp_lextale_trial.keys, 
        is_correct = key_resp_lextale_trial.corr, 
        is_incorrect = if_else(is_correct == 0, 1, 0), 
        is_real = case_when(
          response == 1 & is_correct == 1 ~ "real", 
          response == 1 & is_correct == 0 ~ "nonse", 
          response == 0 & is_correct == 1 ~ "nonse", 
          response == 0 & is_correct == 0 ~ "real"
        ),  
        real_correct    = if_else(is_real == "real"  & is_correct == 1, 1, 0), 
        real_incorrect  = if_else(is_real == "real"  & is_correct == 0, 1, 0), 
        nonse_correct   = if_else(is_real == "nonse" & is_correct == 1, 1, 0), 
        nonse_incorrect = if_else(is_real == "nonse" & is_correct == 0, 1, 0)
      ) %>%
      group_by(participant_id) %>%
      reframe(
        familiar_with_fall = first(familiar_with_fall),
        learner            = first(learner),
        two_langs          = first(two_langs),
        
        real_correct = sum(real_correct),
        real_incorrect = sum(real_incorrect),
        nonse_correct = sum(nonse_correct),
        nonse_incorrect = sum(nonse_incorrect),
        n_real = real_correct + real_incorrect,
        n_nonse = nonse_correct + nonse_incorrect,
        n = n_real + n_nonse,
        lextale_avg = score_lextale(
          n_real = n_real, 
          n_nonse = n_nonse,
          n_real_correct = real_correct, 
          n_nonse_correct = nonse_correct
        ),
        lextale_tra = score_lextale(
          n_real_correct = real_correct,
          n_nonse_incorrect = nonse_incorrect
        )
      ) %>%
      mutate(group = 0,
             participant_id = as.factor(participant_id)) %>%
      select(
        participant_id, group, lextale_avg, lextale_tra,
        familiar_with_fall, learner, two_langs
      )
  })

