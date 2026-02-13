# This script loads all tidy data
# For raw data & tidying of raw data, see 05_combine_tasks.R

source(here::here("scripts", "r", "00_libs.R"))
source(here::here("scripts","r","01_helpers.R"))

# Load tables
table_csv_files <- list.files(here("tables"), pattern = "\\.csv$", full.names = TRUE)
for (file in table_csv_files) {
  df_name <- str_remove(basename(file), "\\.csv$")
  df <- read_csv(file)
  assign(df_name, df)
}

# Load models
rds_files <- list.files(here("models"), pattern = "\\.rds$", full.names = TRUE)
for (file in rds_files) {
  model_name <- str_remove(basename(file), "\\.rds$")
  model <- readRDS(file)
  assign(model_name, model)
}

# Load tidy data

csv_files <- list.files(here("data","tidy"), pattern = "\\.csv$", full.names = TRUE)
for (file in csv_files) {
  df_name <- str_remove(basename(file), "\\.csv$")
  df <- read_csv(file)
  assign(df_name, df)
}

# Tidy rq1 and rq2 data

# dataset for rq1
rq1 <- all_tasks_tidy %>%
  na.omit() %>% droplevels() %>%
  filter(group==0) %>%
  mutate(
    lextale_std = (lextale_tra - mean(lextale_tra)) / sd(lextale_tra), 
    eq_std = (eq_score - mean(eq_score)) / sd(eq_score),
    caribbean = ifelse(
      speaker_variety %in% c("cuban","puertorican"), 1, 0
    ),
    
    speaker_variety = as.factor(speaker_variety),
    group = factor(group),
    sentence_type = as.factor(sentence_type),
    target = as.factor(target),
    item = factor(item),
    caribbean = factor(caribbean),
    familiar_with_fall = factor(familiar_with_fall))

# dataset for rq2
rq2 <- all_tasks_tidy %>%
  na.omit() %>% droplevels() %>%
  filter(
    familiar_with_fall == 'no',
    target == 1
  ) %>%
  mutate(
    lextale_std = (lextale_tra - mean(lextale_tra)) / sd(lextale_tra), 
    eq_std = (eq_score - mean(eq_score)) / sd(eq_score),
    target = if_else(
      speaker_variety %in% c("cuban", "puertorican") & sentence_type == "interrogative-total-yn", 1, 0),
    
    speaker_variety = as.factor(speaker_variety),
    target = as.factor(target),
    group = factor(group),
    sentence_type = as.factor(sentence_type),
    item = factor(item))