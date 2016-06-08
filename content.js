function injectScript(file, node) {
    // Grab element passed in
    var element = document.getElementsByTagName(node)[0];
    // Create new script element to contain detector.js
    var newElement = document.createElement('script');
    newElement.setAttribute('type', 'text/javascript');
    newElement.setAttribute('src', file);
    element.appendChild(newElement);
}

// Inject detector script into current page
injectScript(chrome.extension.getURL('detector.js'), 'body');

// Listening for message to be passed from detector.js
document.addEventListener('event:message', function(eventMessage) {
    // List to message to find if icon should be highlighted
    chrome.runtime.sendMessage({elm: eventMessage.detail});
});
