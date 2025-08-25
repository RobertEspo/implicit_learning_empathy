###
# rq1
###

describe_posterior(m_rq1, rope_range = c(-0.1, 0.1)) %>% 
  as_tibble() %>% 
  select(-c("CI", "ROPE_CI", "ROPE_low", "ROPE_high")) %>% 
  mutate(Parameter = case_when(
    Parameter == "b_Intercept" ~ "Intercept",
    Parameter == "b_lextale_std" ~ "LexTALE",
    Parameter == "b_eq_std" ~ "EQ",
    Parameter == "b_sentence_typeinterrogativeMtotalMyn" ~ "Absolute interrogative",
    Parameter == "b_caribbean1" ~ "Caribbean",
    
    Parameter == "b_lextale_std:eq_std" ~ "LexTALE:EQ",
    Parameter == "b_lextale_std:sentence_typeinterrogativeMtotalMyn" ~ "LexTALE:Absolute interrogative",
    Parameter == "b_eq_std:sentence_typeinterrogativeMtotalMyn" ~ "EQ:Absolute interrogative",
    Parameter == "b_lextale_std:caribbean1" ~ "LexTALE:Caribbean",
    Parameter == "b_eq_std:caribbean1" ~ "EQ:Caribbean",
    Parameter == "b_sentence_typeinterrogativeMtotalMyn:caribbean1" ~ "Absolute interrogative:Caribbean",
    
    Parameter == "b_lextale_std:eq_std:sentence_typeinterrogativeMtotalMyn" ~ "LexTALE:EQ:Absolute interrogative",
    Parameter == "b_lextale_std:eq_std:caribbean1" ~ "LexTALE:EQ:Caribbean",
    Parameter == "b_lextale_std:sentence_typeinterrogativeMtotalMyn:caribbean1" ~ "LexTALE:Absolute interrogative:Caribbean",
    Parameter == "b_eq_std:sentence_typeinterrogativeMtotalMyn:caribbean1" ~ "EQ:Absolute interrogative:Caribbean",
    Parameter == "b_lextale_std:eq_std:sentence_typeinterrogativeMtotalMyn:caribbean1" ~ "LexTALE:EQ:Absolute interrogative:Caribbean",
    
    TRUE ~ Parameter
  )) %>% 
  mutate(across(-c("Parameter", "ESS"), specify_decimal, k = 2)) %>% 
  mutate(ESS = round(ESS)) %>% 
  mutate(HDI = glue("[{CI_low}, {CI_high}]")) %>% 
  select(Parameter, Median, HDI, `% in ROPE` = ROPE_Percentage, MPE = pd, Rhat, ESS) %>% 
  write_csv(here("tables", "m_rq1_table.csv"))

###
# rq2
###

describe_posterior(m_rq2, rope_range = c(-0.1, 0.1)) %>% 
  as_tibble() %>% 
  select(-c("CI", "ROPE_CI", "ROPE_low", "ROPE_high")) %>% 
  mutate(Parameter = case_when(
      Parameter == "b_Intercept" ~ "Intercept",
      Parameter == "b_lextale_std" ~ "LexTALE",
      Parameter == "b_eq_std" ~ "Empathy quotient",
      Parameter == "b_group1" ~ "Experimental group",
      
      Parameter == "b_lextale_std:eq_std" ~ "LexTALE:EQ",
      Parameter == "b_lextale_std:group1" ~ "LexTALE:Experimental group",
      Parameter == "b_eq_std:group1" ~ "EQ:Experimental group",
      Parameter == "b_lextale_std:eq_std:group1" ~ "LexTALE:EQ:Experimental group"
    )) %>% 
  mutate(across(-c("Parameter", "ESS"), specify_decimal, k = 2)) %>% 
  mutate(ESS = round(ESS)) %>% 
  mutate(HDI = glue("[{CI_low}, {CI_high}]")) %>% 
  select(Parameter, Median, HDI, `% in ROPE` = ROPE_Percentage, MPE = pd, Rhat, ESS) %>% 
  write_csv(here("tables", "m_rq2_table.csv"))

# lextale
describe_posterior(m_lextale_rq2, rope_range = c(-0.1, 0.1)) %>% 
  as_tibble() %>% 
  select(-c("CI", "ROPE_CI", "ROPE_low", "ROPE_high")) %>% 
  mutate(Parameter = case_when(
    Parameter == "b_Intercept" ~ "Intercept",
    Parameter == "b_group1" ~ "Experimental group",
  )) %>% 
  mutate(across(-c("Parameter", "ESS"), specify_decimal, k = 2)) %>% 
  mutate(ESS = round(ESS)) %>% 
  mutate(HDI = glue("[{CI_low}, {CI_high}]")) %>% 
  select(Parameter, Median, HDI, `% in ROPE` = ROPE_Percentage, MPE = pd, Rhat, ESS) %>% 
  write_csv(here("tables", "m_lextale_rq2_table.csv"))

# eq
describe_posterior(m_eq_rq2, rope_range = c(-0.1, 0.1)) %>% 
  as_tibble() %>% 
  select(-c("CI", "ROPE_CI", "ROPE_low", "ROPE_high")) %>% 
  mutate(Parameter = case_when(
    Parameter == "b_Intercept" ~ "Intercept",
    Parameter == "b_group1" ~ "Experimental group",
  )) %>% 
  mutate(across(-c("Parameter", "ESS"), specify_decimal, k = 2)) %>% 
  mutate(ESS = round(ESS)) %>% 
  mutate(HDI = glue("[{CI_low}, {CI_high}]")) %>% 
  select(Parameter, Median, HDI, `% in ROPE` = ROPE_Percentage, MPE = pd, Rhat, ESS) %>% 
  write_csv(here("tables", "m_eq_rq2_table.csv"))