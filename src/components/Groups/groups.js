"use client";

import React from "react";
import styles from "./groups.module.css";
import Map from "../Map/map";

function Groups() {
  return (
    <section className={styles.main} data-testid={"groups"} id="groups">
      <div className={styles.mainGroups}>
        <h2 className={styles.title}>
          Grupy <strong>Domowe</strong>
        </h2>
        <div className={styles.group}>
          <h3>
            To regularne spotkania w kilkuosobowym, czasami kilkunastoosobowym
            gronie.
          </h3>
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
          <div className={styles.tableMapWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Okolice</th>
                  <th>Email</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Witomino</td>
                  <td>witominogrupa@kosciolzoe.pl</td>
                </tr>
                <tr>
                  <td>Gdynia Śródmieście</td>
                  <td>centrumgrupa@kosciolzoe.pl</td>
                </tr>
                <tr>
                  <td>Grabówek, Chylonia</td>
                  <td>grabowekgrupa@kosciolzoe.pl</td>
                </tr>
                <tr>
                  <td>Karwiny, Wielki Kack</td>
                  <td>karwinygrupa@kosciolzoe.pl</td>
                </tr>
                <tr>
                  <td>Dąbrowa, Dąbrówka</td>
                  <td>
                    dabrowagrupa@kosciolzoe.pl, dabrowa2grupa@kosciolzoe.pl
                  </td>
                </tr>
                <tr>
                  <td>Oksywie, Obłuże</td>
                  <td>oksywiegrupa@kosciolzoe.pl</td>
                </tr>
                <tr>
                  <td>Wiczlino, Chwarzno</td>
                  <td>wiczlinogrupa@kosciolzoe.pl</td>
                </tr>
                <tr>
                  <td>Gdańsk Śródmieście, Letniego, Nowy Port, Brzeźno</td>
                  <td>srodmiesciegrupa@kosciolzoe.pl</td>
                </tr>
                <tr>
                  <td>Siedlce, Suchanino, Morena</td>
                  <td>siedlcegrupa@kosciolzoe.pl</td>
                </tr>
                <tr>
                  <td>Przymoże, Żabianka, Sopot</td>
                  <td>przymorzegrupa@kosciolzoe.pl</td>
                </tr>
                <tr>
                  <td>Oliwa, Jelitkowo, Osowa</td>
                  <td>oliwagrupa@kosciolzoe.pl</td>
                </tr>
                <tr>
                  <td>Wrzeszcz, Suchanino</td>
                  <td>wrzeszczgrupa@kosciolzoe.pl</td>
                </tr>
                <tr>
                  <td>Stogi, Chełm</td>
                  <td>stogi-chelmgrupa@kosciolzoe.pl</td>
                </tr>
                <tr>
                  <td>Orunia, Kokoszki, Kowale</td>
                  <td>oruniagrupa@kosciolzoe.pl</td>
                </tr>
                <tr>
                  <td>OKOLICE Bojano, Dobrzewino</td>
                  <td>bojanogrupa@kosciolzoe.pl</td>
                </tr>
                <tr>
                  <td>Chwaszczyno, Banino</td>
                  <td>chwaszczynogrupa@kosciolzoe.pl</td>
                </tr>
                <tr>
                  <td>Reda</td>
                  <td>redagrupa@kosciolzoe.pl</td>
                </tr>
                <tr>
                  <td>Rumia</td>
                  <td>rumiagrupa@kosciolzoe.pl</td>
                </tr>
                <tr>
                  <td>Wejherowo</td>
                  <td>wejherowogrupa@kosciolzoe.pl</td>
                </tr>
                <tr>
                  <td>Żukowo, Małkowo</td>
                  <td>zukowogrupa@kosciolzoe.pl</td>
                </tr>
              </tbody>
            </table>
            <div className={styles.map}>
              <Map />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Groups;
