import React from "react";
import logo from "../../assets/logonav.svg";
import Image from "next/image";
import styles from "./footer.module.css";

function Fąooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoWrapper}>
        <Image
          className={styles.logo}
          src={logo}
          alt="logo"
          width="auto"
          height="auto"
        />
      </div>
      <div>
        <p className={styles.groupText}>
          <strong>Kościół Chrześcijański ZOE</strong>
          <br />
          ul. Bohaterów Getta Warszawskiego 7-9, 81-609 Gdynia
        </p>
      </div>
    </footer>
  );
}

export default Fąooter;
