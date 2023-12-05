"use client";

import React from "react";
import styles from "./groups.module.css";
import Map from "../Map/map";

const location = {
  address: "Witomino-Leśniczówka, Gdynia",
  lat: 54.497014,
  lng: 18.507618,
};

function Groups(props) {
  return (
    <section className={styles.main} data-testid={"groups"} id="groups">
      <div className={styles.mainGroups}>
        <h2 className={styles.title}>
          Grupy <strong>Domowe</strong>
        </h2>
        <div className={styles.group}>
          <ul className={styles.groupText}>
            <strong>
              To regularne spotkania w kilkuosobowym, czasami kilkunastoosobowym
              gronie.
            </strong>
            <br /> <br />
            Grupa to miejsce, w których możemy nawiązać relacje i rozwijać się
            duchowo oraz pomagać! Bez względu na to, czego szukasz, przez co
            przechodzisz i na jakim etapie życia się znajdujesz, możesz znaleźć
            nowe wartościowe relacje w Grupach Domowych ZOE.
            <br /> <br />
            Podczas spotkań rozmawiamy, modlimy się, omawiamy życiowe tematy.
            <br /> <br />
            Szukasz grupy w Twojej okolicy? Napisz na email.
            <br /> <br />
            Lista kontaktów poniżej lub po kliknięciu miejsca na mapie.
            <br />
            <br />
            <li>
              Witomino: <span>witominogrupa@kosciolzoe.pl</span>
            </li>
            <li>
              Gdynia Śródmieście: <span>centrumgrupa@kosciolzoe.pl</span>
            </li>
            <li>
              Grabówek, Chylonia: <span>grabowekgrupa@kosciolzoe.pl</span>
            </li>
            <li>
              Karwiny, Wielki Kack: <span>karwinygrupa@kosciolzoe.pl</span>
            </li>
            <li>
              Dąbrowa, Dąbrówka:{" "}
              <span>
                dabrowagrupa@kosciolzoe.pl, dabrowa2grupa@kosciolzoe.pl
              </span>
            </li>
            <li>
              Oksywie, Obłuże: <span>oksywiegrupa@kosciolzoe.pl</span>
            </li>
            <li>
              Wiczlino, Chwarzno: <span>wiczlinogrupa@kosciolzoe.pl</span>
            </li>
            <li>
              Gdańsk Śródmieście, Letniego, Nowy Port, Brzeźno:{" "}
              <span>srodmiesciegrupa@kosciolzoe.pl</span>
            </li>
            <li>
              Siedlce, Suchanino, Morena:{" "}
              <span>siedlcegrupa@kosciolzoe.pl</span>
            </li>
            <li>
              Przymoże, Żabianka, Sopot:
              <span>przymorzegrupa@kosciolzoe.pl</span>
            </li>
            <li>
              Oliwa, Jelitkowo, Osowa: <span>oliwagrupa@kosciolzoe.pl</span>
            </li>
            <li>
              Wrzeszcz, Suchanino: <span>wrzeszczgrupa@kosciolzoe.pl</span>
            </li>
            <li>
              Stogi, Chełm: <span>stogi-chelmgrupa@kosciolzoe.pl</span>
            </li>
            <li>
              Orunia, Kokoszki, Kowale: <span>oruniagrupa@kosciolzoe.pl</span>
            </li>
            <li>
              OKOLICE Bojano, Dobrzewino: <span>bojanogrupa@kosciolzoe.pl</span>
            </li>
            <li>
              Chwaszczyno, Banino: <span>chwaszczynogrupa@kosciolzoe.pl</span>
            </li>
            <li>
              Reda: <span>redagrupa@kosciolzoe.pl</span>
            </li>
            <li>
              Rumia: <span>rumiagrupa@kosciolzoe.pl</span>
            </li>
            <li>
              Wejherowo: <span>wejherowogrupa@kosciolzoe.pl</span>
            </li>
            <li>
              Żukowo, Małkowo: <span>zukowogrupa@kosciolzoe.pl</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.secondGroups}>
        <div className={styles.map}>
          <Map />
        </div>
      </div>
    </section>
  );
}

export default Groups;
