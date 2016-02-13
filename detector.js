var elmDetected = !!window.Elm;
setTimeout(function() {
    document.dispatchEvent(new CustomEvent('RW759_connectExtension', {
        detail: elmDetected
    }));
}, 0);
