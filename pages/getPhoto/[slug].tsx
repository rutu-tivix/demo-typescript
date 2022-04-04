import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Photo from "../../components/GetPhoto";
import API from "../api/services";

export type PhotoObject = {
  urls: string;
  likes: number;
  views: number;
  downloads: number;
  username: string;
  alt_description: string;
};

const initialState = {
  urls: "",
  likes: 0,
  views: 0,
  downloads: 0,
  username: "",
  alt_description: "",
};

const GetPhoto: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [data, setData] = useState<PhotoObject>(initialState);

  useEffect(() => {
    async function fetchLoad() {
      let response = await API.get(`/photos/${slug}`);
      let apiData: PhotoObject = {
        urls: response.data.urls.regular,
        likes: response.data.likes,
        views: response.data.views,
        downloads: response.data.downloads,
        username: response.data.user.username,
        alt_description: response.data.alt_description,
      };
      setData(apiData);
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
