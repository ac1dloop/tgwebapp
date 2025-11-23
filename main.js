const canvasWidth = 500;
const canvasHeight = 500;
const padding = 20;
const txtSize = 10;

let mainImage = null;

document.addEventListener("DOMContentLoaded", () => {
    Telegram.WebApp.ready();

    Telegram.WebApp.expand();
});

const canvas = document.getElementById("canv");
canvas.width = canvasWidth;
canvas.height = canvasHeight;
const ctx = canvas.getContext("2d");

ctx.font = "48px serif";
ctx.fillText("Hello world", 0, 200);

function ableToLoadImage() {
    Telegram.WebApp.initDataUnsafe && 
    Telegram.WebApp.initDataUnsafe.user && 
    Telegram.WebApp.initDataUnsafe.user.photo_url;
}

if (ableToLoadImage()) {
    img = new Image();
    img.src = Telegram.WebApp.initDataUnsafe.user.photo_url;
    img.onload = () => {
        ctx.drawImage(img, 0, 0);  // draw at x=0, y=0
    };
} else {
    img = new Image();
    img.src = "https://mdn.github.io/shared-assets/images/examples/mdn.svg";
        img.onload = () => {
        ctx.drawImage(img, 0, 0);  // draw at x=0, y=0
    };
}


