import Askbutton from "../../components/Askbutton/Askbutton.jsx";
import FilterBar from "../../components/FilterBar/FilterBar.jsx";
import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import QuestionCard from "../../components/QuestionCard/QuestionCard.jsx";
import Pagination from "../../components/Pagination/Pagination";
import questions from "../../data/questions";
import styles from "./Home.module.css";

const Home = () => {
  const [filter, setFilter] = useState("Newest");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
    setPage(1); // reset page on search
  };

  // Apply search first
  let data = questions.filter(
    (q) =>
      q.title.toLowerCase().includes(searchTerm) ||
      q.description.toLowerCase().includes(searchTerm)
  );

  // Apply filter
  if (filter === "Newest") {
    data = data.sort((a, b) => new Date(b.time) - new Date(a.time));
  } else if (filter === "Unanswered") {
    data = data.filter((q) => q.answers === 0);
  } else if (filter === "Most Answered") {
    data = data.sort((a, b) => b.answers - a.answers);
  } else if (filter === "Trending") {
    data = data.sort((a, b) => {
      const aRelates = a.answersdesc?.reduce((sum, ans) => sum + ans.relates, 0) || 0;
      const bRelates = b.answersdesc?.reduce((sum, ans) => sum + ans.relates, 0) || 0;
      return bRelates - aRelates;
    });
  }

  const start = (page - 1) * itemsPerPage;
  const paginatedData = data.slice(start, start + itemsPerPage);

  return (
    <div>
      <div className={styles.threebtn}>
        <div>
          <Askbutton className={styles.Ask} />
        </div>
        <div className={styles.twobtn}>
          <div className={styles.Filter}>
            <FilterBar
              onSelectFilter={(val) => {
                setFilter(val);
                setPage(1); // reset page on filter change
              }}
            />
          </div>
          <div className={styles.Search}>
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </div>

      {paginatedData.map((q) => (
        <QuestionCard key={q.id} question={q} />
      ))}

      <Pagination page={page} setPage={setPage} total={data.length} />
    </div>
  );
};

export default Home;
