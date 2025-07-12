import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ page, setPage, total }) => {
  const totalPages = Math.ceil(total / 5);

  return (
    <div className={styles.pagination}>
      <button disabled={page === 1} onClick={() => setPage(page - 1)} className={styles.button}>
        &lt;
      </button>
      {[...Array(totalPages).keys()].map((num) => (
        <button
          key={num}
          onClick={() => setPage(num + 1)}
          className={`${styles.button} ${page === num + 1 ? styles.active : ""}`}
        >
          {num + 1}
        </button>
      ))}
      <button disabled={page === totalPages} onClick={() => setPage(page + 1)} className={styles.button}>
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
