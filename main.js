const canvasWidth = 500;
const canvasHeight = 500;

document.addEventListener("DOMContentLoaded", () => {
    Telegram.WebApp.ready();

    Telegram.WebApp.expand();
});

function printWebAppInfo(){
textSize(10);

let outputText = "Failed to get data";

if (Telegram.WebApp.initDataUnsafe && Telegram.WebApp.initDataUnsafe.user) {
    outputText = JSON.stringify(Telegram.WebApp.initDataUnsafe);
}

text(outputText, 50, 50)
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
background(100);

printWebAppInfo();
}

// Example: Close the Mini App programmatically
// Telegram.WebApp.close();