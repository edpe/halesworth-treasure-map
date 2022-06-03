import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./Layout.module.css";

const Layout = ({ children, footer, pageHeading }) => {
  return (
    <div className={styles.pageWrapper}>
      {pageHeading && (
        <div className={styles.header}>
          <h1>Halesworth Treasure Map</h1>
        </div>
      )}
      <div className={styles.contentWrapper}>{children}</div>
      {footer && <div className={styles.footer} />}
    </div>
  );
};

export default Layout;
