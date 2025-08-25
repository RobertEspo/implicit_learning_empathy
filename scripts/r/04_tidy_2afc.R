# Tidy 2afc data --------------------------------------------------------------
#
# -----------------------------------------------------------------------------




# Source libs  and helpers ----------------------------------------------------

# source(here::here("scripts", "r", "01_helpers.R"))

# -----------------------------------------------------------------------------




# Tidy 2afc -------------------------------------------------------------------

# Load speech rate data
speech_rate <- read_csv(here("data", "tidy", "speech_rate_tidy.csv")) %>%
  select(speaker_variety, condition, sentence_type, sentence, sentence_dur)

### Experimental Data ###

afc_data_experimental <- map_dfr(exp_list, ~ {
  df <- .x
  
  required_cols <- "end_exp.stopped"
  if (!all(required_cols %in% names(df))) return(NULL)
  
  df %>%
    select(
      participant_id, 
      key_resp_2afc_trial.corr, key_resp_2afc_trial.rt, path, variety,
      familiar_with_fall = `Are you familiar with Caribbean (e.g., Caribbean, Puerto Rican) or Galician Spanish?`,
      learner            = `At what age did you begin learning Spanish?`,
      two_langs          = `Are you proficient in any languages other than English/Spanish?`
    ) %>%
    filter(!if_all(-participant_id, is.na), !is.na(variety)) %>%
    mutate(
      participant_id = as.factor(participant_id),
      path = str_remove(path, "^\\.\\/stim\\/wavs\\/"),
      path = str_remove(path, "\\.wav$")
    ) %>%
    separate(
      path,
      into = c("speaker_variety", "condition", "sentence_type", "sentence"),
      sep = "_",
      remove = FALSE
    ) %>%
    mutate(
      sentence = str_replace_all(sentence, "-", " ")
    ) %>%
    left_join(speech_rate, by = c("speaker_variety", "condition", "sentence_type", "sentence")) %>%
    transmute(
      group = 1,
      participant_id = as.factor(participant_id),
      correct = key_resp_2afc_trial.corr,
      rt_raw = key_resp_2afc_trial.rt,
      rt_adj = rt_raw - sentence_dur,
      speaker_variety, sentence_type, sentence,
      familiar_with_fall, learner, two_langs
    ) %>%
    na.omit()
})

### Control Data ###

afc_data_control <- map_dfr(ctrl_list, ~ {
  df <- .x
  
  required_cols <- "end_exp.stopped"
  if (!all(required_cols %in% names(df))) return(NULL)
  
  df %>%
    select(participant_id,
           key_resp_2afc_trial.corr, key_resp_2afc_trial.rt, path, variety,
           familiar_with_fall = `Are you familiar with Caribbean (e.g., Caribbean, Puerto Rican) or Galician Spanish?`,
           learner            = `At what age did you begin learning Spanish?`,
           two_langs          = `Are you proficient in any languages other than English/Spanish?`) %>%
    filter(!if_all(-participant_id, is.na), !is.na(variety)) %>%
    mutate(
      participant_id = as.factor(participant_id),
      path = str_remove(path, "^\\.\\/stim\\/wavs\\/"),
      path = str_remove(path, "\\.wav$")
    ) %>%
    separate(
      path,
      into = c("speaker_variety", "condition", "sentence_type", "sentence"),
      sep = "_",
      remove = FALSE
    ) %>%
    mutate(
      sentence = str_replace_all(sentence, "-", " ")
    ) %>%
    left_join(speech_rate, by = c("speaker_variety", "condition", "sentence_type", "sentence")) %>%
    transmute(
      group = 0,
      participant_id = as.factor(participant_id),
      correct = key_resp_2afc_trial.corr,
      rt_raw = key_resp_2afc_trial.rt,
      rt_adj = rt_raw - sentence_dur,
      speaker_variety, sentence_type, sentence,
      familiar_with_fall, learner, two_langs
    ) %>%
    na.omit()
})
