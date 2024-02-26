// open link in current tab of Chrome
window.addEventListener('click', (e) => {
    if (e.target.href !== undefined && e.target.classList.contains("current-tab")) {
        chrome.tabs.update({ url: e.target.href })
    }
})

// add functionality to invert button
document.getElementById('invert').addEventListener('click', () => {
    // query active tabs
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        // execute script to invert colors
        chrome.scripting.executeScript({
            // target the active tab
            target: { tabId: tabs[0].id },
            function: () => {
                let filterValue = document.documentElement.style.filter;
                if (filterValue.includes('invert')) {
                    document.documentElement.style.filter = 'none';
                } else {
                    document.documentElement.style.filter = 'invert(100%)';
                }
            }
        });
    });
});