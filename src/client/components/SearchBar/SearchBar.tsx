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
  const [isBulldozerChecked, setIsBulldozerChecked] = useState(false);
  const [isCompactorChecked, setIsCompactorChecked] = useState(false);

  useEffect(() => {
    if (searchTerm !== "") {
      onSearchSubmit(searchTerm, isBulldozerChecked, isCompactorChecked);
    } else {
      // eslint-disable-next-line no-use-before-define
      onClearResults();
    }
  }, [searchTerm]);

  // update 'searchTerm' value after 1 second from the last update of 'debouncedSearchTerm'
  useEffect(() => {
    const timer = setTimeout(() => setSearchTerm(debouncedSearchTerm), 1000);
    return () => clearTimeout(timer);
  }, [debouncedSearchTerm]);

  const handleOnBulldozerChange = () => {
    setIsBulldozerChecked(!isBulldozerChecked);
  };

  const handleOnCompactorChange = () => {
    setIsCompactorChecked(!isCompactorChecked);
  };

  return (
    <div className="searchbar">
      <input
        className="searchbar-input"
        onChange={(e) => setDebouncedSearchTerm(e.target.value)}
        placeholder="Search companies"
        type="text"
        value={debouncedSearchTerm}
      />
      <div className="specialities">
        <input
          checked={isBulldozerChecked}
          id="bulldozer"
          name="bulldozer"
          onChange={handleOnBulldozerChange}
          type="checkbox"
          value="Bulldozer"
        />
        Bulldozer
        <input
          checked={isCompactorChecked}
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
