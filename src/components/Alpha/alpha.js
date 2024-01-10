import React from "react";
import Image from "next/image";
import Link from "next/link";
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
            To 5 wyjątkowych spotkań, które przenoszą formę randki na wyższy
            poziom, oferując miłą i romantyczną atmosferę. Każda para ma swój
            prywatny zakątek, gościnnie przygotowany przez naszych gospodarzy.
            Dzięki temu unikalnemu podejściu, para ma okazję nie tylko lepiej
            się poznać, ale także prowadzić głębokie rozmowy na istotne tematy.
            Te kilka godzin spędzonych razem wniesie wartość dodaną do waszego
            związku, wzmacniając go na całe życie! Kurs jest całkowicie
            bezpłatny.
          </p>
          <Link className={styles.btn} href="alpha">
            Więcej
          </Link>
        </div>
        <div className={styles.course}>
          <div>
            <h3 className={styles.courseTitle}>Alpha dla Każdego</h3>
            <p className={styles.courseDesc}>
              To fascynująca seria 10 niezobowiązujących spotkań, w trakcie
              których rozszerzamy wiedzę z zakresu wiary chrześcijańskiej. Jest
              to czas, kiedy przy wspólnym posiłku, w przyjaznej atmosferze
              poruszane są tematy bliskie każdemu z nas. Miło będzie Cię na nich
              zobaczyć. Kurs jest całkowicie bezpłatny.
            </p>
          </div>

          <Link className={styles.btn} href="alpha">
            Więcej
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Alpha;
