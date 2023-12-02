"use client";

import React from "react";
import Image from "next/image";

import logogrey from "../../assets/logogrey.svg";
import styles from "./about.module.css";
import Logoline from "../LogoLine/logoline";

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
            <p className={styles.text}>
              Boga, który jest w trzech postaciach: Ojca, Syna Jezusa Chrystusa
              i Ducha Świętego.
              <br /> <br />
              Pismo Święte, które jest Słowem Bożym, nieomylnym i natchnionym
              przez Ducha Swiętego
              <br /> <br />
              Jezusa Chrystusa, który przyszedł na świat poprzez poczęcie z
              Ducha Świętego i narodzenie z Marii dziewicy, który umarł na
              krzyżu dla naszego zbawienia, zmartwychwstał w ciele, wstąpił do
              nieba i powróci w chwale
              <br /> <br />
              Zbawienie z łaski poprzez opamiętanie i wyznanie wiary w
              zmartwychwstanie Jezusa Chrystusa oraz świadome uznanie Jego jako
              zbawiciela i władcy
              <br /> <br />
              W Wieczerzę Pańską i chrzest przez zanurzenie w wodzie
              <br /> <br />
              W chrzest Duchem Świętym i Jego dary duchowe
              <br /> <br />
              W święty Kościół, którego głową jest Jezus Chrystus, a ciałem
              zbawieni wierzący
              <br /> <br />W uzdrowienie, zmartwychwstanie i życie wieczne.
            </p>
            {/* <a href="#" className={styles.btn}>
              Lorem
            </a> */}
          </div>
        </div>
        <div className={styles.imageFirst}></div>
      </div>

      <Logoline />

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
            <h2 className={styles.title}>Modlitwa Zbawienie</h2>
            <p className={styles.text}>
              Możesz otrzymać dar zbawienia wyznając Bogu, że powierzasz swoje
              życie Jezusowi Chrystusowi. <br /> <br />
              Wiara w Jezusa Chrystusa wyrażona w modlitwie płynącej z Twojego
              serca gwarantuje zbawienie. <br /> <br />
              Pomoże Tobie ta modlitwa: <br /> <br />
              Boże, wiem, że grzeszyłem przeciwko Tobie i zasługuję na karę, ale
              Jezus Chrystus wziął tę karę na siebie. Dlatego wierzę, że moje
              grzechy odpuściłeś mi. Wierzę, że Jezus Chrystus Twój Syn
              zmartwychwstał. Jezu zbaw mnie, bądz moim Panem. Ufam Tobie i
              oddaję Ci całe moje życie. Przyjmuję dar życia wiecznego z Twojej
              ręki łaski i miłości.
              <br /> <br /> <strong>AMEN</strong>
            </p>
            {/* <a href="#" className={styles.btn}>
              Lorem
            </a> */}
          </div>
        </div>
      </div>

      <Logoline />

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
