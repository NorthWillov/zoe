import React from "react";
import Image from "next/image";
import alfa from "../../assets/alfa.svg";
import styles from "./alpha.module.css";

function Alpha() {
  return (
    <section className={styles.main} data-testid={"courses"} id="courses">
      <div className={styles.alfaWrapper}>
        <Image
          className={styles.alfa}
          src={alfa}
          alt="kursy"
          width="auto"
          height="auto"
        />
      </div>
      <div className={styles.courses}>
        <div className={styles.course}>
          <h3 className={styles.courseTitle}>Alpha dla Par</h3>
          <p className={styles.courseDesc}>
            To 5 spotkań organizowanych w formie randki z miłą i romantyczną
            atmosferą. Każda z par ma swoją intymną przestrzeń dla siebie, gdzie
            jest ugoszczona przez gospodarzy. Dzięki formie spotkań, para
            poznaje się jeszcze lepiej poprzez dyskusje między sobą na ważne
            tematy. Te kilka godzin spotkań, wniesie wartość dodaną do związku i
            wzmocni Go na całe życie!!! <br /> <br />
            Kurs jest darmowy
          </p>
          <a className={styles.btn}>Zapisz się</a>
        </div>
        <div className={`${styles.course} ${styles.textRight}`}>
          <h3 className={styles.courseTitle}>Alpha dla Każdego</h3>
          <p className={styles.courseDesc}>
            Kurs Alpha to seria 10 niezobowiązujących spotkań, podczas których
            poszerzana jest wiedza z zakresu wiary chrześcijańskiej. Jest to
            czas kiedy przy wspólnym posiłku, w przyjaznej atmosferze poruszane
            są tematy bliskie każdemu z nas.
            <br /> <br />
            Miło będzie Cię na nich zobaczyć.
          </p>
          <a className={styles.btn}>Zapisz się</a>
        </div>
      </div>
    </section>
  );
}

export default Alpha;
