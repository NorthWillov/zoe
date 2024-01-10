"use client";

import React from "react";
import Image from "next/image";
import logogrey from "../../assets/logogrey.svg";
import styles from "./about.module.css";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.main} data-testid={"wyznanie"} id="wyznanie">
        <div
          className={`${styles.content} ${styles.contentLarge} ${styles.contentFirstMobile}`}
        >
          <div className={styles.contentLogo}>
            <h2 className={styles.logoTitle}>
              <strong>O</strong> kościele <strong>zoe</strong>
            </h2>
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
            <h2 className={styles.title}>Wierzymy w:</h2>
            <ul className={styles.believesList}>
              <li>
                Boga, który jest w trzech Osobach: Ojca, Syna – Jezusa Chrystusa
                i Ducha Świętego.
              </li>
              <li>
                Pismo Święte, które jest Słowem Bożym, nieomylnym i natchnionym
                przez Ducha Świętego.
              </li>
              <li>
                Jezusa Chrystusa, który przyszedł na świat poprzez poczęcie z
                Ducha Świętego i narodzenie z Marii dziewicy, który umarł na
                krzyżu dla naszego zbawienia, zmartwychwstał w ciele, wstąpił do
                nieba i powróci w chwale.
              </li>
              <li>
                Zbawienie z łaski poprzez opamiętanie, wyznanie wiary w
                zmartwychwstanie Jezusa Chrystusa oraz świadome uznanie Go jako
                zbawiciela i władcy.
              </li>
              <li>W Wieczerzę Pańską i chrzest przez zanurzenie w wodzie.</li>
              <li>W chrzest Duchem Świętym i Jego dary duchowe.</li>
              <li>
                W święty Kościół, którego głową jest Jezus Chrystus, a ciałem
                zbawieni wierzący.
              </li>
              <li>W uzdrowienie, zmartwychwstanie i życie wieczne.</li>
            </ul>
            {/* <a href="#" className={styles.btn}>
              Lorem
            </a> */}
          </div>
        </div>
        <div className={styles.imageFirst}></div>
      </div>

      <div className={styles.main} data-testid={"zbawienie"} id="zbawienie">
        <div className={styles.imageSecond}></div>
        <div
          className={`${styles.content} ${styles.textRight} ${styles.contentSmall} ${styles.contentSecondMobile}`}
        >
          <div className={styles.contentLogo}>
            <h2 className={styles.logoTitle}>
              <strong>O</strong> kościele <strong>zoe</strong>
            </h2>
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
            <h2 className={styles.title}>Modlitwa zbawienie</h2>
            <p className={styles.text}>
              Możesz otrzymać dar zbawienia, wyznając Bogu, że powierzasz swoje
              życie Jezusowi Chrystusowi. Wiara w Jezusa Chrystusa, wyrażona w
              modlitwie płynącej z Twojego serca, gwarantuje zbawienie.
              <br /> <br />
              <strong>Pomoże Ci ta modlitwa:</strong>
              <br /> <br />
              Boże, wiem, że grzeszyłem przeciwko Tobie i zasługuję na karę, ale
              Jezus Chrystus wziął tę karę na siebie. Dlatego wierzę, że
              odpuściłeś mi moje grzechy. Wierzę, że Jezus Chrystus, Twój Syn,
              zmartwychwstał. Jezu, zbaw mnie, bądź moim Panem. Ufam Tobie i
              oddaję Ci całe moje życie. Przyjmuję dar życia wiecznego z Twojej
              ręki, łaski i miłości.
              <br /> <br /> <strong>AMEN</strong>
            </p>
            {/* <a href="#" className={styles.btn}>
              Lorem
            </a> */}
          </div>
        </div>
      </div>

      <div className={styles.main} data-testid={"corobimy"} id="corobimy">
        <div
          className={`${styles.content} ${styles.contentLarge} ${styles.contentThirdMobile}`}
        >
          <div className={styles.contentLogo}>
            <h2 className={styles.logoTitle}>
              <strong>O</strong> kościele <strong>zoe</strong>
            </h2>
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
            <h2 className={styles.title}>O Kościele</h2>
            <p className={styles.text}>
              Kościół Chrześcijański ZOE to wspólnota ludzi, którzy wyznają
              swoją miłość do Boga i bliźnich poprzez praktykowanie życia
              chrześcijańskiego.
              <br />
              <br />
              Żyjemy ze świadomością, że przez zrozumienie Pisma Świętego i
              postępowanie oparte na Słowie Bożym doświadczamy radości zwycięstw
              nad trudnościami oraz zaangażowania Boga w nasze życie.
              <br />
              <br />
              Nasza radość płynie z przekonania, że każdy może doświadczyć
              miłości i zbawienia w Jezusie Panu. Bóg kocha każdego człowieka i
              nie ma wybrańców, kiedy ktoś potrzebuje pomocy.
              <br />
              <br />
              Kościół Chrześcijański ZOE to miejsce, gdzie znajdziesz swój Dom –
              szczere relacje, miłość i troskę o Rodzinę.
            </p>
            {/* <a href="#" className={styles.btn}>
              Lorem
            </a> */}
          </div>
        </div>
        <div className={styles.imageThird}></div>
      </div>
    </section>
  );
}

export default About;
