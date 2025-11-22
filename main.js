const canvasWidth = 500;
const canvasHeight = 500;
const padding = 20;
const txtSize = 10;

let mainImage = null;

document.addEventListener("DOMContentLoaded", () => {
    Telegram.WebApp.ready();

    Telegram.WebApp.expand();
});

// Print Web App User info
function printWebAppInfo(){
textSize(txtSize);

let outputText = "Failed to get data";

if (Telegram.WebApp.initDataUnsafe && Telegram.WebApp.initDataUnsafe.user) {
    outputText = JSON.stringify(Telegram.WebApp.initDataUnsafe);
}

text(outputText, padding, padding, canvasWidth - padding, canvasHeight - padding);
}

function preload() {
    if (Telegram.WebApp.initDataUnsafe && Telegram.WebApp.initDataUnsafe.user && Telegram.WebApp.initDataUnsafe.user.photo_url) {
        mainImage = loadImage(Telegram.WebApp.initDataUnsafe.user.photo_url);
    } else {
        mainImage = loadImage("https://mdn.github.io/shared-assets/images/examples/mdn.svg");
    }
}

function drawAvatar() {

image(mainImage, 0, 0);

}

// Setup canvas
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    // imageMode(CENTER);
}

// Event loop
function draw() {
    background(220);

    printWebAppInfo();

    drawAvatar();
}

// Example: Close the Mini App programmatically
// Telegram.WebApp.close();