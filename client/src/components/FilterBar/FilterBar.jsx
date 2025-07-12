import React, { useState } from "react";
import styles from "./FilterBar.module.css";
import { Menu } from "lucide-react";

const FilterBar = ({ onSelectFilter }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Newest");

  const filters = ["Newest", "Unanswered", "Most Answered", "Trending"];

  const handleFilterSelect = (filter) => {
    setSelected(filter);
    onSelectFilter(filter);
    setOpen(false); // close dropdown/hamburger on selection
  };

  return (
    <div className={styles.filterBar}>
      <div className={styles.desktopDropdown}>
        <select
          value={selected}
          onChange={(e) => handleFilterSelect(e.target.value)}
        >
          {filters.map((filter) => (
            <option key={filter} value={filter}>
              {filter}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.mobileHamburger}>
        <Menu className={styles.menuIcon} onClick={() => setOpen(!open)} />
        {open && (
          <div className={styles.mobileMenu}>
            {filters.map((filter) => (
              <div
                key={filter}
                onClick={() => handleFilterSelect(filter)}
                className={`${styles.mobileItem} ${
                  selected === filter ? styles.active : ""
                }`}
              >
                {filter}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
