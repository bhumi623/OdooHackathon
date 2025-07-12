import Askbutton from "../../components/Askbutton/Askbutton.jsx"
import FilterBar from "../../components/FilterBar/FilterBar.jsx"
import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar.jsx"
const Home = () => {
    const [filter, setFilter] = useState("Newest");
    const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };
    return(
        <div>
            <Askbutton/>
            <FilterBar onSelectFilter={(val) => setFilter(val)} />
            <h2>Showing: {filter} questions</h2>
            <SearchBar onSearch={handleSearch} />
        </div>
         
    )
}
export default Home