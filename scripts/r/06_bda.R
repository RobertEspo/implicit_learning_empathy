# Bayesian regression models --------------------------------------------------
#
# -----------------------------------------------------------------------------

# Source libraries, helpers, load data ----------------------------------------

source(here::here("scripts", "r", "02_load_data.R"))

# ------------------------------------------------------------------------------

# Set weakly informative priors
response_priors <- c(
  prior(normal(0, 0.3), class = b),
  prior(cauchy(0, 0.1), class = sd), 
  prior(lkj(8), class = cor)
)

# ------------------------------------------------------------------------------

m_rq1 <- brm(
  formula = correct ~ 0 + Intercept + lextale_std * eq_std * sentence_type * caribbean + 
    (1 + sentence_type | participant_id) + 
    (1 + lextale_std * eq_std | speaker_variety) +
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

m_rq2 <- brm(
  formula = correct ~ 0 + Intercept + lextale_std * eq_std * group + 
    (1 | participant_id) +
    (1 + lextale_std * eq_std | speaker_variety) +
    (1 | item), 
  data = rq2 %>% filter(rt_adj < 10),
  prior = response_priors, 
  warmup = 2000, iter = 4000, chains = 4, 
  family = "bernoulli", 
  cores = 4, 
  control = list(adapt_delta = 0.99, max_treedepth = 20), 
  file = here("models", "m_rq2")
)

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

# ------------------------------------------------------------------------------
# reaction time
###

### priors ###
rt_priors_shiftedln <- c(
  set_prior('normal(6, 1)', class = 'b', coef = 'Intercept'),
  set_prior('normal(1, 0.5)', class = 'sigma'),
  set_prior('normal(0, 0.3)', class = 'b'),
  set_prior('normal(0.5, 0.2)', class = 'sd')  
)

### model ###

b_rt_nat_04 <- brm(
  formula = rt ~ 0 + Intercept + lextale_std * eq_std * sentence_type * caribbean + 
    (1 | player_id) +
    (1 | item),
  data = rq1_rt, 
  warmup = 4000, iter = 8000, chains = 4,
  family = shifted_lognormal(link = "identity"),
  prior = rt_priors_shiftedln,
  cores = parallel::detectCores(), 
  backend = "cmdstanr", 
  control = list(adapt_delta = 0.99, max_treedepth = 20),
  file = here("models", "b_rt_nat_04")
)
