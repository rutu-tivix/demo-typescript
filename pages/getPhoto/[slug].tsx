import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Photo from "../../components/GetPhoto";
import API from "../api/services";

const GetPhoto: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [data, setData] = useState<object | null>(null);

  useEffect(() => {
    async function fetchLoad() {
      let response = await API.get(`/photos/${slug}`);
      setData(response.data);
    }
    if (slug) {
      fetchLoad();
    }
  }, [slug]);
  return (
    <div>
      <Photo data={data} />
    </div>
  );
};

export default GetPhoto;
