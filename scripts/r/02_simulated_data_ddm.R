#------------------------------------------------------------------------------
# Load libs, data, functions

source(here::here("scripts", "r", "00_libs.R"))

#------------------------------------------------------------------------------
######################
### Simulated data ###
######################

set.seed(123)  # For reproducibility

# Number of participants and trials
n_participants <- 200
n_trials <- 88

data <- expand.grid(
  participant_id = 1:n_participants,
  trial = 1:n_trials
) %>%
  mutate(
    target_trial = ifelse(trial <= 22, 1, 0),  # 22 target trials per participant
    eq = rnorm(n(), mean = 44.5, sd = 5),  # Empathy Quotient (standardized later)
    lextale = rnorm(n(), mean = 20, sd = 15)  # LEXTALE scores (standardized later)
  ) %>%
  mutate(
    eq_z = as.numeric(scale(eq)),
    lextale_z = as.numeric(scale(lextale))
  ) %>%
  rowwise() %>%
  mutate(
    # Define expected accuracy patterns
    is_correct = case_when(
      target_trial == 1 & lextale_z < -0.5 ~ rbinom(1, 1, 0.50),  # Low LEXTALE → lowest accuracy
      target_trial == 1 & lextale_z >= -0.5 & eq_z < 0 ~ rbinom(1, 1, 0.65),  # High LEXTALE, low EQ
      target_trial == 1 & lextale_z >= -0.5 & eq_z >= 0 ~ rbinom(1, 1, 0.80),  # High LEXTALE, high EQ (best)
      target_trial == 0 & lextale_z < -0.5 & eq_z < 0 ~ rbinom(1, 1, 0.70),  # Low LEXTALE, low EQ (worst for distractors)
      target_trial == 0 & lextale_z < -0.5 & eq_z >= 0 ~ rbinom(1, 1, 0.85),  # Low LEXTALE, high EQ (better than peers)
      target_trial == 0 & lextale_z >= -0.5 ~ rbinom(1, 1, 0.90)  # High LEXTALE → similar performance
    ),
    # RT follows shifted lognormal distribution, transformed to real RT scale
    rt = case_when(
      eq_z >= 0 ~ rlnorm(1, meanlog = log(700), sdlog = 0.2),  # High EQ → longer RT (centered around 700ms)
      eq_z < 0  ~ rlnorm(1, meanlog = log(500), sdlog = 0.2)   # Low EQ → shorter RT (centered around 500ms)
    )
  ) %>%
  ungroup()

# Convert to factors where necessary
sim_data <- data %>%
  mutate(
    participant_id = factor(participant_id),
    trial = factor(trial),
    target_trial = factor(target_trial),
    is_correct = as.numeric(is_correct),
    rt_sec = rt * .001
  )


###########
### DDM ###
###########

# model formula
sim_model_f <- bf(
  rt_sec | dec(is_correct) ~ 0 + target_trial,  
  bs ~ 0 + target_trial, 
  ndt ~ 0 + target_trial, 
  bias ~ 0 + target_trial
)

# Take a look at priors
get_prior(sim_model_f, 
          family = wiener(
            link_bs = "identity", 
            link_ndt = "identity", 
            link_bias = "identity"), 
          data = sim_data
)

# Set weakly informative priors
sim_priors_ddm <- c(
  prior("normal(0, 1)", class = "b"),
  prior("normal(0, 5)", class = "b", dpar = "bs"),
  prior("normal(0.2, 1)", class = "b", dpar = "ndt"),
  prior("normal(0.5, 1)", class = "b", dpar = "bias")
)


# Print stan code to check specification
make_stancode(
  sim_model_f, 
  family = wiener(
    link_bs = "identity", 
    link_ndt = "identity", 
    link_bias = "identity"),
  data = sim_data, 
  prior = sim_priors_ddm)

# Generate temp data for possible init values
sim_tmp_dat <- make_standata(
  formula = sim_model_f, 
  family = wiener(
    link_bs = "identity", 
    link_ndt = "identity", 
    link_bias = "identity"), 
  data = sim_data, 
  prior = sim_priors_ddm)

str(sim_tmp_dat, 1, give.attr = FALSE)

# Create init function to be used when fitting model
initfun_sim <- function() {
  list(
    b = rnorm(sim_tmp_dat$K),
    b_bs = runif(sim_tmp_dat$K_bs, 1, 2), #1, 2
    b_ndt = runif(sim_tmp_dat$K_ndt, 0.1, 0.15), 
    b_bias = rnorm(sim_tmp_dat$K_bias, 0.5, 0.1) 
  )
}

sim_test <- brm(
  formula = sim_model_f,
  data = filter(sim_data, participant_id == "1"),
  prior = sim_priors_ddm,
  sample_prior = TRUE,
  init = initfun_sim,
  family = wiener(
    link_bs = "identity", 
    link_ndt = "identity",
    link_bias = "identity"),
  backend = "cmdstanr", 
  chains = 4, warmup = 10000, iter = 15000, thin = 10, 
  cores = 4, 
  control = list(adapt_delta = 0.99), 
  file = here("models", "ddm", "sim_test")
  )

for (participant_id in unique(sim_data$participant_id)) {
  print(participant_id)
  
  participant_m <- brm(
    formula = sim_model_f,
    data = filter(sim_data, participant_id == participant_id), 
    prior = sim_priors_ddm,
    sample_prior = TRUE,
    inits = initfun_sim,
    family = wiener(
      link_bs = "identity", 
      link_ndt = "identity",
      link_bias = "identity"),
    backend = "cmdstanr", 
    chains = 4, warmup = 10000, iter = 15000, thin = 10, cores = 4, 
    control = list(adapt_delta = 0.99999999), 
    file = here("models", "ddm", participant_id), 
  )
  
  participant_m <- add_criterion(
    participant_m, 
    criterion = c("loo", "bayes_R2"), 
    file = here("models", "ddm", subj))
}



