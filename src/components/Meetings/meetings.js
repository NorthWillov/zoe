import React from "react";
import Link from "next/link";
import styles from "./meetings.module.css";
import Logoline from "../LogoLine/logoline";

function Meetings() {
  return (
    <section className={styles.meetings}>
      <div className={styles.meeting} data-testid={"niedziela"} id="niedziela">
        <div className={styles.desc}>
          <div className={styles.meetingsLogoTitle}>
            <h2 className={styles.meetingsTextTitle}>Spotkania</h2>
          </div>
          <div className={styles.week}>
            <h3 className={styles.weekTitle}>
              Niedziela<sup>*regularnie</sup>
            </h3>
            <h4 className={styles.weekSubtitle}>
              Nabożeństwa niedzielne rozpoczynamy o godzinie 11:00.
            </h4>
            <p className={styles.weekDesc}>
              W niedzielę spotykamy się, aby oddać chwałę Bogu, uczcić Jezusa
              Chrystusa śpiewem i modlitwą, modlić się o zdrowie i nawiązywać
              relacje z innymi ludźmi. Słuchamy kazania, a w ostatnią niedzielę
              miesiąca odbywa się Wieczerza Pańska (komunia).
              <br /> <br />
              <strong>Jesteś tu nowy?</strong> Zwróć uwagę na osoby z
              serduszkami. Pomogą Tobie znaleźć miejsce, odpowiedzą na pytania i
              zaopiekują się.
              <br /> <br />
              <strong>Dzieci</strong> - W trakcie kazań odbywają się zajęcia
              Kościoła Dziecięcego w różnych grupach wiekowych 3-15 lat. Dla
              rodziców z dziećmi w wieku do 3 lat przygotowaliśmy salę opieki. W
              sali rodzice mogą oglądać transmisję nabożeństwa na ekranie, a
              dzieci bawić się lub uczyć :)
              <br /> <br />
              <strong>Kawiarnia </strong>- Po nabożeństwie spotykamy się na
              kawie, herbacie i ciastku w naszej kawiarni, aby wspólnie spędzić
              czas.
              <br /> <br />
              <strong>Zaangażuj się</strong> - Każdej niedzieli nasi
              wolontariusze mają pełne ręce roboty. Jeśli chcesz się
              zaangażować, możesz w każdej chwili dołączyć do nich. Wystarczy
              napisać na{" "}
              <span className={styles.email}>wolontariat@kosciolzoe.pl </span>i
              wyrazić chęć pomocy.
              <br /> <br />
              Bardzo serdecznie zapraszamy.
            </p>
            {/* <Link href="niedziela" className={styles.btn}>
              Więcej
            </Link> */}
          </div>
        </div>
        <div className={`${styles.image} ${styles.sundayImage}`}></div>
      </div>
      <div className={styles.meeting} data-testid={"sroda"} id="sroda">
        <div className={styles.desc}>
          <div className={styles.week}>
            <h3 className={styles.weekTitle}>
              Środa<sup>*regularnie</sup>
            </h3>
            <h4 className={styles.weekSubtitle}>
              Spotkania środowe rozpoczynamy o godzinie 18:30.
            </h4>
            <p className={styles.weekDesc}>
              W środę spotykamy się, żeby modlić się o najróżniejsze sprawy:
              Polski, regionu, rodzin ZOE, obecnych na spotkaniu, wydarzenia.
              <br /> <br />
              Uczymy się modlić i studiujemy w Piśmie Świętym ważne życiowe
              tematy.
              <br /> <br />
              Bardzo serdecznie zapraszamy.
            </p>
            {/* <Link href="sroda" className={styles.btn}>
              Więcej
            </Link> */}
          </div>
        </div>
        <div className={`${styles.image} ${styles.wednesdayImage}`}></div>
      </div>
      <Logoline />
      <div className={styles.meeting}>
        <div className={styles.desc}>
          <div className={styles.week}>
            <h3 className={styles.weekTitle}>Dzieci</h3>
            <p className={styles.weekDesc}>
              W czasie spotkania Kościoła prowadzone są zajęcia dla dzieci w
              wieku 4-12 lat w dwóch grupach wiekowych. Podczas zajęć dzieci
              poznają historie biblijne przedstawiane im w sposób przystępny i
              ciekawy.
              <br />
              <br />
              Nauka przeplatana jest z zabawą, poznawaniem Bożej miłości i
              Bożego stworzenia. Dzieci uczą się biblijnych zasad życia,
              współpracy z innymi, poznają Bożą wolę.
              <br />
              <br />
              Wierzymy, że każde dziecko na swój sposób jest obdarowane różnymi
              talentami, zdolnościami oraz posiada potrzebę relacji z innymi
              dziećmi.
            </p>
            {/* <Link href="dzieci" className={styles.btn}>
              Więcej
            </Link> */}
          </div>
        </div>
        <div className={`${styles.image} ${styles.childrenImage}`}></div>
      </div>
      <div className={styles.meeting}>
        <div className={styles.desc}>
          <div className={styles.week}>
            <h3 className={styles.weekTitle}>Młodzież</h3>
            <p className={styles.weekDesc}>
              Nastolatkowie, dwudziestolatkowie na różne sposoby łaćzą się
              dokoła wspólnych spraw.
              <br />
              <br />
              Zjednoczeni wspierają sie w swoich sprawach i wierze w praktyczne
              chrześcijaństwo.
              <br />
              <br />
              Zapaszamy Ciebie na spotkania
            </p>
            {/* <Link href="mlodziez" className={styles.btn}>
              Więcej
            </Link> */}
          </div>
        </div>
        <div className={`${styles.image} ${styles.youngImage}`}></div>
      </div>
      <div className={styles.meeting}>
        <div className={styles.desc}>
          <div className={styles.week}>
            <h3 className={styles.weekTitle}>Męskie</h3>
            <p className={styles.weekDesc}>
              Odkrywamy boży plan dla każdego mężczyzny. Mąż, ojciec, brat, syn
              to role, które pełnimy na co dzień.
              <br />
              <br />
              To często spore wyzwania, o których szczerze i wprost rozmawiamy,
              wymieniając się przy tym doświadczeniami i spostrzeżeniami.
            </p>
            {/* <Link href="meskie" className={styles.btn}>
              Więcej
            </Link> */}
          </div>
        </div>
        <div className={`${styles.image} ${styles.menImage}`}></div>
      </div>
      <div className={styles.meeting}>
        <div className={styles.desc}>
          <div className={styles.week}>
            <h3 className={styles.weekTitle}>Żeńskie</h3>
            <p className={styles.weekDesc}>
              Spotkania dla kobiet to bezpieczne miejsce dla kobiet bez wzglądu
              na wiek i życiową rolę. Rozmawiamy o duchowości, relacjach,
              emocjach, wyzwaniach i marzeniach.
              <br />
              <br />
              Dołącz do naszego grona, otrzymaj zachętę i potrzebne wsparcie.
            </p>
            {/* <Link href="zenskie" className={styles.btn}>
              Więcej
            </Link> */}
          </div>
        </div>
        <div className={`${styles.image} ${styles.womenImage}`}></div>
      </div>
      <div className={styles.meeting}>
        <div className={styles.desc}>
          <div className={styles.week}>
            <h3 className={styles.weekTitle}>Wydarzenia</h3>
            <p className={styles.weekDesc}>
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
              nibh euismod tincidunt ut laoreet dolore{" "}
            </p>
            <Link href="wydarzenia" className={styles.btn}>
              Więcej
            </Link>
          </div>
        </div>
        <div className={`${styles.image} ${styles.eventImage}`}></div>
      </div>
    </section>
  );
}

export default Meetings;
