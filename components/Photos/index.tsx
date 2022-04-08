import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import styles from "./photos.module.css";

interface Props {
  results: Array<string>;
}
const Photos: NextPage<Props> = (props) => {
  console.log(props.results);
  return (
    <div className={styles.container}>
      {props.results.length === 0 ? (
        <div>NO DATA FOUND</div>
      ) : (
        props.results?.map((photo: any, index: number) => {
          return (
            <div className={styles.gallery} key={index}>
              <Link href={`/getPhoto/${photo.id}`} passHref>
                <div className={styles.gallery_item}>
                  <Image
                    className={styles.gallery_image}
                    src={`${photo.urls.regular || photo.urls}`}
                    alt={photo.alt_description}
                    width={50}
                    height={50}
                    layout="responsive"
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
            </div>
          );
        })
      )}
    </div>
  );
};

export default Photos;
