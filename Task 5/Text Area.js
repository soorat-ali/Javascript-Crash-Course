const textarea = document.createElement("textarea");
textarea.rows = 6;
textarea.cols = 40;

const charLabel = document.createElement("p");
const wordLabel = document.createElement("p");

document.body.appendChild(textarea);
document.body.appendChild(charLabel);
document.body.appendChild(wordLabel);

function updateCounts() {
  const text = textarea.value;

  const charCount = text.length;

  const trimmed = text.trim();
  const wordCount = trimmed === "" ? 0 : trimmed.split(/\s+/).length;

  charLabel.textContent = `Character Count: ${charCount}`;
  wordLabel.textContent = `Word Count: ${wordCount}`;
}

textarea.addEventListener("input", updateCounts);

updateCounts();
