// content.js

// copy the clipboard content, replace new line characters in content with commas, replace clipboard cotent with comma-separated string.
function convertClipboard() {

    const text = navigator.clipboard.readText();
    text.then(function (clipText) {
        const convertedText = clipText.trim().split('\n').join(',');
        navigator.clipboard.writeText(convertedText);
    });
}

convertClipboard();