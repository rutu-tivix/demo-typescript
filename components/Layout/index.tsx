import type { NextPage } from "next";
import { useRouter } from "next/router";

import styles from "../../styles/Home.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Layout: NextPage = (props) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {router.pathname.startsWith("/getPhoto") ? (
        <>
          {props.children}
          {/* <Footer /> */}
        </>
      ) : (
        <>
          <Header />
          {props.children}
          {/* <Footer /> */}
        </>
      )}
    </div>
  );
};

export default Layout;
