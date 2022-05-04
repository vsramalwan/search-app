import { useEffect, useState } from "react";
import "./SearchBar.css";

export const SearchBar = ({
  onSearchSubmit,
  onClearResults,
}: {
  onSearchSubmit: (s: string, b: boolean, c: boolean) => void;
  onClearResults: VoidFunction;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const [isBulldozer, setIsBulldozer] = useState(false);
  const [isCompactor, setIsCompactor] = useState(false);

  useEffect(() => {
    if (searchTerm !== "") {
      onSearchSubmit(searchTerm, isBulldozer, isCompactor);
    } else {
      // eslint-disable-next-line no-use-before-define
      onClearResults();
    }
  }, [searchTerm, isBulldozer, isCompactor]);

  // update 'searchTerm' value after 1 second from the last update of 'debouncedSearchTerm'
  useEffect(() => {
    const timer = setTimeout(() => setSearchTerm(debouncedSearchTerm), 1000);
    return () => clearTimeout(timer);
  }, [debouncedSearchTerm]);

  const handleOnBulldozerChange = () => {
    setIsBulldozer(!isBulldozer);
  };

  const handleOnCompactorChange = () => {
    setIsCompactor(!isCompactor);
  };

  return (
    <div className="searchbar">
      <input
        className="searchbar-input"
        data-testid="searchbar-input"
        id="searchbar-input"
        onChange={(e) => setDebouncedSearchTerm(e.target.value)}
        placeholder="Search companies"
        type="text"
        value={debouncedSearchTerm}
      />
      <div className="specialities">
        <input
          checked={isBulldozer}
          data-testid="bulldozer"
          id="bulldozer"
          name="bulldozer"
          onChange={handleOnBulldozerChange}
          type="checkbox"
          value="Bulldozer"
        />
        Bulldozer
        <input
          checked={isCompactor}
          data-testid="compactor"
          id="compactor"
          name="compactor"
          onChange={handleOnCompactorChange}
          type="checkbox"
          value="Compactor"
        />
        Compactor
      </div>
    </div>
  );
};
