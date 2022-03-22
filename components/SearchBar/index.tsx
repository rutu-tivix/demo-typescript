import type { NextPage } from "next";
import React from "react";

import styles from "./searchBar.module.css";

interface Props {
  handleSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
}
const SearchBar: NextPage<Props> = (props) => {
  const { handleSearch, search } = props;
  return (
    <div className={styles.form_search}>
      <input
        id="query"
        className={styles.search__input}
        type="text"
        placeholder="Search free high-resolution photos"
        onChange={handleSearch}
        value={search}
      />
    </div>
  );
};

export default SearchBar;
