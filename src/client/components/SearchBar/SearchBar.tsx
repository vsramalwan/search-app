import { useEffect, useState } from "react";
import "./SearchBar.css";

export const SearchBar = ({
  onSearchSubmit,
  onClearResults,
}: {
  onSearchSubmit: (s: string) => void;
  onClearResults: VoidFunction;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    if (searchTerm !== "") {
      onSearchSubmit(searchTerm);
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

  return (
    <div className="searchbar">
      <input
        className="searchbar-input"
        onChange={(e) => setDebouncedSearchTerm(e.target.value)}
        placeholder="Search companies"
        type="text"
        value={debouncedSearchTerm}
      />
    </div>
  );
};
