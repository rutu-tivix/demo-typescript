import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import styles from "./photos.module.css";

interface Props {
  results: Array<string>;
}
const Photos: NextPage<Props> = (props) => {
  return (
    <div className={styles.container}>
      {props.results.length === 0 ? (
        <div>NO DATA FOUND</div>
      ) : (
        props.results?.map((photo: any, index: number) => {
          return (
            <Link href={`/getPhoto/${photo.id}`} passHref key={index}>
              <div className={styles.gallery}>
                <Image
                  src={`${photo.urls.regular}`}
                  alt={photo.alt_description}
                  width={500}
                  height={500}
                />
                <div className={styles.desc}>
                  <p>
                    <span role="img" aria-label="heart emoji">
                      ❤️
                    </span>{" "}
                    {photo.likes}
                  </p>
                </div>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default Photos;
