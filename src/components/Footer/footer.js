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
          <strong>Lorem ipsum dolor sit amet </strong>
          <br />
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te dolore{" "}
        </p>
      </div>
    </footer>
  );
}

export default Fąooter;
