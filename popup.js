// Inject the payload.js script into the current tab after the popout has loaded
window.addEventListener('load', function (evt) {
	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
		file: 'payload.js'
	});;
});

// Listen to messages from the payload.js script and write to popout.html and open new tab
chrome.runtime.onMessage.addListener(function (message) {
	document.getElementById('pagetitle').innerHTML = message;
	console.log(message);
	if (message.includes("videos")){
		chrome.tabs.executeScript({
		  file: 'redirect.js'
		});
	}
});
