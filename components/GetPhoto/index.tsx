import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import styles from "./getphoto.module.css";
import { PhotoObject } from "../../pages/getPhoto/[slug]";

interface Props {
  data: PhotoObject;
}

const GetPhoto: NextPage<Props> = ({ data }: Props) => {
  return (
    <div className={styles.container}>
      <div  className={styles.dynamicImage}>
      {data?.urls && (
        <Image
          src={`${data?.urls}`}
          alt={data.alt_description}
          width={650}
          height={350}
          layout="responsive"
          objectFit='cover'
          className={styles.image}
        />
      )}
        </div>
      
      <p>
        Author:
        <span>{data.username}</span>
      </p>
      <div className={styles.desc}>
        <p>
          <span role="img" aria-label="heart emoji">
            ❤️ {data?.likes}
          </span>{" "}
        </p>
        <p>
          <span> 👁‍🗨{data?.views}</span>
        </p>

        <p>
          ⬇️ {data?.downloads}
          <span></span>
        </p>
      </div>

      <Link href={`/`} passHref>
        <button>Back to photos</button>
      </Link>
    </div>
  );
};

export default GetPhoto;
