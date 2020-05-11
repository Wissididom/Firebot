"use strict";

const effectManager = require("./effectManager");

exports.loadEffects = () => {
    // get effect definitions
    const playSoundEffect = require("./builtin/playSound");
    const chatEffect = require("./builtin/chat");
    const api = require("./builtin/api");
    const celebration = require("./builtin/celebration");
    const clips = require('./builtin/clips');
    const cooldowns = require("./builtin/cooldowns");
    const dice = require("./builtin/dice");
    const fileWriter = require("./builtin/fileWriter");
    const html = require("./builtin/html");
    const playVideo = require("./builtin/playVideo");
    const showEvents = require("./builtin/showEvents");
    const controlEmulation = require("./builtin/controlEmulation");
    const showImage = require("./builtin/showImage");
    const updateControl = require("./builtin/updateControl");
    const toggleConnection = require("./builtin/toggleConnection");
    const showText = require("./builtin/showText");
    const delay = require("./builtin/delay");
    const randomEffect = require("./builtin/randomEffect");
    const effectGroup = require("./builtin/effectGroup");
    const currency = require("./builtin/currency");
    const randomRedditImage = require("./builtin/randomRedditImage");
    const customVariable = require("./builtin/customVariable");
    const controlMouse = require('./builtin/controlMouse');
    const changeScene = require('./builtin/changeScene');
    const runCommand = require('./builtin/runCommand');
    const customScript = require('./builtin/customScript');
    const clearEffects = require('./builtin/clearEffects');
    const sequentialEffect = require("./builtin/sequentialEffect");
    const updateRole = require("./builtin/update-role");
    const conditionalEffects = require("./builtin/conditional-effects/conditional-effects");
    const loopEffects = require("./builtin/loopEffects");
    const textToSpeech = require("./builtin/text-to-speech");
    const deleteChatMessage = require("./builtin/delete-chat-message");
    const stopEffectExecution = require("./builtin/stop-effect-execution");
    const adBreak = require("./builtin/ad-break");
    const runProgram = require("./builtin/run-program");
    const activeUserLists = require("./builtin/activeUserLists");
    const channelProgression = require("./builtin/channelProgression");
    const streamTitle = require("./builtin/stream-title");
    const streamGame = require("./builtin/stream-game");
    const streamAudience = require("./builtin/stream-audience");
    const moderatorBan = require("./builtin/moderatorBan");
    const moderatorPurge = require("./builtin/moderatorPurge");
    const moderatorTimeout = require("./builtin/moderatorTimeout");
    const moderatorMod = require("./builtin/moderatorMod");
    const clearChat = require("./builtin/clearChat");

    // register them
    effectManager.registerEffect(playSoundEffect);
    effectManager.registerEffect(chatEffect);
    effectManager.registerEffect(api);
    effectManager.registerEffect(celebration);
    effectManager.registerEffect(clips);
    effectManager.registerEffect(cooldowns);
    effectManager.registerEffect(dice);
    effectManager.registerEffect(fileWriter);
    effectManager.registerEffect(html);
    effectManager.registerEffect(playVideo);
    effectManager.registerEffect(showEvents);
    effectManager.registerEffect(controlEmulation);
    effectManager.registerEffect(showImage);
    effectManager.registerEffect(updateControl);
    effectManager.registerEffect(toggleConnection);
    effectManager.registerEffect(showText);
    effectManager.registerEffect(delay);
    effectManager.registerEffect(randomEffect);
    effectManager.registerEffect(effectGroup);
    effectManager.registerEffect(currency);
    effectManager.registerEffect(randomRedditImage);
    effectManager.registerEffect(customVariable);
    effectManager.registerEffect(controlMouse);
    effectManager.registerEffect(changeScene);
    effectManager.registerEffect(runCommand);
    effectManager.registerEffect(customScript);
    effectManager.registerEffect(clearEffects);
    effectManager.registerEffect(sequentialEffect);
    effectManager.registerEffect(updateRole);
    effectManager.registerEffect(conditionalEffects);
    effectManager.registerEffect(loopEffects);
    effectManager.registerEffect(textToSpeech);
    effectManager.registerEffect(deleteChatMessage);
    effectManager.registerEffect(stopEffectExecution);
    effectManager.registerEffect(adBreak);
    effectManager.registerEffect(runProgram);
    effectManager.registerEffect(activeUserLists);
    effectManager.registerEffect(channelProgression);
    effectManager.registerEffect(streamTitle);
    effectManager.registerEffect(streamGame);
    effectManager.registerEffect(streamAudience);
    effectManager.registerEffect(moderatorBan);
    effectManager.registerEffect(moderatorPurge);
    effectManager.registerEffect(moderatorTimeout);
    effectManager.registerEffect(moderatorMod);
    effectManager.registerEffect(clearChat);
};
