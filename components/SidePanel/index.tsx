import type { NextPage } from "next";
import Link from "next/link";
import React from "react";

import styles from "./sidepanel.module.css";

interface Props {
  open: boolean;
  handleClose?: (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.FocusEvent<HTMLDivElement>
      | React.MouseEvent<HTMLAnchorElement>
  ) => void;
}

const SidePanel: NextPage<Props> = ({ open, handleClose }: Props) => {
  return (
    <div
      id="mySidebar"
      className={open ? styles.sidebar : styles.close_sidebar}
      onBlur={handleClose}
    >
      <div>
        <button className={styles.closebtn} onClick={handleClose}>
          ×
        </button>
      </div>

      <Link href="/" passHref>
        <a onClick={handleClose}>Home</a>
      </Link>
      <Link href="/favourites" passHref>
        <a onClick={handleClose}>My Favourites</a>
      </Link>
    </div>
  );
};

export default SidePanel;
