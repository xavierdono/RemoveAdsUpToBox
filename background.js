chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.executeScript(null, {
      code:"document.getElementById('eiyfarkt').remove(); document.getElementsByClassName('udowptgh-bg')[0].parentNode.removeChild(document.getElementsByClassName('udowptgh-bg')[0]);"
  });
});