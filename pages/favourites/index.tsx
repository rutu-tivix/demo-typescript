import { useEffect, useState } from "react";
import type { NextPage } from "next";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/clientApp";
import Photos from "../../components/Photos";

const Layout: NextPage = () => {
  const [data, setData] = useState<Array<string>>([]);
  useEffect(() => {
    let temp: string[] = [];
    async function fetchLoad() {
      const querySnapshot = await getDocs(collection(db, "favourites"));
      querySnapshot.forEach((doc: any) => {
        temp.push(doc.data());
      });
      setData(temp);
    }
    fetchLoad();
  }, []);
  return (
    <div>
      <Photos results={data} />
    </div>
  );
};

export default Layout;
