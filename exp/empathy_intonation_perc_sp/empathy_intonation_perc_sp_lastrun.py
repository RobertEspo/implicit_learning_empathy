#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2024.2.4),
    on February 17, 2025, at 15:53
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout, hardware
from psychopy.tools import environmenttools
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER, priority)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard

# --- Setup global variables (available in all functions) ---
# create a device manager to handle hardware (keyboards, mice, mirophones, speakers, etc.)
deviceManager = hardware.DeviceManager()
# ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# store info about the experiment session
psychopyVersion = '2024.2.4'
expName = 'empathy_intonation_perc_sp'  # from the Builder filename that created this script
# information about this experiment
expInfo = {
    'id': '',
    'La variedad del español que mejor conozcas': 'ej. cubano',
    'date|hid': data.getDateStr(),
    'expName|hid': expName,
    'psychopyVersion|hid': psychopyVersion,
}

# --- Define some variables which will change depending on pilot mode ---
'''
To run in pilot mode, either use the run/pilot toggle in Builder, Coder and Runner, 
or run the experiment with `--pilot` as an argument. To change what pilot 
#mode does, check out the 'Pilot mode' tab in preferences.
'''
# work out from system args whether we are running in pilot mode
PILOTING = core.setPilotModeFromArgs()
# start off with values from experiment settings
_fullScr = True
_winSize = [1920, 1080]
# if in pilot mode, apply overrides according to preferences
if PILOTING:
    # force windowed mode
    if prefs.piloting['forceWindowed']:
        _fullScr = False
        # set window size
        _winSize = prefs.piloting['forcedWindowSize']

def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # show participant info dialog
    dlg = gui.DlgFromDict(
        dictionary=expInfo, sortKeys=False, title=expName, alwaysOnTop=True
    )
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    # remove dialog-specific syntax from expInfo
    for key, val in expInfo.copy().items():
        newKey, _ = data.utils.parsePipeSyntax(key)
        expInfo[newKey] = expInfo.pop(key)
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/%s_%s_%s' % (expInfo['id'], expName, expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version='',
        extraInfo=expInfo, runtimeInfo=None,
        originPath='C:\\Users\\rober\\Desktop\\implicit_learning_empathy\\exp\\empathy_intonation_perc_sp\\empathy_intonation_perc_sp_lastrun.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # set how much information should be printed to the console / app
    if PILOTING:
        logging.console.setLevel(
            prefs.piloting['pilotConsoleLoggingLevel']
        )
    else:
        logging.console.setLevel('warning')
    # save a log file for detail verbose info
    logFile = logging.LogFile(filename+'.log')
    if PILOTING:
        logFile.setLevel(
            prefs.piloting['pilotLoggingLevel']
        )
    else:
        logFile.setLevel(
            logging.getLevel('debug')
        )
    
    return logFile


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if PILOTING:
        logging.debug('Fullscreen settings ignored as running in pilot mode.')
    
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=_winSize, fullscr=_fullScr, screen=0,
            winType='pyglet', allowGUI=False, allowStencil=False,
            monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height',
            checkTiming=False  # we're going to do this ourselves in a moment
        )
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [0,0,0]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    if expInfo is not None:
        # get/measure frame rate if not already in expInfo
        if win._monitorFrameRate is None:
            win._monitorFrameRate = win.getActualFrameRate(infoMsg='Attempting to measure frame rate of screen, please wait...')
        expInfo['frameRate'] = win._monitorFrameRate
    win.hideMessage()
    # show a visual indicator if we're in piloting mode
    if PILOTING and prefs.piloting['showPilotingIndicator']:
        win.showPilotingIndicator()
    
    return win


def setupDevices(expInfo, thisExp, win):
    """
    Setup whatever devices are available (mouse, keyboard, speaker, eyetracker, etc.) and add them to 
    the device manager (deviceManager)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    bool
        True if completed successfully.
    """
    # --- Setup input devices ---
    ioConfig = {}
    
    # Setup iohub keyboard
    ioConfig['Keyboard'] = dict(use_keymap='psychopy')
    
    # Setup iohub experiment
    ioConfig['Experiment'] = dict(filename=thisExp.dataFileName)
    
    # Start ioHub server
    ioServer = io.launchHubServer(window=win, **ioConfig)
    
    # store ioServer object in the device manager
    deviceManager.ioServer = ioServer
    
    # create a default keyboard (e.g. to check for escape)
    if deviceManager.getDevice('defaultKeyboard') is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='iohub'
        )
    if deviceManager.getDevice('key_resp_exposure_instructions') is None:
        # initialise key_resp_exposure_instructions
        key_resp_exposure_instructions = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_exposure_instructions',
        )
    # create speaker 'sound_exposure'
    deviceManager.addDevice(
        deviceName='sound_exposure',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_exposure') is None:
        # initialise key_resp_exposure
        key_resp_exposure = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_exposure',
        )
    if deviceManager.getDevice('key_resp_2afc_instructions') is None:
        # initialise key_resp_2afc_instructions
        key_resp_2afc_instructions = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_2afc_instructions',
        )
    # create speaker 'sound_2afc_practice_stim'
    deviceManager.addDevice(
        deviceName='sound_2afc_practice_stim',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_2afc_practice') is None:
        # initialise key_resp_2afc_practice
        key_resp_2afc_practice = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_2afc_practice',
        )
    if deviceManager.getDevice('key_resp_2afc_gotit') is None:
        # initialise key_resp_2afc_gotit
        key_resp_2afc_gotit = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_2afc_gotit',
        )
    # create speaker 'sound_stim_trial'
    deviceManager.addDevice(
        deviceName='sound_stim_trial',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_2afc_trial') is None:
        # initialise key_resp_2afc_trial
        key_resp_2afc_trial = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_2afc_trial',
        )
    # return True if completed successfully
    return True

def pauseExperiment(thisExp, win=None, timers=[], playbackComponents=[]):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    playbackComponents : list, tuple
        List of any components with a `pause` method which need to be paused.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # start a timer to figure out how long we're paused for
    pauseTimer = core.Clock()
    # pause any playback components
    for comp in playbackComponents:
        comp.pause()
    # make sure we have a keyboard
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        defaultKeyboard = deviceManager.addKeyboard(
            deviceClass='keyboard',
            deviceName='defaultKeyboard',
            backend='ioHub',
        )
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win)
        # sleep 1ms so other threads can execute
        clock.time.sleep(0.001)
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, win=win)
    # resume any playback components
    for comp in playbackComponents:
        comp.play()
    # reset any timers
    for timer in timers:
        timer.addTime(-pauseTimer.getTime())


def run(expInfo, thisExp, win, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # make sure window is set to foreground to prevent losing focus
    win.winHandle.activate()
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = deviceManager.ioServer
    # get/create a default keyboard (e.g. to check for escape)
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='ioHub'
        )
    eyetracker = deviceManager.getDevice('eyetracker')
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "instructions_exposure" ---
    text_exposure_instructions = visual.TextStim(win=win, name='text_exposure_instructions',
        text='',
        font='Arial',
        pos=(0, 0.1), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    text_exposure_instructions_continue = visual.TextStim(win=win, name='text_exposure_instructions_continue',
        text='',
        font='Arial',
        pos=(0, -0.4), draggable=False, height=0.045, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-1.0);
    key_resp_exposure_instructions = keyboard.Keyboard(deviceName='key_resp_exposure_instructions')
    
    # --- Initialize components for Routine "trial_exposure" ---
    sound_exposure = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_exposure',    name='sound_exposure'
    )
    sound_exposure.setVolume(1.0)
    text_exposure_response_true = visual.TextStim(win=win, name='text_exposure_response_true',
        text='Verdad',
        font='Arial',
        pos=(-0.3, 0), draggable=False, height=0.1, wrapWidth=None, ori=0, 
        color='white', colorSpace='rgb', opacity=1, 
        languageStyle='LTR',
        depth=-1.0);
    text_exposure_response_false = visual.TextStim(win=win, name='text_exposure_response_false',
        text='Falso',
        font='Arial',
        pos=(0.3, 0), draggable=False, height=0.1, wrapWidth=None, ori=0, 
        color='white', colorSpace='rgb', opacity=1, 
        languageStyle='LTR',
        depth=-2.0);
    key_resp_exposure = keyboard.Keyboard(deviceName='key_resp_exposure')
    text_exposure_question = visual.TextStim(win=win, name='text_exposure_question',
        text='',
        font='Arial',
        pos=(0, 0.3), draggable=False, height=0.1, wrapWidth=None, ori=0, 
        color='blue', colorSpace='rgb', opacity=1, 
        languageStyle='LTR',
        depth=-4.0);
    
    # --- Initialize components for Routine "instructions_2afc" ---
    text_2afc_instructions = visual.TextStim(win=win, name='text_2afc_instructions',
        text='',
        font='Arial',
        pos=(0, 0.1), draggable=False, height=0.05, wrapWidth=None, ori=0, 
        color='white', colorSpace='rgb', opacity=1, 
        languageStyle='LTR',
        depth=0.0);
    text_2afc_instructions_continue = visual.TextStim(win=win, name='text_2afc_instructions_continue',
        text='',
        font='Arial',
        pos=(0, -0.4), draggable=False, height=0.045, wrapWidth=None, ori=0, 
        color='white', colorSpace='rgb', opacity=1, 
        languageStyle='LTR',
        depth=-1.0);
    key_resp_2afc_instructions = keyboard.Keyboard(deviceName='key_resp_2afc_instructions')
    
    # --- Initialize components for Routine "practice_2afc" ---
    sound_2afc_practice_stim = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_2afc_practice_stim',    name='sound_2afc_practice_stim'
    )
    sound_2afc_practice_stim.setVolume(1)
    text_2afc_response_yes_practice = visual.TextStim(win=win, name='text_2afc_response_yes_practice',
        text='Sí',
        font='Arial',
        pos=(-0.3, 0), draggable=False, height=0.1, wrapWidth=None, ori=0, 
        color='white', colorSpace='rgb', opacity=1, 
        languageStyle='LTR',
        depth=-1.0);
    text_2afc_response_no_practice = visual.TextStim(win=win, name='text_2afc_response_no_practice',
        text='No',
        font='Arial',
        pos=(0.3, 0), draggable=False, height=0.1, wrapWidth=None, ori=0, 
        color='white', colorSpace='rgb', opacity=1, 
        languageStyle='LTR',
        depth=-2.0);
    key_resp_2afc_practice = keyboard.Keyboard(deviceName='key_resp_2afc_practice')
    text_2afc_question_practice = visual.TextStim(win=win, name='text_2afc_question_practice',
        text='Es una pregunta?',
        font='Arial',
        pos=(0, 0.3), draggable=False, height=0.1, wrapWidth=None, ori=0, 
        color='blue', colorSpace='rgb', opacity=1, 
        languageStyle='LTR',
        depth=-4.0);
    
    # --- Initialize components for Routine "check_2afc" ---
    text_2afc_check = visual.TextStim(win=win, name='text_2afc_check',
        text='Bien! Ahora vamos a empezar. \n\nIntenta responder lo más rápido posible sin cometer errores después de escuchar cada enunciado. \n\n(presiona la barra espaciadora para comenzar)',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0, 
        color='white', colorSpace='rgb', opacity=1, 
        languageStyle='LTR',
        depth=0.0);
    key_resp_2afc_gotit = keyboard.Keyboard(deviceName='key_resp_2afc_gotit')
    
    # --- Initialize components for Routine "trial_2afc" ---
    # Run 'Begin Experiment' code from code_2afc
    col_name = ['andalusian', 'argentine', 'castilian', 'chilean', 'cuban', 'mexican', 'peruvian', 'puertorican']
    
    sound_stim_trial = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_stim_trial',    name='sound_stim_trial'
    )
    sound_stim_trial.setVolume(1)
    text_response_yes_trial = visual.TextStim(win=win, name='text_response_yes_trial',
        text='Sí',
        font='Arial',
        pos=(-0.3, 0), draggable=False, height=0.1, wrapWidth=None, ori=0, 
        color='white', colorSpace='rgb', opacity=1, 
        languageStyle='LTR',
        depth=-2.0);
    text_response_no_trial = visual.TextStim(win=win, name='text_response_no_trial',
        text='No',
        font='Arial',
        pos=(0.3, 0), draggable=False, height=0.1, wrapWidth=None, ori=0, 
        color='white', colorSpace='rgb', opacity=1, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_2afc_trial = keyboard.Keyboard(deviceName='key_resp_2afc_trial')
    text_question_trial = visual.TextStim(win=win, name='text_question_trial',
        text='Es una pregunta?',
        font='Arial',
        pos=(0, 0.3), draggable=False, height=0.1, wrapWidth=None, ori=0, 
        color='blue', colorSpace='rgb', opacity=1, 
        languageStyle='LTR',
        depth=-5.0);
    
    # create some handy timers
    
    # global clock to track the time since experiment started
    if globalClock is None:
        # create a clock if not given one
        globalClock = core.Clock()
    if isinstance(globalClock, str):
        # if given a string, make a clock accoridng to it
        if globalClock == 'float':
            # get timestamps as a simple value
            globalClock = core.Clock(format='float')
        elif globalClock == 'iso':
            # get timestamps in ISO format
            globalClock = core.Clock(format='%Y-%m-%d_%H:%M:%S.%f%z')
        else:
            # get timestamps in a custom format
            globalClock = core.Clock(format=globalClock)
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    # routine timer to track time remaining of each (possibly non-slip) routine
    routineTimer = core.Clock()
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(
        format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6
    )
    
    # set up handler to look after randomisation of conditions etc
    instructions_exposure_loop = data.TrialHandler2(
        name='instructions_exposure_loop',
        nReps=1.0, 
        method='sequential', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions('instructions/exposure_instructions_sp_text.xlsx'), 
        seed=None, 
    )
    thisExp.addLoop(instructions_exposure_loop)  # add the loop to the experiment
    thisInstructions_exposure_loop = instructions_exposure_loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisInstructions_exposure_loop.rgb)
    if thisInstructions_exposure_loop != None:
        for paramName in thisInstructions_exposure_loop:
            globals()[paramName] = thisInstructions_exposure_loop[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisInstructions_exposure_loop in instructions_exposure_loop:
        currentLoop = instructions_exposure_loop
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisInstructions_exposure_loop.rgb)
        if thisInstructions_exposure_loop != None:
            for paramName in thisInstructions_exposure_loop:
                globals()[paramName] = thisInstructions_exposure_loop[paramName]
        
        # --- Prepare to start Routine "instructions_exposure" ---
        # create an object to store info about Routine instructions_exposure
        instructions_exposure = data.Routine(
            name='instructions_exposure',
            components=[text_exposure_instructions, text_exposure_instructions_continue, key_resp_exposure_instructions],
        )
        instructions_exposure.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        text_exposure_instructions.setText(instructions_text)
        text_exposure_instructions_continue.setText(continue_text)
        # create starting attributes for key_resp_exposure_instructions
        key_resp_exposure_instructions.keys = []
        key_resp_exposure_instructions.rt = []
        _key_resp_exposure_instructions_allKeys = []
        # store start times for instructions_exposure
        instructions_exposure.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        instructions_exposure.tStart = globalClock.getTime(format='float')
        instructions_exposure.status = STARTED
        thisExp.addData('instructions_exposure.started', instructions_exposure.tStart)
        instructions_exposure.maxDuration = None
        # keep track of which components have finished
        instructions_exposureComponents = instructions_exposure.components
        for thisComponent in instructions_exposure.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "instructions_exposure" ---
        # if trial has changed, end Routine now
        if isinstance(instructions_exposure_loop, data.TrialHandler2) and thisInstructions_exposure_loop.thisN != instructions_exposure_loop.thisTrial.thisN:
            continueRoutine = False
        instructions_exposure.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_exposure_instructions* updates
            
            # if text_exposure_instructions is starting this frame...
            if text_exposure_instructions.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_exposure_instructions.frameNStart = frameN  # exact frame index
                text_exposure_instructions.tStart = t  # local t and not account for scr refresh
                text_exposure_instructions.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_exposure_instructions, 'tStartRefresh')  # time at next scr refresh
                # update status
                text_exposure_instructions.status = STARTED
                text_exposure_instructions.setAutoDraw(True)
            
            # if text_exposure_instructions is active this frame...
            if text_exposure_instructions.status == STARTED:
                # update params
                pass
            
            # *text_exposure_instructions_continue* updates
            
            # if text_exposure_instructions_continue is starting this frame...
            if text_exposure_instructions_continue.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_exposure_instructions_continue.frameNStart = frameN  # exact frame index
                text_exposure_instructions_continue.tStart = t  # local t and not account for scr refresh
                text_exposure_instructions_continue.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_exposure_instructions_continue, 'tStartRefresh')  # time at next scr refresh
                # update status
                text_exposure_instructions_continue.status = STARTED
                text_exposure_instructions_continue.setAutoDraw(True)
            
            # if text_exposure_instructions_continue is active this frame...
            if text_exposure_instructions_continue.status == STARTED:
                # update params
                pass
            
            # *key_resp_exposure_instructions* updates
            
            # if key_resp_exposure_instructions is starting this frame...
            if key_resp_exposure_instructions.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_exposure_instructions.frameNStart = frameN  # exact frame index
                key_resp_exposure_instructions.tStart = t  # local t and not account for scr refresh
                key_resp_exposure_instructions.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_exposure_instructions, 'tStartRefresh')  # time at next scr refresh
                # update status
                key_resp_exposure_instructions.status = STARTED
                # keyboard checking is just starting
                key_resp_exposure_instructions.clock.reset()  # now t=0
                key_resp_exposure_instructions.clearEvents(eventType='keyboard')
            if key_resp_exposure_instructions.status == STARTED:
                theseKeys = key_resp_exposure_instructions.getKeys(keyList=['c', 'space'], ignoreKeys=["escape"], waitRelease=False)
                _key_resp_exposure_instructions_allKeys.extend(theseKeys)
                if len(_key_resp_exposure_instructions_allKeys):
                    key_resp_exposure_instructions.keys = _key_resp_exposure_instructions_allKeys[-1].name  # just the last key pressed
                    key_resp_exposure_instructions.rt = _key_resp_exposure_instructions_allKeys[-1].rt
                    key_resp_exposure_instructions.duration = _key_resp_exposure_instructions_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                instructions_exposure.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in instructions_exposure.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "instructions_exposure" ---
        for thisComponent in instructions_exposure.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for instructions_exposure
        instructions_exposure.tStop = globalClock.getTime(format='float')
        instructions_exposure.tStopRefresh = tThisFlipGlobal
        thisExp.addData('instructions_exposure.stopped', instructions_exposure.tStop)
        # the Routine "instructions_exposure" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'instructions_exposure_loop'
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # set up handler to look after randomisation of conditions etc
    exposure_loop = data.TrialHandler2(
        name='exposure_loop',
        nReps=1.0, 
        method='random', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions('trials/exposure_trials.xlsx'), 
        seed=None, 
    )
    thisExp.addLoop(exposure_loop)  # add the loop to the experiment
    thisExposure_loop = exposure_loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisExposure_loop.rgb)
    if thisExposure_loop != None:
        for paramName in thisExposure_loop:
            globals()[paramName] = thisExposure_loop[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisExposure_loop in exposure_loop:
        currentLoop = exposure_loop
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisExposure_loop.rgb)
        if thisExposure_loop != None:
            for paramName in thisExposure_loop:
                globals()[paramName] = thisExposure_loop[paramName]
        
        # --- Prepare to start Routine "trial_exposure" ---
        # create an object to store info about Routine trial_exposure
        trial_exposure = data.Routine(
            name='trial_exposure',
            components=[sound_exposure, text_exposure_response_true, text_exposure_response_false, key_resp_exposure, text_exposure_question],
        )
        trial_exposure.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        sound_exposure.setSound(path, hamming=True)
        sound_exposure.setVolume(1.0, log=False)
        sound_exposure.seek(0)
        # create starting attributes for key_resp_exposure
        key_resp_exposure.keys = []
        key_resp_exposure.rt = []
        _key_resp_exposure_allKeys = []
        text_exposure_question.setText(question)
        # store start times for trial_exposure
        trial_exposure.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        trial_exposure.tStart = globalClock.getTime(format='float')
        trial_exposure.status = STARTED
        thisExp.addData('trial_exposure.started', trial_exposure.tStart)
        trial_exposure.maxDuration = None
        # keep track of which components have finished
        trial_exposureComponents = trial_exposure.components
        for thisComponent in trial_exposure.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "trial_exposure" ---
        # if trial has changed, end Routine now
        if isinstance(exposure_loop, data.TrialHandler2) and thisExposure_loop.thisN != exposure_loop.thisTrial.thisN:
            continueRoutine = False
        trial_exposure.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *sound_exposure* updates
            
            # if sound_exposure is starting this frame...
            if sound_exposure.status == NOT_STARTED and tThisFlip >= 0.500-frameTolerance:
                # keep track of start time/frame for later
                sound_exposure.frameNStart = frameN  # exact frame index
                sound_exposure.tStart = t  # local t and not account for scr refresh
                sound_exposure.tStartRefresh = tThisFlipGlobal  # on global time
                # add timestamp to datafile
                thisExp.addData('sound_exposure.started', tThisFlipGlobal)
                # update status
                sound_exposure.status = STARTED
                sound_exposure.play(when=win)  # sync with win flip
            
            # if sound_exposure is stopping this frame...
            if sound_exposure.status == STARTED:
                if bool(False) or sound_exposure.isFinished:
                    # keep track of stop time/frame for later
                    sound_exposure.tStop = t  # not accounting for scr refresh
                    sound_exposure.tStopRefresh = tThisFlipGlobal  # on global time
                    sound_exposure.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'sound_exposure.stopped')
                    # update status
                    sound_exposure.status = FINISHED
                    sound_exposure.stop()
            
            # *text_exposure_response_true* updates
            
            # if text_exposure_response_true is starting this frame...
            if text_exposure_response_true.status == NOT_STARTED and tThisFlip >= duration-frameTolerance:
                # keep track of start time/frame for later
                text_exposure_response_true.frameNStart = frameN  # exact frame index
                text_exposure_response_true.tStart = t  # local t and not account for scr refresh
                text_exposure_response_true.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_exposure_response_true, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_exposure_response_true.started')
                # update status
                text_exposure_response_true.status = STARTED
                text_exposure_response_true.setAutoDraw(True)
            
            # if text_exposure_response_true is active this frame...
            if text_exposure_response_true.status == STARTED:
                # update params
                pass
            
            # *text_exposure_response_false* updates
            
            # if text_exposure_response_false is starting this frame...
            if text_exposure_response_false.status == NOT_STARTED and tThisFlip >= duration-frameTolerance:
                # keep track of start time/frame for later
                text_exposure_response_false.frameNStart = frameN  # exact frame index
                text_exposure_response_false.tStart = t  # local t and not account for scr refresh
                text_exposure_response_false.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_exposure_response_false, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_exposure_response_false.started')
                # update status
                text_exposure_response_false.status = STARTED
                text_exposure_response_false.setAutoDraw(True)
            
            # if text_exposure_response_false is active this frame...
            if text_exposure_response_false.status == STARTED:
                # update params
                pass
            
            # *key_resp_exposure* updates
            waitOnFlip = False
            
            # if key_resp_exposure is starting this frame...
            if key_resp_exposure.status == NOT_STARTED and tThisFlip >= duration-frameTolerance:
                # keep track of start time/frame for later
                key_resp_exposure.frameNStart = frameN  # exact frame index
                key_resp_exposure.tStart = t  # local t and not account for scr refresh
                key_resp_exposure.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_exposure, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_exposure.started')
                # update status
                key_resp_exposure.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_exposure.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_exposure.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_exposure.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_exposure.getKeys(keyList=['1','0'], ignoreKeys=["escape"], waitRelease=False)
                _key_resp_exposure_allKeys.extend(theseKeys)
                if len(_key_resp_exposure_allKeys):
                    key_resp_exposure.keys = _key_resp_exposure_allKeys[0].name  # just the first key pressed
                    key_resp_exposure.rt = _key_resp_exposure_allKeys[0].rt
                    key_resp_exposure.duration = _key_resp_exposure_allKeys[0].duration
                    # was this correct?
                    if (key_resp_exposure.keys == str(correct_response)) or (key_resp_exposure.keys == correct_response):
                        key_resp_exposure.corr = 1
                    else:
                        key_resp_exposure.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # *text_exposure_question* updates
            
            # if text_exposure_question is starting this frame...
            if text_exposure_question.status == NOT_STARTED and tThisFlip >= duration-frameTolerance:
                # keep track of start time/frame for later
                text_exposure_question.frameNStart = frameN  # exact frame index
                text_exposure_question.tStart = t  # local t and not account for scr refresh
                text_exposure_question.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_exposure_question, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_exposure_question.started')
                # update status
                text_exposure_question.status = STARTED
                text_exposure_question.setAutoDraw(True)
            
            # if text_exposure_question is active this frame...
            if text_exposure_question.status == STARTED:
                # update params
                pass
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[sound_exposure]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                trial_exposure.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in trial_exposure.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "trial_exposure" ---
        for thisComponent in trial_exposure.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for trial_exposure
        trial_exposure.tStop = globalClock.getTime(format='float')
        trial_exposure.tStopRefresh = tThisFlipGlobal
        thisExp.addData('trial_exposure.stopped', trial_exposure.tStop)
        sound_exposure.pause()  # ensure sound has stopped at end of Routine
        # check responses
        if key_resp_exposure.keys in ['', [], None]:  # No response was made
            key_resp_exposure.keys = None
            # was no response the correct answer?!
            if str(correct_response).lower() == 'none':
               key_resp_exposure.corr = 1;  # correct non-response
            else:
               key_resp_exposure.corr = 0;  # failed to respond (incorrectly)
        # store data for exposure_loop (TrialHandler)
        exposure_loop.addData('key_resp_exposure.keys',key_resp_exposure.keys)
        exposure_loop.addData('key_resp_exposure.corr', key_resp_exposure.corr)
        if key_resp_exposure.keys != None:  # we had a response
            exposure_loop.addData('key_resp_exposure.rt', key_resp_exposure.rt)
            exposure_loop.addData('key_resp_exposure.duration', key_resp_exposure.duration)
        # the Routine "trial_exposure" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'exposure_loop'
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # set up handler to look after randomisation of conditions etc
    instructions_2afc_loop = data.TrialHandler2(
        name='instructions_2afc_loop',
        nReps=1, 
        method='sequential', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions('instructions/2afc_instructions_sp_text.xlsx'), 
        seed=None, 
    )
    thisExp.addLoop(instructions_2afc_loop)  # add the loop to the experiment
    thisInstructions_2afc_loop = instructions_2afc_loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisInstructions_2afc_loop.rgb)
    if thisInstructions_2afc_loop != None:
        for paramName in thisInstructions_2afc_loop:
            globals()[paramName] = thisInstructions_2afc_loop[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisInstructions_2afc_loop in instructions_2afc_loop:
        currentLoop = instructions_2afc_loop
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisInstructions_2afc_loop.rgb)
        if thisInstructions_2afc_loop != None:
            for paramName in thisInstructions_2afc_loop:
                globals()[paramName] = thisInstructions_2afc_loop[paramName]
        
        # --- Prepare to start Routine "instructions_2afc" ---
        # create an object to store info about Routine instructions_2afc
        instructions_2afc = data.Routine(
            name='instructions_2afc',
            components=[text_2afc_instructions, text_2afc_instructions_continue, key_resp_2afc_instructions],
        )
        instructions_2afc.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        text_2afc_instructions.setText(instructions_text)
        text_2afc_instructions_continue.setText(continue_text)
        # create starting attributes for key_resp_2afc_instructions
        key_resp_2afc_instructions.keys = []
        key_resp_2afc_instructions.rt = []
        _key_resp_2afc_instructions_allKeys = []
        # store start times for instructions_2afc
        instructions_2afc.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        instructions_2afc.tStart = globalClock.getTime(format='float')
        instructions_2afc.status = STARTED
        thisExp.addData('instructions_2afc.started', instructions_2afc.tStart)
        instructions_2afc.maxDuration = None
        # keep track of which components have finished
        instructions_2afcComponents = instructions_2afc.components
        for thisComponent in instructions_2afc.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "instructions_2afc" ---
        # if trial has changed, end Routine now
        if isinstance(instructions_2afc_loop, data.TrialHandler2) and thisInstructions_2afc_loop.thisN != instructions_2afc_loop.thisTrial.thisN:
            continueRoutine = False
        instructions_2afc.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_2afc_instructions* updates
            
            # if text_2afc_instructions is starting this frame...
            if text_2afc_instructions.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_2afc_instructions.frameNStart = frameN  # exact frame index
                text_2afc_instructions.tStart = t  # local t and not account for scr refresh
                text_2afc_instructions.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_2afc_instructions, 'tStartRefresh')  # time at next scr refresh
                # update status
                text_2afc_instructions.status = STARTED
                text_2afc_instructions.setAutoDraw(True)
            
            # if text_2afc_instructions is active this frame...
            if text_2afc_instructions.status == STARTED:
                # update params
                pass
            
            # *text_2afc_instructions_continue* updates
            
            # if text_2afc_instructions_continue is starting this frame...
            if text_2afc_instructions_continue.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_2afc_instructions_continue.frameNStart = frameN  # exact frame index
                text_2afc_instructions_continue.tStart = t  # local t and not account for scr refresh
                text_2afc_instructions_continue.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_2afc_instructions_continue, 'tStartRefresh')  # time at next scr refresh
                # update status
                text_2afc_instructions_continue.status = STARTED
                text_2afc_instructions_continue.setAutoDraw(True)
            
            # if text_2afc_instructions_continue is active this frame...
            if text_2afc_instructions_continue.status == STARTED:
                # update params
                pass
            
            # *key_resp_2afc_instructions* updates
            
            # if key_resp_2afc_instructions is starting this frame...
            if key_resp_2afc_instructions.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_2afc_instructions.frameNStart = frameN  # exact frame index
                key_resp_2afc_instructions.tStart = t  # local t and not account for scr refresh
                key_resp_2afc_instructions.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_2afc_instructions, 'tStartRefresh')  # time at next scr refresh
                # update status
                key_resp_2afc_instructions.status = STARTED
                # keyboard checking is just starting
                key_resp_2afc_instructions.clock.reset()  # now t=0
                key_resp_2afc_instructions.clearEvents(eventType='keyboard')
            if key_resp_2afc_instructions.status == STARTED:
                theseKeys = key_resp_2afc_instructions.getKeys(keyList=['c', 'space'], ignoreKeys=["escape"], waitRelease=False)
                _key_resp_2afc_instructions_allKeys.extend(theseKeys)
                if len(_key_resp_2afc_instructions_allKeys):
                    key_resp_2afc_instructions.keys = _key_resp_2afc_instructions_allKeys[-1].name  # just the last key pressed
                    key_resp_2afc_instructions.rt = _key_resp_2afc_instructions_allKeys[-1].rt
                    key_resp_2afc_instructions.duration = _key_resp_2afc_instructions_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                instructions_2afc.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in instructions_2afc.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "instructions_2afc" ---
        for thisComponent in instructions_2afc.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for instructions_2afc
        instructions_2afc.tStop = globalClock.getTime(format='float')
        instructions_2afc.tStopRefresh = tThisFlipGlobal
        thisExp.addData('instructions_2afc.stopped', instructions_2afc.tStop)
        # the Routine "instructions_2afc" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1 repeats of 'instructions_2afc_loop'
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # set up handler to look after randomisation of conditions etc
    trials_2afc_practice_loop = data.TrialHandler2(
        name='trials_2afc_practice_loop',
        nReps=1, 
        method='random', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions('trials/twoafc_practice_trials.xlsx'), 
        seed=None, 
    )
    thisExp.addLoop(trials_2afc_practice_loop)  # add the loop to the experiment
    thisTrials_2afc_practice_loop = trials_2afc_practice_loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_2afc_practice_loop.rgb)
    if thisTrials_2afc_practice_loop != None:
        for paramName in thisTrials_2afc_practice_loop:
            globals()[paramName] = thisTrials_2afc_practice_loop[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisTrials_2afc_practice_loop in trials_2afc_practice_loop:
        currentLoop = trials_2afc_practice_loop
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisTrials_2afc_practice_loop.rgb)
        if thisTrials_2afc_practice_loop != None:
            for paramName in thisTrials_2afc_practice_loop:
                globals()[paramName] = thisTrials_2afc_practice_loop[paramName]
        
        # --- Prepare to start Routine "practice_2afc" ---
        # create an object to store info about Routine practice_2afc
        practice_2afc = data.Routine(
            name='practice_2afc',
            components=[sound_2afc_practice_stim, text_2afc_response_yes_practice, text_2afc_response_no_practice, key_resp_2afc_practice, text_2afc_question_practice],
        )
        practice_2afc.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        sound_2afc_practice_stim.setSound(path, hamming=True)
        sound_2afc_practice_stim.setVolume(1, log=False)
        sound_2afc_practice_stim.seek(0)
        # create starting attributes for key_resp_2afc_practice
        key_resp_2afc_practice.keys = []
        key_resp_2afc_practice.rt = []
        _key_resp_2afc_practice_allKeys = []
        # store start times for practice_2afc
        practice_2afc.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        practice_2afc.tStart = globalClock.getTime(format='float')
        practice_2afc.status = STARTED
        thisExp.addData('practice_2afc.started', practice_2afc.tStart)
        practice_2afc.maxDuration = None
        # keep track of which components have finished
        practice_2afcComponents = practice_2afc.components
        for thisComponent in practice_2afc.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "practice_2afc" ---
        # if trial has changed, end Routine now
        if isinstance(trials_2afc_practice_loop, data.TrialHandler2) and thisTrials_2afc_practice_loop.thisN != trials_2afc_practice_loop.thisTrial.thisN:
            continueRoutine = False
        practice_2afc.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *sound_2afc_practice_stim* updates
            
            # if sound_2afc_practice_stim is starting this frame...
            if sound_2afc_practice_stim.status == NOT_STARTED and tThisFlip >= 0.500-frameTolerance:
                # keep track of start time/frame for later
                sound_2afc_practice_stim.frameNStart = frameN  # exact frame index
                sound_2afc_practice_stim.tStart = t  # local t and not account for scr refresh
                sound_2afc_practice_stim.tStartRefresh = tThisFlipGlobal  # on global time
                # add timestamp to datafile
                thisExp.addData('sound_2afc_practice_stim.started', tThisFlipGlobal)
                # update status
                sound_2afc_practice_stim.status = STARTED
                sound_2afc_practice_stim.play(when=win)  # sync with win flip
            
            # if sound_2afc_practice_stim is stopping this frame...
            if sound_2afc_practice_stim.status == STARTED:
                if bool(False) or sound_2afc_practice_stim.isFinished:
                    # keep track of stop time/frame for later
                    sound_2afc_practice_stim.tStop = t  # not accounting for scr refresh
                    sound_2afc_practice_stim.tStopRefresh = tThisFlipGlobal  # on global time
                    sound_2afc_practice_stim.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'sound_2afc_practice_stim.stopped')
                    # update status
                    sound_2afc_practice_stim.status = FINISHED
                    sound_2afc_practice_stim.stop()
            
            # *text_2afc_response_yes_practice* updates
            
            # if text_2afc_response_yes_practice is starting this frame...
            if text_2afc_response_yes_practice.status == NOT_STARTED and tThisFlip >= 0.250-frameTolerance:
                # keep track of start time/frame for later
                text_2afc_response_yes_practice.frameNStart = frameN  # exact frame index
                text_2afc_response_yes_practice.tStart = t  # local t and not account for scr refresh
                text_2afc_response_yes_practice.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_2afc_response_yes_practice, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_2afc_response_yes_practice.started')
                # update status
                text_2afc_response_yes_practice.status = STARTED
                text_2afc_response_yes_practice.setAutoDraw(True)
            
            # if text_2afc_response_yes_practice is active this frame...
            if text_2afc_response_yes_practice.status == STARTED:
                # update params
                pass
            
            # *text_2afc_response_no_practice* updates
            
            # if text_2afc_response_no_practice is starting this frame...
            if text_2afc_response_no_practice.status == NOT_STARTED and tThisFlip >= 0.250-frameTolerance:
                # keep track of start time/frame for later
                text_2afc_response_no_practice.frameNStart = frameN  # exact frame index
                text_2afc_response_no_practice.tStart = t  # local t and not account for scr refresh
                text_2afc_response_no_practice.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_2afc_response_no_practice, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_2afc_response_no_practice.started')
                # update status
                text_2afc_response_no_practice.status = STARTED
                text_2afc_response_no_practice.setAutoDraw(True)
            
            # if text_2afc_response_no_practice is active this frame...
            if text_2afc_response_no_practice.status == STARTED:
                # update params
                pass
            
            # *key_resp_2afc_practice* updates
            waitOnFlip = False
            
            # if key_resp_2afc_practice is starting this frame...
            if key_resp_2afc_practice.status == NOT_STARTED and tThisFlip >= 0.500-frameTolerance:
                # keep track of start time/frame for later
                key_resp_2afc_practice.frameNStart = frameN  # exact frame index
                key_resp_2afc_practice.tStart = t  # local t and not account for scr refresh
                key_resp_2afc_practice.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_2afc_practice, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_2afc_practice.started')
                # update status
                key_resp_2afc_practice.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_2afc_practice.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_2afc_practice.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_2afc_practice.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_2afc_practice.getKeys(keyList=['1','0'], ignoreKeys=["escape"], waitRelease=False)
                _key_resp_2afc_practice_allKeys.extend(theseKeys)
                if len(_key_resp_2afc_practice_allKeys):
                    key_resp_2afc_practice.keys = _key_resp_2afc_practice_allKeys[0].name  # just the first key pressed
                    key_resp_2afc_practice.rt = _key_resp_2afc_practice_allKeys[0].rt
                    key_resp_2afc_practice.duration = _key_resp_2afc_practice_allKeys[0].duration
                    # was this correct?
                    if (key_resp_2afc_practice.keys == str(correct_response)) or (key_resp_2afc_practice.keys == correct_response):
                        key_resp_2afc_practice.corr = 1
                    else:
                        key_resp_2afc_practice.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # *text_2afc_question_practice* updates
            
            # if text_2afc_question_practice is starting this frame...
            if text_2afc_question_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_2afc_question_practice.frameNStart = frameN  # exact frame index
                text_2afc_question_practice.tStart = t  # local t and not account for scr refresh
                text_2afc_question_practice.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_2afc_question_practice, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_2afc_question_practice.started')
                # update status
                text_2afc_question_practice.status = STARTED
                text_2afc_question_practice.setAutoDraw(True)
            
            # if text_2afc_question_practice is active this frame...
            if text_2afc_question_practice.status == STARTED:
                # update params
                pass
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[sound_2afc_practice_stim]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                practice_2afc.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in practice_2afc.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "practice_2afc" ---
        for thisComponent in practice_2afc.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for practice_2afc
        practice_2afc.tStop = globalClock.getTime(format='float')
        practice_2afc.tStopRefresh = tThisFlipGlobal
        thisExp.addData('practice_2afc.stopped', practice_2afc.tStop)
        sound_2afc_practice_stim.pause()  # ensure sound has stopped at end of Routine
        # check responses
        if key_resp_2afc_practice.keys in ['', [], None]:  # No response was made
            key_resp_2afc_practice.keys = None
            # was no response the correct answer?!
            if str(correct_response).lower() == 'none':
               key_resp_2afc_practice.corr = 1;  # correct non-response
            else:
               key_resp_2afc_practice.corr = 0;  # failed to respond (incorrectly)
        # store data for trials_2afc_practice_loop (TrialHandler)
        trials_2afc_practice_loop.addData('key_resp_2afc_practice.keys',key_resp_2afc_practice.keys)
        trials_2afc_practice_loop.addData('key_resp_2afc_practice.corr', key_resp_2afc_practice.corr)
        if key_resp_2afc_practice.keys != None:  # we had a response
            trials_2afc_practice_loop.addData('key_resp_2afc_practice.rt', key_resp_2afc_practice.rt)
            trials_2afc_practice_loop.addData('key_resp_2afc_practice.duration', key_resp_2afc_practice.duration)
        # the Routine "practice_2afc" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1 repeats of 'trials_2afc_practice_loop'
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # --- Prepare to start Routine "check_2afc" ---
    # create an object to store info about Routine check_2afc
    check_2afc = data.Routine(
        name='check_2afc',
        components=[text_2afc_check, key_resp_2afc_gotit],
    )
    check_2afc.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for key_resp_2afc_gotit
    key_resp_2afc_gotit.keys = []
    key_resp_2afc_gotit.rt = []
    _key_resp_2afc_gotit_allKeys = []
    # store start times for check_2afc
    check_2afc.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    check_2afc.tStart = globalClock.getTime(format='float')
    check_2afc.status = STARTED
    thisExp.addData('check_2afc.started', check_2afc.tStart)
    check_2afc.maxDuration = None
    # keep track of which components have finished
    check_2afcComponents = check_2afc.components
    for thisComponent in check_2afc.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "check_2afc" ---
    check_2afc.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_2afc_check* updates
        
        # if text_2afc_check is starting this frame...
        if text_2afc_check.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_2afc_check.frameNStart = frameN  # exact frame index
            text_2afc_check.tStart = t  # local t and not account for scr refresh
            text_2afc_check.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_2afc_check, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_2afc_check.started')
            # update status
            text_2afc_check.status = STARTED
            text_2afc_check.setAutoDraw(True)
        
        # if text_2afc_check is active this frame...
        if text_2afc_check.status == STARTED:
            # update params
            pass
        
        # *key_resp_2afc_gotit* updates
        waitOnFlip = False
        
        # if key_resp_2afc_gotit is starting this frame...
        if key_resp_2afc_gotit.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_2afc_gotit.frameNStart = frameN  # exact frame index
            key_resp_2afc_gotit.tStart = t  # local t and not account for scr refresh
            key_resp_2afc_gotit.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_2afc_gotit, 'tStartRefresh')  # time at next scr refresh
            # update status
            key_resp_2afc_gotit.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_2afc_gotit.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_2afc_gotit.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_2afc_gotit.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_2afc_gotit.getKeys(keyList=['c','space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_2afc_gotit_allKeys.extend(theseKeys)
            if len(_key_resp_2afc_gotit_allKeys):
                key_resp_2afc_gotit.keys = _key_resp_2afc_gotit_allKeys[-1].name  # just the last key pressed
                key_resp_2afc_gotit.rt = _key_resp_2afc_gotit_allKeys[-1].rt
                key_resp_2afc_gotit.duration = _key_resp_2afc_gotit_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            check_2afc.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in check_2afc.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "check_2afc" ---
    for thisComponent in check_2afc.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for check_2afc
    check_2afc.tStop = globalClock.getTime(format='float')
    check_2afc.tStopRefresh = tThisFlipGlobal
    thisExp.addData('check_2afc.stopped', check_2afc.tStop)
    thisExp.nextEntry()
    # the Routine "check_2afc" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials_2afc_loop = data.TrialHandler2(
        name='trials_2afc_loop',
        nReps=1, 
        method='random', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions('trials/twoafc_trials.xlsx'), 
        seed=None, 
    )
    thisExp.addLoop(trials_2afc_loop)  # add the loop to the experiment
    thisTrials_2afc_loop = trials_2afc_loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_2afc_loop.rgb)
    if thisTrials_2afc_loop != None:
        for paramName in thisTrials_2afc_loop:
            globals()[paramName] = thisTrials_2afc_loop[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisTrials_2afc_loop in trials_2afc_loop:
        currentLoop = trials_2afc_loop
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisTrials_2afc_loop.rgb)
        if thisTrials_2afc_loop != None:
            for paramName in thisTrials_2afc_loop:
                globals()[paramName] = thisTrials_2afc_loop[paramName]
        
        # --- Prepare to start Routine "trial_2afc" ---
        # create an object to store info about Routine trial_2afc
        trial_2afc = data.Routine(
            name='trial_2afc',
            components=[sound_stim_trial, text_response_yes_trial, text_response_no_trial, key_resp_2afc_trial, text_question_trial],
        )
        trial_2afc.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_2afc
        the_col = np.random.choice(col_name, p=[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125])
        
        sound_stim_trial.setSound(eval(the_col), hamming=True)
        sound_stim_trial.setVolume(1, log=False)
        sound_stim_trial.seek(0)
        # create starting attributes for key_resp_2afc_trial
        key_resp_2afc_trial.keys = []
        key_resp_2afc_trial.rt = []
        _key_resp_2afc_trial_allKeys = []
        # store start times for trial_2afc
        trial_2afc.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        trial_2afc.tStart = globalClock.getTime(format='float')
        trial_2afc.status = STARTED
        thisExp.addData('trial_2afc.started', trial_2afc.tStart)
        trial_2afc.maxDuration = None
        # keep track of which components have finished
        trial_2afcComponents = trial_2afc.components
        for thisComponent in trial_2afc.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "trial_2afc" ---
        # if trial has changed, end Routine now
        if isinstance(trials_2afc_loop, data.TrialHandler2) and thisTrials_2afc_loop.thisN != trials_2afc_loop.thisTrial.thisN:
            continueRoutine = False
        trial_2afc.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *sound_stim_trial* updates
            
            # if sound_stim_trial is starting this frame...
            if sound_stim_trial.status == NOT_STARTED and tThisFlip >= 0.500-frameTolerance:
                # keep track of start time/frame for later
                sound_stim_trial.frameNStart = frameN  # exact frame index
                sound_stim_trial.tStart = t  # local t and not account for scr refresh
                sound_stim_trial.tStartRefresh = tThisFlipGlobal  # on global time
                # add timestamp to datafile
                thisExp.addData('sound_stim_trial.started', tThisFlipGlobal)
                # update status
                sound_stim_trial.status = STARTED
                sound_stim_trial.play(when=win)  # sync with win flip
            
            # if sound_stim_trial is stopping this frame...
            if sound_stim_trial.status == STARTED:
                if bool(False) or sound_stim_trial.isFinished:
                    # keep track of stop time/frame for later
                    sound_stim_trial.tStop = t  # not accounting for scr refresh
                    sound_stim_trial.tStopRefresh = tThisFlipGlobal  # on global time
                    sound_stim_trial.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'sound_stim_trial.stopped')
                    # update status
                    sound_stim_trial.status = FINISHED
                    sound_stim_trial.stop()
            
            # *text_response_yes_trial* updates
            
            # if text_response_yes_trial is starting this frame...
            if text_response_yes_trial.status == NOT_STARTED and tThisFlip >= 0.250-frameTolerance:
                # keep track of start time/frame for later
                text_response_yes_trial.frameNStart = frameN  # exact frame index
                text_response_yes_trial.tStart = t  # local t and not account for scr refresh
                text_response_yes_trial.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_response_yes_trial, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_response_yes_trial.started')
                # update status
                text_response_yes_trial.status = STARTED
                text_response_yes_trial.setAutoDraw(True)
            
            # if text_response_yes_trial is active this frame...
            if text_response_yes_trial.status == STARTED:
                # update params
                pass
            
            # *text_response_no_trial* updates
            
            # if text_response_no_trial is starting this frame...
            if text_response_no_trial.status == NOT_STARTED and tThisFlip >= 0.250-frameTolerance:
                # keep track of start time/frame for later
                text_response_no_trial.frameNStart = frameN  # exact frame index
                text_response_no_trial.tStart = t  # local t and not account for scr refresh
                text_response_no_trial.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_response_no_trial, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_response_no_trial.started')
                # update status
                text_response_no_trial.status = STARTED
                text_response_no_trial.setAutoDraw(True)
            
            # if text_response_no_trial is active this frame...
            if text_response_no_trial.status == STARTED:
                # update params
                pass
            
            # *key_resp_2afc_trial* updates
            waitOnFlip = False
            
            # if key_resp_2afc_trial is starting this frame...
            if key_resp_2afc_trial.status == NOT_STARTED and tThisFlip >= 0.500-frameTolerance:
                # keep track of start time/frame for later
                key_resp_2afc_trial.frameNStart = frameN  # exact frame index
                key_resp_2afc_trial.tStart = t  # local t and not account for scr refresh
                key_resp_2afc_trial.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_2afc_trial, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_2afc_trial.started')
                # update status
                key_resp_2afc_trial.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_2afc_trial.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_2afc_trial.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_2afc_trial.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_2afc_trial.getKeys(keyList=['1','0'], ignoreKeys=["escape"], waitRelease=False)
                _key_resp_2afc_trial_allKeys.extend(theseKeys)
                if len(_key_resp_2afc_trial_allKeys):
                    key_resp_2afc_trial.keys = _key_resp_2afc_trial_allKeys[0].name  # just the first key pressed
                    key_resp_2afc_trial.rt = _key_resp_2afc_trial_allKeys[0].rt
                    key_resp_2afc_trial.duration = _key_resp_2afc_trial_allKeys[0].duration
                    # was this correct?
                    if (key_resp_2afc_trial.keys == str(correct_response)) or (key_resp_2afc_trial.keys == correct_response):
                        key_resp_2afc_trial.corr = 1
                    else:
                        key_resp_2afc_trial.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # *text_question_trial* updates
            
            # if text_question_trial is starting this frame...
            if text_question_trial.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_question_trial.frameNStart = frameN  # exact frame index
                text_question_trial.tStart = t  # local t and not account for scr refresh
                text_question_trial.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_question_trial, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_question_trial.started')
                # update status
                text_question_trial.status = STARTED
                text_question_trial.setAutoDraw(True)
            
            # if text_question_trial is active this frame...
            if text_question_trial.status == STARTED:
                # update params
                pass
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[sound_stim_trial]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                trial_2afc.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in trial_2afc.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "trial_2afc" ---
        for thisComponent in trial_2afc.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for trial_2afc
        trial_2afc.tStop = globalClock.getTime(format='float')
        trial_2afc.tStopRefresh = tThisFlipGlobal
        thisExp.addData('trial_2afc.stopped', trial_2afc.tStop)
        # Run 'End Routine' code from code_2afc
        trials_2afc_loop.addData('the_col', the_col)
        
        sound_stim_trial.pause()  # ensure sound has stopped at end of Routine
        # check responses
        if key_resp_2afc_trial.keys in ['', [], None]:  # No response was made
            key_resp_2afc_trial.keys = None
            # was no response the correct answer?!
            if str(correct_response).lower() == 'none':
               key_resp_2afc_trial.corr = 1;  # correct non-response
            else:
               key_resp_2afc_trial.corr = 0;  # failed to respond (incorrectly)
        # store data for trials_2afc_loop (TrialHandler)
        trials_2afc_loop.addData('key_resp_2afc_trial.keys',key_resp_2afc_trial.keys)
        trials_2afc_loop.addData('key_resp_2afc_trial.corr', key_resp_2afc_trial.corr)
        if key_resp_2afc_trial.keys != None:  # we had a response
            trials_2afc_loop.addData('key_resp_2afc_trial.rt', key_resp_2afc_trial.rt)
            trials_2afc_loop.addData('key_resp_2afc_trial.duration', key_resp_2afc_trial.duration)
        # the Routine "trial_2afc" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1 repeats of 'trials_2afc_loop'
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # mark experiment as finished
    endExperiment(thisExp, win=win)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # return console logger level to WARNING
    logging.console.setLevel(logging.WARNING)
    # mark experiment handler as finished
    thisExp.status = FINISHED
    logging.flush()


def quit(thisExp, win=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    logging.flush()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    setupDevices(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win,
        globalClock='float'
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win)
