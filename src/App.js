import "./App.css";
import { useEffect, useState } from "react";
import QuoteBox from "./components/quoteBox";

const url =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

function App() {
  const [quotes, setQuotes] = useState(null);
  useEffect(() => {
    const getQuotes = async () => {
      const response = await fetch(url);
      if (response.ok) {
        const jsonResponse = await response.json();
        setQuotes(jsonResponse.quotes);
      }
    };
    getQuotes();
  }, []);

  if (!quotes) {
    return <p style={{ fontSize: "64px", color: "red" }}>Loading......</p>;
  }

  return (
    <div className="App">
      <h1>Random Quote Machine</h1>
      <QuoteBox quotes={quotes} />
    </div>
  );
}

export default App;
