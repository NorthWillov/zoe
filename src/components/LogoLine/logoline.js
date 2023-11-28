import React from "react";
import logo from "../../assets/logonav.svg";
import Image from "next/image";
import styles from "./logoline.module.css";

function Logoline() {
  return (
    <div className={styles.logoWrapper}>
      <Image
        className={styles.logo}
        src={logo}
        alt="logo"
        width="auto"
        height="auto"
      />
    </div>
  );
}

export default Logoline;
