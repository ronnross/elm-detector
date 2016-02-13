chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.elm) {
      chrome.pageAction.show(sender.tab.id);
    }
  });
