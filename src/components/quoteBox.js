import { useState } from "react";

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
    <section id="quote-box">
      <p>"{quote}"</p>
      <span>—— {author}</span>
      <button onClick={getNewQuote}>New quote</button>
    </section>
  );
}
