import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { Search } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <Search className={styles.icon} />
      <input
        type="text"
        placeholder="Search by tag (e.g. anxiety)"
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
