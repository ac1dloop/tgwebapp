// Initialize the Telegram Web App
Telegram.WebApp.ready()
// Example: Display user data (if available)
if (Telegram.WebApp.initDataUnsafe && Telegram.WebApp.initDataUnsafe.user) {
    document.body.innerHTML += `<p>Hello, ${Telegram.WebApp.initDataUnsafe.user.first_name}!</p>`;
}
// Example: Close the Mini App programmatically
// Telegram.WebApp.close();

function setup() {
  createCanvas(500, 500);
}
function draw() {
  background(220);
}

console.log("Hello")

elem = document.getElementById("beg")
elem.innerHTML = "Script is running";