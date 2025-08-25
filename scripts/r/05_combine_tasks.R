# Combine tasks ---------------------------------------------------------------
#
#
# -----------------------------------------------------------------------------

# Source libraries and helpers ------------------------------------------------

source(here::here("scripts", "r", "01_helpers.R"))
source(here("scripts","r","02_tidy_empathy.R"))
source(here("scripts","r","03_tidy_lextale.R"))
source(here("scripts","r","04_tidy_2afc.R"))
source(here("scripts","r","99_attention_checks.R"))

# -----------------------------------------------------------------------------



# Combine tasks ---------------------------------------------------------------

removed_from_experimental <- c(
  "5dad4c34b3446a0015e3de93",
  "6569ecf42ba18f5b855744db",
  "660d6b2e957fa582ec87816f",
  "6647ce8c4b8ee105144eb431",
  "6672f795fac6ecd66d7b987f",
  "66ad3561c1e5c019916365fb",
  "67273f4171f43599635eb133",
  "672bb5dadc26d7849dc27b55",
  "674fa4a78b9d8a734154456f",
  "67d09ba717ec412519ebf44b"
)

experimental_all_tasks <- afc_data_experimental %>%
  left_join(., eq_data_experimental, by = c("participant_id", "group", "familiar_with_fall","learner","two_langs")) %>%
  left_join(., lextale_data_experimental, by = c("participant_id", "group", "familiar_with_fall","learner","two_langs")) %>%
  anti_join(attention_check_experimental, by = "participant_id") %>%
  filter(!participant_id %in% removed_from_experimental)

control_all_tasks <- afc_data_control %>%
  left_join(., eq_data_control, by = c("participant_id", "group", "familiar_with_fall","learner","two_langs")) %>%
  left_join(., lextale_data_control, by = c("participant_id", "group", "familiar_with_fall","learner","two_langs")) %>%
  anti_join(attention_check_control, by = "participant_id")

all_tasks_tidy <- experimental_all_tasks %>%
  bind_rows(control_all_tasks) %>%
  mutate(target = if_else(
    speaker_variety %in% c("cuban", "puertorican") & sentence_type == "interrogative-total-yn", 1, 0),
    item = paste0(speaker_variety, sentence_type, sentence))
# -----------------------------------------------------------------------------