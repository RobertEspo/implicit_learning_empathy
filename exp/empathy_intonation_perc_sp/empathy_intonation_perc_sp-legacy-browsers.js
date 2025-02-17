/*********************************** 
 * Empathy_Intonation_Perc_Sp *
 ***********************************/


// store info about the experiment session:
let expName = 'empathy_intonation_perc_sp';  // from the Builder filename that created this script
let expInfo = {
    'id': '',
    'La variedad del español que mejor conozcas': 'ej. cubano',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const instructions_exposure_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instructions_exposure_loopLoopBegin(instructions_exposure_loopLoopScheduler));
flowScheduler.add(instructions_exposure_loopLoopScheduler);
flowScheduler.add(instructions_exposure_loopLoopEnd);


const exposure_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(exposure_loopLoopBegin(exposure_loopLoopScheduler));
flowScheduler.add(exposure_loopLoopScheduler);
flowScheduler.add(exposure_loopLoopEnd);


const instructions_2afc_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instructions_2afc_loopLoopBegin(instructions_2afc_loopLoopScheduler));
flowScheduler.add(instructions_2afc_loopLoopScheduler);
flowScheduler.add(instructions_2afc_loopLoopEnd);


const trials_2afc_practice_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2afc_practice_loopLoopBegin(trials_2afc_practice_loopLoopScheduler));
flowScheduler.add(trials_2afc_practice_loopLoopScheduler);
flowScheduler.add(trials_2afc_practice_loopLoopEnd);


flowScheduler.add(check_2afcRoutineBegin());
flowScheduler.add(check_2afcRoutineEachFrame());
flowScheduler.add(check_2afcRoutineEnd());
const trials_2afc_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2afc_loopLoopBegin(trials_2afc_loopLoopScheduler));
flowScheduler.add(trials_2afc_loopLoopScheduler);
flowScheduler.add(trials_2afc_loopLoopEnd);


flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'instructions/exposure_instructions_sp_text.xlsx', 'path': 'instructions/exposure_instructions_sp_text.xlsx'},
    {'name': 'trials/exposure_trials.xlsx', 'path': 'trials/exposure_trials.xlsx'},
    {'name': './stim/exposure_wavs/dr_stimuli_convo.wav', 'path': './stim/exposure_wavs/dr_stimuli_convo.wav'},
    {'name': './stim/exposure_wavs/ga_stimuli_convo.wav', 'path': './stim/exposure_wavs/ga_stimuli_convo.wav'},
    {'name': './stim/exposure_wavs/pr_stimuli_convo.wav', 'path': './stim/exposure_wavs/pr_stimuli_convo.wav'},
    {'name': 'instructions/2afc_instructions_sp_text.xlsx', 'path': 'instructions/2afc_instructions_sp_text.xlsx'},
    {'name': 'trials/twoafc_practice_trials.xlsx', 'path': 'trials/twoafc_practice_trials.xlsx'},
    {'name': './stim/wavs/castilian_question_filler_Mi-esposo-conoce-al-chico.wav', 'path': './stim/wavs/castilian_question_filler_Mi-esposo-conoce-al-chico.wav'},
    {'name': './stim/wavs/argentine_question_filler_Mi-vecino-habla-mucho.wav', 'path': './stim/wavs/argentine_question_filler_Mi-vecino-habla-mucho.wav'},
    {'name': './stim/wavs/chilean_question_filler_Mi-padre-cantaba-bien.wav', 'path': './stim/wavs/chilean_question_filler_Mi-padre-cantaba-bien.wav'},
    {'name': './stim/wavs/mexican_question_filler_Felipe-no-tiene-contrasena.wav', 'path': './stim/wavs/mexican_question_filler_Felipe-no-tiene-contrasena.wav'},
    {'name': './stim/wavs/cuban_statement_filler_Cocinabas-por-la-noche.wav', 'path': './stim/wavs/cuban_statement_filler_Cocinabas-por-la-noche.wav'},
    {'name': './stim/wavs/andalusian_statement_filler_Alberto-nunca-se-afeita.wav', 'path': './stim/wavs/andalusian_statement_filler_Alberto-nunca-se-afeita.wav'},
    {'name': './stim/wavs/peruvian_statement_filler_El-nino-habla-con-su-madre.wav', 'path': './stim/wavs/peruvian_statement_filler_El-nino-habla-con-su-madre.wav'},
    {'name': './stim/wavs/puertorican_statement_filler_La-nina-pinta-con-su-amiga.wav', 'path': './stim/wavs/puertorican_statement_filler_La-nina-pinta-con-su-amiga.wav'},
    {'name': 'trials/twoafc_trials.xlsx', 'path': 'trials/twoafc_trials.xlsx'},
    {'name': './stim/wavs/andalusian_match_declarative-broad-focus_Ana-lleva-el-abrigo.wav', 'path': './stim/wavs/andalusian_match_declarative-broad-focus_Ana-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/argentine_match_declarative-broad-focus_Ana-lleva-el-abrigo.wav', 'path': './stim/wavs/argentine_match_declarative-broad-focus_Ana-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/castilian_match_declarative-broad-focus_Ana-lleva-el-abrigo.wav', 'path': './stim/wavs/castilian_match_declarative-broad-focus_Ana-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/chilean_match_declarative-broad-focus_Ana-lleva-el-abrigo.wav', 'path': './stim/wavs/chilean_match_declarative-broad-focus_Ana-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/cuban_match_declarative-broad-focus_Ana-lleva-el-abrigo.wav', 'path': './stim/wavs/cuban_match_declarative-broad-focus_Ana-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/mexican_match_declarative-broad-focus_Ana-lleva-el-abrigo.wav', 'path': './stim/wavs/mexican_match_declarative-broad-focus_Ana-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/peruvian_match_declarative-broad-focus_Ana-lleva-el-abrigo.wav', 'path': './stim/wavs/peruvian_match_declarative-broad-focus_Ana-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/puertorican_match_declarative-broad-focus_Ana-lleva-el-abrigo.wav', 'path': './stim/wavs/puertorican_match_declarative-broad-focus_Ana-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/andalusian_match_declarative-broad-focus_Daniel-iba-a-Bolivia.wav', 'path': './stim/wavs/andalusian_match_declarative-broad-focus_Daniel-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/argentine_match_declarative-broad-focus_Daniel-iba-a-Bolivia.wav', 'path': './stim/wavs/argentine_match_declarative-broad-focus_Daniel-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/castilian_match_declarative-broad-focus_Daniel-iba-a-Bolivia.wav', 'path': './stim/wavs/castilian_match_declarative-broad-focus_Daniel-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/chilean_match_declarative-broad-focus_Daniel-iba-a-Bolivia.wav', 'path': './stim/wavs/chilean_match_declarative-broad-focus_Daniel-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/cuban_match_declarative-broad-focus_Daniel-iba-a-Bolivia.wav', 'path': './stim/wavs/cuban_match_declarative-broad-focus_Daniel-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/mexican_match_declarative-broad-focus_Daniel-iba-a-Bolivia.wav', 'path': './stim/wavs/mexican_match_declarative-broad-focus_Daniel-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/peruvian_match_declarative-broad-focus_Daniel-iba-a-Bolivia.wav', 'path': './stim/wavs/peruvian_match_declarative-broad-focus_Daniel-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/puertorican_match_declarative-broad-focus_Daniel-iba-a-Bolivia.wav', 'path': './stim/wavs/puertorican_match_declarative-broad-focus_Daniel-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/andalusian_match_declarative-broad-focus_David-leia-el-libro.wav', 'path': './stim/wavs/andalusian_match_declarative-broad-focus_David-leia-el-libro.wav'},
    {'name': './stim/wavs/argentine_match_declarative-broad-focus_David-leia-el-libro.wav', 'path': './stim/wavs/argentine_match_declarative-broad-focus_David-leia-el-libro.wav'},
    {'name': './stim/wavs/castilian_match_declarative-broad-focus_David-leia-el-libro.wav', 'path': './stim/wavs/castilian_match_declarative-broad-focus_David-leia-el-libro.wav'},
    {'name': './stim/wavs/chilean_match_declarative-broad-focus_David-leia-el-libro.wav', 'path': './stim/wavs/chilean_match_declarative-broad-focus_David-leia-el-libro.wav'},
    {'name': './stim/wavs/cuban_match_declarative-broad-focus_David-leia-el-libro.wav', 'path': './stim/wavs/cuban_match_declarative-broad-focus_David-leia-el-libro.wav'},
    {'name': './stim/wavs/mexican_match_declarative-broad-focus_David-leia-el-libro.wav', 'path': './stim/wavs/mexican_match_declarative-broad-focus_David-leia-el-libro.wav'},
    {'name': './stim/wavs/peruvian_match_declarative-broad-focus_David-leia-el-libro.wav', 'path': './stim/wavs/peruvian_match_declarative-broad-focus_David-leia-el-libro.wav'},
    {'name': './stim/wavs/puertorican_match_declarative-broad-focus_David-leia-el-libro.wav', 'path': './stim/wavs/puertorican_match_declarative-broad-focus_David-leia-el-libro.wav'},
    {'name': './stim/wavs/andalusian_match_declarative-broad-focus_Emilio-ama-la-marcha.wav', 'path': './stim/wavs/andalusian_match_declarative-broad-focus_Emilio-ama-la-marcha.wav'},
    {'name': './stim/wavs/argentine_match_declarative-broad-focus_Emilio-ama-la-marcha.wav', 'path': './stim/wavs/argentine_match_declarative-broad-focus_Emilio-ama-la-marcha.wav'},
    {'name': './stim/wavs/castilian_match_declarative-broad-focus_Emilio-ama-la-marcha.wav', 'path': './stim/wavs/castilian_match_declarative-broad-focus_Emilio-ama-la-marcha.wav'},
    {'name': './stim/wavs/chilean_match_declarative-broad-focus_Emilio-ama-la-marcha.wav', 'path': './stim/wavs/chilean_match_declarative-broad-focus_Emilio-ama-la-marcha.wav'},
    {'name': './stim/wavs/cuban_match_declarative-broad-focus_Emilio-ama-la-marcha.wav', 'path': './stim/wavs/cuban_match_declarative-broad-focus_Emilio-ama-la-marcha.wav'},
    {'name': './stim/wavs/mexican_match_declarative-broad-focus_Emilio-ama-la-marcha.wav', 'path': './stim/wavs/mexican_match_declarative-broad-focus_Emilio-ama-la-marcha.wav'},
    {'name': './stim/wavs/peruvian_match_declarative-broad-focus_Emilio-ama-la-marcha.wav', 'path': './stim/wavs/peruvian_match_declarative-broad-focus_Emilio-ama-la-marcha.wav'},
    {'name': './stim/wavs/puertorican_match_declarative-broad-focus_Emilio-ama-la-marcha.wav', 'path': './stim/wavs/puertorican_match_declarative-broad-focus_Emilio-ama-la-marcha.wav'},
    {'name': './stim/wavs/andalusian_match_declarative-broad-focus_Manuela-vende-el-carro.wav', 'path': './stim/wavs/andalusian_match_declarative-broad-focus_Manuela-vende-el-carro.wav'},
    {'name': './stim/wavs/argentine_match_declarative-broad-focus_Manuela-vende-el-carro.wav', 'path': './stim/wavs/argentine_match_declarative-broad-focus_Manuela-vende-el-carro.wav'},
    {'name': './stim/wavs/castilian_match_declarative-broad-focus_Manuela-vende-el-carro.wav', 'path': './stim/wavs/castilian_match_declarative-broad-focus_Manuela-vende-el-carro.wav'},
    {'name': './stim/wavs/chilean_match_declarative-broad-focus_Manuela-vende-el-carro.wav', 'path': './stim/wavs/chilean_match_declarative-broad-focus_Manuela-vende-el-carro.wav'},
    {'name': './stim/wavs/cuban_match_declarative-broad-focus_Manuela-vende-el-carro.wav', 'path': './stim/wavs/cuban_match_declarative-broad-focus_Manuela-vende-el-carro.wav'},
    {'name': './stim/wavs/mexican_match_declarative-broad-focus_Manuela-vende-el-carro.wav', 'path': './stim/wavs/mexican_match_declarative-broad-focus_Manuela-vende-el-carro.wav'},
    {'name': './stim/wavs/peruvian_match_declarative-broad-focus_Manuela-vende-el-carro.wav', 'path': './stim/wavs/peruvian_match_declarative-broad-focus_Manuela-vende-el-carro.wav'},
    {'name': './stim/wavs/puertorican_match_declarative-broad-focus_Manuela-vende-el-carro.wav', 'path': './stim/wavs/puertorican_match_declarative-broad-focus_Manuela-vende-el-carro.wav'},
    {'name': './stim/wavs/andalusian_match_declarative-broad-focus_Maria-bebe-el-vino.wav', 'path': './stim/wavs/andalusian_match_declarative-broad-focus_Maria-bebe-el-vino.wav'},
    {'name': './stim/wavs/argentine_match_declarative-broad-focus_Maria-bebe-el-vino.wav', 'path': './stim/wavs/argentine_match_declarative-broad-focus_Maria-bebe-el-vino.wav'},
    {'name': './stim/wavs/castilian_match_declarative-broad-focus_Maria-bebe-el-vino.wav', 'path': './stim/wavs/castilian_match_declarative-broad-focus_Maria-bebe-el-vino.wav'},
    {'name': './stim/wavs/chilean_match_declarative-broad-focus_Maria-bebe-el-vino.wav', 'path': './stim/wavs/chilean_match_declarative-broad-focus_Maria-bebe-el-vino.wav'},
    {'name': './stim/wavs/cuban_match_declarative-broad-focus_Maria-bebe-el-vino.wav', 'path': './stim/wavs/cuban_match_declarative-broad-focus_Maria-bebe-el-vino.wav'},
    {'name': './stim/wavs/mexican_match_declarative-broad-focus_Maria-bebe-el-vino.wav', 'path': './stim/wavs/mexican_match_declarative-broad-focus_Maria-bebe-el-vino.wav'},
    {'name': './stim/wavs/peruvian_match_declarative-broad-focus_Maria-bebe-el-vino.wav', 'path': './stim/wavs/peruvian_match_declarative-broad-focus_Maria-bebe-el-vino.wav'},
    {'name': './stim/wavs/puertorican_match_declarative-broad-focus_Maria-bebe-el-vino.wav', 'path': './stim/wavs/puertorican_match_declarative-broad-focus_Maria-bebe-el-vino.wav'},
    {'name': './stim/wavs/andalusian_match_declarative-broad-focus_Mariano-habla-del-tiempo.wav', 'path': './stim/wavs/andalusian_match_declarative-broad-focus_Mariano-habla-del-tiempo.wav'},
    {'name': './stim/wavs/argentine_match_declarative-broad-focus_Mariano-habla-del-tiempo.wav', 'path': './stim/wavs/argentine_match_declarative-broad-focus_Mariano-habla-del-tiempo.wav'},
    {'name': './stim/wavs/castilian_match_declarative-broad-focus_Mariano-habla-del-tiempo.wav', 'path': './stim/wavs/castilian_match_declarative-broad-focus_Mariano-habla-del-tiempo.wav'},
    {'name': './stim/wavs/chilean_match_declarative-broad-focus_Mariano-habla-del-tiempo.wav', 'path': './stim/wavs/chilean_match_declarative-broad-focus_Mariano-habla-del-tiempo.wav'},
    {'name': './stim/wavs/cuban_match_declarative-broad-focus_Mariano-habla-del-tiempo.wav', 'path': './stim/wavs/cuban_match_declarative-broad-focus_Mariano-habla-del-tiempo.wav'},
    {'name': './stim/wavs/mexican_match_declarative-broad-focus_Mariano-habla-del-tiempo.wav', 'path': './stim/wavs/mexican_match_declarative-broad-focus_Mariano-habla-del-tiempo.wav'},
    {'name': './stim/wavs/peruvian_match_declarative-broad-focus_Mariano-habla-del-tiempo.wav', 'path': './stim/wavs/peruvian_match_declarative-broad-focus_Mariano-habla-del-tiempo.wav'},
    {'name': './stim/wavs/puertorican_match_declarative-broad-focus_Mariano-habla-del-tiempo.wav', 'path': './stim/wavs/puertorican_match_declarative-broad-focus_Mariano-habla-del-tiempo.wav'},
    {'name': './stim/wavs/andalusian_match_declarative-broad-focus_Marta-abre-el-regalo.wav', 'path': './stim/wavs/andalusian_match_declarative-broad-focus_Marta-abre-el-regalo.wav'},
    {'name': './stim/wavs/argentine_match_declarative-broad-focus_Marta-abre-el-regalo.wav', 'path': './stim/wavs/argentine_match_declarative-broad-focus_Marta-abre-el-regalo.wav'},
    {'name': './stim/wavs/castilian_match_declarative-broad-focus_Marta-abre-el-regalo.wav', 'path': './stim/wavs/castilian_match_declarative-broad-focus_Marta-abre-el-regalo.wav'},
    {'name': './stim/wavs/chilean_match_declarative-broad-focus_Marta-abre-el-regalo.wav', 'path': './stim/wavs/chilean_match_declarative-broad-focus_Marta-abre-el-regalo.wav'},
    {'name': './stim/wavs/cuban_match_declarative-broad-focus_Marta-abre-el-regalo.wav', 'path': './stim/wavs/cuban_match_declarative-broad-focus_Marta-abre-el-regalo.wav'},
    {'name': './stim/wavs/mexican_match_declarative-broad-focus_Marta-abre-el-regalo.wav', 'path': './stim/wavs/mexican_match_declarative-broad-focus_Marta-abre-el-regalo.wav'},
    {'name': './stim/wavs/peruvian_match_declarative-broad-focus_Marta-abre-el-regalo.wav', 'path': './stim/wavs/peruvian_match_declarative-broad-focus_Marta-abre-el-regalo.wav'},
    {'name': './stim/wavs/puertorican_match_declarative-broad-focus_Marta-abre-el-regalo.wav', 'path': './stim/wavs/puertorican_match_declarative-broad-focus_Marta-abre-el-regalo.wav'},
    {'name': './stim/wavs/andalusian_match_declarative-narrow-focus_Ana-lleva-el-abrigo.wav', 'path': './stim/wavs/andalusian_match_declarative-narrow-focus_Ana-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/argentine_match_declarative-narrow-focus_Ana-lleva-el-abrigo.wav', 'path': './stim/wavs/argentine_match_declarative-narrow-focus_Ana-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/castilian_match_declarative-narrow-focus_Ana-lleva-el-abrigo.wav', 'path': './stim/wavs/castilian_match_declarative-narrow-focus_Ana-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/chilean_match_declarative-narrow-focus_Ana-lleva-el-abrigo.wav', 'path': './stim/wavs/chilean_match_declarative-narrow-focus_Ana-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/cuban_match_declarative-narrow-focus_Ana-lleva-el-abrigo.wav', 'path': './stim/wavs/cuban_match_declarative-narrow-focus_Ana-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/mexican_match_declarative-narrow-focus_Ana-lleva-el-abrigo.wav', 'path': './stim/wavs/mexican_match_declarative-narrow-focus_Ana-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/peruvian_match_declarative-narrow-focus_Ana-lleva-el-abrigo.wav', 'path': './stim/wavs/peruvian_match_declarative-narrow-focus_Ana-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/puertorican_match_declarative-narrow-focus_Ana-lleva-el-abrigo.wav', 'path': './stim/wavs/puertorican_match_declarative-narrow-focus_Ana-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/andalusian_match_declarative-narrow-focus_Daniel-iba-a-Bolivia.wav', 'path': './stim/wavs/andalusian_match_declarative-narrow-focus_Daniel-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/argentine_match_declarative-narrow-focus_Daniel-iba-a-Bolivia.wav', 'path': './stim/wavs/argentine_match_declarative-narrow-focus_Daniel-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/castilian_match_declarative-narrow-focus_Daniel-iba-a-Bolivia.wav', 'path': './stim/wavs/castilian_match_declarative-narrow-focus_Daniel-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/chilean_match_declarative-narrow-focus_Daniel-iba-a-Bolivia.wav', 'path': './stim/wavs/chilean_match_declarative-narrow-focus_Daniel-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/cuban_match_declarative-narrow-focus_Daniel-iba-a-Bolivia.wav', 'path': './stim/wavs/cuban_match_declarative-narrow-focus_Daniel-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/mexican_match_declarative-narrow-focus_Daniel-iba-a-Bolivia.wav', 'path': './stim/wavs/mexican_match_declarative-narrow-focus_Daniel-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/peruvian_match_declarative-narrow-focus_Daniel-iba-a-Bolivia.wav', 'path': './stim/wavs/peruvian_match_declarative-narrow-focus_Daniel-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/puertorican_match_declarative-narrow-focus_Daniel-iba-a-Bolivia.wav', 'path': './stim/wavs/puertorican_match_declarative-narrow-focus_Daniel-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/andalusian_match_declarative-narrow-focus_David-leia-el-libro.wav', 'path': './stim/wavs/andalusian_match_declarative-narrow-focus_David-leia-el-libro.wav'},
    {'name': './stim/wavs/argentine_match_declarative-narrow-focus_David-leia-el-libro.wav', 'path': './stim/wavs/argentine_match_declarative-narrow-focus_David-leia-el-libro.wav'},
    {'name': './stim/wavs/castilian_match_declarative-narrow-focus_David-leia-el-libro.wav', 'path': './stim/wavs/castilian_match_declarative-narrow-focus_David-leia-el-libro.wav'},
    {'name': './stim/wavs/chilean_match_declarative-narrow-focus_David-leia-el-libro.wav', 'path': './stim/wavs/chilean_match_declarative-narrow-focus_David-leia-el-libro.wav'},
    {'name': './stim/wavs/cuban_match_declarative-narrow-focus_David-leia-el-libro.wav', 'path': './stim/wavs/cuban_match_declarative-narrow-focus_David-leia-el-libro.wav'},
    {'name': './stim/wavs/mexican_match_declarative-narrow-focus_David-leia-el-libro.wav', 'path': './stim/wavs/mexican_match_declarative-narrow-focus_David-leia-el-libro.wav'},
    {'name': './stim/wavs/peruvian_match_declarative-narrow-focus_David-leia-el-libro.wav', 'path': './stim/wavs/peruvian_match_declarative-narrow-focus_David-leia-el-libro.wav'},
    {'name': './stim/wavs/puertorican_match_declarative-narrow-focus_David-leia-el-libro.wav', 'path': './stim/wavs/puertorican_match_declarative-narrow-focus_David-leia-el-libro.wav'},
    {'name': './stim/wavs/andalusian_match_declarative-narrow-focus_Emilio-ama-la-marcha.wav', 'path': './stim/wavs/andalusian_match_declarative-narrow-focus_Emilio-ama-la-marcha.wav'},
    {'name': './stim/wavs/argentine_match_declarative-narrow-focus_Emilio-ama-la-marcha.wav', 'path': './stim/wavs/argentine_match_declarative-narrow-focus_Emilio-ama-la-marcha.wav'},
    {'name': './stim/wavs/castilian_match_declarative-narrow-focus_Emilio-ama-la-marcha.wav', 'path': './stim/wavs/castilian_match_declarative-narrow-focus_Emilio-ama-la-marcha.wav'},
    {'name': './stim/wavs/chilean_match_declarative-narrow-focus_Emilio-ama-la-marcha.wav', 'path': './stim/wavs/chilean_match_declarative-narrow-focus_Emilio-ama-la-marcha.wav'},
    {'name': './stim/wavs/cuban_match_declarative-narrow-focus_Emilio-ama-la-marcha.wav', 'path': './stim/wavs/cuban_match_declarative-narrow-focus_Emilio-ama-la-marcha.wav'},
    {'name': './stim/wavs/mexican_match_declarative-narrow-focus_Emilio-ama-la-marcha.wav', 'path': './stim/wavs/mexican_match_declarative-narrow-focus_Emilio-ama-la-marcha.wav'},
    {'name': './stim/wavs/peruvian_match_declarative-narrow-focus_Emilio-ama-la-marcha.wav', 'path': './stim/wavs/peruvian_match_declarative-narrow-focus_Emilio-ama-la-marcha.wav'},
    {'name': './stim/wavs/puertorican_match_declarative-narrow-focus_Emilio-ama-la-marcha.wav', 'path': './stim/wavs/puertorican_match_declarative-narrow-focus_Emilio-ama-la-marcha.wav'},
    {'name': './stim/wavs/andalusian_match_declarative-narrow-focus_Manuela-vende-el-carro.wav', 'path': './stim/wavs/andalusian_match_declarative-narrow-focus_Manuela-vende-el-carro.wav'},
    {'name': './stim/wavs/argentine_match_declarative-narrow-focus_Manuela-vende-el-carro.wav', 'path': './stim/wavs/argentine_match_declarative-narrow-focus_Manuela-vende-el-carro.wav'},
    {'name': './stim/wavs/castilian_match_declarative-narrow-focus_Manuela-vende-el-carro.wav', 'path': './stim/wavs/castilian_match_declarative-narrow-focus_Manuela-vende-el-carro.wav'},
    {'name': './stim/wavs/chilean_match_declarative-narrow-focus_Manuela-vende-el-carro.wav', 'path': './stim/wavs/chilean_match_declarative-narrow-focus_Manuela-vende-el-carro.wav'},
    {'name': './stim/wavs/cuban_match_declarative-narrow-focus_Manuela-vende-el-carro.wav', 'path': './stim/wavs/cuban_match_declarative-narrow-focus_Manuela-vende-el-carro.wav'},
    {'name': './stim/wavs/mexican_match_declarative-narrow-focus_Manuela-vende-el-carro.wav', 'path': './stim/wavs/mexican_match_declarative-narrow-focus_Manuela-vende-el-carro.wav'},
    {'name': './stim/wavs/peruvian_match_declarative-narrow-focus_Manuela-vende-el-carro.wav', 'path': './stim/wavs/peruvian_match_declarative-narrow-focus_Manuela-vende-el-carro.wav'},
    {'name': './stim/wavs/puertorican_match_declarative-narrow-focus_Manuela-vende-el-carro.wav', 'path': './stim/wavs/puertorican_match_declarative-narrow-focus_Manuela-vende-el-carro.wav'},
    {'name': './stim/wavs/andalusian_match_declarative-narrow-focus_Maria-bebe-el-vino.wav', 'path': './stim/wavs/andalusian_match_declarative-narrow-focus_Maria-bebe-el-vino.wav'},
    {'name': './stim/wavs/argentine_match_declarative-narrow-focus_Maria-bebe-el-vino.wav', 'path': './stim/wavs/argentine_match_declarative-narrow-focus_Maria-bebe-el-vino.wav'},
    {'name': './stim/wavs/castilian_match_declarative-narrow-focus_Maria-bebe-el-vino.wav', 'path': './stim/wavs/castilian_match_declarative-narrow-focus_Maria-bebe-el-vino.wav'},
    {'name': './stim/wavs/chilean_match_declarative-narrow-focus_Maria-bebe-el-vino.wav', 'path': './stim/wavs/chilean_match_declarative-narrow-focus_Maria-bebe-el-vino.wav'},
    {'name': './stim/wavs/cuban_match_declarative-narrow-focus_Maria-bebe-el-vino.wav', 'path': './stim/wavs/cuban_match_declarative-narrow-focus_Maria-bebe-el-vino.wav'},
    {'name': './stim/wavs/mexican_match_declarative-narrow-focus_Maria-bebe-el-vino.wav', 'path': './stim/wavs/mexican_match_declarative-narrow-focus_Maria-bebe-el-vino.wav'},
    {'name': './stim/wavs/peruvian_match_declarative-narrow-focus_Maria-bebe-el-vino.wav', 'path': './stim/wavs/peruvian_match_declarative-narrow-focus_Maria-bebe-el-vino.wav'},
    {'name': './stim/wavs/puertorican_match_declarative-narrow-focus_Maria-bebe-el-vino.wav', 'path': './stim/wavs/puertorican_match_declarative-narrow-focus_Maria-bebe-el-vino.wav'},
    {'name': './stim/wavs/andalusian_match_declarative-narrow-focus_Mariano-habla-del-tiempo.wav', 'path': './stim/wavs/andalusian_match_declarative-narrow-focus_Mariano-habla-del-tiempo.wav'},
    {'name': './stim/wavs/argentine_match_declarative-narrow-focus_Mariano-habla-del-tiempo.wav', 'path': './stim/wavs/argentine_match_declarative-narrow-focus_Mariano-habla-del-tiempo.wav'},
    {'name': './stim/wavs/castilian_match_declarative-narrow-focus_Mariano-habla-del-tiempo.wav', 'path': './stim/wavs/castilian_match_declarative-narrow-focus_Mariano-habla-del-tiempo.wav'},
    {'name': './stim/wavs/chilean_match_declarative-narrow-focus_Mariano-habla-del-tiempo.wav', 'path': './stim/wavs/chilean_match_declarative-narrow-focus_Mariano-habla-del-tiempo.wav'},
    {'name': './stim/wavs/cuban_match_declarative-narrow-focus_Mariano-habla-del-tiempo.wav', 'path': './stim/wavs/cuban_match_declarative-narrow-focus_Mariano-habla-del-tiempo.wav'},
    {'name': './stim/wavs/mexican_match_declarative-narrow-focus_Mariano-habla-del-tiempo.wav', 'path': './stim/wavs/mexican_match_declarative-narrow-focus_Mariano-habla-del-tiempo.wav'},
    {'name': './stim/wavs/peruvian_match_declarative-narrow-focus_Mariano-habla-del-tiempo.wav', 'path': './stim/wavs/peruvian_match_declarative-narrow-focus_Mariano-habla-del-tiempo.wav'},
    {'name': './stim/wavs/puertorican_match_declarative-narrow-focus_Mariano-habla-del-tiempo.wav', 'path': './stim/wavs/puertorican_match_declarative-narrow-focus_Mariano-habla-del-tiempo.wav'},
    {'name': './stim/wavs/andalusian_match_declarative-narrow-focus_Marta-abre-el-regalo.wav', 'path': './stim/wavs/andalusian_match_declarative-narrow-focus_Marta-abre-el-regalo.wav'},
    {'name': './stim/wavs/argentine_match_declarative-narrow-focus_Marta-abre-el-regalo.wav', 'path': './stim/wavs/argentine_match_declarative-narrow-focus_Marta-abre-el-regalo.wav'},
    {'name': './stim/wavs/castilian_match_declarative-narrow-focus_Marta-abre-el-regalo.wav', 'path': './stim/wavs/castilian_match_declarative-narrow-focus_Marta-abre-el-regalo.wav'},
    {'name': './stim/wavs/chilean_match_declarative-narrow-focus_Marta-abre-el-regalo.wav', 'path': './stim/wavs/chilean_match_declarative-narrow-focus_Marta-abre-el-regalo.wav'},
    {'name': './stim/wavs/cuban_match_declarative-narrow-focus_Marta-abre-el-regalo.wav', 'path': './stim/wavs/cuban_match_declarative-narrow-focus_Marta-abre-el-regalo.wav'},
    {'name': './stim/wavs/mexican_match_declarative-narrow-focus_Marta-abre-el-regalo.wav', 'path': './stim/wavs/mexican_match_declarative-narrow-focus_Marta-abre-el-regalo.wav'},
    {'name': './stim/wavs/peruvian_match_declarative-narrow-focus_Marta-abre-el-regalo.wav', 'path': './stim/wavs/peruvian_match_declarative-narrow-focus_Marta-abre-el-regalo.wav'},
    {'name': './stim/wavs/puertorican_match_declarative-narrow-focus_Marta-abre-el-regalo.wav', 'path': './stim/wavs/puertorican_match_declarative-narrow-focus_Marta-abre-el-regalo.wav'},
    {'name': './stim/wavs/andalusian_match_interrogative-partial-wh_Cuando-bebia-el-vino.wav', 'path': './stim/wavs/andalusian_match_interrogative-partial-wh_Cuando-bebia-el-vino.wav'},
    {'name': './stim/wavs/argentine_match_interrogative-partial-wh_Cuando-bebia-el-vino.wav', 'path': './stim/wavs/argentine_match_interrogative-partial-wh_Cuando-bebia-el-vino.wav'},
    {'name': './stim/wavs/castilian_match_interrogative-partial-wh_Cuando-bebia-el-vino.wav', 'path': './stim/wavs/castilian_match_interrogative-partial-wh_Cuando-bebia-el-vino.wav'},
    {'name': './stim/wavs/chilean_match_interrogative-partial-wh_Cuando-bebia-el-vino.wav', 'path': './stim/wavs/chilean_match_interrogative-partial-wh_Cuando-bebia-el-vino.wav'},
    {'name': './stim/wavs/cuban_match_interrogative-partial-wh_Cuando-bebia-el-vino.wav', 'path': './stim/wavs/cuban_match_interrogative-partial-wh_Cuando-bebia-el-vino.wav'},
    {'name': './stim/wavs/mexican_match_interrogative-partial-wh_Cuando-bebia-el-vino.wav', 'path': './stim/wavs/mexican_match_interrogative-partial-wh_Cuando-bebia-el-vino.wav'},
    {'name': './stim/wavs/peruvian_match_interrogative-partial-wh_Cuando-bebia-el-vino.wav', 'path': './stim/wavs/peruvian_match_interrogative-partial-wh_Cuando-bebia-el-vino.wav'},
    {'name': './stim/wavs/puertorican_match_interrogative-partial-wh_Cuando-bebia-el-vino.wav', 'path': './stim/wavs/puertorican_match_interrogative-partial-wh_Cuando-bebia-el-vino.wav'},
    {'name': './stim/wavs/andalusian_match_interrogative-partial-wh_Cuando-leia-el-libro.wav', 'path': './stim/wavs/andalusian_match_interrogative-partial-wh_Cuando-leia-el-libro.wav'},
    {'name': './stim/wavs/argentine_match_interrogative-partial-wh_Cuando-leia-el-libro.wav', 'path': './stim/wavs/argentine_match_interrogative-partial-wh_Cuando-leia-el-libro.wav'},
    {'name': './stim/wavs/castilian_match_interrogative-partial-wh_Cuando-leia-el-libro.wav', 'path': './stim/wavs/castilian_match_interrogative-partial-wh_Cuando-leia-el-libro.wav'},
    {'name': './stim/wavs/chilean_match_interrogative-partial-wh_Cuando-leia-el-libro.wav', 'path': './stim/wavs/chilean_match_interrogative-partial-wh_Cuando-leia-el-libro.wav'},
    {'name': './stim/wavs/cuban_match_interrogative-partial-wh_Cuando-leia-el-libro.wav', 'path': './stim/wavs/cuban_match_interrogative-partial-wh_Cuando-leia-el-libro.wav'},
    {'name': './stim/wavs/mexican_match_interrogative-partial-wh_Cuando-leia-el-libro.wav', 'path': './stim/wavs/mexican_match_interrogative-partial-wh_Cuando-leia-el-libro.wav'},
    {'name': './stim/wavs/peruvian_match_interrogative-partial-wh_Cuando-leia-el-libro.wav', 'path': './stim/wavs/peruvian_match_interrogative-partial-wh_Cuando-leia-el-libro.wav'},
    {'name': './stim/wavs/puertorican_match_interrogative-partial-wh_Cuando-leia-el-libro.wav', 'path': './stim/wavs/puertorican_match_interrogative-partial-wh_Cuando-leia-el-libro.wav'},
    {'name': './stim/wavs/andalusian_match_interrogative-partial-wh_Cuando-lleva-el-abrigo.wav', 'path': './stim/wavs/andalusian_match_interrogative-partial-wh_Cuando-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/argentine_match_interrogative-partial-wh_Cuando-lleva-el-abrigo.wav', 'path': './stim/wavs/argentine_match_interrogative-partial-wh_Cuando-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/castilian_match_interrogative-partial-wh_Cuando-lleva-el-abrigo.wav', 'path': './stim/wavs/castilian_match_interrogative-partial-wh_Cuando-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/chilean_match_interrogative-partial-wh_Cuando-lleva-el-abrigo.wav', 'path': './stim/wavs/chilean_match_interrogative-partial-wh_Cuando-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/cuban_match_interrogative-partial-wh_Cuando-lleva-el-abrigo.wav', 'path': './stim/wavs/cuban_match_interrogative-partial-wh_Cuando-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/mexican_match_interrogative-partial-wh_Cuando-lleva-el-abrigo.wav', 'path': './stim/wavs/mexican_match_interrogative-partial-wh_Cuando-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/peruvian_match_interrogative-partial-wh_Cuando-lleva-el-abrigo.wav', 'path': './stim/wavs/peruvian_match_interrogative-partial-wh_Cuando-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/puertorican_match_interrogative-partial-wh_Cuando-lleva-el-abrigo.wav', 'path': './stim/wavs/puertorican_match_interrogative-partial-wh_Cuando-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/andalusian_match_interrogative-partial-wh_Cuando-vendia-el-carro.wav', 'path': './stim/wavs/andalusian_match_interrogative-partial-wh_Cuando-vendia-el-carro.wav'},
    {'name': './stim/wavs/argentine_match_interrogative-partial-wh_Cuando-vendia-el-carro.wav', 'path': './stim/wavs/argentine_match_interrogative-partial-wh_Cuando-vendia-el-carro.wav'},
    {'name': './stim/wavs/castilian_match_interrogative-partial-wh_Cuando-vendia-el-carro.wav', 'path': './stim/wavs/castilian_match_interrogative-partial-wh_Cuando-vendia-el-carro.wav'},
    {'name': './stim/wavs/chilean_match_interrogative-partial-wh_Cuando-vendia-el-carro.wav', 'path': './stim/wavs/chilean_match_interrogative-partial-wh_Cuando-vendia-el-carro.wav'},
    {'name': './stim/wavs/cuban_match_interrogative-partial-wh_Cuando-vendia-el-carro.wav', 'path': './stim/wavs/cuban_match_interrogative-partial-wh_Cuando-vendia-el-carro.wav'},
    {'name': './stim/wavs/mexican_match_interrogative-partial-wh_Cuando-vendia-el-carro.wav', 'path': './stim/wavs/mexican_match_interrogative-partial-wh_Cuando-vendia-el-carro.wav'},
    {'name': './stim/wavs/peruvian_match_interrogative-partial-wh_Cuando-vendia-el-carro.wav', 'path': './stim/wavs/peruvian_match_interrogative-partial-wh_Cuando-vendia-el-carro.wav'},
    {'name': './stim/wavs/puertorican_match_interrogative-partial-wh_Cuando-vendia-el-carro.wav', 'path': './stim/wavs/puertorican_match_interrogative-partial-wh_Cuando-vendia-el-carro.wav'},
    {'name': './stim/wavs/andalusian_match_interrogative-partial-wh_Por-que-abre-el-regalo.wav', 'path': './stim/wavs/andalusian_match_interrogative-partial-wh_Por-que-abre-el-regalo.wav'},
    {'name': './stim/wavs/argentine_match_interrogative-partial-wh_Por-que-abre-el-regalo.wav', 'path': './stim/wavs/argentine_match_interrogative-partial-wh_Por-que-abre-el-regalo.wav'},
    {'name': './stim/wavs/castilian_match_interrogative-partial-wh_Por-que-abre-el-regalo.wav', 'path': './stim/wavs/castilian_match_interrogative-partial-wh_Por-que-abre-el-regalo.wav'},
    {'name': './stim/wavs/chilean_match_interrogative-partial-wh_Por-que-abre-el-regalo.wav', 'path': './stim/wavs/chilean_match_interrogative-partial-wh_Por-que-abre-el-regalo.wav'},
    {'name': './stim/wavs/cuban_match_interrogative-partial-wh_Por-que-abre-el-regalo.wav', 'path': './stim/wavs/cuban_match_interrogative-partial-wh_Por-que-abre-el-regalo.wav'},
    {'name': './stim/wavs/mexican_match_interrogative-partial-wh_Por-que-abre-el-regalo.wav', 'path': './stim/wavs/mexican_match_interrogative-partial-wh_Por-que-abre-el-regalo.wav'},
    {'name': './stim/wavs/peruvian_match_interrogative-partial-wh_Por-que-abre-el-regalo.wav', 'path': './stim/wavs/peruvian_match_interrogative-partial-wh_Por-que-abre-el-regalo.wav'},
    {'name': './stim/wavs/puertorican_match_interrogative-partial-wh_Por-que-abre-el-regalo.wav', 'path': './stim/wavs/puertorican_match_interrogative-partial-wh_Por-que-abre-el-regalo.wav'},
    {'name': './stim/wavs/andalusian_match_interrogative-partial-wh_Por-que-ama-la-navidad.wav', 'path': './stim/wavs/andalusian_match_interrogative-partial-wh_Por-que-ama-la-navidad.wav'},
    {'name': './stim/wavs/argentine_match_interrogative-partial-wh_Por-que-ama-la-navidad.wav', 'path': './stim/wavs/argentine_match_interrogative-partial-wh_Por-que-ama-la-navidad.wav'},
    {'name': './stim/wavs/castilian_match_interrogative-partial-wh_Por-que-ama-la-navidad.wav', 'path': './stim/wavs/castilian_match_interrogative-partial-wh_Por-que-ama-la-navidad.wav'},
    {'name': './stim/wavs/chilean_match_interrogative-partial-wh_Por-que-ama-la-navidad.wav', 'path': './stim/wavs/chilean_match_interrogative-partial-wh_Por-que-ama-la-navidad.wav'},
    {'name': './stim/wavs/cuban_match_interrogative-partial-wh_Por-que-ama-la-navidad.wav', 'path': './stim/wavs/cuban_match_interrogative-partial-wh_Por-que-ama-la-navidad.wav'},
    {'name': './stim/wavs/mexican_match_interrogative-partial-wh_Por-que-ama-la-navidad.wav', 'path': './stim/wavs/mexican_match_interrogative-partial-wh_Por-que-ama-la-navidad.wav'},
    {'name': './stim/wavs/peruvian_match_interrogative-partial-wh_Por-que-ama-la-navidad.wav', 'path': './stim/wavs/peruvian_match_interrogative-partial-wh_Por-que-ama-la-navidad.wav'},
    {'name': './stim/wavs/puertorican_match_interrogative-partial-wh_Por-que-ama-la-navidad.wav', 'path': './stim/wavs/puertorican_match_interrogative-partial-wh_Por-que-ama-la-navidad.wav'},
    {'name': './stim/wavs/andalusian_match_interrogative-partial-wh_Por-que-hablaba-del-agua.wav', 'path': './stim/wavs/andalusian_match_interrogative-partial-wh_Por-que-hablaba-del-agua.wav'},
    {'name': './stim/wavs/argentine_match_interrogative-partial-wh_Por-que-hablaba-del-agua.wav', 'path': './stim/wavs/argentine_match_interrogative-partial-wh_Por-que-hablaba-del-agua.wav'},
    {'name': './stim/wavs/castilian_match_interrogative-partial-wh_Por-que-hablaba-del-agua.wav', 'path': './stim/wavs/castilian_match_interrogative-partial-wh_Por-que-hablaba-del-agua.wav'},
    {'name': './stim/wavs/chilean_match_interrogative-partial-wh_Por-que-hablaba-del-agua.wav', 'path': './stim/wavs/chilean_match_interrogative-partial-wh_Por-que-hablaba-del-agua.wav'},
    {'name': './stim/wavs/cuban_match_interrogative-partial-wh_Por-que-hablaba-del-agua.wav', 'path': './stim/wavs/cuban_match_interrogative-partial-wh_Por-que-hablaba-del-agua.wav'},
    {'name': './stim/wavs/mexican_match_interrogative-partial-wh_Por-que-hablaba-del-agua.wav', 'path': './stim/wavs/mexican_match_interrogative-partial-wh_Por-que-hablaba-del-agua.wav'},
    {'name': './stim/wavs/peruvian_match_interrogative-partial-wh_Por-que-hablaba-del-agua.wav', 'path': './stim/wavs/peruvian_match_interrogative-partial-wh_Por-que-hablaba-del-agua.wav'},
    {'name': './stim/wavs/puertorican_match_interrogative-partial-wh_Por-que-hablaba-del-agua.wav', 'path': './stim/wavs/puertorican_match_interrogative-partial-wh_Por-que-hablaba-del-agua.wav'},
    {'name': './stim/wavs/andalusian_match_interrogative-partial-wh_Por-que-iba-a-Bolivia.wav', 'path': './stim/wavs/andalusian_match_interrogative-partial-wh_Por-que-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/argentine_match_interrogative-partial-wh_Por-que-iba-a-Bolivia.wav', 'path': './stim/wavs/argentine_match_interrogative-partial-wh_Por-que-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/castilian_match_interrogative-partial-wh_Por-que-iba-a-Bolivia.wav', 'path': './stim/wavs/castilian_match_interrogative-partial-wh_Por-que-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/chilean_match_interrogative-partial-wh_Por-que-iba-a-Bolivia.wav', 'path': './stim/wavs/chilean_match_interrogative-partial-wh_Por-que-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/cuban_match_interrogative-partial-wh_Por-que-iba-a-Bolivia.wav', 'path': './stim/wavs/cuban_match_interrogative-partial-wh_Por-que-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/mexican_match_interrogative-partial-wh_Por-que-iba-a-Bolivia.wav', 'path': './stim/wavs/mexican_match_interrogative-partial-wh_Por-que-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/peruvian_match_interrogative-partial-wh_Por-que-iba-a-Bolivia.wav', 'path': './stim/wavs/peruvian_match_interrogative-partial-wh_Por-que-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/puertorican_match_interrogative-partial-wh_Por-que-iba-a-Bolivia.wav', 'path': './stim/wavs/puertorican_match_interrogative-partial-wh_Por-que-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/andalusian_match_interrogative-total-yn_Ana-lleva-el-abrigo.wav', 'path': './stim/wavs/andalusian_match_interrogative-total-yn_Ana-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/argentine_match_interrogative-total-yn_Ana-lleva-el-abrigo.wav', 'path': './stim/wavs/argentine_match_interrogative-total-yn_Ana-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/castilian_match_interrogative-total-yn_Ana-lleva-el-abrigo.wav', 'path': './stim/wavs/castilian_match_interrogative-total-yn_Ana-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/chilean_match_interrogative-total-yn_Ana-lleva-el-abrigo.wav', 'path': './stim/wavs/chilean_match_interrogative-total-yn_Ana-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/cuban_match_interrogative-total-yn_Ana-lleva-el-abrigo.wav', 'path': './stim/wavs/cuban_match_interrogative-total-yn_Ana-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/mexican_match_interrogative-total-yn_Ana-lleva-el-abrigo.wav', 'path': './stim/wavs/mexican_match_interrogative-total-yn_Ana-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/peruvian_match_interrogative-total-yn_Ana-lleva-el-abrigo.wav', 'path': './stim/wavs/peruvian_match_interrogative-total-yn_Ana-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/puertorican_match_interrogative-total-yn_Ana-lleva-el-abrigo.wav', 'path': './stim/wavs/puertorican_match_interrogative-total-yn_Ana-lleva-el-abrigo.wav'},
    {'name': './stim/wavs/andalusian_match_interrogative-total-yn_Daniel-iba-a-Bolivia.wav', 'path': './stim/wavs/andalusian_match_interrogative-total-yn_Daniel-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/argentine_match_interrogative-total-yn_Daniel-iba-a-Bolivia.wav', 'path': './stim/wavs/argentine_match_interrogative-total-yn_Daniel-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/castilian_match_interrogative-total-yn_Daniel-iba-a-Bolivia.wav', 'path': './stim/wavs/castilian_match_interrogative-total-yn_Daniel-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/chilean_match_interrogative-total-yn_Daniel-iba-a-Bolivia.wav', 'path': './stim/wavs/chilean_match_interrogative-total-yn_Daniel-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/cuban_match_interrogative-total-yn_Daniel-iba-a-Bolivia.wav', 'path': './stim/wavs/cuban_match_interrogative-total-yn_Daniel-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/mexican_match_interrogative-total-yn_Daniel-iba-a-Bolivia.wav', 'path': './stim/wavs/mexican_match_interrogative-total-yn_Daniel-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/peruvian_match_interrogative-total-yn_Daniel-iba-a-Bolivia.wav', 'path': './stim/wavs/peruvian_match_interrogative-total-yn_Daniel-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/puertorican_match_interrogative-total-yn_Daniel-iba-a-Bolivia.wav', 'path': './stim/wavs/puertorican_match_interrogative-total-yn_Daniel-iba-a-Bolivia.wav'},
    {'name': './stim/wavs/andalusian_match_interrogative-total-yn_David-leia-el-libro.wav', 'path': './stim/wavs/andalusian_match_interrogative-total-yn_David-leia-el-libro.wav'},
    {'name': './stim/wavs/argentine_match_interrogative-total-yn_David-leia-el-libro.wav', 'path': './stim/wavs/argentine_match_interrogative-total-yn_David-leia-el-libro.wav'},
    {'name': './stim/wavs/castilian_match_interrogative-total-yn_David-leia-el-libro.wav', 'path': './stim/wavs/castilian_match_interrogative-total-yn_David-leia-el-libro.wav'},
    {'name': './stim/wavs/chilean_match_interrogative-total-yn_David-leia-el-libro.wav', 'path': './stim/wavs/chilean_match_interrogative-total-yn_David-leia-el-libro.wav'},
    {'name': './stim/wavs/cuban_match_interrogative-total-yn_David-leia-el-libro.wav', 'path': './stim/wavs/cuban_match_interrogative-total-yn_David-leia-el-libro.wav'},
    {'name': './stim/wavs/mexican_match_interrogative-total-yn_David-leia-el-libro.wav', 'path': './stim/wavs/mexican_match_interrogative-total-yn_David-leia-el-libro.wav'},
    {'name': './stim/wavs/peruvian_match_interrogative-total-yn_David-leia-el-libro.wav', 'path': './stim/wavs/peruvian_match_interrogative-total-yn_David-leia-el-libro.wav'},
    {'name': './stim/wavs/puertorican_match_interrogative-total-yn_David-leia-el-libro.wav', 'path': './stim/wavs/puertorican_match_interrogative-total-yn_David-leia-el-libro.wav'},
    {'name': './stim/wavs/andalusian_match_interrogative-total-yn_Emilio-ama-la-marcha.wav', 'path': './stim/wavs/andalusian_match_interrogative-total-yn_Emilio-ama-la-marcha.wav'},
    {'name': './stim/wavs/argentine_match_interrogative-total-yn_Emilio-ama-la-marcha.wav', 'path': './stim/wavs/argentine_match_interrogative-total-yn_Emilio-ama-la-marcha.wav'},
    {'name': './stim/wavs/castilian_match_interrogative-total-yn_Emilio-ama-la-marcha.wav', 'path': './stim/wavs/castilian_match_interrogative-total-yn_Emilio-ama-la-marcha.wav'},
    {'name': './stim/wavs/chilean_match_interrogative-total-yn_Emilio-ama-la-marcha.wav', 'path': './stim/wavs/chilean_match_interrogative-total-yn_Emilio-ama-la-marcha.wav'},
    {'name': './stim/wavs/cuban_match_interrogative-total-yn_Emilio-ama-la-marcha.wav', 'path': './stim/wavs/cuban_match_interrogative-total-yn_Emilio-ama-la-marcha.wav'},
    {'name': './stim/wavs/mexican_match_interrogative-total-yn_Emilio-ama-la-marcha.wav', 'path': './stim/wavs/mexican_match_interrogative-total-yn_Emilio-ama-la-marcha.wav'},
    {'name': './stim/wavs/peruvian_match_interrogative-total-yn_Emilio-ama-la-marcha.wav', 'path': './stim/wavs/peruvian_match_interrogative-total-yn_Emilio-ama-la-marcha.wav'},
    {'name': './stim/wavs/puertorican_match_interrogative-total-yn_Emilio-ama-la-marcha.wav', 'path': './stim/wavs/puertorican_match_interrogative-total-yn_Emilio-ama-la-marcha.wav'},
    {'name': './stim/wavs/andalusian_match_interrogative-total-yn_Manuela-vende-el-carro.wav', 'path': './stim/wavs/andalusian_match_interrogative-total-yn_Manuela-vende-el-carro.wav'},
    {'name': './stim/wavs/argentine_match_interrogative-total-yn_Manuela-vende-el-carro.wav', 'path': './stim/wavs/argentine_match_interrogative-total-yn_Manuela-vende-el-carro.wav'},
    {'name': './stim/wavs/castilian_match_interrogative-total-yn_Manuela-vende-el-carro.wav', 'path': './stim/wavs/castilian_match_interrogative-total-yn_Manuela-vende-el-carro.wav'},
    {'name': './stim/wavs/chilean_match_interrogative-total-yn_Manuela-vende-el-carro.wav', 'path': './stim/wavs/chilean_match_interrogative-total-yn_Manuela-vende-el-carro.wav'},
    {'name': './stim/wavs/cuban_match_interrogative-total-yn_Manuela-vende-el-carro.wav', 'path': './stim/wavs/cuban_match_interrogative-total-yn_Manuela-vende-el-carro.wav'},
    {'name': './stim/wavs/mexican_match_interrogative-total-yn_Manuela-vende-el-carro.wav', 'path': './stim/wavs/mexican_match_interrogative-total-yn_Manuela-vende-el-carro.wav'},
    {'name': './stim/wavs/peruvian_match_interrogative-total-yn_Manuela-vende-el-carro.wav', 'path': './stim/wavs/peruvian_match_interrogative-total-yn_Manuela-vende-el-carro.wav'},
    {'name': './stim/wavs/puertorican_match_interrogative-total-yn_Manuela-vende-el-carro.wav', 'path': './stim/wavs/puertorican_match_interrogative-total-yn_Manuela-vende-el-carro.wav'},
    {'name': './stim/wavs/andalusian_match_interrogative-total-yn_Maria-bebe-el-vino.wav', 'path': './stim/wavs/andalusian_match_interrogative-total-yn_Maria-bebe-el-vino.wav'},
    {'name': './stim/wavs/argentine_match_interrogative-total-yn_Maria-bebe-el-vino.wav', 'path': './stim/wavs/argentine_match_interrogative-total-yn_Maria-bebe-el-vino.wav'},
    {'name': './stim/wavs/castilian_match_interrogative-total-yn_Maria-bebe-el-vino.wav', 'path': './stim/wavs/castilian_match_interrogative-total-yn_Maria-bebe-el-vino.wav'},
    {'name': './stim/wavs/chilean_match_interrogative-total-yn_Maria-bebe-el-vino.wav', 'path': './stim/wavs/chilean_match_interrogative-total-yn_Maria-bebe-el-vino.wav'},
    {'name': './stim/wavs/cuban_match_interrogative-total-yn_Maria-bebe-el-vino.wav', 'path': './stim/wavs/cuban_match_interrogative-total-yn_Maria-bebe-el-vino.wav'},
    {'name': './stim/wavs/mexican_match_interrogative-total-yn_Maria-bebe-el-vino.wav', 'path': './stim/wavs/mexican_match_interrogative-total-yn_Maria-bebe-el-vino.wav'},
    {'name': './stim/wavs/peruvian_match_interrogative-total-yn_Maria-bebe-el-vino.wav', 'path': './stim/wavs/peruvian_match_interrogative-total-yn_Maria-bebe-el-vino.wav'},
    {'name': './stim/wavs/puertorican_match_interrogative-total-yn_Maria-bebe-el-vino.wav', 'path': './stim/wavs/puertorican_match_interrogative-total-yn_Maria-bebe-el-vino.wav'},
    {'name': './stim/wavs/andalusian_match_interrogative-total-yn_Mariano-habla-del-tiempo.wav', 'path': './stim/wavs/andalusian_match_interrogative-total-yn_Mariano-habla-del-tiempo.wav'},
    {'name': './stim/wavs/argentine_match_interrogative-total-yn_Mariano-habla-del-tiempo.wav', 'path': './stim/wavs/argentine_match_interrogative-total-yn_Mariano-habla-del-tiempo.wav'},
    {'name': './stim/wavs/castilian_match_interrogative-total-yn_Mariano-habla-del-tiempo.wav', 'path': './stim/wavs/castilian_match_interrogative-total-yn_Mariano-habla-del-tiempo.wav'},
    {'name': './stim/wavs/chilean_match_interrogative-total-yn_Mariano-habla-del-tiempo.wav', 'path': './stim/wavs/chilean_match_interrogative-total-yn_Mariano-habla-del-tiempo.wav'},
    {'name': './stim/wavs/cuban_match_interrogative-total-yn_Mariano-habla-del-tiempo.wav', 'path': './stim/wavs/cuban_match_interrogative-total-yn_Mariano-habla-del-tiempo.wav'},
    {'name': './stim/wavs/mexican_match_interrogative-total-yn_Mariano-habla-del-tiempo.wav', 'path': './stim/wavs/mexican_match_interrogative-total-yn_Mariano-habla-del-tiempo.wav'},
    {'name': './stim/wavs/peruvian_match_interrogative-total-yn_Mariano-habla-del-tiempo.wav', 'path': './stim/wavs/peruvian_match_interrogative-total-yn_Mariano-habla-del-tiempo.wav'},
    {'name': './stim/wavs/puertorican_match_interrogative-total-yn_Mariano-habla-del-tiempo.wav', 'path': './stim/wavs/puertorican_match_interrogative-total-yn_Mariano-habla-del-tiempo.wav'},
    {'name': './stim/wavs/andalusian_match_interrogative-total-yn_Marta-abre-el-regalo.wav', 'path': './stim/wavs/andalusian_match_interrogative-total-yn_Marta-abre-el-regalo.wav'},
    {'name': './stim/wavs/argentine_match_interrogative-total-yn_Marta-abre-el-regalo.wav', 'path': './stim/wavs/argentine_match_interrogative-total-yn_Marta-abre-el-regalo.wav'},
    {'name': './stim/wavs/castilian_match_interrogative-total-yn_Marta-abre-el-regalo.wav', 'path': './stim/wavs/castilian_match_interrogative-total-yn_Marta-abre-el-regalo.wav'},
    {'name': './stim/wavs/chilean_match_interrogative-total-yn_Marta-abre-el-regalo.wav', 'path': './stim/wavs/chilean_match_interrogative-total-yn_Marta-abre-el-regalo.wav'},
    {'name': './stim/wavs/cuban_match_interrogative-total-yn_Marta-abre-el-regalo.wav', 'path': './stim/wavs/cuban_match_interrogative-total-yn_Marta-abre-el-regalo.wav'},
    {'name': './stim/wavs/mexican_match_interrogative-total-yn_Marta-abre-el-regalo.wav', 'path': './stim/wavs/mexican_match_interrogative-total-yn_Marta-abre-el-regalo.wav'},
    {'name': './stim/wavs/peruvian_match_interrogative-total-yn_Marta-abre-el-regalo.wav', 'path': './stim/wavs/peruvian_match_interrogative-total-yn_Marta-abre-el-regalo.wav'},
    {'name': './stim/wavs/puertorican_match_interrogative-total-yn_Marta-abre-el-regalo.wav', 'path': './stim/wavs/puertorican_match_interrogative-total-yn_Marta-abre-el-regalo.wav'},
    {'name': './stim/wavs/andalusian_mismatch_declarative-broad-focus_El-bebe-comia-muy-bien.wav', 'path': './stim/wavs/andalusian_mismatch_declarative-broad-focus_El-bebe-comia-muy-bien.wav'},
    {'name': './stim/wavs/argentine_mismatch_declarative-broad-focus_El-bebe-comia-muy-bien.wav', 'path': './stim/wavs/argentine_mismatch_declarative-broad-focus_El-bebe-comia-muy-bien.wav'},
    {'name': './stim/wavs/castilian_mismatch_declarative-broad-focus_El-bebe-comia-muy-bien.wav', 'path': './stim/wavs/castilian_mismatch_declarative-broad-focus_El-bebe-comia-muy-bien.wav'},
    {'name': './stim/wavs/chilean_mismatch_declarative-broad-focus_El-bebe-comia-muy-bien.wav', 'path': './stim/wavs/chilean_mismatch_declarative-broad-focus_El-bebe-comia-muy-bien.wav'},
    {'name': './stim/wavs/cuban_mismatch_declarative-broad-focus_El-bebe-comia-muy-bien.wav', 'path': './stim/wavs/cuban_mismatch_declarative-broad-focus_El-bebe-comia-muy-bien.wav'},
    {'name': './stim/wavs/mexican_mismatch_declarative-broad-focus_El-bebe-comia-muy-bien.wav', 'path': './stim/wavs/mexican_mismatch_declarative-broad-focus_El-bebe-comia-muy-bien.wav'},
    {'name': './stim/wavs/peruvian_mismatch_declarative-broad-focus_El-bebe-comia-muy-bien.wav', 'path': './stim/wavs/peruvian_mismatch_declarative-broad-focus_El-bebe-comia-muy-bien.wav'},
    {'name': './stim/wavs/puertorican_mismatch_declarative-broad-focus_El-bebe-comia-muy-bien.wav', 'path': './stim/wavs/puertorican_mismatch_declarative-broad-focus_El-bebe-comia-muy-bien.wav'},
    {'name': './stim/wavs/andalusian_mismatch_declarative-broad-focus_El-hombre-mira-la-luna.wav', 'path': './stim/wavs/andalusian_mismatch_declarative-broad-focus_El-hombre-mira-la-luna.wav'},
    {'name': './stim/wavs/argentine_mismatch_declarative-broad-focus_El-hombre-mira-la-luna.wav', 'path': './stim/wavs/argentine_mismatch_declarative-broad-focus_El-hombre-mira-la-luna.wav'},
    {'name': './stim/wavs/castilian_mismatch_declarative-broad-focus_El-hombre-mira-la-luna.wav', 'path': './stim/wavs/castilian_mismatch_declarative-broad-focus_El-hombre-mira-la-luna.wav'},
    {'name': './stim/wavs/chilean_mismatch_declarative-broad-focus_El-hombre-mira-la-luna.wav', 'path': './stim/wavs/chilean_mismatch_declarative-broad-focus_El-hombre-mira-la-luna.wav'},
    {'name': './stim/wavs/cuban_mismatch_declarative-broad-focus_El-hombre-mira-la-luna.wav', 'path': './stim/wavs/cuban_mismatch_declarative-broad-focus_El-hombre-mira-la-luna.wav'},
    {'name': './stim/wavs/mexican_mismatch_declarative-broad-focus_El-hombre-mira-la-luna.wav', 'path': './stim/wavs/mexican_mismatch_declarative-broad-focus_El-hombre-mira-la-luna.wav'},
    {'name': './stim/wavs/peruvian_mismatch_declarative-broad-focus_El-hombre-mira-la-luna.wav', 'path': './stim/wavs/peruvian_mismatch_declarative-broad-focus_El-hombre-mira-la-luna.wav'},
    {'name': './stim/wavs/puertorican_mismatch_declarative-broad-focus_El-hombre-mira-la-luna.wav', 'path': './stim/wavs/puertorican_mismatch_declarative-broad-focus_El-hombre-mira-la-luna.wav'},
    {'name': './stim/wavs/andalusian_mismatch_declarative-broad-focus_El-nino-oye-el-rio.wav', 'path': './stim/wavs/andalusian_mismatch_declarative-broad-focus_El-nino-oye-el-rio.wav'},
    {'name': './stim/wavs/argentine_mismatch_declarative-broad-focus_El-nino-oye-el-rio.wav', 'path': './stim/wavs/argentine_mismatch_declarative-broad-focus_El-nino-oye-el-rio.wav'},
    {'name': './stim/wavs/castilian_mismatch_declarative-broad-focus_El-nino-oye-el-rio.wav', 'path': './stim/wavs/castilian_mismatch_declarative-broad-focus_El-nino-oye-el-rio.wav'},
    {'name': './stim/wavs/chilean_mismatch_declarative-broad-focus_El-nino-oye-el-rio.wav', 'path': './stim/wavs/chilean_mismatch_declarative-broad-focus_El-nino-oye-el-rio.wav'},
    {'name': './stim/wavs/cuban_mismatch_declarative-broad-focus_El-nino-oye-el-rio.wav', 'path': './stim/wavs/cuban_mismatch_declarative-broad-focus_El-nino-oye-el-rio.wav'},
    {'name': './stim/wavs/mexican_mismatch_declarative-broad-focus_El-nino-oye-el-rio.wav', 'path': './stim/wavs/mexican_mismatch_declarative-broad-focus_El-nino-oye-el-rio.wav'},
    {'name': './stim/wavs/peruvian_mismatch_declarative-broad-focus_El-nino-oye-el-rio.wav', 'path': './stim/wavs/peruvian_mismatch_declarative-broad-focus_El-nino-oye-el-rio.wav'},
    {'name': './stim/wavs/puertorican_mismatch_declarative-broad-focus_El-nino-oye-el-rio.wav', 'path': './stim/wavs/puertorican_mismatch_declarative-broad-focus_El-nino-oye-el-rio.wav'},
    {'name': './stim/wavs/andalusian_mismatch_declarative-broad-focus_La-maestra-vive-en-Paris.wav', 'path': './stim/wavs/andalusian_mismatch_declarative-broad-focus_La-maestra-vive-en-Paris.wav'},
    {'name': './stim/wavs/argentine_mismatch_declarative-broad-focus_La-maestra-vive-en-Paris.wav', 'path': './stim/wavs/argentine_mismatch_declarative-broad-focus_La-maestra-vive-en-Paris.wav'},
    {'name': './stim/wavs/castilian_mismatch_declarative-broad-focus_La-maestra-vive-en-Paris.wav', 'path': './stim/wavs/castilian_mismatch_declarative-broad-focus_La-maestra-vive-en-Paris.wav'},
    {'name': './stim/wavs/chilean_mismatch_declarative-broad-focus_La-maestra-vive-en-Paris.wav', 'path': './stim/wavs/chilean_mismatch_declarative-broad-focus_La-maestra-vive-en-Paris.wav'},
    {'name': './stim/wavs/cuban_mismatch_declarative-broad-focus_La-maestra-vive-en-Paris.wav', 'path': './stim/wavs/cuban_mismatch_declarative-broad-focus_La-maestra-vive-en-Paris.wav'},
    {'name': './stim/wavs/mexican_mismatch_declarative-broad-focus_La-maestra-vive-en-Paris.wav', 'path': './stim/wavs/mexican_mismatch_declarative-broad-focus_La-maestra-vive-en-Paris.wav'},
    {'name': './stim/wavs/peruvian_mismatch_declarative-broad-focus_La-maestra-vive-en-Paris.wav', 'path': './stim/wavs/peruvian_mismatch_declarative-broad-focus_La-maestra-vive-en-Paris.wav'},
    {'name': './stim/wavs/puertorican_mismatch_declarative-broad-focus_La-maestra-vive-en-Paris.wav', 'path': './stim/wavs/puertorican_mismatch_declarative-broad-focus_La-maestra-vive-en-Paris.wav'},
    {'name': './stim/wavs/andalusian_mismatch_declarative-broad-focus_La-nina-lava-el-plato.wav', 'path': './stim/wavs/andalusian_mismatch_declarative-broad-focus_La-nina-lava-el-plato.wav'},
    {'name': './stim/wavs/argentine_mismatch_declarative-broad-focus_La-nina-lava-el-plato.wav', 'path': './stim/wavs/argentine_mismatch_declarative-broad-focus_La-nina-lava-el-plato.wav'},
    {'name': './stim/wavs/castilian_mismatch_declarative-broad-focus_La-nina-lava-el-plato.wav', 'path': './stim/wavs/castilian_mismatch_declarative-broad-focus_La-nina-lava-el-plato.wav'},
    {'name': './stim/wavs/chilean_mismatch_declarative-broad-focus_La-nina-lava-el-plato.wav', 'path': './stim/wavs/chilean_mismatch_declarative-broad-focus_La-nina-lava-el-plato.wav'},
    {'name': './stim/wavs/cuban_mismatch_declarative-broad-focus_La-nina-lava-el-plato.wav', 'path': './stim/wavs/cuban_mismatch_declarative-broad-focus_La-nina-lava-el-plato.wav'},
    {'name': './stim/wavs/mexican_mismatch_declarative-broad-focus_La-nina-lava-el-plato.wav', 'path': './stim/wavs/mexican_mismatch_declarative-broad-focus_La-nina-lava-el-plato.wav'},
    {'name': './stim/wavs/peruvian_mismatch_declarative-broad-focus_La-nina-lava-el-plato.wav', 'path': './stim/wavs/peruvian_mismatch_declarative-broad-focus_La-nina-lava-el-plato.wav'},
    {'name': './stim/wavs/puertorican_mismatch_declarative-broad-focus_La-nina-lava-el-plato.wav', 'path': './stim/wavs/puertorican_mismatch_declarative-broad-focus_La-nina-lava-el-plato.wav'},
    {'name': './stim/wavs/andalusian_mismatch_declarative-broad-focus_Mi-madre-come-la-fruta.wav', 'path': './stim/wavs/andalusian_mismatch_declarative-broad-focus_Mi-madre-come-la-fruta.wav'},
    {'name': './stim/wavs/argentine_mismatch_declarative-broad-focus_Mi-madre-come-la-fruta.wav', 'path': './stim/wavs/argentine_mismatch_declarative-broad-focus_Mi-madre-come-la-fruta.wav'},
    {'name': './stim/wavs/castilian_mismatch_declarative-broad-focus_Mi-madre-come-la-fruta.wav', 'path': './stim/wavs/castilian_mismatch_declarative-broad-focus_Mi-madre-come-la-fruta.wav'},
    {'name': './stim/wavs/chilean_mismatch_declarative-broad-focus_Mi-madre-come-la-fruta.wav', 'path': './stim/wavs/chilean_mismatch_declarative-broad-focus_Mi-madre-come-la-fruta.wav'},
    {'name': './stim/wavs/cuban_mismatch_declarative-broad-focus_Mi-madre-come-la-fruta.wav', 'path': './stim/wavs/cuban_mismatch_declarative-broad-focus_Mi-madre-come-la-fruta.wav'},
    {'name': './stim/wavs/mexican_mismatch_declarative-broad-focus_Mi-madre-come-la-fruta.wav', 'path': './stim/wavs/mexican_mismatch_declarative-broad-focus_Mi-madre-come-la-fruta.wav'},
    {'name': './stim/wavs/peruvian_mismatch_declarative-broad-focus_Mi-madre-come-la-fruta.wav', 'path': './stim/wavs/peruvian_mismatch_declarative-broad-focus_Mi-madre-come-la-fruta.wav'},
    {'name': './stim/wavs/puertorican_mismatch_declarative-broad-focus_Mi-madre-come-la-fruta.wav', 'path': './stim/wavs/puertorican_mismatch_declarative-broad-focus_Mi-madre-come-la-fruta.wav'},
    {'name': './stim/wavs/andalusian_mismatch_declarative-broad-focus_Mi-novio-viene-del-lago.wav', 'path': './stim/wavs/andalusian_mismatch_declarative-broad-focus_Mi-novio-viene-del-lago.wav'},
    {'name': './stim/wavs/argentine_mismatch_declarative-broad-focus_Mi-novio-viene-del-lago.wav', 'path': './stim/wavs/argentine_mismatch_declarative-broad-focus_Mi-novio-viene-del-lago.wav'},
    {'name': './stim/wavs/castilian_mismatch_declarative-broad-focus_Mi-novio-viene-del-lago.wav', 'path': './stim/wavs/castilian_mismatch_declarative-broad-focus_Mi-novio-viene-del-lago.wav'},
    {'name': './stim/wavs/chilean_mismatch_declarative-broad-focus_Mi-novio-viene-del-lago.wav', 'path': './stim/wavs/chilean_mismatch_declarative-broad-focus_Mi-novio-viene-del-lago.wav'},
    {'name': './stim/wavs/cuban_mismatch_declarative-broad-focus_Mi-novio-viene-del-lago.wav', 'path': './stim/wavs/cuban_mismatch_declarative-broad-focus_Mi-novio-viene-del-lago.wav'},
    {'name': './stim/wavs/mexican_mismatch_declarative-broad-focus_Mi-novio-viene-del-lago.wav', 'path': './stim/wavs/mexican_mismatch_declarative-broad-focus_Mi-novio-viene-del-lago.wav'},
    {'name': './stim/wavs/peruvian_mismatch_declarative-broad-focus_Mi-novio-viene-del-lago.wav', 'path': './stim/wavs/peruvian_mismatch_declarative-broad-focus_Mi-novio-viene-del-lago.wav'},
    {'name': './stim/wavs/puertorican_mismatch_declarative-broad-focus_Mi-novio-viene-del-lago.wav', 'path': './stim/wavs/puertorican_mismatch_declarative-broad-focus_Mi-novio-viene-del-lago.wav'},
    {'name': './stim/wavs/andalusian_mismatch_declarative-broad-focus_Mi-tia-odia-la-lluvia.wav', 'path': './stim/wavs/andalusian_mismatch_declarative-broad-focus_Mi-tia-odia-la-lluvia.wav'},
    {'name': './stim/wavs/argentine_mismatch_declarative-broad-focus_Mi-tia-odia-la-lluvia.wav', 'path': './stim/wavs/argentine_mismatch_declarative-broad-focus_Mi-tia-odia-la-lluvia.wav'},
    {'name': './stim/wavs/castilian_mismatch_declarative-broad-focus_Mi-tia-odia-la-lluvia.wav', 'path': './stim/wavs/castilian_mismatch_declarative-broad-focus_Mi-tia-odia-la-lluvia.wav'},
    {'name': './stim/wavs/chilean_mismatch_declarative-broad-focus_Mi-tia-odia-la-lluvia.wav', 'path': './stim/wavs/chilean_mismatch_declarative-broad-focus_Mi-tia-odia-la-lluvia.wav'},
    {'name': './stim/wavs/cuban_mismatch_declarative-broad-focus_Mi-tia-odia-la-lluvia.wav', 'path': './stim/wavs/cuban_mismatch_declarative-broad-focus_Mi-tia-odia-la-lluvia.wav'},
    {'name': './stim/wavs/mexican_mismatch_declarative-broad-focus_Mi-tia-odia-la-lluvia.wav', 'path': './stim/wavs/mexican_mismatch_declarative-broad-focus_Mi-tia-odia-la-lluvia.wav'},
    {'name': './stim/wavs/peruvian_mismatch_declarative-broad-focus_Mi-tia-odia-la-lluvia.wav', 'path': './stim/wavs/peruvian_mismatch_declarative-broad-focus_Mi-tia-odia-la-lluvia.wav'},
    {'name': './stim/wavs/puertorican_mismatch_declarative-broad-focus_Mi-tia-odia-la-lluvia.wav', 'path': './stim/wavs/puertorican_mismatch_declarative-broad-focus_Mi-tia-odia-la-lluvia.wav'},
    {'name': './stim/wavs/andalusian_mismatch_declarative-narrow-focus_El-bebe-comia-muy-bien.wav', 'path': './stim/wavs/andalusian_mismatch_declarative-narrow-focus_El-bebe-comia-muy-bien.wav'},
    {'name': './stim/wavs/argentine_mismatch_declarative-narrow-focus_El-bebe-comia-muy-bien.wav', 'path': './stim/wavs/argentine_mismatch_declarative-narrow-focus_El-bebe-comia-muy-bien.wav'},
    {'name': './stim/wavs/castilian_mismatch_declarative-narrow-focus_El-bebe-comia-muy-bien.wav', 'path': './stim/wavs/castilian_mismatch_declarative-narrow-focus_El-bebe-comia-muy-bien.wav'},
    {'name': './stim/wavs/chilean_mismatch_declarative-narrow-focus_El-bebe-comia-muy-bien.wav', 'path': './stim/wavs/chilean_mismatch_declarative-narrow-focus_El-bebe-comia-muy-bien.wav'},
    {'name': './stim/wavs/cuban_mismatch_declarative-narrow-focus_El-bebe-comia-muy-bien.wav', 'path': './stim/wavs/cuban_mismatch_declarative-narrow-focus_El-bebe-comia-muy-bien.wav'},
    {'name': './stim/wavs/mexican_mismatch_declarative-narrow-focus_El-bebe-comia-muy-bien.wav', 'path': './stim/wavs/mexican_mismatch_declarative-narrow-focus_El-bebe-comia-muy-bien.wav'},
    {'name': './stim/wavs/peruvian_mismatch_declarative-narrow-focus_El-bebe-comia-muy-bien.wav', 'path': './stim/wavs/peruvian_mismatch_declarative-narrow-focus_El-bebe-comia-muy-bien.wav'},
    {'name': './stim/wavs/puertorican_mismatch_declarative-narrow-focus_El-bebe-comia-muy-bien.wav', 'path': './stim/wavs/puertorican_mismatch_declarative-narrow-focus_El-bebe-comia-muy-bien.wav'},
    {'name': './stim/wavs/andalusian_mismatch_declarative-narrow-focus_El-hombre-mira-la-luna.wav', 'path': './stim/wavs/andalusian_mismatch_declarative-narrow-focus_El-hombre-mira-la-luna.wav'},
    {'name': './stim/wavs/argentine_mismatch_declarative-narrow-focus_El-hombre-mira-la-luna.wav', 'path': './stim/wavs/argentine_mismatch_declarative-narrow-focus_El-hombre-mira-la-luna.wav'},
    {'name': './stim/wavs/castilian_mismatch_declarative-narrow-focus_El-hombre-mira-la-luna.wav', 'path': './stim/wavs/castilian_mismatch_declarative-narrow-focus_El-hombre-mira-la-luna.wav'},
    {'name': './stim/wavs/chilean_mismatch_declarative-narrow-focus_El-hombre-mira-la-luna.wav', 'path': './stim/wavs/chilean_mismatch_declarative-narrow-focus_El-hombre-mira-la-luna.wav'},
    {'name': './stim/wavs/cuban_mismatch_declarative-narrow-focus_El-hombre-mira-la-luna.wav', 'path': './stim/wavs/cuban_mismatch_declarative-narrow-focus_El-hombre-mira-la-luna.wav'},
    {'name': './stim/wavs/mexican_mismatch_declarative-narrow-focus_El-hombre-mira-la-luna.wav', 'path': './stim/wavs/mexican_mismatch_declarative-narrow-focus_El-hombre-mira-la-luna.wav'},
    {'name': './stim/wavs/peruvian_mismatch_declarative-narrow-focus_El-hombre-mira-la-luna.wav', 'path': './stim/wavs/peruvian_mismatch_declarative-narrow-focus_El-hombre-mira-la-luna.wav'},
    {'name': './stim/wavs/puertorican_mismatch_declarative-narrow-focus_El-hombre-mira-la-luna.wav', 'path': './stim/wavs/puertorican_mismatch_declarative-narrow-focus_El-hombre-mira-la-luna.wav'},
    {'name': './stim/wavs/andalusian_mismatch_declarative-narrow-focus_El-nino-oye-el-rio.wav', 'path': './stim/wavs/andalusian_mismatch_declarative-narrow-focus_El-nino-oye-el-rio.wav'},
    {'name': './stim/wavs/argentine_mismatch_declarative-narrow-focus_El-nino-oye-el-rio.wav', 'path': './stim/wavs/argentine_mismatch_declarative-narrow-focus_El-nino-oye-el-rio.wav'},
    {'name': './stim/wavs/castilian_mismatch_declarative-narrow-focus_El-nino-oye-el-rio.wav', 'path': './stim/wavs/castilian_mismatch_declarative-narrow-focus_El-nino-oye-el-rio.wav'},
    {'name': './stim/wavs/chilean_mismatch_declarative-narrow-focus_El-nino-oye-el-rio.wav', 'path': './stim/wavs/chilean_mismatch_declarative-narrow-focus_El-nino-oye-el-rio.wav'},
    {'name': './stim/wavs/cuban_mismatch_declarative-narrow-focus_El-nino-oye-el-rio.wav', 'path': './stim/wavs/cuban_mismatch_declarative-narrow-focus_El-nino-oye-el-rio.wav'},
    {'name': './stim/wavs/mexican_mismatch_declarative-narrow-focus_El-nino-oye-el-rio.wav', 'path': './stim/wavs/mexican_mismatch_declarative-narrow-focus_El-nino-oye-el-rio.wav'},
    {'name': './stim/wavs/peruvian_mismatch_declarative-narrow-focus_El-nino-oye-el-rio.wav', 'path': './stim/wavs/peruvian_mismatch_declarative-narrow-focus_El-nino-oye-el-rio.wav'},
    {'name': './stim/wavs/puertorican_mismatch_declarative-narrow-focus_El-nino-oye-el-rio.wav', 'path': './stim/wavs/puertorican_mismatch_declarative-narrow-focus_El-nino-oye-el-rio.wav'},
    {'name': './stim/wavs/andalusian_mismatch_declarative-narrow-focus_La-maestra-vive-en-Paris.wav', 'path': './stim/wavs/andalusian_mismatch_declarative-narrow-focus_La-maestra-vive-en-Paris.wav'},
    {'name': './stim/wavs/argentine_mismatch_declarative-narrow-focus_La-maestra-vive-en-Paris.wav', 'path': './stim/wavs/argentine_mismatch_declarative-narrow-focus_La-maestra-vive-en-Paris.wav'},
    {'name': './stim/wavs/castilian_mismatch_declarative-narrow-focus_La-maestra-vive-en-Paris.wav', 'path': './stim/wavs/castilian_mismatch_declarative-narrow-focus_La-maestra-vive-en-Paris.wav'},
    {'name': './stim/wavs/chilean_mismatch_declarative-narrow-focus_La-maestra-vive-en-Paris.wav', 'path': './stim/wavs/chilean_mismatch_declarative-narrow-focus_La-maestra-vive-en-Paris.wav'},
    {'name': './stim/wavs/cuban_mismatch_declarative-narrow-focus_La-maestra-vive-en-Paris.wav', 'path': './stim/wavs/cuban_mismatch_declarative-narrow-focus_La-maestra-vive-en-Paris.wav'},
    {'name': './stim/wavs/mexican_mismatch_declarative-narrow-focus_La-maestra-vive-en-Paris.wav', 'path': './stim/wavs/mexican_mismatch_declarative-narrow-focus_La-maestra-vive-en-Paris.wav'},
    {'name': './stim/wavs/peruvian_mismatch_declarative-narrow-focus_La-maestra-vive-en-Paris.wav', 'path': './stim/wavs/peruvian_mismatch_declarative-narrow-focus_La-maestra-vive-en-Paris.wav'},
    {'name': './stim/wavs/puertorican_mismatch_declarative-narrow-focus_La-maestra-vive-en-Paris.wav', 'path': './stim/wavs/puertorican_mismatch_declarative-narrow-focus_La-maestra-vive-en-Paris.wav'},
    {'name': './stim/wavs/andalusian_mismatch_declarative-narrow-focus_La-nina-lava-el-plato.wav', 'path': './stim/wavs/andalusian_mismatch_declarative-narrow-focus_La-nina-lava-el-plato.wav'},
    {'name': './stim/wavs/argentine_mismatch_declarative-narrow-focus_La-nina-lava-el-plato.wav', 'path': './stim/wavs/argentine_mismatch_declarative-narrow-focus_La-nina-lava-el-plato.wav'},
    {'name': './stim/wavs/castilian_mismatch_declarative-narrow-focus_La-nina-lava-el-plato.wav', 'path': './stim/wavs/castilian_mismatch_declarative-narrow-focus_La-nina-lava-el-plato.wav'},
    {'name': './stim/wavs/chilean_mismatch_declarative-narrow-focus_La-nina-lava-el-plato.wav', 'path': './stim/wavs/chilean_mismatch_declarative-narrow-focus_La-nina-lava-el-plato.wav'},
    {'name': './stim/wavs/cuban_mismatch_declarative-narrow-focus_La-nina-lava-el-plato.wav', 'path': './stim/wavs/cuban_mismatch_declarative-narrow-focus_La-nina-lava-el-plato.wav'},
    {'name': './stim/wavs/mexican_mismatch_declarative-narrow-focus_La-nina-lava-el-plato.wav', 'path': './stim/wavs/mexican_mismatch_declarative-narrow-focus_La-nina-lava-el-plato.wav'},
    {'name': './stim/wavs/peruvian_mismatch_declarative-narrow-focus_La-nina-lava-el-plato.wav', 'path': './stim/wavs/peruvian_mismatch_declarative-narrow-focus_La-nina-lava-el-plato.wav'},
    {'name': './stim/wavs/puertorican_mismatch_declarative-narrow-focus_La-nina-lava-el-plato.wav', 'path': './stim/wavs/puertorican_mismatch_declarative-narrow-focus_La-nina-lava-el-plato.wav'},
    {'name': './stim/wavs/andalusian_mismatch_declarative-narrow-focus_Mi-madre-come-la-fruta.wav', 'path': './stim/wavs/andalusian_mismatch_declarative-narrow-focus_Mi-madre-come-la-fruta.wav'},
    {'name': './stim/wavs/argentine_mismatch_declarative-narrow-focus_Mi-madre-come-la-fruta.wav', 'path': './stim/wavs/argentine_mismatch_declarative-narrow-focus_Mi-madre-come-la-fruta.wav'},
    {'name': './stim/wavs/castilian_mismatch_declarative-narrow-focus_Mi-madre-come-la-fruta.wav', 'path': './stim/wavs/castilian_mismatch_declarative-narrow-focus_Mi-madre-come-la-fruta.wav'},
    {'name': './stim/wavs/chilean_mismatch_declarative-narrow-focus_Mi-madre-come-la-fruta.wav', 'path': './stim/wavs/chilean_mismatch_declarative-narrow-focus_Mi-madre-come-la-fruta.wav'},
    {'name': './stim/wavs/cuban_mismatch_declarative-narrow-focus_Mi-madre-come-la-fruta.wav', 'path': './stim/wavs/cuban_mismatch_declarative-narrow-focus_Mi-madre-come-la-fruta.wav'},
    {'name': './stim/wavs/mexican_mismatch_declarative-narrow-focus_Mi-madre-come-la-fruta.wav', 'path': './stim/wavs/mexican_mismatch_declarative-narrow-focus_Mi-madre-come-la-fruta.wav'},
    {'name': './stim/wavs/peruvian_mismatch_declarative-narrow-focus_Mi-madre-come-la-fruta.wav', 'path': './stim/wavs/peruvian_mismatch_declarative-narrow-focus_Mi-madre-come-la-fruta.wav'},
    {'name': './stim/wavs/puertorican_mismatch_declarative-narrow-focus_Mi-madre-come-la-fruta.wav', 'path': './stim/wavs/puertorican_mismatch_declarative-narrow-focus_Mi-madre-come-la-fruta.wav'},
    {'name': './stim/wavs/andalusian_mismatch_declarative-narrow-focus_Mi-novio-viene-del-lago.wav', 'path': './stim/wavs/andalusian_mismatch_declarative-narrow-focus_Mi-novio-viene-del-lago.wav'},
    {'name': './stim/wavs/argentine_mismatch_declarative-narrow-focus_Mi-novio-viene-del-lago.wav', 'path': './stim/wavs/argentine_mismatch_declarative-narrow-focus_Mi-novio-viene-del-lago.wav'},
    {'name': './stim/wavs/castilian_mismatch_declarative-narrow-focus_Mi-novio-viene-del-lago.wav', 'path': './stim/wavs/castilian_mismatch_declarative-narrow-focus_Mi-novio-viene-del-lago.wav'},
    {'name': './stim/wavs/chilean_mismatch_declarative-narrow-focus_Mi-novio-viene-del-lago.wav', 'path': './stim/wavs/chilean_mismatch_declarative-narrow-focus_Mi-novio-viene-del-lago.wav'},
    {'name': './stim/wavs/cuban_mismatch_declarative-narrow-focus_Mi-novio-viene-del-lago.wav', 'path': './stim/wavs/cuban_mismatch_declarative-narrow-focus_Mi-novio-viene-del-lago.wav'},
    {'name': './stim/wavs/mexican_mismatch_declarative-narrow-focus_Mi-novio-viene-del-lago.wav', 'path': './stim/wavs/mexican_mismatch_declarative-narrow-focus_Mi-novio-viene-del-lago.wav'},
    {'name': './stim/wavs/peruvian_mismatch_declarative-narrow-focus_Mi-novio-viene-del-lago.wav', 'path': './stim/wavs/peruvian_mismatch_declarative-narrow-focus_Mi-novio-viene-del-lago.wav'},
    {'name': './stim/wavs/puertorican_mismatch_declarative-narrow-focus_Mi-novio-viene-del-lago.wav', 'path': './stim/wavs/puertorican_mismatch_declarative-narrow-focus_Mi-novio-viene-del-lago.wav'},
    {'name': './stim/wavs/andalusian_mismatch_declarative-narrow-focus_Mi-tia-odia-la-lluvia.wav', 'path': './stim/wavs/andalusian_mismatch_declarative-narrow-focus_Mi-tia-odia-la-lluvia.wav'},
    {'name': './stim/wavs/argentine_mismatch_declarative-narrow-focus_Mi-tia-odia-la-lluvia.wav', 'path': './stim/wavs/argentine_mismatch_declarative-narrow-focus_Mi-tia-odia-la-lluvia.wav'},
    {'name': './stim/wavs/castilian_mismatch_declarative-narrow-focus_Mi-tia-odia-la-lluvia.wav', 'path': './stim/wavs/castilian_mismatch_declarative-narrow-focus_Mi-tia-odia-la-lluvia.wav'},
    {'name': './stim/wavs/chilean_mismatch_declarative-narrow-focus_Mi-tia-odia-la-lluvia.wav', 'path': './stim/wavs/chilean_mismatch_declarative-narrow-focus_Mi-tia-odia-la-lluvia.wav'},
    {'name': './stim/wavs/cuban_mismatch_declarative-narrow-focus_Mi-tia-odia-la-lluvia.wav', 'path': './stim/wavs/cuban_mismatch_declarative-narrow-focus_Mi-tia-odia-la-lluvia.wav'},
    {'name': './stim/wavs/mexican_mismatch_declarative-narrow-focus_Mi-tia-odia-la-lluvia.wav', 'path': './stim/wavs/mexican_mismatch_declarative-narrow-focus_Mi-tia-odia-la-lluvia.wav'},
    {'name': './stim/wavs/peruvian_mismatch_declarative-narrow-focus_Mi-tia-odia-la-lluvia.wav', 'path': './stim/wavs/peruvian_mismatch_declarative-narrow-focus_Mi-tia-odia-la-lluvia.wav'},
    {'name': './stim/wavs/puertorican_mismatch_declarative-narrow-focus_Mi-tia-odia-la-lluvia.wav', 'path': './stim/wavs/puertorican_mismatch_declarative-narrow-focus_Mi-tia-odia-la-lluvia.wav'},
    {'name': './stim/wavs/andalusian_mismatch_interrogative-partial-wh_Cuando-comia-la-fruta.wav', 'path': './stim/wavs/andalusian_mismatch_interrogative-partial-wh_Cuando-comia-la-fruta.wav'},
    {'name': './stim/wavs/argentine_mismatch_interrogative-partial-wh_Cuando-comia-la-fruta.wav', 'path': './stim/wavs/argentine_mismatch_interrogative-partial-wh_Cuando-comia-la-fruta.wav'},
    {'name': './stim/wavs/castilian_mismatch_interrogative-partial-wh_Cuando-comia-la-fruta.wav', 'path': './stim/wavs/castilian_mismatch_interrogative-partial-wh_Cuando-comia-la-fruta.wav'},
    {'name': './stim/wavs/chilean_mismatch_interrogative-partial-wh_Cuando-comia-la-fruta.wav', 'path': './stim/wavs/chilean_mismatch_interrogative-partial-wh_Cuando-comia-la-fruta.wav'},
    {'name': './stim/wavs/cuban_mismatch_interrogative-partial-wh_Cuando-comia-la-fruta.wav', 'path': './stim/wavs/cuban_mismatch_interrogative-partial-wh_Cuando-comia-la-fruta.wav'},
    {'name': './stim/wavs/mexican_mismatch_interrogative-partial-wh_Cuando-comia-la-fruta.wav', 'path': './stim/wavs/mexican_mismatch_interrogative-partial-wh_Cuando-comia-la-fruta.wav'},
    {'name': './stim/wavs/peruvian_mismatch_interrogative-partial-wh_Cuando-comia-la-fruta.wav', 'path': './stim/wavs/peruvian_mismatch_interrogative-partial-wh_Cuando-comia-la-fruta.wav'},
    {'name': './stim/wavs/puertorican_mismatch_interrogative-partial-wh_Cuando-comia-la-fruta.wav', 'path': './stim/wavs/puertorican_mismatch_interrogative-partial-wh_Cuando-comia-la-fruta.wav'},
    {'name': './stim/wavs/andalusian_mismatch_interrogative-partial-wh_Cuando-lavaba-el-plato.wav', 'path': './stim/wavs/andalusian_mismatch_interrogative-partial-wh_Cuando-lavaba-el-plato.wav'},
    {'name': './stim/wavs/argentine_mismatch_interrogative-partial-wh_Cuando-lavaba-el-plato.wav', 'path': './stim/wavs/argentine_mismatch_interrogative-partial-wh_Cuando-lavaba-el-plato.wav'},
    {'name': './stim/wavs/castilian_mismatch_interrogative-partial-wh_Cuando-lavaba-el-plato.wav', 'path': './stim/wavs/castilian_mismatch_interrogative-partial-wh_Cuando-lavaba-el-plato.wav'},
    {'name': './stim/wavs/chilean_mismatch_interrogative-partial-wh_Cuando-lavaba-el-plato.wav', 'path': './stim/wavs/chilean_mismatch_interrogative-partial-wh_Cuando-lavaba-el-plato.wav'},
    {'name': './stim/wavs/cuban_mismatch_interrogative-partial-wh_Cuando-lavaba-el-plato.wav', 'path': './stim/wavs/cuban_mismatch_interrogative-partial-wh_Cuando-lavaba-el-plato.wav'},
    {'name': './stim/wavs/mexican_mismatch_interrogative-partial-wh_Cuando-lavaba-el-plato.wav', 'path': './stim/wavs/mexican_mismatch_interrogative-partial-wh_Cuando-lavaba-el-plato.wav'},
    {'name': './stim/wavs/peruvian_mismatch_interrogative-partial-wh_Cuando-lavaba-el-plato.wav', 'path': './stim/wavs/peruvian_mismatch_interrogative-partial-wh_Cuando-lavaba-el-plato.wav'},
    {'name': './stim/wavs/puertorican_mismatch_interrogative-partial-wh_Cuando-lavaba-el-plato.wav', 'path': './stim/wavs/puertorican_mismatch_interrogative-partial-wh_Cuando-lavaba-el-plato.wav'},
    {'name': './stim/wavs/andalusian_mismatch_interrogative-partial-wh_Cuando-miraba-la-luna.wav', 'path': './stim/wavs/andalusian_mismatch_interrogative-partial-wh_Cuando-miraba-la-luna.wav'},
    {'name': './stim/wavs/argentine_mismatch_interrogative-partial-wh_Cuando-miraba-la-luna.wav', 'path': './stim/wavs/argentine_mismatch_interrogative-partial-wh_Cuando-miraba-la-luna.wav'},
    {'name': './stim/wavs/castilian_mismatch_interrogative-partial-wh_Cuando-miraba-la-luna.wav', 'path': './stim/wavs/castilian_mismatch_interrogative-partial-wh_Cuando-miraba-la-luna.wav'},
    {'name': './stim/wavs/chilean_mismatch_interrogative-partial-wh_Cuando-miraba-la-luna.wav', 'path': './stim/wavs/chilean_mismatch_interrogative-partial-wh_Cuando-miraba-la-luna.wav'},
    {'name': './stim/wavs/cuban_mismatch_interrogative-partial-wh_Cuando-miraba-la-luna.wav', 'path': './stim/wavs/cuban_mismatch_interrogative-partial-wh_Cuando-miraba-la-luna.wav'},
    {'name': './stim/wavs/mexican_mismatch_interrogative-partial-wh_Cuando-miraba-la-luna.wav', 'path': './stim/wavs/mexican_mismatch_interrogative-partial-wh_Cuando-miraba-la-luna.wav'},
    {'name': './stim/wavs/peruvian_mismatch_interrogative-partial-wh_Cuando-miraba-la-luna.wav', 'path': './stim/wavs/peruvian_mismatch_interrogative-partial-wh_Cuando-miraba-la-luna.wav'},
    {'name': './stim/wavs/puertorican_mismatch_interrogative-partial-wh_Cuando-miraba-la-luna.wav', 'path': './stim/wavs/puertorican_mismatch_interrogative-partial-wh_Cuando-miraba-la-luna.wav'},
    {'name': './stim/wavs/andalusian_mismatch_interrogative-partial-wh_Por-que-desayuna-muy-bien.wav', 'path': './stim/wavs/andalusian_mismatch_interrogative-partial-wh_Por-que-desayuna-muy-bien.wav'},
    {'name': './stim/wavs/argentine_mismatch_interrogative-partial-wh_Por-que-desayuna-muy-bien.wav', 'path': './stim/wavs/argentine_mismatch_interrogative-partial-wh_Por-que-desayuna-muy-bien.wav'},
    {'name': './stim/wavs/castilian_mismatch_interrogative-partial-wh_Por-que-desayuna-muy-bien.wav', 'path': './stim/wavs/castilian_mismatch_interrogative-partial-wh_Por-que-desayuna-muy-bien.wav'},
    {'name': './stim/wavs/chilean_mismatch_interrogative-partial-wh_Por-que-desayuna-muy-bien.wav', 'path': './stim/wavs/chilean_mismatch_interrogative-partial-wh_Por-que-desayuna-muy-bien.wav'},
    {'name': './stim/wavs/cuban_mismatch_interrogative-partial-wh_Por-que-desayuna-muy-bien.wav', 'path': './stim/wavs/cuban_mismatch_interrogative-partial-wh_Por-que-desayuna-muy-bien.wav'},
    {'name': './stim/wavs/mexican_mismatch_interrogative-partial-wh_Por-que-desayuna-muy-bien.wav', 'path': './stim/wavs/mexican_mismatch_interrogative-partial-wh_Por-que-desayuna-muy-bien.wav'},
    {'name': './stim/wavs/peruvian_mismatch_interrogative-partial-wh_Por-que-desayuna-muy-bien.wav', 'path': './stim/wavs/peruvian_mismatch_interrogative-partial-wh_Por-que-desayuna-muy-bien.wav'},
    {'name': './stim/wavs/puertorican_mismatch_interrogative-partial-wh_Por-que-desayuna-muy-bien.wav', 'path': './stim/wavs/puertorican_mismatch_interrogative-partial-wh_Por-que-desayuna-muy-bien.wav'},
    {'name': './stim/wavs/andalusian_mismatch_interrogative-partial-wh_Por-que-odiaba-la-lluvia.wav', 'path': './stim/wavs/andalusian_mismatch_interrogative-partial-wh_Por-que-odiaba-la-lluvia.wav'},
    {'name': './stim/wavs/argentine_mismatch_interrogative-partial-wh_Por-que-odiaba-la-lluvia.wav', 'path': './stim/wavs/argentine_mismatch_interrogative-partial-wh_Por-que-odiaba-la-lluvia.wav'},
    {'name': './stim/wavs/castilian_mismatch_interrogative-partial-wh_Por-que-odiaba-la-lluvia.wav', 'path': './stim/wavs/castilian_mismatch_interrogative-partial-wh_Por-que-odiaba-la-lluvia.wav'},
    {'name': './stim/wavs/chilean_mismatch_interrogative-partial-wh_Por-que-odiaba-la-lluvia.wav', 'path': './stim/wavs/chilean_mismatch_interrogative-partial-wh_Por-que-odiaba-la-lluvia.wav'},
    {'name': './stim/wavs/cuban_mismatch_interrogative-partial-wh_Por-que-odiaba-la-lluvia.wav', 'path': './stim/wavs/cuban_mismatch_interrogative-partial-wh_Por-que-odiaba-la-lluvia.wav'},
    {'name': './stim/wavs/mexican_mismatch_interrogative-partial-wh_Por-que-odiaba-la-lluvia.wav', 'path': './stim/wavs/mexican_mismatch_interrogative-partial-wh_Por-que-odiaba-la-lluvia.wav'},
    {'name': './stim/wavs/peruvian_mismatch_interrogative-partial-wh_Por-que-odiaba-la-lluvia.wav', 'path': './stim/wavs/peruvian_mismatch_interrogative-partial-wh_Por-que-odiaba-la-lluvia.wav'},
    {'name': './stim/wavs/puertorican_mismatch_interrogative-partial-wh_Por-que-odiaba-la-lluvia.wav', 'path': './stim/wavs/puertorican_mismatch_interrogative-partial-wh_Por-que-odiaba-la-lluvia.wav'},
    {'name': './stim/wavs/andalusian_mismatch_interrogative-partial-wh_Por-que-oia-el-rio.wav', 'path': './stim/wavs/andalusian_mismatch_interrogative-partial-wh_Por-que-oia-el-rio.wav'},
    {'name': './stim/wavs/argentine_mismatch_interrogative-partial-wh_Por-que-oia-el-rio.wav', 'path': './stim/wavs/argentine_mismatch_interrogative-partial-wh_Por-que-oia-el-rio.wav'},
    {'name': './stim/wavs/castilian_mismatch_interrogative-partial-wh_Por-que-oia-el-rio.wav', 'path': './stim/wavs/castilian_mismatch_interrogative-partial-wh_Por-que-oia-el-rio.wav'},
    {'name': './stim/wavs/chilean_mismatch_interrogative-partial-wh_Por-que-oia-el-rio.wav', 'path': './stim/wavs/chilean_mismatch_interrogative-partial-wh_Por-que-oia-el-rio.wav'},
    {'name': './stim/wavs/cuban_mismatch_interrogative-partial-wh_Por-que-oia-el-rio.wav', 'path': './stim/wavs/cuban_mismatch_interrogative-partial-wh_Por-que-oia-el-rio.wav'},
    {'name': './stim/wavs/mexican_mismatch_interrogative-partial-wh_Por-que-oia-el-rio.wav', 'path': './stim/wavs/mexican_mismatch_interrogative-partial-wh_Por-que-oia-el-rio.wav'},
    {'name': './stim/wavs/peruvian_mismatch_interrogative-partial-wh_Por-que-oia-el-rio.wav', 'path': './stim/wavs/peruvian_mismatch_interrogative-partial-wh_Por-que-oia-el-rio.wav'},
    {'name': './stim/wavs/puertorican_mismatch_interrogative-partial-wh_Por-que-oia-el-rio.wav', 'path': './stim/wavs/puertorican_mismatch_interrogative-partial-wh_Por-que-oia-el-rio.wav'},
    {'name': './stim/wavs/andalusian_mismatch_interrogative-partial-wh_Por-que-venia-del-lago.wav', 'path': './stim/wavs/andalusian_mismatch_interrogative-partial-wh_Por-que-venia-del-lago.wav'},
    {'name': './stim/wavs/argentine_mismatch_interrogative-partial-wh_Por-que-venia-del-lago.wav', 'path': './stim/wavs/argentine_mismatch_interrogative-partial-wh_Por-que-venia-del-lago.wav'},
    {'name': './stim/wavs/castilian_mismatch_interrogative-partial-wh_Por-que-venia-del-lago.wav', 'path': './stim/wavs/castilian_mismatch_interrogative-partial-wh_Por-que-venia-del-lago.wav'},
    {'name': './stim/wavs/chilean_mismatch_interrogative-partial-wh_Por-que-venia-del-lago.wav', 'path': './stim/wavs/chilean_mismatch_interrogative-partial-wh_Por-que-venia-del-lago.wav'},
    {'name': './stim/wavs/cuban_mismatch_interrogative-partial-wh_Por-que-venia-del-lago.wav', 'path': './stim/wavs/cuban_mismatch_interrogative-partial-wh_Por-que-venia-del-lago.wav'},
    {'name': './stim/wavs/mexican_mismatch_interrogative-partial-wh_Por-que-venia-del-lago.wav', 'path': './stim/wavs/mexican_mismatch_interrogative-partial-wh_Por-que-venia-del-lago.wav'},
    {'name': './stim/wavs/peruvian_mismatch_interrogative-partial-wh_Por-que-venia-del-lago.wav', 'path': './stim/wavs/peruvian_mismatch_interrogative-partial-wh_Por-que-venia-del-lago.wav'},
    {'name': './stim/wavs/puertorican_mismatch_interrogative-partial-wh_Por-que-venia-del-lago.wav', 'path': './stim/wavs/puertorican_mismatch_interrogative-partial-wh_Por-que-venia-del-lago.wav'},
    {'name': './stim/wavs/andalusian_mismatch_interrogative-partial-wh_Por-que-vivia-en-Paris.wav', 'path': './stim/wavs/andalusian_mismatch_interrogative-partial-wh_Por-que-vivia-en-Paris.wav'},
    {'name': './stim/wavs/argentine_mismatch_interrogative-partial-wh_Por-que-vivia-en-Paris.wav', 'path': './stim/wavs/argentine_mismatch_interrogative-partial-wh_Por-que-vivia-en-Paris.wav'},
    {'name': './stim/wavs/castilian_mismatch_interrogative-partial-wh_Por-que-vivia-en-Paris.wav', 'path': './stim/wavs/castilian_mismatch_interrogative-partial-wh_Por-que-vivia-en-Paris.wav'},
    {'name': './stim/wavs/chilean_mismatch_interrogative-partial-wh_Por-que-vivia-en-Paris.wav', 'path': './stim/wavs/chilean_mismatch_interrogative-partial-wh_Por-que-vivia-en-Paris.wav'},
    {'name': './stim/wavs/cuban_mismatch_interrogative-partial-wh_Por-que-vivia-en-Paris.wav', 'path': './stim/wavs/cuban_mismatch_interrogative-partial-wh_Por-que-vivia-en-Paris.wav'},
    {'name': './stim/wavs/mexican_mismatch_interrogative-partial-wh_Por-que-vivia-en-Paris.wav', 'path': './stim/wavs/mexican_mismatch_interrogative-partial-wh_Por-que-vivia-en-Paris.wav'},
    {'name': './stim/wavs/peruvian_mismatch_interrogative-partial-wh_Por-que-vivia-en-Paris.wav', 'path': './stim/wavs/peruvian_mismatch_interrogative-partial-wh_Por-que-vivia-en-Paris.wav'},
    {'name': './stim/wavs/puertorican_mismatch_interrogative-partial-wh_Por-que-vivia-en-Paris.wav', 'path': './stim/wavs/puertorican_mismatch_interrogative-partial-wh_Por-que-vivia-en-Paris.wav'},
    {'name': './stim/wavs/andalusian_mismatch_interrogative-total-yn_El-bebe-comia-muy-bien.wav', 'path': './stim/wavs/andalusian_mismatch_interrogative-total-yn_El-bebe-comia-muy-bien.wav'},
    {'name': './stim/wavs/argentine_mismatch_interrogative-total-yn_El-bebe-comia-muy-bien.wav', 'path': './stim/wavs/argentine_mismatch_interrogative-total-yn_El-bebe-comia-muy-bien.wav'},
    {'name': './stim/wavs/castilian_mismatch_interrogative-total-yn_El-bebe-comia-muy-bien.wav', 'path': './stim/wavs/castilian_mismatch_interrogative-total-yn_El-bebe-comia-muy-bien.wav'},
    {'name': './stim/wavs/chilean_mismatch_interrogative-total-yn_El-bebe-comia-muy-bien.wav', 'path': './stim/wavs/chilean_mismatch_interrogative-total-yn_El-bebe-comia-muy-bien.wav'},
    {'name': './stim/wavs/cuban_mismatch_interrogative-total-yn_El-bebe-comia-muy-bien.wav', 'path': './stim/wavs/cuban_mismatch_interrogative-total-yn_El-bebe-comia-muy-bien.wav'},
    {'name': './stim/wavs/mexican_mismatch_interrogative-total-yn_El-bebe-comia-muy-bien.wav', 'path': './stim/wavs/mexican_mismatch_interrogative-total-yn_El-bebe-comia-muy-bien.wav'},
    {'name': './stim/wavs/peruvian_mismatch_interrogative-total-yn_El-bebe-comia-muy-bien.wav', 'path': './stim/wavs/peruvian_mismatch_interrogative-total-yn_El-bebe-comia-muy-bien.wav'},
    {'name': './stim/wavs/puertorican_mismatch_interrogative-total-yn_El-bebe-comia-muy-bien.wav', 'path': './stim/wavs/puertorican_mismatch_interrogative-total-yn_El-bebe-comia-muy-bien.wav'},
    {'name': './stim/wavs/andalusian_mismatch_interrogative-total-yn_El-hombre-mira-la-luna.wav', 'path': './stim/wavs/andalusian_mismatch_interrogative-total-yn_El-hombre-mira-la-luna.wav'},
    {'name': './stim/wavs/argentine_mismatch_interrogative-total-yn_El-hombre-mira-la-luna.wav', 'path': './stim/wavs/argentine_mismatch_interrogative-total-yn_El-hombre-mira-la-luna.wav'},
    {'name': './stim/wavs/castilian_mismatch_interrogative-total-yn_El-hombre-mira-la-luna.wav', 'path': './stim/wavs/castilian_mismatch_interrogative-total-yn_El-hombre-mira-la-luna.wav'},
    {'name': './stim/wavs/chilean_mismatch_interrogative-total-yn_El-hombre-mira-la-luna.wav', 'path': './stim/wavs/chilean_mismatch_interrogative-total-yn_El-hombre-mira-la-luna.wav'},
    {'name': './stim/wavs/cuban_mismatch_interrogative-total-yn_El-hombre-mira-la-luna.wav', 'path': './stim/wavs/cuban_mismatch_interrogative-total-yn_El-hombre-mira-la-luna.wav'},
    {'name': './stim/wavs/mexican_mismatch_interrogative-total-yn_El-hombre-mira-la-luna.wav', 'path': './stim/wavs/mexican_mismatch_interrogative-total-yn_El-hombre-mira-la-luna.wav'},
    {'name': './stim/wavs/peruvian_mismatch_interrogative-total-yn_El-hombre-mira-la-luna.wav', 'path': './stim/wavs/peruvian_mismatch_interrogative-total-yn_El-hombre-mira-la-luna.wav'},
    {'name': './stim/wavs/puertorican_mismatch_interrogative-total-yn_El-hombre-mira-la-luna.wav', 'path': './stim/wavs/puertorican_mismatch_interrogative-total-yn_El-hombre-mira-la-luna.wav'},
    {'name': './stim/wavs/andalusian_mismatch_interrogative-total-yn_El-nino-oye-el-rio.wav', 'path': './stim/wavs/andalusian_mismatch_interrogative-total-yn_El-nino-oye-el-rio.wav'},
    {'name': './stim/wavs/argentine_mismatch_interrogative-total-yn_El-nino-oye-el-rio.wav', 'path': './stim/wavs/argentine_mismatch_interrogative-total-yn_El-nino-oye-el-rio.wav'},
    {'name': './stim/wavs/castilian_mismatch_interrogative-total-yn_El-nino-oye-el-rio.wav', 'path': './stim/wavs/castilian_mismatch_interrogative-total-yn_El-nino-oye-el-rio.wav'},
    {'name': './stim/wavs/chilean_mismatch_interrogative-total-yn_El-nino-oye-el-rio.wav', 'path': './stim/wavs/chilean_mismatch_interrogative-total-yn_El-nino-oye-el-rio.wav'},
    {'name': './stim/wavs/cuban_mismatch_interrogative-total-yn_El-nino-oye-el-rio.wav', 'path': './stim/wavs/cuban_mismatch_interrogative-total-yn_El-nino-oye-el-rio.wav'},
    {'name': './stim/wavs/mexican_mismatch_interrogative-total-yn_El-nino-oye-el-rio.wav', 'path': './stim/wavs/mexican_mismatch_interrogative-total-yn_El-nino-oye-el-rio.wav'},
    {'name': './stim/wavs/peruvian_mismatch_interrogative-total-yn_El-nino-oye-el-rio.wav', 'path': './stim/wavs/peruvian_mismatch_interrogative-total-yn_El-nino-oye-el-rio.wav'},
    {'name': './stim/wavs/puertorican_mismatch_interrogative-total-yn_El-nino-oye-el-rio.wav', 'path': './stim/wavs/puertorican_mismatch_interrogative-total-yn_El-nino-oye-el-rio.wav'},
    {'name': './stim/wavs/andalusian_mismatch_interrogative-total-yn_La-maestra-vive-en-Paris.wav', 'path': './stim/wavs/andalusian_mismatch_interrogative-total-yn_La-maestra-vive-en-Paris.wav'},
    {'name': './stim/wavs/argentine_mismatch_interrogative-total-yn_La-maestra-vive-en-Paris.wav', 'path': './stim/wavs/argentine_mismatch_interrogative-total-yn_La-maestra-vive-en-Paris.wav'},
    {'name': './stim/wavs/castilian_mismatch_interrogative-total-yn_La-maestra-vive-en-Paris.wav', 'path': './stim/wavs/castilian_mismatch_interrogative-total-yn_La-maestra-vive-en-Paris.wav'},
    {'name': './stim/wavs/chilean_mismatch_interrogative-total-yn_La-maestra-vive-en-Paris.wav', 'path': './stim/wavs/chilean_mismatch_interrogative-total-yn_La-maestra-vive-en-Paris.wav'},
    {'name': './stim/wavs/cuban_mismatch_interrogative-total-yn_La-maestra-vive-en-Paris.wav', 'path': './stim/wavs/cuban_mismatch_interrogative-total-yn_La-maestra-vive-en-Paris.wav'},
    {'name': './stim/wavs/mexican_mismatch_interrogative-total-yn_La-maestra-vive-en-Paris.wav', 'path': './stim/wavs/mexican_mismatch_interrogative-total-yn_La-maestra-vive-en-Paris.wav'},
    {'name': './stim/wavs/peruvian_mismatch_interrogative-total-yn_La-maestra-vive-en-Paris.wav', 'path': './stim/wavs/peruvian_mismatch_interrogative-total-yn_La-maestra-vive-en-Paris.wav'},
    {'name': './stim/wavs/puertorican_mismatch_interrogative-total-yn_La-maestra-vive-en-Paris.wav', 'path': './stim/wavs/puertorican_mismatch_interrogative-total-yn_La-maestra-vive-en-Paris.wav'},
    {'name': './stim/wavs/andalusian_mismatch_interrogative-total-yn_La-nina-lava-el-plato.wav', 'path': './stim/wavs/andalusian_mismatch_interrogative-total-yn_La-nina-lava-el-plato.wav'},
    {'name': './stim/wavs/argentine_mismatch_interrogative-total-yn_La-nina-lava-el-plato.wav', 'path': './stim/wavs/argentine_mismatch_interrogative-total-yn_La-nina-lava-el-plato.wav'},
    {'name': './stim/wavs/castilian_mismatch_interrogative-total-yn_La-nina-lava-el-plato.wav', 'path': './stim/wavs/castilian_mismatch_interrogative-total-yn_La-nina-lava-el-plato.wav'},
    {'name': './stim/wavs/chilean_mismatch_interrogative-total-yn_La-nina-lava-el-plato.wav', 'path': './stim/wavs/chilean_mismatch_interrogative-total-yn_La-nina-lava-el-plato.wav'},
    {'name': './stim/wavs/cuban_mismatch_interrogative-total-yn_La-nina-lava-el-plato.wav', 'path': './stim/wavs/cuban_mismatch_interrogative-total-yn_La-nina-lava-el-plato.wav'},
    {'name': './stim/wavs/mexican_mismatch_interrogative-total-yn_La-nina-lava-el-plato.wav', 'path': './stim/wavs/mexican_mismatch_interrogative-total-yn_La-nina-lava-el-plato.wav'},
    {'name': './stim/wavs/peruvian_mismatch_interrogative-total-yn_La-nina-lava-el-plato.wav', 'path': './stim/wavs/peruvian_mismatch_interrogative-total-yn_La-nina-lava-el-plato.wav'},
    {'name': './stim/wavs/puertorican_mismatch_interrogative-total-yn_La-nina-lava-el-plato.wav', 'path': './stim/wavs/puertorican_mismatch_interrogative-total-yn_La-nina-lava-el-plato.wav'},
    {'name': './stim/wavs/andalusian_mismatch_interrogative-total-yn_Mi-madre-come-la-fruta.wav', 'path': './stim/wavs/andalusian_mismatch_interrogative-total-yn_Mi-madre-come-la-fruta.wav'},
    {'name': './stim/wavs/argentine_mismatch_interrogative-total-yn_Mi-madre-come-la-fruta.wav', 'path': './stim/wavs/argentine_mismatch_interrogative-total-yn_Mi-madre-come-la-fruta.wav'},
    {'name': './stim/wavs/castilian_mismatch_interrogative-total-yn_Mi-madre-come-la-fruta.wav', 'path': './stim/wavs/castilian_mismatch_interrogative-total-yn_Mi-madre-come-la-fruta.wav'},
    {'name': './stim/wavs/chilean_mismatch_interrogative-total-yn_Mi-madre-come-la-fruta.wav', 'path': './stim/wavs/chilean_mismatch_interrogative-total-yn_Mi-madre-come-la-fruta.wav'},
    {'name': './stim/wavs/cuban_mismatch_interrogative-total-yn_Mi-madre-come-la-fruta.wav', 'path': './stim/wavs/cuban_mismatch_interrogative-total-yn_Mi-madre-come-la-fruta.wav'},
    {'name': './stim/wavs/mexican_mismatch_interrogative-total-yn_Mi-madre-come-la-fruta.wav', 'path': './stim/wavs/mexican_mismatch_interrogative-total-yn_Mi-madre-come-la-fruta.wav'},
    {'name': './stim/wavs/peruvian_mismatch_interrogative-total-yn_Mi-madre-come-la-fruta.wav', 'path': './stim/wavs/peruvian_mismatch_interrogative-total-yn_Mi-madre-come-la-fruta.wav'},
    {'name': './stim/wavs/puertorican_mismatch_interrogative-total-yn_Mi-madre-come-la-fruta.wav', 'path': './stim/wavs/puertorican_mismatch_interrogative-total-yn_Mi-madre-come-la-fruta.wav'},
    {'name': './stim/wavs/andalusian_mismatch_interrogative-total-yn_Mi-novio-viene-del-lago.wav', 'path': './stim/wavs/andalusian_mismatch_interrogative-total-yn_Mi-novio-viene-del-lago.wav'},
    {'name': './stim/wavs/argentine_mismatch_interrogative-total-yn_Mi-novio-viene-del-lago.wav', 'path': './stim/wavs/argentine_mismatch_interrogative-total-yn_Mi-novio-viene-del-lago.wav'},
    {'name': './stim/wavs/castilian_mismatch_interrogative-total-yn_Mi-novio-viene-del-lago.wav', 'path': './stim/wavs/castilian_mismatch_interrogative-total-yn_Mi-novio-viene-del-lago.wav'},
    {'name': './stim/wavs/chilean_mismatch_interrogative-total-yn_Mi-novio-viene-del-lago.wav', 'path': './stim/wavs/chilean_mismatch_interrogative-total-yn_Mi-novio-viene-del-lago.wav'},
    {'name': './stim/wavs/cuban_mismatch_interrogative-total-yn_Mi-novio-viene-del-lago.wav', 'path': './stim/wavs/cuban_mismatch_interrogative-total-yn_Mi-novio-viene-del-lago.wav'},
    {'name': './stim/wavs/mexican_mismatch_interrogative-total-yn_Mi-novio-viene-del-lago.wav', 'path': './stim/wavs/mexican_mismatch_interrogative-total-yn_Mi-novio-viene-del-lago.wav'},
    {'name': './stim/wavs/peruvian_mismatch_interrogative-total-yn_Mi-novio-viene-del-lago.wav', 'path': './stim/wavs/peruvian_mismatch_interrogative-total-yn_Mi-novio-viene-del-lago.wav'},
    {'name': './stim/wavs/puertorican_mismatch_interrogative-total-yn_Mi-novio-viene-del-lago.wav', 'path': './stim/wavs/puertorican_mismatch_interrogative-total-yn_Mi-novio-viene-del-lago.wav'},
    {'name': './stim/wavs/andalusian_mismatch_interrogative-total-yn_Mi-tia-odia-la-lluvia.wav', 'path': './stim/wavs/andalusian_mismatch_interrogative-total-yn_Mi-tia-odia-la-lluvia.wav'},
    {'name': './stim/wavs/argentine_mismatch_interrogative-total-yn_Mi-tia-odia-la-lluvia.wav', 'path': './stim/wavs/argentine_mismatch_interrogative-total-yn_Mi-tia-odia-la-lluvia.wav'},
    {'name': './stim/wavs/castilian_mismatch_interrogative-total-yn_Mi-tia-odia-la-lluvia.wav', 'path': './stim/wavs/castilian_mismatch_interrogative-total-yn_Mi-tia-odia-la-lluvia.wav'},
    {'name': './stim/wavs/chilean_mismatch_interrogative-total-yn_Mi-tia-odia-la-lluvia.wav', 'path': './stim/wavs/chilean_mismatch_interrogative-total-yn_Mi-tia-odia-la-lluvia.wav'},
    {'name': './stim/wavs/cuban_mismatch_interrogative-total-yn_Mi-tia-odia-la-lluvia.wav', 'path': './stim/wavs/cuban_mismatch_interrogative-total-yn_Mi-tia-odia-la-lluvia.wav'},
    {'name': './stim/wavs/mexican_mismatch_interrogative-total-yn_Mi-tia-odia-la-lluvia.wav', 'path': './stim/wavs/mexican_mismatch_interrogative-total-yn_Mi-tia-odia-la-lluvia.wav'},
    {'name': './stim/wavs/peruvian_mismatch_interrogative-total-yn_Mi-tia-odia-la-lluvia.wav', 'path': './stim/wavs/peruvian_mismatch_interrogative-total-yn_Mi-tia-odia-la-lluvia.wav'},
    {'name': './stim/wavs/puertorican_mismatch_interrogative-total-yn_Mi-tia-odia-la-lluvia.wav', 'path': './stim/wavs/puertorican_mismatch_interrogative-total-yn_Mi-tia-odia-la-lluvia.wav'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["id"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instructions_exposureClock;
var text_exposure_instructions;
var text_exposure_instructions_continue;
var key_resp_exposure_instructions;
var exposureClock;
var fix;
var instructions_2afcClock;
var text_2afc_instructions;
var text_2afc_instructions_continue;
var key_resp_2afc_instructions;
var practice_2afcClock;
var sound_2afc_practice_stim;
var text_2afc_response_yes_practice;
var text_2afc_response_no_practice;
var key_resp_2afc_practice;
var text_2afc_question_practice;
var check_2afcClock;
var text_2afc_check;
var key_resp_2afc_gotit;
var trial_2afcClock;
var col_name;
var sound_stim_trial;
var text_response_yes_trial;
var text_response_no_trial;
var key_resp_2afc_trial;
var text_question_trial;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instructions_exposure"
  instructions_exposureClock = new util.Clock();
  text_exposure_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_exposure_instructions',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  text_exposure_instructions_continue = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_exposure_instructions_continue',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.045,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -1.0 
  });
  
  key_resp_exposure_instructions = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "exposure"
  exposureClock = new util.Clock();
  fix = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "instructions_2afc"
  instructions_2afcClock = new util.Clock();
  text_2afc_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2afc_instructions',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  text_2afc_instructions_continue = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2afc_instructions_continue',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.045,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_2afc_instructions = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_2afc"
  practice_2afcClock = new util.Clock();
  sound_2afc_practice_stim = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_2afc_practice_stim.setVolume(1);
  text_2afc_response_yes_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2afc_response_yes_practice',
    text: 'Sí',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  text_2afc_response_no_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2afc_response_no_practice',
    text: 'No',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  key_resp_2afc_practice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_2afc_question_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2afc_question_practice',
    text: 'Es una pregunta?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('blue'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "check_2afc"
  check_2afcClock = new util.Clock();
  text_2afc_check = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2afc_check',
    text: 'Bien! Ahora vamos a empezar. \n\nIntenta responder lo más rápido posible sin cometer errores después de escuchar cada enunciado. \n\n(presiona la barra espaciadora para comenzar)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_2afc_gotit = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_2afc"
  trial_2afcClock = new util.Clock();
  // Run 'Begin Experiment' code from code_2afc
  col_name = ['andalusian', 'argentine', 'castilian', 'chilean', 'cuban', 'mexican', 'peruvian', 'puertorican'];
  
  sound_stim_trial = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_stim_trial.setVolume(1);
  text_response_yes_trial = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_response_yes_trial',
    text: 'Sí',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  text_response_no_trial = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_response_no_trial',
    text: 'No',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  key_resp_2afc_trial = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_question_trial = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_question_trial',
    text: 'Es una pregunta?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('blue'),  opacity: 1,
    depth: -5.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var instructions_exposure_loop;
function instructions_exposure_loopLoopBegin(instructions_exposure_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    instructions_exposure_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'instructions/exposure_instructions_sp_text.xlsx',
      seed: undefined, name: 'instructions_exposure_loop'
    });
    psychoJS.experiment.addLoop(instructions_exposure_loop); // add the loop to the experiment
    currentLoop = instructions_exposure_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    instructions_exposure_loop.forEach(function() {
      snapshot = instructions_exposure_loop.getSnapshot();
    
      instructions_exposure_loopLoopScheduler.add(importConditions(snapshot));
      instructions_exposure_loopLoopScheduler.add(instructions_exposureRoutineBegin(snapshot));
      instructions_exposure_loopLoopScheduler.add(instructions_exposureRoutineEachFrame());
      instructions_exposure_loopLoopScheduler.add(instructions_exposureRoutineEnd(snapshot));
      instructions_exposure_loopLoopScheduler.add(instructions_exposure_loopLoopEndIteration(instructions_exposure_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function instructions_exposure_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(instructions_exposure_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function instructions_exposure_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var exposure_loop;
function exposure_loopLoopBegin(exposure_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    exposure_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'trials/exposure_trials.xlsx',
      seed: undefined, name: 'exposure_loop'
    });
    psychoJS.experiment.addLoop(exposure_loop); // add the loop to the experiment
    currentLoop = exposure_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    exposure_loop.forEach(function() {
      snapshot = exposure_loop.getSnapshot();
    
      exposure_loopLoopScheduler.add(importConditions(snapshot));
      exposure_loopLoopScheduler.add(exposureRoutineBegin(snapshot));
      exposure_loopLoopScheduler.add(exposureRoutineEachFrame());
      exposure_loopLoopScheduler.add(exposureRoutineEnd(snapshot));
      exposure_loopLoopScheduler.add(exposure_loopLoopEndIteration(exposure_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function exposure_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(exposure_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function exposure_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var instructions_2afc_loop;
function instructions_2afc_loopLoopBegin(instructions_2afc_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    instructions_2afc_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'instructions/2afc_instructions_sp_text.xlsx',
      seed: undefined, name: 'instructions_2afc_loop'
    });
    psychoJS.experiment.addLoop(instructions_2afc_loop); // add the loop to the experiment
    currentLoop = instructions_2afc_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    instructions_2afc_loop.forEach(function() {
      snapshot = instructions_2afc_loop.getSnapshot();
    
      instructions_2afc_loopLoopScheduler.add(importConditions(snapshot));
      instructions_2afc_loopLoopScheduler.add(instructions_2afcRoutineBegin(snapshot));
      instructions_2afc_loopLoopScheduler.add(instructions_2afcRoutineEachFrame());
      instructions_2afc_loopLoopScheduler.add(instructions_2afcRoutineEnd(snapshot));
      instructions_2afc_loopLoopScheduler.add(instructions_2afc_loopLoopEndIteration(instructions_2afc_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function instructions_2afc_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(instructions_2afc_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function instructions_2afc_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_2afc_practice_loop;
function trials_2afc_practice_loopLoopBegin(trials_2afc_practice_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2afc_practice_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'trials/twoafc_practice_trials.xlsx',
      seed: undefined, name: 'trials_2afc_practice_loop'
    });
    psychoJS.experiment.addLoop(trials_2afc_practice_loop); // add the loop to the experiment
    currentLoop = trials_2afc_practice_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_2afc_practice_loop.forEach(function() {
      snapshot = trials_2afc_practice_loop.getSnapshot();
    
      trials_2afc_practice_loopLoopScheduler.add(importConditions(snapshot));
      trials_2afc_practice_loopLoopScheduler.add(practice_2afcRoutineBegin(snapshot));
      trials_2afc_practice_loopLoopScheduler.add(practice_2afcRoutineEachFrame());
      trials_2afc_practice_loopLoopScheduler.add(practice_2afcRoutineEnd(snapshot));
      trials_2afc_practice_loopLoopScheduler.add(trials_2afc_practice_loopLoopEndIteration(trials_2afc_practice_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2afc_practice_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2afc_practice_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2afc_practice_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_2afc_loop;
function trials_2afc_loopLoopBegin(trials_2afc_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2afc_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'trials/twoafc_trials.xlsx',
      seed: undefined, name: 'trials_2afc_loop'
    });
    psychoJS.experiment.addLoop(trials_2afc_loop); // add the loop to the experiment
    currentLoop = trials_2afc_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_2afc_loop.forEach(function() {
      snapshot = trials_2afc_loop.getSnapshot();
    
      trials_2afc_loopLoopScheduler.add(importConditions(snapshot));
      trials_2afc_loopLoopScheduler.add(trial_2afcRoutineBegin(snapshot));
      trials_2afc_loopLoopScheduler.add(trial_2afcRoutineEachFrame());
      trials_2afc_loopLoopScheduler.add(trial_2afcRoutineEnd(snapshot));
      trials_2afc_loopLoopScheduler.add(trials_2afc_loopLoopEndIteration(trials_2afc_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2afc_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2afc_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2afc_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var t;
var frameN;
var continueRoutine;
var instructions_exposureMaxDurationReached;
var _key_resp_exposure_instructions_allKeys;
var instructions_exposureMaxDuration;
var instructions_exposureComponents;
function instructions_exposureRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions_exposure' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructions_exposureClock.reset();
    routineTimer.reset();
    instructions_exposureMaxDurationReached = false;
    // update component parameters for each repeat
    text_exposure_instructions.setText(instructions_text);
    text_exposure_instructions_continue.setText(continue_text);
    key_resp_exposure_instructions.keys = undefined;
    key_resp_exposure_instructions.rt = undefined;
    _key_resp_exposure_instructions_allKeys = [];
    psychoJS.experiment.addData('instructions_exposure.started', globalClock.getTime());
    instructions_exposureMaxDuration = null
    // keep track of which components have finished
    instructions_exposureComponents = [];
    instructions_exposureComponents.push(text_exposure_instructions);
    instructions_exposureComponents.push(text_exposure_instructions_continue);
    instructions_exposureComponents.push(key_resp_exposure_instructions);
    
    instructions_exposureComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_exposureRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions_exposure' ---
    // get current time
    t = instructions_exposureClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_exposure_instructions* updates
    if (t >= 0.0 && text_exposure_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_exposure_instructions.tStart = t;  // (not accounting for frame time here)
      text_exposure_instructions.frameNStart = frameN;  // exact frame index
      
      text_exposure_instructions.setAutoDraw(true);
    }
    
    
    // *text_exposure_instructions_continue* updates
    if (t >= 0.0 && text_exposure_instructions_continue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_exposure_instructions_continue.tStart = t;  // (not accounting for frame time here)
      text_exposure_instructions_continue.frameNStart = frameN;  // exact frame index
      
      text_exposure_instructions_continue.setAutoDraw(true);
    }
    
    
    // *key_resp_exposure_instructions* updates
    if (t >= 0.0 && key_resp_exposure_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_exposure_instructions.tStart = t;  // (not accounting for frame time here)
      key_resp_exposure_instructions.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_exposure_instructions.clock.reset();
      key_resp_exposure_instructions.start();
      key_resp_exposure_instructions.clearEvents();
    }
    
    if (key_resp_exposure_instructions.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_exposure_instructions.getKeys({keyList: ['c', 'space'], waitRelease: false});
      _key_resp_exposure_instructions_allKeys = _key_resp_exposure_instructions_allKeys.concat(theseKeys);
      if (_key_resp_exposure_instructions_allKeys.length > 0) {
        key_resp_exposure_instructions.keys = _key_resp_exposure_instructions_allKeys[_key_resp_exposure_instructions_allKeys.length - 1].name;  // just the last key pressed
        key_resp_exposure_instructions.rt = _key_resp_exposure_instructions_allKeys[_key_resp_exposure_instructions_allKeys.length - 1].rt;
        key_resp_exposure_instructions.duration = _key_resp_exposure_instructions_allKeys[_key_resp_exposure_instructions_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructions_exposureComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_exposureRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions_exposure' ---
    instructions_exposureComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instructions_exposure.stopped', globalClock.getTime());
    key_resp_exposure_instructions.stop();
    // the Routine "instructions_exposure" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exposureMaxDurationReached;
var exposureMaxDuration;
var exposureComponents;
function exposureRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exposure' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exposureClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    exposureMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('exposure.started', globalClock.getTime());
    exposureMaxDuration = null
    // keep track of which components have finished
    exposureComponents = [];
    exposureComponents.push(fix);
    
    exposureComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function exposureRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exposure' ---
    // get current time
    t = exposureClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix* updates
    if (t >= 0.0 && fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix.tStart = t;  // (not accounting for frame time here)
      fix.frameNStart = frameN;  // exact frame index
      
      fix.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    exposureComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exposureRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exposure' ---
    exposureComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('exposure.stopped', globalClock.getTime());
    if (exposureMaxDurationReached) {
        exposureClock.add(exposureMaxDuration);
    } else {
        exposureClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructions_2afcMaxDurationReached;
var _key_resp_2afc_instructions_allKeys;
var instructions_2afcMaxDuration;
var instructions_2afcComponents;
function instructions_2afcRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions_2afc' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructions_2afcClock.reset();
    routineTimer.reset();
    instructions_2afcMaxDurationReached = false;
    // update component parameters for each repeat
    text_2afc_instructions.setText(instructions_text);
    text_2afc_instructions_continue.setText(continue_text);
    key_resp_2afc_instructions.keys = undefined;
    key_resp_2afc_instructions.rt = undefined;
    _key_resp_2afc_instructions_allKeys = [];
    psychoJS.experiment.addData('instructions_2afc.started', globalClock.getTime());
    instructions_2afcMaxDuration = null
    // keep track of which components have finished
    instructions_2afcComponents = [];
    instructions_2afcComponents.push(text_2afc_instructions);
    instructions_2afcComponents.push(text_2afc_instructions_continue);
    instructions_2afcComponents.push(key_resp_2afc_instructions);
    
    instructions_2afcComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_2afcRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions_2afc' ---
    // get current time
    t = instructions_2afcClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2afc_instructions* updates
    if (t >= 0.0 && text_2afc_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2afc_instructions.tStart = t;  // (not accounting for frame time here)
      text_2afc_instructions.frameNStart = frameN;  // exact frame index
      
      text_2afc_instructions.setAutoDraw(true);
    }
    
    
    // *text_2afc_instructions_continue* updates
    if (t >= 0.0 && text_2afc_instructions_continue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2afc_instructions_continue.tStart = t;  // (not accounting for frame time here)
      text_2afc_instructions_continue.frameNStart = frameN;  // exact frame index
      
      text_2afc_instructions_continue.setAutoDraw(true);
    }
    
    
    // *key_resp_2afc_instructions* updates
    if (t >= 0.0 && key_resp_2afc_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2afc_instructions.tStart = t;  // (not accounting for frame time here)
      key_resp_2afc_instructions.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_2afc_instructions.clock.reset();
      key_resp_2afc_instructions.start();
      key_resp_2afc_instructions.clearEvents();
    }
    
    if (key_resp_2afc_instructions.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2afc_instructions.getKeys({keyList: ['c', 'space'], waitRelease: false});
      _key_resp_2afc_instructions_allKeys = _key_resp_2afc_instructions_allKeys.concat(theseKeys);
      if (_key_resp_2afc_instructions_allKeys.length > 0) {
        key_resp_2afc_instructions.keys = _key_resp_2afc_instructions_allKeys[_key_resp_2afc_instructions_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2afc_instructions.rt = _key_resp_2afc_instructions_allKeys[_key_resp_2afc_instructions_allKeys.length - 1].rt;
        key_resp_2afc_instructions.duration = _key_resp_2afc_instructions_allKeys[_key_resp_2afc_instructions_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructions_2afcComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_2afcRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions_2afc' ---
    instructions_2afcComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instructions_2afc.stopped', globalClock.getTime());
    key_resp_2afc_instructions.stop();
    // the Routine "instructions_2afc" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_2afcMaxDurationReached;
var _key_resp_2afc_practice_allKeys;
var practice_2afcMaxDuration;
var practice_2afcComponents;
function practice_2afcRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_2afc' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    practice_2afcClock.reset();
    routineTimer.reset();
    practice_2afcMaxDurationReached = false;
    // update component parameters for each repeat
    sound_2afc_practice_stim.setValue(path);
    sound_2afc_practice_stim.setVolume(1);
    key_resp_2afc_practice.keys = undefined;
    key_resp_2afc_practice.rt = undefined;
    _key_resp_2afc_practice_allKeys = [];
    psychoJS.experiment.addData('practice_2afc.started', globalClock.getTime());
    practice_2afcMaxDuration = null
    // keep track of which components have finished
    practice_2afcComponents = [];
    practice_2afcComponents.push(sound_2afc_practice_stim);
    practice_2afcComponents.push(text_2afc_response_yes_practice);
    practice_2afcComponents.push(text_2afc_response_no_practice);
    practice_2afcComponents.push(key_resp_2afc_practice);
    practice_2afcComponents.push(text_2afc_question_practice);
    
    practice_2afcComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practice_2afcRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_2afc' ---
    // get current time
    t = practice_2afcClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop sound_2afc_practice_stim
    if (t >= 0.5 && sound_2afc_practice_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_2afc_practice_stim.tStart = t;  // (not accounting for frame time here)
      sound_2afc_practice_stim.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_2afc_practice_stim.play(); });  // screen flip
      sound_2afc_practice_stim.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_2afc_practice_stim.getDuration() + sound_2afc_practice_stim.tStart)     && sound_2afc_practice_stim.status === PsychoJS.Status.STARTED) {
      sound_2afc_practice_stim.stop();  // stop the sound (if longer than duration)
      sound_2afc_practice_stim.status = PsychoJS.Status.FINISHED;
    }
    
    // *text_2afc_response_yes_practice* updates
    if (t >= 0.25 && text_2afc_response_yes_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2afc_response_yes_practice.tStart = t;  // (not accounting for frame time here)
      text_2afc_response_yes_practice.frameNStart = frameN;  // exact frame index
      
      text_2afc_response_yes_practice.setAutoDraw(true);
    }
    
    
    // *text_2afc_response_no_practice* updates
    if (t >= 0.25 && text_2afc_response_no_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2afc_response_no_practice.tStart = t;  // (not accounting for frame time here)
      text_2afc_response_no_practice.frameNStart = frameN;  // exact frame index
      
      text_2afc_response_no_practice.setAutoDraw(true);
    }
    
    
    // *key_resp_2afc_practice* updates
    if (t >= 0.5 && key_resp_2afc_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2afc_practice.tStart = t;  // (not accounting for frame time here)
      key_resp_2afc_practice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2afc_practice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2afc_practice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2afc_practice.clearEvents(); });
    }
    
    if (key_resp_2afc_practice.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2afc_practice.getKeys({keyList: ['1', '0'], waitRelease: false});
      _key_resp_2afc_practice_allKeys = _key_resp_2afc_practice_allKeys.concat(theseKeys);
      if (_key_resp_2afc_practice_allKeys.length > 0) {
        key_resp_2afc_practice.keys = _key_resp_2afc_practice_allKeys[0].name;  // just the first key pressed
        key_resp_2afc_practice.rt = _key_resp_2afc_practice_allKeys[0].rt;
        key_resp_2afc_practice.duration = _key_resp_2afc_practice_allKeys[0].duration;
        // was this correct?
        if (key_resp_2afc_practice.keys == correct_response) {
            key_resp_2afc_practice.corr = 1;
        } else {
            key_resp_2afc_practice.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_2afc_question_practice* updates
    if (t >= 0.0 && text_2afc_question_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2afc_question_practice.tStart = t;  // (not accounting for frame time here)
      text_2afc_question_practice.frameNStart = frameN;  // exact frame index
      
      text_2afc_question_practice.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    practice_2afcComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_2afcRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_2afc' ---
    practice_2afcComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('practice_2afc.stopped', globalClock.getTime());
    sound_2afc_practice_stim.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_2afc_practice.keys === undefined) {
      if (['None','none',undefined].includes(correct_response)) {
         key_resp_2afc_practice.corr = 1;  // correct non-response
      } else {
         key_resp_2afc_practice.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2afc_practice.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2afc_practice.keys', key_resp_2afc_practice.keys);
    psychoJS.experiment.addData('key_resp_2afc_practice.corr', key_resp_2afc_practice.corr);
    if (typeof key_resp_2afc_practice.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2afc_practice.rt', key_resp_2afc_practice.rt);
        psychoJS.experiment.addData('key_resp_2afc_practice.duration', key_resp_2afc_practice.duration);
        routineTimer.reset();
        }
    
    key_resp_2afc_practice.stop();
    // the Routine "practice_2afc" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var check_2afcMaxDurationReached;
var _key_resp_2afc_gotit_allKeys;
var check_2afcMaxDuration;
var check_2afcComponents;
function check_2afcRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'check_2afc' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    check_2afcClock.reset();
    routineTimer.reset();
    check_2afcMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_2afc_gotit.keys = undefined;
    key_resp_2afc_gotit.rt = undefined;
    _key_resp_2afc_gotit_allKeys = [];
    psychoJS.experiment.addData('check_2afc.started', globalClock.getTime());
    check_2afcMaxDuration = null
    // keep track of which components have finished
    check_2afcComponents = [];
    check_2afcComponents.push(text_2afc_check);
    check_2afcComponents.push(key_resp_2afc_gotit);
    
    check_2afcComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function check_2afcRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'check_2afc' ---
    // get current time
    t = check_2afcClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2afc_check* updates
    if (t >= 0.0 && text_2afc_check.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2afc_check.tStart = t;  // (not accounting for frame time here)
      text_2afc_check.frameNStart = frameN;  // exact frame index
      
      text_2afc_check.setAutoDraw(true);
    }
    
    
    // *key_resp_2afc_gotit* updates
    if (t >= 0.0 && key_resp_2afc_gotit.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2afc_gotit.tStart = t;  // (not accounting for frame time here)
      key_resp_2afc_gotit.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2afc_gotit.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2afc_gotit.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2afc_gotit.clearEvents(); });
    }
    
    if (key_resp_2afc_gotit.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2afc_gotit.getKeys({keyList: ['c', 'space'], waitRelease: false});
      _key_resp_2afc_gotit_allKeys = _key_resp_2afc_gotit_allKeys.concat(theseKeys);
      if (_key_resp_2afc_gotit_allKeys.length > 0) {
        key_resp_2afc_gotit.keys = _key_resp_2afc_gotit_allKeys[_key_resp_2afc_gotit_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2afc_gotit.rt = _key_resp_2afc_gotit_allKeys[_key_resp_2afc_gotit_allKeys.length - 1].rt;
        key_resp_2afc_gotit.duration = _key_resp_2afc_gotit_allKeys[_key_resp_2afc_gotit_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    check_2afcComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function check_2afcRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'check_2afc' ---
    check_2afcComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('check_2afc.stopped', globalClock.getTime());
    key_resp_2afc_gotit.stop();
    // the Routine "check_2afc" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_2afcMaxDurationReached;
var the_col;
var _key_resp_2afc_trial_allKeys;
var trial_2afcMaxDuration;
var trial_2afcComponents;
function trial_2afcRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_2afc' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_2afcClock.reset();
    routineTimer.reset();
    trial_2afcMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2afc
    the_col = col_name[Math.floor(Math.random() * col_name.length)];
    sound_stim_trial.setValue(eval(the_col));
    sound_stim_trial.setVolume(1);
    key_resp_2afc_trial.keys = undefined;
    key_resp_2afc_trial.rt = undefined;
    _key_resp_2afc_trial_allKeys = [];
    psychoJS.experiment.addData('trial_2afc.started', globalClock.getTime());
    trial_2afcMaxDuration = null
    // keep track of which components have finished
    trial_2afcComponents = [];
    trial_2afcComponents.push(sound_stim_trial);
    trial_2afcComponents.push(text_response_yes_trial);
    trial_2afcComponents.push(text_response_no_trial);
    trial_2afcComponents.push(key_resp_2afc_trial);
    trial_2afcComponents.push(text_question_trial);
    
    trial_2afcComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trial_2afcRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_2afc' ---
    // get current time
    t = trial_2afcClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop sound_stim_trial
    if (t >= 0.5 && sound_stim_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_stim_trial.tStart = t;  // (not accounting for frame time here)
      sound_stim_trial.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_stim_trial.play(); });  // screen flip
      sound_stim_trial.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_stim_trial.getDuration() + sound_stim_trial.tStart)     && sound_stim_trial.status === PsychoJS.Status.STARTED) {
      sound_stim_trial.stop();  // stop the sound (if longer than duration)
      sound_stim_trial.status = PsychoJS.Status.FINISHED;
    }
    
    // *text_response_yes_trial* updates
    if (t >= 0.25 && text_response_yes_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_response_yes_trial.tStart = t;  // (not accounting for frame time here)
      text_response_yes_trial.frameNStart = frameN;  // exact frame index
      
      text_response_yes_trial.setAutoDraw(true);
    }
    
    
    // *text_response_no_trial* updates
    if (t >= 0.25 && text_response_no_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_response_no_trial.tStart = t;  // (not accounting for frame time here)
      text_response_no_trial.frameNStart = frameN;  // exact frame index
      
      text_response_no_trial.setAutoDraw(true);
    }
    
    
    // *key_resp_2afc_trial* updates
    if (t >= 0.5 && key_resp_2afc_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2afc_trial.tStart = t;  // (not accounting for frame time here)
      key_resp_2afc_trial.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2afc_trial.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2afc_trial.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2afc_trial.clearEvents(); });
    }
    
    if (key_resp_2afc_trial.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2afc_trial.getKeys({keyList: ['1', '0'], waitRelease: false});
      _key_resp_2afc_trial_allKeys = _key_resp_2afc_trial_allKeys.concat(theseKeys);
      if (_key_resp_2afc_trial_allKeys.length > 0) {
        key_resp_2afc_trial.keys = _key_resp_2afc_trial_allKeys[0].name;  // just the first key pressed
        key_resp_2afc_trial.rt = _key_resp_2afc_trial_allKeys[0].rt;
        key_resp_2afc_trial.duration = _key_resp_2afc_trial_allKeys[0].duration;
        // was this correct?
        if (key_resp_2afc_trial.keys == correct_response) {
            key_resp_2afc_trial.corr = 1;
        } else {
            key_resp_2afc_trial.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_question_trial* updates
    if (t >= 0.0 && text_question_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_question_trial.tStart = t;  // (not accounting for frame time here)
      text_question_trial.frameNStart = frameN;  // exact frame index
      
      text_question_trial.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trial_2afcComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_2afcRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_2afc' ---
    trial_2afcComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial_2afc.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_2afc
    trials_2afc_loop.addData("the_col", the_col);
    
    sound_stim_trial.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_2afc_trial.keys === undefined) {
      if (['None','none',undefined].includes(correct_response)) {
         key_resp_2afc_trial.corr = 1;  // correct non-response
      } else {
         key_resp_2afc_trial.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2afc_trial.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2afc_trial.keys', key_resp_2afc_trial.keys);
    psychoJS.experiment.addData('key_resp_2afc_trial.corr', key_resp_2afc_trial.corr);
    if (typeof key_resp_2afc_trial.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2afc_trial.rt', key_resp_2afc_trial.rt);
        psychoJS.experiment.addData('key_resp_2afc_trial.duration', key_resp_2afc_trial.duration);
        routineTimer.reset();
        }
    
    key_resp_2afc_trial.stop();
    // the Routine "trial_2afc" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
