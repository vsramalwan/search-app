import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Quote from "./client/components/Quote/Quote";
import { SearchBar } from "./client/components/SearchBar/SearchBar";
import { requestQuotes } from "./server/animeChan";

function App() {
  const [data, setData] = useState([]);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetch("/companies")
      .then((response) => response.json())
      .then((d: any) => setData(d));
  }, []);

  const handleSearchSubmit = useCallback(
    async (searchTerm: string) => {
      const quotesArray = await requestQuotes(searchTerm.toLowerCase());
      setQuotes(quotesArray);
    },
    [quotes]
  );

  const handleClearResults = useCallback(() => setQuotes([]), [quotes]);

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
          onSearchSubmit={(searchTerm: string) =>
            handleSearchSubmit(searchTerm)
          }
          onClearResults={handleClearResults}
        />
        <div className="main-content">{renderedQuotes}</div>
      </header>
    </div>
  );
}

export default App;
