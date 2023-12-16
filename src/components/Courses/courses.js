import React from "react";
import Image from "next/image";
import alfa from "../../assets/alphalogo.svg";
import styles from "./courses.module.css";

function Courses() {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <div className={styles.courses}>
          <div className={styles.courseContent}>
            <h3 className={styles.courseTitle}>Każdy ma pytania.</h3>
            <p className={styles.courseDesc}>
              Wierzymy, że każdy powinien mieć możliwość poznania wiary
              chrześcijańskiej, móc zadać pytania i podzielić się swoim punktem
              widzenia <br /> - niezależnie od miejsca, w którym się znajduje.
            </p>
          </div>

          <div className={styles.alfaWrapper}>
            <Image
              className={styles.alfa}
              src={alfa}
              alt="kursy"
              width="auto"
              height="auto"
            />
          </div>
        </div>
      </div>
      <div className={styles.btns}>
        <div className={styles.btnsContent}>
          <h4 className={styles.btnDesc}>Find an Alpha near you</h4>
          <a
            target="_blank"
            href="https://polska.alpha.org/sprobuj"
            className={styles.btn}
          >
            Try Alpha
          </a>
        </div>
        <hr className={styles.line} />
        <div className={styles.btnsContent}>
          <h4 className={styles.btnDesc}>Learn how to run Alpha</h4>
          <a
            target="_blank"
            href="https://polska.alpha.org/how-to-run-alpha"
            className={styles.btn}
          >
            Learn How
          </a>
        </div>
      </div>
    </section>
  );
}

export default Courses;
