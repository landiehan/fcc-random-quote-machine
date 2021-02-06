import { useState } from "react";
import "./quoteBox.css";

function generateRandomIndex(length) {
  return Math.floor(Math.random() * length);
}

export default function QuoteBox({ quotes }) {
  const [randomIndex, setRandomIndex] = useState(
    generateRandomIndex(quotes.length)
  );

  const getNewQuote = () => setRandomIndex(generateRandomIndex(quotes.length));

  const { quote, author } = quotes[randomIndex];
  return (
    <section className="quote-box" id="quote-box">
      <div className="quote-main">
        <p>"{quote}"</p>
        <span>—— {author}</span>
      </div>
      <div className="quote-footer">
        <a href="twitter.com/intent/tweet">Tweet this one</a>
        <button onClick={getNewQuote}>New quote</button>
      </div>
    </section>
  );
}
