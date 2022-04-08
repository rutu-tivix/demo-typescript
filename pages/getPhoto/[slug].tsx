import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { deleteDoc, doc, setDoc, getDoc } from "firebase/firestore";

import Photo from "../../components/GetPhoto";
import API from "../api/services";
import { db } from "../../firebase/clientApp";

export type PhotoObject = {
  id: string;
  urls: string;
  likes: number;
  views: number;
  downloads: number;
  username: string;
  alt_description: string;
};

const initialState = {
  id: "",
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
  const [favourite, setFavourite] = useState(false);

  useEffect(() => {
    async function fetchLoad() {}
    fetchLoad();
  }, [slug]);

  const checkExists = async (response: PhotoObject) => {
    const docRef = doc(db, "favourites", response.id);

    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setFavourite(true);
    } else {
      setFavourite(false);
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    async function fetchLoad() {
      let response = await API.get(`/photos/${slug}`);
      let apiData: PhotoObject = {
        id: response.data.id,
        urls: response.data.urls.regular,
        likes: response.data.likes,
        views: response.data.views,
        downloads: response.data.downloads,
        username: response.data.user.username,
        alt_description: response.data.alt_description,
      };
      setData(apiData);
      checkExists(response.data);
    }
    if (slug) {
      fetchLoad();
    }
  }, [slug]);

  const handleFavourites = async () => {
    if (favourite === false) {
      try {
        await setDoc(doc(db, "favourites", data.id), data);
        checkExists(data);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      try {
        await deleteDoc(doc(db, "favourites", data.id));
        checkExists(data);
      } catch (e) {
        console.error("Error deleting data", e);
      }
    }
  };
  return (
    <div>
      <Photo
        data={data}
        handleFavourites={() => handleFavourites()}
        favourite={favourite}
      />
    </div>
  );
};

export default GetPhoto;
