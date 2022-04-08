import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import { PhotoObject } from "../../pages/getPhoto/[slug]";
import styles from "./getphoto.module.css";

interface Props {
  data: PhotoObject;
  handleFavourites?: React.MouseEventHandler<HTMLButtonElement>;
  favourite: boolean;
}

const GetPhoto: NextPage<Props> = ({
  data,
  handleFavourites,
  favourite,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.dynamicImage}>
        {data?.urls && (
          <Image
            src={`${data?.urls}`}
            alt={data.alt_description}
            width={650}
            height={350}
            layout="responsive"
            objectFit="cover"
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

      <button onClick={handleFavourites}>
        {favourite === true ? "Remove from favourite" : "Save to favourite"}
      </button>
    </div>
  );
};

export default GetPhoto;
