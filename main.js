const canvasWidth = 900;
const canvasHeight = 900;
const padding = 20;
const txtSize = 10;
const scale = window.devicePixelRatio;
const NUM_X_SEGMENTS = 4;
const NUM_Y_SEGMENTS = 4;
const NUM_SEGMENTS = NUM_X_SEGMENTS * NUM_Y_SEGMENTS;


/** @type {Image} */
let img = null;

/** @type {Map} */
let segMap = null;

document.addEventListener("DOMContentLoaded", () => {
    Telegram.WebApp.ready();

    Telegram.WebApp.expand();
});

const canvas = document.getElementById("canv");
canvas.width = canvasWidth;
canvas.height = canvasHeight;
// canvas.style.width = canvasWidth + "px";
// canvas.style.height = canvasHeight + "px";
canvas.width = canvasWidth * scale;
canvas.height = canvasHeight * scale;


/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");
ctx.scale(scale, scale);

function logText(str){
    ctx.font = "50px serif";
    ctx.fillText(str, 0, canvasHeight + 10)
}

function getMousePos(evt) { 
    return {
        x: evt.clientX * scale,   // scale mouse coordinates after they have
        y: evt.clientY * scale     // been adjusted to be relative to element
    }
}

function drawGrid() {
    const dw = canvasWidth / NUM_X_SEGMENTS;
    const dh = canvasHeight / NUM_Y_SEGMENTS;

    ctx.lineWidth = 3;

    for (i = 1; i < NUM_X_SEGMENTS; i++) {
        ctx.beginPath();
        ctx.moveTo(dw * i, 0);
        ctx.lineTo(dw * i, canvasHeight);
        ctx.stroke();
    }

    for (i = 1; i < NUM_Y_SEGMENTS; i++) {
        ctx.beginPath();
        ctx.moveTo(0, dh * i);
        ctx.lineTo(canvasWidth, dh * i);
        ctx.stroke();
    }
}

function fillSegMap() {
    const dw = canvasWidth / NUM_X_SEGMENTS;
    const dh = canvasHeight / NUM_Y_SEGMENTS;

    const idw = img.naturalWidth / NUM_X_SEGMENTS;
    const idh = img.naturalHeight / NUM_Y_SEGMENTS;

    segMap = new Map();

    seg = 0;
    for (i = 0; i < NUM_Y_SEGMENTS; i++) {
        for (j = 0; j < NUM_X_SEGMENTS; j++) {
            segMap.set(seg,
                {
                    dx: dw * j,
                    dy: dh * i,
                    sx: idw * j,
                    sy: idh * i
                }
            );
            seg++;
        }
    }
}

//seg - segment index. index - index where to draw
function drawSegment(which, where) {
    const dw = canvasWidth / NUM_X_SEGMENTS;
    const dh = canvasHeight / NUM_Y_SEGMENTS;

    const idw = img.width / NUM_X_SEGMENTS;
    const idh = img.height / NUM_Y_SEGMENTS;

    a = segMap.get(which);
    b = segMap.get(where);

    ctx.drawImage(img, a.sx, a.sy, idw, idh, b.dx, b.dy, dw - 1, dh - 1);
}

function ableToLoadImage() {
    Telegram.WebApp.initDataUnsafe &&
        Telegram.WebApp.initDataUnsafe.user &&
        Telegram.WebApp.initDataUnsafe.user.photo_url;
}

img = new Image();
if (ableToLoadImage()) {
    img.src = Telegram.WebApp.initDataUnsafe.user.photo_url;
} else {
    // img.src = "https://mdn.github.io/shared-assets/images/examples/mdn.svg";
    img.src = "https://upload.wikimedia.org/wikipedia/commons/0/04/Betonabfluss_auf_dem_gefrorenen_Knollenteich%2C_Hof%2C_20241231_HOF0102_RAW-Export.jpg";
}

fillSegMap();

drawGrid();

for (i = 0; i < NUM_SEGMENTS; i++) {
    drawSegment(i, i);
}

logText("Hellow");