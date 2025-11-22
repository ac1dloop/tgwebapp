const canvasWidth = 500;
const canvasHeight = 500;
const padding = 20;
const txtSize = 10;

const dbg = `{"query_id": "AAFjgdsaf23jnadslk", "user": { "id": 194728483, "is_bot": false, "first_name": "Nick", "last_name": null, "username": "nickk", "language_code": "en", "is_premium": true, "allows_write_to_pm": true }, "receiver": { "id": 194728483, "is_bot": false, "first_name": "Nick", "last_name": null, "username": "nickk", "language_code": "en", "is_premium": true }, "chat": { "id": -1002123213321, "type": "supergroup", "title": "MyGroup", "username": "my_group", "photo_url": "https://t.me/i/userpic/320/group.jpg" }, "chat_type": "supergroup", "chat_instance": "-5953634227559283144", "start_param": "LEVEL5", "can_send_after": null, "auth_date": 1735032280,"hash": "7a1f9f3be31ac9ff6f93ff7b507aa8..." }`;

document.addEventListener("DOMContentLoaded", () => {
    Telegram.WebApp.ready();

    Telegram.WebApp.expand();
});

function printWebAppInfo(){
textSize(txtSize);

// let outputText = "Failed to get data";
let outputText = dbg;

if (Telegram.WebApp.initDataUnsafe && Telegram.WebApp.initDataUnsafe.user) {
    outputText = JSON.stringify(Telegram.WebApp.initDataUnsafe);
}

text(outputText, padding, padding, canvasWidth - padding, canvasHeight - padding);
}

// Setup canvas
function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

// Event loop
function draw() {
background(220);

printWebAppInfo();
}

// Example: Close the Mini App programmatically
// Telegram.WebApp.close();