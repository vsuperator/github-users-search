import React from "react";
import styles from "./AppLayout.module.scss";
import Footer from "../../components/Footer";
import HeaderPublic from "../../components/HeaderPublic";
import cx from "classnames";

const AppLayout = ({ children, classNameContainer }) => {
  return (
    <div className={styles.mainContainer}>
      <HeaderPublic />
      <main className={cx(styles.containerPublic, classNameContainer)}>
        {children}
      </main>
      <Footer className={styles.containerPublic} />
    </div>
  );
};

export default AppLayout;
