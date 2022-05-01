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
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  useEffect(() => {
    if (searchTerm !== "") {
      onSearchSubmit(searchTerm);
    } else {
      // eslint-disable-next-line no-use-before-define
      onClearResults();
    }
  }, [searchTerm]);

  // update 'term' value after 1 second from the last update of 'debouncedTerm'
  useEffect(() => {
    const timer = setTimeout(() => setSearchTerm(debouncedTerm), 1000);
    return () => clearTimeout(timer);
  }, [debouncedTerm]);

  return (
    <div className="searchbar">
      <input
        className="searchbar-input"
        onChange={(e) => setDebouncedTerm(e.target.value)}
        placeholder="Search companies"
        type="text"
        value={debouncedTerm}
      />
    </div>
  );
};
