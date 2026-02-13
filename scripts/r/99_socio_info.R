# Load socio data --------------------------------------------------------------
#
# -----------------------------------------------------------------------------

# Load libs, helpers, data
# source(here::here("scripts", "r", "00_libs.R"))
# source(here::here("scripts", "r", "01_helpers.R"))
# source(here::here("scripts", "r", "02_data.R"))

# Load demographic data

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
