import { useCallback, useState } from "react";
import "./App.css";
import Company from "./client/components/Company/Company";
import { SearchBar } from "./client/components/SearchBar/SearchBar";
import { fetchCompanies } from "./server/search";

function App() {
  const [companies, setCompanies] = useState([]);

  const handleSearchSubmit = useCallback(
    async (searchTerm: string, isBulldozer: boolean, isCompactor: boolean) => {
      const companiesArray = await fetchCompanies(
        searchTerm,
        isBulldozer,
        isCompactor
      );
      setCompanies(companiesArray);
    },
    [companies]
  );

  const handleClearResults = useCallback(() => setCompanies([]), [companies]);

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
        <div className="main-content">{renderedCompanies}</div>
      </header>
    </div>
  );
}

export default App;
