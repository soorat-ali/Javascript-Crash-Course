const colors = ["skyblue", "tomato", "#8e44ad", "#2ecc71", "gold"];
let colorIndex = 0;

const button = document.createElement("button");
button.textContent = "Change Background Color";
document.body.appendChild(button);

function randomRgb() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

button.addEventListener("click", () => {
  if (colorIndex < colors.length) {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex++;
  } else {
    document.body.style.backgroundColor = randomRgb();
  }
});
