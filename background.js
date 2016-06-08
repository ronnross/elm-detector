// Proxy messages from content
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // If Elm object is present on window from detector.js
    if (request.elm) {
      // Highlights icon
      chrome.pageAction.show(sender.tab.id);
    }
  });
