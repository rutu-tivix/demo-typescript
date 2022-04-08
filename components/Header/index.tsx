import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";

import Sidepanel from "../../components/SidePanel";
import menu from "../../assets/square.png";
import styles from "./header.module.css";

const Header: NextPage = () => {
  const [open, setOpen] = useState<boolean>(true);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    return setOpen(false);
  }, []);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header_img}>
          <Image
            alt="profile_image"
            src={menu}
            height={70}
            width={70}
            className={styles.img}
            onClick={() => handleOpen()}
          />
        </div>
        <div className={styles.header__background}> </div>
        <div className={styles.header__form}>
          <p className={styles.form__logo}>PHOTOS GALLERY</p>
          <p className={styles.form__text}>
            PHOTOS GALLERY where you can see and dowload free usable images.
            <br />
            Powered by Tivix.inc.
          </p>
        </div>
        <Sidepanel open={open} handleClose={handleClose} />
      </div>
    </>
  );
};

export default Header;
