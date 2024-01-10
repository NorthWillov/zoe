import React from "react";
import Link from "next/link";
import styles from "./meetings.module.css";
import Logoline from "../LogoLine/logoline";

function Meetings() {
  return (
    <section className={styles.meetings}>
      <div className={styles.meeting} data-testid={"niedziela"} id="niedziela">
        <div style={{ paddingBottom: "0" }} className={styles.desc}>
          <div className={styles.meetingsLogoTitle}>
            <h2 className={styles.meetingsTextTitle}>Spotkania</h2>
          </div>
          <div className={styles.week}>
            <h3 className={styles.weekTitle}>Niedziela</h3>
            <h4 className={styles.weekSubtitle}>
              Nabożeństwa niedzielne rozpoczynamy o godzinie 11:00.
            </h4>
            <p className={styles.weekDesc}>
              W każdą niedzielę spotykamy się, aby oddać chwałę Bogu, uczcić
              Jezusa Chrystusa śpiewem i modlitwą, modlić się o zdrowie i
              nawiązywać relacje z innymi ludźmi. Słuchamy kazania, a w ostatnią
              niedzielę miesiąca odbywa się Wieczerza Pańska (komunia).
              <br /> <br />
              <strong>Jesteś tu po raz pierwszy?</strong> Zwróć uwagę na osoby z
              serduszkami – chętnie pomogą Ci znaleźć miejsce, odpowiedzą na
              pytania i zaopiekują się Tobą.
              <br /> <br />
              <strong>Dzieci.</strong> W trakcie kazań odbywają się zajęcia
              Kościoła Dziecięcego w różnych grupach wiekowych (3-15 lat). Dla
              rodziców z maluchami do 3 lat mamy przygotowaną salę opieki. Tutaj
              rodzice mogą oglądać transmisję nabożeństwa na ekranie, a dzieci
              bawią się lub uczą.
              <br /> <br />
              <strong>Kawiarnia. </strong>- Po nabożeństwie spotykamy się na
              kawie, herbacie i ciastku w naszej kawiarni, aby wspólnie spędzić
              czas.
              <br /> <br />
              <strong>Zaangażuj się.</strong> - Każdej niedzieli nasi
              wolontariusze mają pełne ręce roboty. Jeśli chcesz się
              zaangażować, możesz w każdej chwili dołączyć do nich. Wystarczy
              napisać na{" "}
              <span className={styles.email}>wolontariat@kosciolzoe.pl </span>i
              wyrazić chęć pomocy.
              <br /> <br />
              <strong>Bardzo serdecznie zapraszamy.</strong>
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
            <h3 className={styles.weekTitle}>Środa</h3>
            <h4 className={styles.weekSubtitle}>
              Spotkania środowe rozpoczynamy o godzinie 18:30.
            </h4>
            <p className={styles.weekDesc}>
              W każdą środę gromadzimy się, żeby modlić się o najróżniejsze
              sprawy: Polskę, region, rodziny ZOE, osoby obecne na spotkaniu,
              wydarzenia. Uczymy się modlić i studiujemy w Piśmie Świętym ważne
              życiowe tematy. To dla nas okazja do nauki i duchowego wzrostu.
              <br /> <br />
              Jeśli szukasz miejsca, gdzie modlitwa i zgłębianie Biblii idą w
              parze, serdecznie zapraszamy! Dołącz do nas, by wspólnie się
              wspierać, uczyć i wzajemnie inspirować.
            </p>
            {/* <Link href="sroda" className={styles.btn}>
              Więcej
            </Link> */}
          </div>
        </div>
        <div className={`${styles.image} ${styles.wednesdayImage}`}></div>
      </div>
      <div className={styles.meeting} data-testid={"dzieci"} id="dzieci">
        <div className={styles.desc}>
          <div className={styles.week}>
            <h3 className={styles.weekTitle}>Dzieci</h3>
            <p className={styles.weekDesc}>
              W czasie spotkań Kościoła prowadzone są zajęcia dla dzieci w wieku
              4-12 lat w dwóch grupach wiekowych. Podczas zajęć dzieci poznają
              historie biblijne przedstawiane im w sposób przystępny i ciekawy.
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
      <div className={styles.meeting} data-testid={"mlodziez"} id="mlodziez">
        <div className={styles.desc}>
          <div className={styles.week}>
            <h3 className={styles.weekTitle}>Młodzież</h3>
            <p className={styles.weekDesc}>
              Nastolatkowie i dwudziestolatkowie, na różne sposoby łączą się
              dokoła wspólnych spraw. Zjednoczeni, wspierają się w swoich
              sprawach i wierze, praktykując chrześcijaństwo na co dzień.
              <br />
              <br />
              Razem odkrywają głębsze znaczenie wiary i budują wspólnotę młodych
              ludzi w naszym kościele.
              <br />
              <br />
              Młodzieżowe spotkania to czas radości, nauki i wzajemnego wsparcia
              w duchowej podróży. Tworzymy przestrzeń dla młodych serc, aby
              odkrywały sens życia w świetle nauk Chrystusa. Zapraszamy na
              spotkania!
            </p>
            {/* <ol style={{ marginLeft: "5%" }}>
              <li>
                Razem odkrywamy głębsze znaczenie wiary, budując wspólnotę
                młodych ludzi w naszym kościele.
              </li>
              <li>
                Młodzieżowe spotkania w naszym kościele to czas radości, nauki i
                wzajemnego wsparcia w duchowej podróży.
              </li>
              <li>
                Tworzymy przestrzeń dla młodych serc, aby odkrywały sens życia w
                świetle nauk Chrystusa.
              </li>
            </ol> */}
            {/* <br />
            <br />
            <p>Zapaszamy Ciebie na spotkania</p> */}
            {/* <Link href="mlodziez" className={styles.btn}>
              Więcej
            </Link> */}
          </div>
        </div>
        <div className={`${styles.image} ${styles.youngImage}`}></div>
      </div>
      <div className={styles.meeting} data-testid={"meskie"} id="meskie">
        <div className={styles.desc}>
          <div className={styles.week}>
            <h3 className={styles.weekTitle}>Męskie</h3>
            <p className={styles.weekDesc}>
              Odkrywamy Boży plan dla każdego mężczyzny.
              <br />
              <br />
              Mąż, ojciec, brat, syn – są to role, które pełnimy na co dzień. To
              często spore wyzwania, o których szczerze i wprost rozmawiamy,
              wymieniając się przy tym doświadczeniami i spostrzeżeniami.
            </p>
            {/* <Link href="meskie" className={styles.btn}>
              Więcej
            </Link> */}
          </div>
        </div>
        <div className={`${styles.image} ${styles.menImage}`}></div>
      </div>
      <div className={styles.meeting} data-testid={"zenskie"} id="zenskie">
        <div className={styles.desc}>
          <div className={styles.week}>
            <h3 className={styles.weekTitle}>Żeńskie</h3>
            <p className={styles.weekDesc}>
              Spotkania dla kobiet to bezpieczne miejsce dla pań bez względu na
              wiek i życiową rolę. Rozmawiamy o duchowości, relacjach, emocjach,
              wyzwaniach i marzeniach.
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
      <div
        className={styles.meeting}
        data-testid={"wydarzenia"}
        id="wydarzenia"
      >
        <div className={styles.desc}>
          <div className={styles.week}>
            <h3 className={styles.weekTitle}>Wydarzenia</h3>
            <p className={styles.weekDesc}>
              W Kościele ZOE wierzymy w budowanie silnej wspólnoty poprzez
              różnorodne wydarzenia. Regularnie organizujemy inspirujące
              konferencje, koncerty, pouczające spotkania oraz wiele innych
              niezapomnianych wydarzeń.
              <br />
              <br />
              Jesteśmy pełni entuzjazmu co do tworzenia okazji, które łączą
              naszą wspólnotę i pomagają nam wspólnie rozwijać naszą wiarę.
              Dążymy do tego, aby nasze wydarzenia były miejscem, gdzie każdy
              może poczuć się mile widziany i zainspirowany. Aby dowiedzieć się
              więcej o nadchodzących wydarzeniach i zobaczyć, co planujemy,
              kliknij przycisk „Więcej”. Z nami nie przegapisz żadnej okazji do
              wspólnego doświadczania radości, wzrostu duchowego i nawiązywania
              nowych relacji!
              <br />
              <br />
              Obecnie nie mamy żadnych zaplanowanych wydarzeń, ale serdecznie
              zachęcamy do regularnego odwiedzania naszej tej sekcji, aby być na
              bieżąco z najnowszymi informacjami o nadchodzących konferencjach,
              spotkaniach, programach i innych wyjątkowych wydarzeniach
              organizowanych przez nasz Kościół. Dziękujemy za zainteresowanie i
              zapraszamy do śledzenia aktualizacji!
            </p>
            {/* <Link href="wydarzenia" className={styles.btn}>
              Więcej
            </Link> */}
          </div>
        </div>
        <div className={`${styles.image} ${styles.eventImage}`}></div>
      </div>
    </section>
  );
}

export default Meetings;
