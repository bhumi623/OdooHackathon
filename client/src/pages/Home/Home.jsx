import Askbutton from "../../components/Askbutton/Askbutton.jsx"
import FilterBar from "../../components/FilterBar/FilterBar.jsx"
import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar.jsx"
import QuestionCard from "../../components/QuestionCard/QuestionCard.jsx";
import Pagination from "../../components/Pagination/Pagination";
import questions from "../../data/questions";
const Home = () => {
    const data = questions;
    const [filter, setFilter] = useState("Newest");
    const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const start = (page - 1) * itemsPerPage;
  const paginatedData = data.slice(start, start + itemsPerPage);
    return(
        <div>
            <div>
                <Askbutton/>
            <div><FilterBar onSelectFilter={(val) => setFilter(val)} />
            {/* <h2>Showing: {filter} questions</h2> */}
            <SearchBar onSearch={handleSearch} /></div>
            </div>
            {paginatedData.map((q) => (
        <QuestionCard key={q.id} question={q} />
      ))}
      <Pagination page={page} setPage={setPage} total={data.length} />
        </div>
         
    )
}
export default Home