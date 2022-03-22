import type { NextPage } from "next";
import { useState, useEffect } from "react";

import Photos from "../components/Photos";
import SearchBar from "../components/SearchBar";
import API from "../services";

const Home: NextPage = () => {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<Array<string>>([]);
  useEffect(() => {
    async function fetchLoad() {
      let response = await API.get(
        search
          ? `/search/photos?per_page=30&query=${search}`
          : "/photos?per_page=30"
      );
      setData(search ? response.data.results : response.data);
    }
    fetchLoad();
  }, [search]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <SearchBar handleSearch={handleSearch} search={search} />
      <Photos results={data} />
    </>
  );
};

export default Home;
