import { useCallback, useState } from "react";
import "./App.css";
import Company from "./client/components/Company/Company";
import { SearchBar } from "./client/components/SearchBar/SearchBar";
import { fetchCompanies } from "./server/search";

function App() {
  const [companies, setCompanies] = useState([]);
  const [bulldozer, setBulldozer] = useState(false);
  const [compactor, setCompactor] = useState(false);
  const [term, setTerm] = useState("");
  const [pristine, setPristine] = useState(true);

  const handleSearchSubmit = useCallback(
    async (searchTerm: string, isBulldozer: boolean, isCompactor: boolean) => {
      const companiesArray = await fetchCompanies(
        searchTerm,
        isBulldozer,
        isCompactor
      );
      setCompanies(companiesArray);
      setBulldozer(isBulldozer);
      setCompactor(isCompactor);
      setPristine(false);
      setTerm(searchTerm);
    },
    [companies, bulldozer, compactor]
  );

  const handleClearResults = useCallback(() => {
    setCompanies([]);
    setPristine(true);
    // setTerm("");
  }, [companies, term]);

  const renderedCompanies = companies.map((company, i) => (
    <Company company={company} key={i} />
  ));

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSearchSubmit={(
            searchTerm: string,
            isBulldozer: boolean,
            isCompactor: boolean
          ) => handleSearchSubmit(searchTerm, isBulldozer, isCompactor)}
          onClearResults={handleClearResults}
        />
        {companies.length !== 0 && (
          <div className="main-content">{renderedCompanies}</div>
        )}
        {companies.length === 0 && !pristine && (
          <div>{"no results! try Digitube"}</div>
        )}
      </header>
    </div>
  );
}

export default App;
