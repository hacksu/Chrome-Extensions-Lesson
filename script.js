/*
alert("buzz buzz");

// hide h1 element
const hideMe = document.getElementsByTagName("h1");
for (const e of hideMe) {
    e.style.display = 'none';
}

// apply a random blur effect and color filter every second
setInterval(function () {
    var hueRotateDegrees = Math.floor(Math.random() * 361);
    var blurStrength = Math.floor(Math.random() * 10);
    document.documentElement.style.filter = `hue-rotate(${hueRotateDegrees}deg) blur(${blurStrength}px)`;
}, 1000);
*/

// insert an element
let img = document.createElement('img');
img.src = `chrome-extension://${chrome.runtime.id}/images/icon128.png`;
img.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 9999;';
document.body.appendChild(img);