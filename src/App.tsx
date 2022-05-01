import { useEffect, useState } from "react";
import "./App.css";
import Quote from "./client/components/Quote/Quote";
import { SearchBar } from "./client/components/SearchBar/SearchBar";

function App() {
  const [data, setData] = useState([]);
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetch("/companies")
      .then((response) => response.json())
      .then((d: any) => setData(d));
  }, []);

  const handleSearchSubmit = async (term: string) => {
    const response = await fetch(
      `https://animechan.vercel.app/api/quotes/anime?title=${term}`
    );
    const quotesArray = await response.json();
    setQuotes(quotesArray);
  };

  const handleClearResults = () => setQuotes([]);

  const renderedQuotes = quotes.map((quote, i) => (
    <Quote quote={quote} key={i} />
  ));

  return (
    <div className="App">
      <header className="App-header">
        {/* @ts-expect-error */}
        <p>{!data ? "Loading..." : data[0]?.name}</p>
        <SearchBar
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSearchSubmit={(term: string) => handleSearchSubmit(term)}
          onClearResults={handleClearResults}
        />
        <div className="main-content">{renderedQuotes}</div>
      </header>
    </div>
  );
}

export default App;
