#########
## RQ1
#########

#
# Accuracy
#

rq1_d <- rq1 %>% 
  summarize(
    mean_rt = as.numeric(mean(rt_adj)), 
    median_rt = median(rt_adj), 
    mean_cor = as.numeric(mean(correct)), 
    sd_cor = as.numeric(sd(correct))) %>% 
  pivot_longer(cols = everything(), names_to = "metric", values_to = "val") %>% 
  split(.$metric)

# Dist. of correct responses
rq1 %>% 
  group_by(participant_id) %>% 
  summarize(mean_cor = mean(correct)) %>% 
  arrange(desc(mean_cor)) %>% 
  ggplot(., aes(mean_cor)) +
  geom_histogram(binwidth = 0.035, fill = "grey40", color = "black")

# % correct by speaker variety
rq1 %>% 
  filter(rt_adj >= -0.1, rt_adj <= 5) %>% 
  group_by(participant_id, speaker_variety) %>% 
  summarize(avg_correct = mean(correct), .groups = "drop") %>% 
  mutate(
    speaker_variety = fct_recode(speaker_variety, `Puerto Rican` = "puertorican"), 
    speaker_variety = str_to_title(speaker_variety, locale = "en")
  ) %>% 
  ggplot(., aes(x = speaker_variety, y = avg_correct)) + 
  geom_hline(yintercept = rq1_d$mean_cor$val, lty = 3) + 
  geom_text(aes(label = label), hjust = 1, nudge_x = 0.5, size = 2.5, family = "Times", 
            data = tibble(speaker_variety = "Puerto Rican", avg_correct = 0.78, 
                          label = paste0("Overall\nAvg. = ", round(rq1_d$mean_cor$val, 2)))) + 
  stat_summary(aes(fill = speaker_variety), fun.data = mean_cl_boot, 
               geom = "pointrange", pch = 21, size = 0.8, show.legend = F) + 
  scale_fill_viridis_d(option = "viridis") + 
  coord_cartesian(ylim = c(0.5, 1)) + 
  labs(y = "Proportion correct", x = NULL, 
       title = "Proportion correct as a function of speaker variety", 
       caption = "Mean ± 95% CI")
#
# Error analysis
#

# Error descriptives
rq1 %>% 
  mutate(is_correct = correct) %>%
  summarize(correct = sum(is_correct), 
            incorrect = sum(is_correct == 0), 
            avg = mean(is_correct), 
            check = correct / (correct + incorrect))

# N errors by speaker variety
rq1 %>% 
  filter(correct == 0) %>% 
  group_by(speaker_variety) %>% 
  summarize(
    errors = n()) %>% 
  mutate(speaker_variety = fct_reorder(speaker_variety, errors, max)) %>% 
  ggplot(., aes(x = speaker_variety, y = errors)) + 
  geom_bar(stat = "identity", fill = "grey40", color = "black")

# Error rate by listener variety and speaker variety
rq1 %>% 
  group_by(participant_id, speaker_variety) %>% 
  summarize(
    total_trials = max(seq_along(speaker_variety)),  
    total_correct = sum(correct), 
    errors = total_trials - total_correct, .groups = "drop") %>% 
  mutate(speaker_variety = fct_reorder(speaker_variety, errors, max)) %>% 
  ggplot(., aes(x = speaker_variety, y = errors)) + 
  stat_summary(fun.data = mean_se, geom = "pointrange") + 
  scale_color_viridis_d(name = "Speaker variety") + 
  labs(x = "Speaker variety", y = "Error rate")

#
# Empathy
#

rq1 %>% 
  summarize(mean_eq = mean(eq_score), sd_eq = sd(eq_score), 
            min_eq = min(eq_score), max_eq = max(eq_score))

rq1 %>% 
  select(participant_id, eq_score) %>% 
  distinct() %>% 
  ggplot(., aes(x = eq_score)) + 
  geom_histogram(fill = "grey", color = "black", 
                 binwidth = 3.54)

rq1 %>% 
  filter(rt_adj >= -0.1, rt_adj <= 5) %>% 
  ggplot(., aes(x = eq_score, y = correct)) + 
  geom_hline(yintercept = 0.5, size = 3, color = "white") + 
  geom_jitter(width = 0.3, height = 0.01, alpha = 0.05, pch = 21) + 
  geom_smooth(method = "glm", method.args = list(family = "binomial")) +
  scale_y_continuous(breaks = seq(0, 1, 0.1)) + 
  coord_cartesian(ylim = c(0.48, 1.0))

rq1 %>% 
  filter(rt_adj >= -0.1, rt_adj <= 5) %>% 
  ggplot(., aes(x = eq_score, y = correct, color = sentence_type)) + 
  geom_hline(yintercept = 0.5, size = 3, color = "white") + 
  geom_jitter(width = 0.3, height = 0.01, alpha = 0.05, pch = 21) + 
  geom_smooth(method = "glm", method.args = list(family = "binomial")) +
  scale_y_continuous(breaks = seq(0, 1, 0.1)) + 
  coord_cartesian(ylim = c(0.48, 1.0))


rq1 %>% 
  filter(rt_adj >= -0.1, rt_adj <= 5) %>% 
  ggplot(., aes(x = eq_score, y = correct, color = speaker_variety)) + 
  facet_grid(. ~ speaker_variety) + 
  geom_hline(yintercept = 0.5, size = 3, color = "white") + 
  geom_jitter(width = 0.3, height = 0.01, alpha = 0.05, pch = 21) + 
  geom_smooth(method = "glm", method.args = list(family = "binomial")) + 
  coord_cartesian(ylim = c(0.48, 1.0))

rq1 %>% 
  filter(rt_adj >= -0.1, rt_adj <= 5) %>% 
  ggplot(., aes(x = eq_score, y = correct, color = sentence_type)) + 
  facet_grid(. ~ speaker_variety) + 
  geom_point() + 
  geom_smooth(method = "glm", se = F, method.args = list(family = "binomial"))

#
# Lextale
#

rq1 %>% 
  distinct(participant_id, lextale_avg, lextale_tra) %>% 
  summarize(meanlextale = mean(lextale_avg), sdlextale = sd(lextale_avg), 
            minlextale = min(lextale_avg), maxlextale = max(lextale_avg))

rq1 %>% 
  distinct(participant_id, lextale_avg, lextale_tra) %>% 
  ggplot(., aes(x = lextale_avg)) + 
  geom_histogram(fill = "grey", color = "black", binwidth = 4.5)

rq1 %>% 
  distinct(participant_id, lextale_avg, lextale_tra) %>% 
  ggplot(., aes(x = lextale_tra)) + 
  geom_histogram(fill = "grey", color = "black", binwidth = 5)

rq1 %>% 
  distinct(participant_id, lextale_avg, lextale_tra) %>% 
  pivot_longer(cols = -participant_id, names_to = "lextale", values_to = "score") %>% 
  group_by(lextale) %>% 
  mutate(score_std = scale(score)) %>% 
  ggplot(., aes(x = lextale, y = score)) + 
  geom_boxplot()

rq1 %>% 
  ggplot(., aes(x = lextale_avg, y = correct)) + 
  geom_hline(yintercept = 0.5, size = 3, color = "white") + 
  geom_jitter(alpha = 0.05, height = 0.01, width = 0.5, pch = 21) + 
  geom_smooth(method = "glm", method.args = list(family = "binomial")) + 
  coord_cartesian(ylim = c(0.48, 1))

rq1 %>% 
  filter(rt_adj >= -0.1, rt_adj <= 5) %>% 
  group_by(participant_id, lextale_avg) %>% 
  summarize(rt_adj = mean(rt_adj)) %>% 
  ggplot(., aes(x = lextale_avg, y = rt_adj)) + 
  geom_point(alpha = 0.5, pch = 21) + 
  geom_smooth(method = "lm") 

rq1 %>% 
  ggplot(., aes(x = lextale_avg, y = correct)) + 
  facet_grid(. ~ speaker_variety) + 
  geom_jitter(alpha = 0.05, width = 0.4, height = 0.01, pch = 21) + 
  geom_smooth(method = "glm", method.args = list(family = "binomial")) 

rq1 %>% 
  filter(rt_adj >= -0.1, rt_adj <= 5) %>% 
  group_by(participant_id, speaker_variety, lextale_avg) %>% 
  summarize(rt_adj = mean(rt_adj)) %>% 
  ggplot(., aes(x = lextale_avg, y = rt_adj)) + 
  facet_grid(. ~ speaker_variety) + 
  geom_point(alpha = 0.5, pch = 21) + 
  geom_smooth(method = "lm") 

rq1 %>% 
  ggplot(., aes(x = lextale_avg, y = correct, color = sentence_type)) + 
  geom_jitter(alpha = 0.1, height = 0.01, width = 0.5, pch = 21) + 
  geom_smooth(method = "glm", method.args = list(family = "binomial"))

rq1 %>% 
  filter(rt_adj >= -0.1, rt_adj <= 5) %>% 
  group_by(participant_id, sentence_type, lextale_avg) %>% 
  summarize(rt_adj = mean(rt_adj)) %>% 
  ggplot(., aes(x = lextale_avg, y = rt_adj, color = sentence_type)) + 
  geom_point(alpha = 0.5, pch = 21) + 
  geom_smooth(method = "lm") 

rq1 %>% 
  ggplot(., aes(x = lextale_avg, y = correct, color = sentence_type)) + 
  facet_grid(. ~ speaker_variety) + 
  geom_point() + 
  geom_smooth(method = "glm", se = F, method.args = list(family = "binomial"))

rq1 %>% 
  filter(rt_adj >= -0.1, rt_adj <= 5) %>% 
  group_by(participant_id, sentence_type, speaker_variety, lextale_avg) %>% 
  summarize(rt_adj = mean(rt_adj)) %>% 
  ggplot(., aes(x = lextale_avg, y = rt_adj, color = sentence_type)) + 
  facet_grid(. ~ speaker_variety) + 
  geom_point(alpha = 0.5, pch = 21) + 
  geom_smooth(method = "lm") 

#
# Lextale and empathy
#

rq1 %>% 
  ggplot(., aes(x = eq_score, y = lextale_tra)) + 
  geom_point() + 
  geom_smooth(method = lm)

rq1 %>% 
  ggplot(., aes(x = eq_score, y = lextale_avg)) + 
  geom_point() + 
  geom_smooth(method = lm)

#########
## RQ2
#########

#
# Accuracy
#

rq1_d <- rq1 %>% 
  summarize(
    mean_rt = as.numeric(mean(rt_adj)), 
    median_rt = median(rt_adj), 
    mean_cor = as.numeric(mean(correct)), 
    sd_cor = as.numeric(sd(correct))) %>% 
  pivot_longer(cols = everything(), names_to = "metric", values_to = "val") %>% 
  split(.$metric)

# Dist. of correct responses
rq1 %>% 
  group_by(participant_id) %>% 
  summarize(mean_cor = mean(correct)) %>% 
  arrange(desc(mean_cor)) %>% 
  ggplot(., aes(mean_cor)) +
  geom_histogram(binwidth = 0.035, fill = "grey40", color = "black")

# % correct by speaker variety
rq1 %>% 
  filter(rt_adj >= -0.1, rt_adj <= 5) %>% 
  group_by(participant_id, speaker_variety) %>% 
  summarize(avg_correct = mean(correct), .groups = "drop") %>% 
  mutate(
    speaker_variety = fct_recode(speaker_variety, `Puerto Rican` = "puertorican"), 
    speaker_variety = str_to_title(speaker_variety, locale = "en")
  ) %>% 
  ggplot(., aes(x = speaker_variety, y = avg_correct)) + 
  geom_hline(yintercept = rq1_d$mean_cor$val, lty = 3) + 
  geom_text(aes(label = label), hjust = 1, nudge_x = 0.5, size = 2.5, family = "Times", 
            data = tibble(speaker_variety = "Puerto Rican", avg_correct = 0.78, 
                          label = paste0("Overall\nAvg. = ", round(rq1_d$mean_cor$val, 2)))) + 
  stat_summary(aes(fill = speaker_variety), fun.data = mean_cl_boot, 
               geom = "pointrange", pch = 21, size = 0.8, show.legend = F) + 
  scale_fill_viridis_d(option = "viridis") + 
  coord_cartesian(ylim = c(0.5, 1)) + 
  labs(y = "Proportion correct", x = NULL, 
       title = "Proportion correct as a function of speaker variety", 
       caption = "Mean ± 95% CI")
#
# Error analysis
#

# Error descriptives
rq1 %>% 
  mutate(is_correct = correct) %>%
  summarize(correct = sum(is_correct), 
            incorrect = sum(is_correct == 0), 
            avg = mean(is_correct), 
            check = correct / (correct + incorrect))

# N errors by speaker variety
rq1 %>% 
  filter(correct == 0) %>% 
  group_by(speaker_variety) %>% 
  summarize(
    errors = n()) %>% 
  mutate(speaker_variety = fct_reorder(speaker_variety, errors, max)) %>% 
  ggplot(., aes(x = speaker_variety, y = errors)) + 
  geom_bar(stat = "identity", fill = "grey40", color = "black")

# Error rate by listener variety and speaker variety
rq1 %>% 
  group_by(participant_id, speaker_variety) %>% 
  summarize(
    total_trials = max(seq_along(speaker_variety)),  
    total_correct = sum(correct), 
    errors = total_trials - total_correct, .groups = "drop") %>% 
  mutate(speaker_variety = fct_reorder(speaker_variety, errors, max)) %>% 
  ggplot(., aes(x = speaker_variety, y = errors)) + 
  stat_summary(fun.data = mean_se, geom = "pointrange") + 
  scale_color_viridis_d(name = "Speaker variety") + 
  labs(x = "Speaker variety", y = "Error rate")

#
# Empathy
#

rq1 %>% 
  summarize(mean_eq = mean(eq_score), sd_eq = sd(eq_score), 
            min_eq = min(eq_score), max_eq = max(eq_score))

rq1 %>% 
  select(participant_id, eq_score) %>% 
  distinct() %>% 
  ggplot(., aes(x = eq_score)) + 
  geom_histogram(fill = "grey", color = "black", 
                 binwidth = 3.54)

rq1 %>% 
  filter(rt_adj >= -0.1, rt_adj <= 5) %>% 
  ggplot(., aes(x = eq_score, y = correct)) + 
  geom_hline(yintercept = 0.5, size = 3, color = "white") + 
  geom_jitter(width = 0.3, height = 0.01, alpha = 0.05, pch = 21) + 
  geom_smooth(method = "glm", method.args = list(family = "binomial")) +
  scale_y_continuous(breaks = seq(0, 1, 0.1)) + 
  coord_cartesian(ylim = c(0.48, 1.0))

rq1 %>% 
  filter(rt_adj >= -0.1, rt_adj <= 5) %>% 
  ggplot(., aes(x = eq_score, y = correct, color = sentence_type)) + 
  geom_hline(yintercept = 0.5, size = 3, color = "white") + 
  geom_jitter(width = 0.3, height = 0.01, alpha = 0.05, pch = 21) + 
  geom_smooth(method = "glm", method.args = list(family = "binomial")) +
  scale_y_continuous(breaks = seq(0, 1, 0.1)) + 
  coord_cartesian(ylim = c(0.48, 1.0))


rq1 %>% 
  filter(rt_adj >= -0.1, rt_adj <= 5) %>% 
  ggplot(., aes(x = eq_score, y = correct, color = speaker_variety)) + 
  facet_grid(. ~ speaker_variety) + 
  geom_hline(yintercept = 0.5, size = 3, color = "white") + 
  geom_jitter(width = 0.3, height = 0.01, alpha = 0.05, pch = 21) + 
  geom_smooth(method = "glm", method.args = list(family = "binomial")) + 
  coord_cartesian(ylim = c(0.48, 1.0))

rq1 %>% 
  filter(rt_adj >= -0.1, rt_adj <= 5) %>% 
  ggplot(., aes(x = eq_score, y = correct, color = sentence_type)) + 
  facet_grid(. ~ speaker_variety) + 
  geom_point() + 
  geom_smooth(method = "glm", se = F, method.args = list(family = "binomial"))

#
# Lextale
#

rq1 %>% 
  distinct(participant_id, lextale_avg, lextale_tra) %>% 
  summarize(meanlextale = mean(lextale_avg), sdlextale = sd(lextale_avg), 
            minlextale = min(lextale_avg), maxlextale = max(lextale_avg))

rq1 %>% 
  distinct(participant_id, lextale_avg, lextale_tra) %>% 
  ggplot(., aes(x = lextale_avg)) + 
  geom_histogram(fill = "grey", color = "black", binwidth = 4.5)

rq1 %>% 
  distinct(participant_id, lextale_avg, lextale_tra) %>% 
  ggplot(., aes(x = lextale_tra)) + 
  geom_histogram(fill = "grey", color = "black", binwidth = 5)

rq1 %>% 
  distinct(participant_id, lextale_avg, lextale_tra) %>% 
  pivot_longer(cols = -participant_id, names_to = "lextale", values_to = "score") %>% 
  group_by(lextale) %>% 
  mutate(score_std = scale(score)) %>% 
  ggplot(., aes(x = lextale, y = score)) + 
  geom_boxplot()

rq1 %>% 
  ggplot(., aes(x = lextale_avg, y = correct)) + 
  geom_hline(yintercept = 0.5, size = 3, color = "white") + 
  geom_jitter(alpha = 0.05, height = 0.01, width = 0.5, pch = 21) + 
  geom_smooth(method = "glm", method.args = list(family = "binomial")) + 
  coord_cartesian(ylim = c(0.48, 1))

rq1 %>% 
  filter(rt_adj >= -0.1, rt_adj <= 5) %>% 
  group_by(participant_id, lextale_avg) %>% 
  summarize(rt_adj = mean(rt_adj)) %>% 
  ggplot(., aes(x = lextale_avg, y = rt_adj)) + 
  geom_point(alpha = 0.5, pch = 21) + 
  geom_smooth(method = "lm") 

rq1 %>% 
  ggplot(., aes(x = lextale_avg, y = correct)) + 
  facet_grid(. ~ speaker_variety) + 
  geom_jitter(alpha = 0.05, width = 0.4, height = 0.01, pch = 21) + 
  geom_smooth(method = "glm", method.args = list(family = "binomial")) 

rq1 %>% 
  filter(rt_adj >= -0.1, rt_adj <= 5) %>% 
  group_by(participant_id, speaker_variety, lextale_avg) %>% 
  summarize(rt_adj = mean(rt_adj)) %>% 
  ggplot(., aes(x = lextale_avg, y = rt_adj)) + 
  facet_grid(. ~ speaker_variety) + 
  geom_point(alpha = 0.5, pch = 21) + 
  geom_smooth(method = "lm") 

rq1 %>% 
  ggplot(., aes(x = lextale_avg, y = correct, color = sentence_type)) + 
  geom_jitter(alpha = 0.1, height = 0.01, width = 0.5, pch = 21) + 
  geom_smooth(method = "glm", method.args = list(family = "binomial"))

rq1 %>% 
  filter(rt_adj >= -0.1, rt_adj <= 5) %>% 
  group_by(participant_id, sentence_type, lextale_avg) %>% 
  summarize(rt_adj = mean(rt_adj)) %>% 
  ggplot(., aes(x = lextale_avg, y = rt_adj, color = sentence_type)) + 
  geom_point(alpha = 0.5, pch = 21) + 
  geom_smooth(method = "lm") 

rq2 %>% 
  ggplot(., aes(x = lextale_avg, y = correct, color = group)) + 
  facet_grid(. ~ speaker_variety) + 
  geom_point() + 
  geom_smooth(method = "glm", se = F, method.args = list(family = "binomial"))

rq1 %>% 
  filter(rt_adj >= -0.1, rt_adj <= 5) %>% 
  group_by(participant_id, sentence_type, speaker_variety, lextale_avg) %>% 
  summarize(rt_adj = mean(rt_adj)) %>% 
  ggplot(., aes(x = lextale_avg, y = rt_adj, color = sentence_type)) + 
  facet_grid(. ~ speaker_variety) + 
  geom_point(alpha = 0.5, pch = 21) + 
  geom_smooth(method = "lm") 

#
# Lextale and empathy
#

rq1 %>% 
  ggplot(., aes(x = eq_score, y = lextale_tra)) + 
  geom_point() + 
  geom_smooth(method = lm)

rq2 %>% 
  ggplot(., aes(x = eq_score, y = lextale_avg)) + 
  geom_point() + 
  geom_smooth(method = lm)
