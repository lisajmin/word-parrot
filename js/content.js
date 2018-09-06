var word;

function wordSelection() {
  word = window.getSelection().toString();
  chrome.runtime.sendMessage({toSay: word}, function() {});
};

window.onload = function(){
    document.addEventListener('dblclick', wordSelection);
};
