const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];
const colors = [
  "yellow",
  "blue",
  "green",
  "purple",
  "orange",
  "brown",
  "red",
  "mint",
  "silver",
  "teal",
  "mint",
  "darkOrange",
  "berry",
  "black",
];
function newQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  const allBody = document.querySelector("body");
  for (let i = 0; i < colors.length; i++) {
    allBody.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
  }
  if (!quote.author) {
    authorText.textContent = "unknown";
  } else {
    authorText.textContent = quote.author;
  }

  quoteText.textContent = quote.text;
}
async function getQuotes() {
  const api = "https://type.fit/api/quotes";
  try {
    const response = await fetch(api);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {}
}

// to tweet the qupte
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

getQuotes();
