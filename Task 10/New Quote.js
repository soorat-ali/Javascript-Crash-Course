const quoteText = document.createElement("p");
const quoteAuthor = document.createElement("p");
const newQuoteButton = document.createElement("button");
newQuoteButton.textContent = "New Quote";

document.body.appendChild(quoteText);
document.body.appendChild(quoteAuthor);
document.body.appendChild(newQuoteButton);

async function showRandomQuote() {
  newQuoteButton.disabled = true;
  quoteText.textContent = "Loading...";
  quoteAuthor.textContent = "";

  try {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const quote = await response.json();
    quoteText.textContent = `"${quote.quote}"`;
    quoteAuthor.textContent = `— ${quote.author}`;
  } catch (error) {
    quoteText.textContent = "Failed to load quote. Please try again.";
    quoteAuthor.textContent = "";
  } finally {
    newQuoteButton.disabled = false;
  }
}

newQuoteButton.addEventListener("click", showRandomQuote);

showRandomQuote();
