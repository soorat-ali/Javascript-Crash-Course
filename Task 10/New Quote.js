const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
];

const quoteText = document.createElement("p");
const quoteAuthor = document.createElement("p");
const newQuoteButton = document.createElement("button");
newQuoteButton.textContent = "New Quote";

document.body.appendChild(quoteText);
document.body.appendChild(quoteAuthor);
document.body.appendChild(newQuoteButton);

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteText.textContent = `"${quote.text}"`;
  quoteAuthor.textContent = `— ${quote.author}`;
}

newQuoteButton.addEventListener("click", showRandomQuote);

showRandomQuote();
