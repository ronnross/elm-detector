function injectScript(file, node) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    th.appendChild(s);
}
injectScript( chrome.extension.getURL('detector.js'), 'body');

document.addEventListener('RW759_connectExtension', function(e) {
    chrome.runtime.sendMessage({elm: e.detail});
});
