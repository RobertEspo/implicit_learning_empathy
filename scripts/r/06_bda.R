# Bayesian regression models --------------------------------------------------
#
# -----------------------------------------------------------------------------

# Source libraries, helpers, load data ----------------------------------------

source(here::here("scripts", "r", "02_load_data.R"))
source(here::here("scripts", "r", "05_combine_tasks.R"))

# ------------------------------------------------------------------------------

# Set weakly informative priors
response_priors <- c(
  prior(normal(0, 0.4), class = b),
  prior(cauchy(0, 0.3), class = sd)
)

# ------------------------------------------------------------------------------

m_rq1 <- brm(
  formula = correct ~ 0 + Intercept + lextale_std * eq_std * sentence_type * caribbean + 
    (1 | participant_id) + 
    (1 | item), 
  data = rq1 %>% filter(rt_adj < 10),
  prior = response_priors, 
  warmup = 2000, iter = 4000, chains = 4, 
  family = "bernoulli", 
  cores = 4, 
  control = list(adapt_delta = 0.99, max_treedepth = 20),
  file = here("models", "m_rq1")
)

# ------------------------------------------------------------------------------
response_priors_2 <- c(
  prior(normal(0, 0.4), class = b),
  prior(cauchy(0, 0.3), class = sd)
)

m_rq2 <- brm(
  formula = correct ~ 0 + Intercept + lextale_std * eq_std * group + 
    (1 | participant_id) +
    (1 | item), 
  data = rq2 %>% filter(rt_adj < 10),
  prior = response_priors_2, 
  warmup = 4000, iter = 8000, chains = 4, 
  family = "bernoulli", 
  cores = 4, 
  control = list(adapt_delta = 0.99, max_treedepth = 20), 
  file = here("models", "m_rq2")
)

diag_m_rq2 <- mcmc_diagnostics_summary(m_rq2, rhat_threshold = 1.01, ess_threshold = 400)
print(diag_m_rq2)

ppc_result_m_rq2 <- posterior_predictive_check(
  model = m_rq2,
  observed_data = rq2 %>% filter(rt_adj < 10) %>% pull(correct),
  n_samples = 1000,
  test_statistics = c("mean", "sd", "median", "min", "max", "skewness", "kurtosis"),
  plot = FALSE
)

print(ppc_result_m_rq2)

pp_check(m_rq2)

plot(m_rq2)

# ------------------------------------------------------------------------------
# lextale rq2
###

### Priors ###
lextale_priors <- c(
  prior(normal(0, 5), class = "b"),
  prior(student_t(3, 0, 10), class = "sigma")
)

### Models ###
m_lextale_rq2 <- brm(
  formula = lextale_tra ~ 0 + Intercept + group,
  data = rq2 %>% select(participant_id, lextale_tra, group) %>% 
    distinct(participant_id, .keep_all = TRUE),
  prior = lextale_priors,
  warmup = 4000, iter = 8000, chains = 4, 
  family = "gaussian", 
  cores = parallel::detectCores(), 
  file = here("models", "m_lextale_rq2")
)

# ------------------------------------------------------------------------------
# eq rq2
###

### Priors ###
eq_priors <- c(
  prior(normal(0, 5), class = "b"),
  prior(student_t(3, 0, 10), class = "sigma")
)

### Models ###
m_eq_rq2 <- brm(
  formula = eq_score ~ 0 + Intercept + group,
  data = rq2 %>% select(participant_id, eq_score, group) %>% 
    distinct(participant_id, .keep_all = TRUE),
  prior = eq_priors,
  warmup = 4000, iter = 8000, chains = 4, 
  family = "gaussian", 
  cores = parallel::detectCores(), 
  file = here("models", "m_eq_rq2")
)
