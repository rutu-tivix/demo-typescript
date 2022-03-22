import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import styles from "./getphoto.module.css";

interface Props {
  data: any;
}
const GetPhoto: NextPage<Props> = (props) => {
  return (
    <div className={styles.container}>
      {props.data && (
        <Image
          src={`${props.data?.urls?.regular}`}
          alt={props.data.alt_description}
          width={650}
          height={350}
          layout="responsive"
        />
      )}
      <p>
        Author:
        <span>{props.data?.user?.username}</span>
      </p>
      <div className={styles.desc}>
        <p>
          <span role="img" aria-label="heart emoji">
            ❤️ {props.data?.likes}
          </span>{" "}
        </p>
        <p>
          <span> 👁‍🗨{props.data?.views}</span>
        </p>

        <p>
          ⬇️ {props.data?.downloads}
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
