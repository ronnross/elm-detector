// Is Elm object present on current page
var elmDetected = !!window.Elm;

// Create custom event for one-time message passing
var eventToDispatch = new CustomEvent('event:message', {
    detail: elmDetected
});

document.dispatchEvent(eventToDispatch);
