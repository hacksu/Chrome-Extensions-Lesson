window.addEventListener('click', (e) => {
    if (e.target.href !== undefined && e.target.classList.contains("new-tab")) {
        chrome.tabs.create({ url: e.target.href })
    }
})