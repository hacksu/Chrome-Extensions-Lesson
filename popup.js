// bind the link element to Chrome new tab event
window.addEventListener('click', (e) => {
    if (e.target.href !== undefined && e.target.classList.contains("new-tab")) {
        chrome.tabs.create({ url: e.target.href })
    }
})

// bind a popup button to invertColors toggle function (not covered in lesson)

/*
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "invertColors") {
        invertColors();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("invertButton").addEventListener("click", function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "invertColors" });
        });
    });
});

let isInverted = false;
function invertColors() {
    isInverted = !isInverted;
    if (isInverted) {
        document.documentElement.style.filter = "invert(100%)";
    } else {
        document.documentElement.style.filter = "none";
    }
}
*/