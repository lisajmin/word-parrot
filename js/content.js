// Declare global variables.
var word;
var selectedLanguage;
var selectedVoice;
var appControl;

// Set global variables from Chrome storage.
function importVariables() {
  chrome.storage.sync.get('language', function(data) { selectedLanguage = data.language; });
  chrome.storage.sync.get('voice', function(data) { selectedVoice = data.voice; });
  chrome.storage.sync.get('control', function(data) { appControl = data.control; });
};

// Select and dictate audio of selection.
function wordSelection() {
  word = window.getSelection().toString();
  if (appControl == "on") {
    responsiveVoice.speak(word, selectedVoice);
  }
};

// Detect and update variables when storage values have changed.
chrome.storage.onChanged.addListener(function () {
  importVariables();
});

window.onload = function(){
  // Set variables when loads.
  importVariables();
  // Listen for double-click or mouseup action on highlighted content to selection.
  document.addEventListener('dblclick', wordSelection) || document.addEventListener('mouseup', wordSelection);
};
