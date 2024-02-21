window.addEventListener('click', (e) => {
    if (e.target.href !== undefined && e.target.classList.contains("new-tab")) {
        chrome.tabs.create({ url: e.target.href })
    }
})

// inserting an element 

/*
var img = document.createElement('img');
var imageUrl = "chrome-extension://mkfdjpfhjmdkpcmbhldiobkgkeadlifg/images/Untitled.png";
img.src = imageUrl;
console.log(imageUrl);
img.style.display = 'block';
document.body.insertBefore(img, document.body.firstChild);
*/