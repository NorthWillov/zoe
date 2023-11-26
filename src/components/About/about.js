"use client";

import React from "react";
import Image from "next/image";
import logogrey from "../../assets/logogrey.svg";
import styles from "./about.module.css";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.main}>
        <div
          className={`${styles.content} ${styles.contentLarge} ${styles.contentFirstMobile}`}
        >
          <div className={styles.contentLogo}>
            <h2 className={styles.logoTitle}>O kościele zoe</h2>
            <div className={styles.logoWrapper}>
              <Image
                className={styles.logo}
                src={logogrey}
                alt="logotyp"
                width="auto"
                height="auto"
              />
            </div>
          </div>
          <div className={styles.desc}>
            <h2 className={styles.title}>LOREM IPSUM! LOREM</h2>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons
              ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
              ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
              minim veniam, quis nostrud exerci tation ullamcorper suscipit
              lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet dolore
            </p>
            <a href="#" className={styles.btn}>
              Lorem
            </a>
          </div>
        </div>
        <div className={styles.imageFirst}></div>
      </div>

      <div className={styles.main}>
        <div className={styles.imageSecond}></div>
        <div
          className={`${styles.content} ${styles.textRight} ${styles.contentSmall} ${styles.contentSecondMobile}`}
        >
          <div className={styles.contentLogo}>
            <h2 className={styles.logoTitle}>O kościele zoe</h2>
            <div className={styles.logoWrapper}>
              <Image
                className={styles.logo}
                src={logogrey}
                alt="logotyp"
                width="auto"
                height="auto"
              />
            </div>
          </div>
          <div className={styles.desc}>
            <h2 className={styles.title}>LOREM IPSUM! LOREM</h2>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons
              ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
              ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
              minim veniam, quis nostrud exerci tation ullamcorper suscipit
              lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet dolore
            </p>
            <a href="#" className={styles.btn}>
              Lorem
            </a>
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div
          className={`${styles.content} ${styles.contentLarge} ${styles.contentThirdMobile}`}
        >
          <div className={styles.contentLogo}>
            <h2 className={styles.logoTitle}>O kościele zoe</h2>
            <div className={styles.logoWrapper}>
              <Image
                className={styles.logo}
                src={logogrey}
                alt="logotyp"
                width="auto"
                height="auto"
              />
            </div>
          </div>
          <div className={styles.desc}>
            <h2 className={styles.title}>LOREM IPSUM! LOREM</h2>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons
              ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
              ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
              minim veniam, quis nostrud exerci tation ullamcorper suscipit
              lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet dolore
            </p>
            <a href="#" className={styles.btn}>
              Lorem
            </a>
          </div>
        </div>
        <div className={styles.imageThird}></div>
      </div>
    </section>
  );
}

export default About;
