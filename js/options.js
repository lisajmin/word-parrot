// Declare global variables.
var voicesArray = ["frenchVoice", "britishVoice", "americanVoice", "australianVoice", "spanishVoice", "swedishVoice", "italianVoice", "koreanVoice", "japaneseVoice", "chineseVoice"];
var languagesArray = ["englishButton"];
var controlsArray = ["controlOn", "controlOff"];

// Find id for DOM elements from data pulled from storage.
function findId(option) {
  if (option == "English") {
    return "englishButton";
  } else if (option == "US English Female") {
    return "americanVoice";
  } else if (option == "UK English Male") {
    return "britishVoice";
  } else if (option == "Australian Female") {
    return "australianVoice";
  } else if (option == "French Female") {
    return "frenchVoice";
  } else if (option == "Spanish Female") {
    return "spanishVoice";
  } else if (option == "Swedish Female") {
    return "swedishVoice";
  } else if (option == "Italian Female") {
    return "italianVoice";
  } else if (option == "Korean Female") {
    return "koreanVoice";
  } else if (option == "Japanese Female") {
    return "japaneseVoice";
  } else if (option == "Chinese Female") {
    return "chineseVoice";
  } else if (option == "on") {
    return "controlOn";
  } else if (option == "off") {
    return "controlOff";
  }
};

// Set global variables from Chrome storage or set default values.
function setVariables() {
  chrome.storage.sync.get('language', function(data) {
    if (data.language == null ) {
      changeButton("englishButton");
      chrome.storage.sync.set({"language": "English"});
    } else {
      var langStatus = findId(data.language);
      changeButton(langStatus);
    }
  });
  chrome.storage.sync.get('voice', function(data) {
    if (data.voice == null ) {
      changeButton("americanVoice");
      chrome.storage.sync.set({"voice": "US English Female"});
    } else {
      var voiceStatus = findId(data.voice);
      changeButton(voiceStatus);
    }
  });
  chrome.storage.sync.get('control', function(data) {
    if (data.control == null ) {
      changeButton("controlOn");
      chrome.storage.sync.set({"control": "on"});
    } else {
      var controlStatus = findId(data.control);
      changeButton(controlStatus);
    }
  });
};

// Set class to inactive and change class of activeButton to active.
function updateButtonClass(activeButton, buttonArray) {
  for (i = 0; i < buttonArray.length; i++) {
    if (buttonArray[i] != activeButton) {
      document.getElementById(buttonArray[i]).className = "inactive";
    }
  }
  document.getElementById(activeButton).className = "active";
};

// Change button CSS to show active and inactive states.
function changeButton(id) {
  if (languagesArray.includes(id)) {
    updateButtonClass(id, languagesArray);
  } else if (voicesArray.includes(id)){
    updateButtonClass(id, voicesArray);
  } else if (controlsArray.includes(id)){
    updateButtonClass(id, controlsArray);
  }
};

document.addEventListener("DOMContentLoaded", function() {
// Set variables when loaded.
  setVariables();

// Change controls to on or off.
  document.getElementById("controlOn").addEventListener("click", function() {
    chrome.storage.sync.set({"control": "on"});
    changeButton("controlOn");
  });

  document.getElementById("controlOff").addEventListener("click", function() {
    chrome.storage.sync.set({"control": "off"});
    changeButton("controlOff");
  });

// Select language.
  document.getElementById("englishButton").addEventListener("click", function() {
    chrome.storage.sync.set({"language": "English"});
    changeButton("englishButton");
  });

// Select voice option.
  document.getElementById("americanVoice").addEventListener("click", function() {
    chrome.storage.sync.set({"voice": "US English Female"});
    changeButton("americanVoice");
  });

  document.getElementById("britishVoice").addEventListener("click", function() {
    chrome.storage.sync.set({"voice": "UK English Male"});
    changeButton("britishVoice");
  });

  document.getElementById("australianVoice").addEventListener("click", function() {
    chrome.storage.sync.set({"voice": "Australian Female"});
    changeButton("australianVoice");
  });

  document.getElementById("frenchVoice").addEventListener("click", function() {
    chrome.storage.sync.set({"voice": "French Female"});
    changeButton("frenchVoice");
  });

  document.getElementById("spanishVoice").addEventListener("click", function() {
    chrome.storage.sync.set({"voice": "Spanish Female"});
    changeButton("spanishVoice");
  });

  document.getElementById("swedishVoice").addEventListener("click", function() {
    chrome.storage.sync.set({"voice": "Swedish Female"});
    changeButton("swedishVoice");
  });

  document.getElementById("italianVoice").addEventListener("click", function() {
    chrome.storage.sync.set({"voice": "Italian Female"});
    changeButton("italianVoice");
  });

  document.getElementById("koreanVoice").addEventListener("click", function() {
    chrome.storage.sync.set({"voice": "Korean Female"});
    changeButton("koreanVoice");
  });

  document.getElementById("japaneseVoice").addEventListener("click", function() {
    chrome.storage.sync.set({"voice": "Japanese Female"});
    changeButton("japaneseVoice");
  });

  document.getElementById("chineseVoice").addEventListener("click", function() {
    chrome.storage.sync.set({"voice": "Chinese Female"});
    changeButton("chineseVoice");
  });
});
