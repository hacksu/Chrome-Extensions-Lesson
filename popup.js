// open link in current tab of Chrome
window.addEventListener('click', (e) => {
    if (e.target.href !== undefined && e.target.classList.contains("current-tab")) {
        chrome.tabs.update({ url: e.target.href })
    }
})