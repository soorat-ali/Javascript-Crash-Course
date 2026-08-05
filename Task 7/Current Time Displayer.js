const clockDisplay = document.createElement("div");
document.body.appendChild(clockDisplay);

function pad(num) {
  return num.toString().padStart(2, "0");
}

function updateClock() {
  const now = new Date();
  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());
  const seconds = pad(now.getSeconds());
  clockDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock, 1000);
