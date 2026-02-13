# Combine tasks ---------------------------------------------------------------
# This script combines raw data, all tasks & tidies data
# Produces all CSV tidy data files
# -----------------------------------------------------------------------------

# Source libraries, helpers, data ----------------------------------------------

source(here::here("scripts", "r", "00_libs.R"))
source(here::here("scripts", "r", "01_helpers.R"))

# -----------------------------------------------------------------------------

### Load raw data --------------------------------------------------------------

exp_path <- "data/prolific_experimental_group"
ctrl_path <- "data/prolific_control_group"

exp_files <- list.files(exp_path, pattern = "\\.csv$", full.names = TRUE)
ctrl_files <- list.files(ctrl_path, pattern = "\\.csv$", full.names = TRUE)

exp_list <- map(exp_files, read_csv)
ctrl_list <- map(ctrl_files, read_csv)

names(exp_list) <- basename(exp_files)
names(ctrl_list) <- basename(ctrl_files)

# ------------------------------------------------------------------------------

# Participants that must be removed from the dataset

remove_participants <- c(
  "5dad4c34b3446a0015e3de93",
  "6569ecf42ba18f5b855744db",
  "660d6b2e957fa582ec87816f",
  "6647ce8c4b8ee105144eb431",
  "6672f795fac6ecd66d7b987f",
  "66ad3561c1e5c019916365fb",
  "67273f4171f43599635eb133",
  "672bb5dadc26d7849dc27b55",
  "674fa4a78b9d8a734154456f",
  "67d09ba717ec412519ebf44b",
  "5b50881a59119400018abaf3",
  "5f51a882d4ac6440de16c4ed",
  "5fa315662ca5b25d05ae8236",
  "6650ee988709a4266409c5f9",
  "6792eb57ba13059998fa6235",
  "67e9738d6bb6923faef4a165",
  "CKT2VZHG",
  "5b50881a59119400018abaf3",
  "5fa315662ca5b25d05ae8236",
  "6650ee988709a4266409c5f9"
)

# Run all tasks

source(here("scripts","r","02_tidy_empathy.R"))
source(here("scripts","r","03_tidy_lextale.R"))
source(here("scripts","r","04_tidy_2afc.R"))
source(here("scripts","r","99_attention_checks.R"))

# Combine tasks ---------------------------------------------------------------

experimental_all_tasks <- afc_data_experimental %>%
  left_join(., eq_data_experimental, by = c("participant_id", "group", "familiar_with_fall","learner","two_langs")) %>%
  left_join(., lextale_data_experimental, by = c("participant_id", "group", "familiar_with_fall","learner","two_langs")) %>%
  anti_join(attention_check_experimental, by = "participant_id") %>%
  filter(!participant_id %in% remove_participants)

control_all_tasks <- afc_data_control %>%
  left_join(., eq_data_control, by = c("participant_id", "group", "familiar_with_fall","learner","two_langs")) %>%
  left_join(., lextale_data_control, by = c("participant_id", "group", "familiar_with_fall","learner","two_langs")) %>%
  filter(!participant_id %in% remove_participants) %>%
  anti_join(attention_check_control, by = "participant_id")

all_tasks_tidy <- experimental_all_tasks %>%
  bind_rows(control_all_tasks) %>%
  mutate(target = if_else(
    speaker_variety %in% c("cuban", "puertorican") & sentence_type == "interrogative-total-yn", 1, 0),
    item = paste0(speaker_variety, sentence_type, sentence))

write_csv(experimental_all_tasks, here("data","tidy","experimental_all_tasks.csv"))
write_csv(control_all_tasks, here("data","tidy","control_all_tasks.csv"))
write_csv(all_tasks_tidy, here("data","tidy","all_tasks_tidy.csv"))
# -----------------------------------------------------------------------------

# dataset for rq1 rt
rq1_rt <- rq1 %>%
  filter(rt_adj < 10, correct == 1) %>%
  mutate(rt = rt_adj + abs(min(rt_adj)) + 0.01)

# datset for rq2 rt
rq2_rt <- rq2 %>%
  filter(rt_adj < 10, correct == 1) %>%
  mutate(rt = rt_adj + abs(min(rt_adj)) + 0.01)

write_csv(rq1_rt, here("data","tidy","rq1_rt.csv"))
write_csv(rq2_rt, here("data","tidy","rq2_rt.csv"))

# Demographic info

demo_rq1 <- list.files(
  here("data", "demographic_info"),
  pattern = "\\.csv$",
  full.names = TRUE
) %>%
  map_dfr(
    ~ read_csv(.x, show_col_types = FALSE) %>%
      mutate(source_file = basename(.x))
  ) %>%
  mutate(participant_id = `Participant id`) %>%
  transmute(
    participant_id = factor(participant_id),
    monolingual = `Were you raised monolingual?`,
    age = as.numeric(`Age`),
    sex = `Sex`,
    group = 0
  ) %>%
  filter(participant_id %in% rq1$participant_id,
         !monolingual == "CONSENT_REVOKED",
         !sex == "DATA_EXPIRED") %>%
  distinct() %>%
  left_join(rq1 %>% select(participant_id,two_langs), by = "participant_id") %>%
  distinct()

demo_rq2 <- list.files(
  here("data", "demographic_info"),
  pattern = "\\.csv$",
  full.names = TRUE
) %>%
  map_dfr(
    ~ read_csv(.x, show_col_types = FALSE) %>%
      mutate(source_file = basename(.x))
  ) %>%
  mutate(participant_id = `Participant id`) %>%
  transmute(
    participant_id = factor(participant_id),
    monolingual = `Were you raised monolingual?`,
    age = as.numeric(`Age`),
    sex = `Sex`
  ) %>%
  filter(participant_id %in% rq2$participant_id,
         !monolingual == "CONSENT_REVOKED",
         !sex == "DATA_EXPIRED") %>%
  distinct() %>%
  left_join(rq2 %>% select(participant_id,group,two_langs), by = "participant_id") %>%
  distinct()

write_csv(demo_rq1, here("data","tidy","demo_rq1.csv"))
write_csv(demo_rq2, here("data","tidy","demo_rq2.csv"))

# dataset for calculating task completion times

experimental_task_times <- exp_list %>%
  map_dfr(~ {
    df <- .x
    if (!all("end_exp.stopped" %in% names(df))) return(NULL)
    
    df %>% 
      mutate(
        participant_id = factor(participant_id)
      ) %>%
      select(
        participant_id,
        trial_exposure.started,
        trial_exposure.stopped,
        trial_2afc.started,
        trial_2afc.stopped,
        trial_lextale.started,
        trial_lextale.stopped,
        trial_eq.started,
        trial_eq.stopped
      ) %>%
      pivot_longer(!participant_id, names_to = "task", values_to = "time") %>%
      separate_wider_delim(task, ".", names = c("task","start_stop")) %>%
      na.omit() %>%
      mutate(group=1)
  })

control_task_times <- ctrl_list %>%
  map_dfr(~ {
    df <- .x
    if (!all("end_exp.stopped" %in% names(df))) return(NULL)
    
    df %>% 
      mutate(
        participant_id = factor(participant_id)
      ) %>%
      select(
        participant_id,
        trial_2afc.started,
        trial_2afc.stopped,
        trial_lextale.started,
        trial_lextale.stopped,
        trial_eq.started,
        trial_eq.stopped
      ) %>%
      pivot_longer(!participant_id, names_to = "task", values_to = "time") %>%
      separate_wider_delim(task, ".", names = c("task","start_stop")) %>%
      na.omit() %>%
      mutate(group=0)
  })

combined_task_times <- experimental_task_times %>%
  bind_rows(control_task_times) %>%
  group_by(participant_id, task, group) %>%
  mutate(trial = rep(seq_len(n() / 2), each = 2)) %>%
  ungroup()

combined_task_times_trial_dur <- combined_task_times %>%
  group_by(participant_id, task, trial, group) %>%
  summarize(
    start_time = time[start_stop == "started"],
    stop_time  = time[start_stop == "stopped"],
    duration   = stop_time - start_time,
    .groups = "drop"
  )

write_csv(experimental_task_times, here("data","tidy","experimental_task_times.csv"))
write_csv(control_task_times, here("data","tidy","control_task_times.csv"))
write_csv(combined_task_times, here("data","tidy","combined_task_times.csv"))
write_csv(combined_task_times_trial_dur, here("data","tidy","combined_task_times_trial_dur.csv"))
