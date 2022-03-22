import type { NextPage } from "next";
import styles from "./header.module.css";

const Header: NextPage = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__background}></div>
      <div className={styles.header__form}>
        <p className={styles.form__logo}>PHOTOS GALLERY</p>
        <p className={styles.form__text}>
          PHOTOS GALLERY where you can see and dowload free usable images.
          <br />
          Powered by Tivix.inc.
        </p>
      </div>
    </div>
  );
};

export default Header;
