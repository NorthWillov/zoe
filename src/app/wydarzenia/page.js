"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Modal from "@/components/Modal/modal";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import Navbar from "@/components/Navbar/navbar";
import Link from "next/link";
import Footer from "@/components/Footer/footer";
import image from "../../assets/wydarzenia.jpeg";
import kaznodzieja from "../../assets/kaznodzieja.jpg";
import Image from "next/image";

function Events() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [info, setInfo] = useState({ phone: "0", email: "@" });

  const handleModalToggle = (info) => {
    setIsModalOpen(!isModalOpen);
    if (info) {
      setInfo(info);
    }
  };

  return (
    <main className={styles.main}>
      <Navbar />
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        phone={info.phone}
        email={info.email}
      />
      <ImageSlider
        images={["image12.jpeg"]}
        titleBold={"Wydarzenia"}
        titleLight={""}
        description={
          "W Kościele ZOE regularnie organizujemy różnorodne wydarzenia, takie jak konferencje, koncerty i spotkania. Chcemy tworzyć inspirujące okazje, które łączą naszą wspólnotę i wspierają rozwój duchowy. Dołącz do nas, aby doświadczyć radości, wzrostu duchowego i nowych relacji!"
        }
      />
      <h2 className={styles.title}>
        Zapraszamy na niezwykłe spotkanie z{" "}
        <strong>Kaznodzieją z karabinem!</strong>{" "}
      </h2>

      <section className={styles.desc}>
        <div className={styles.mainGroups}>
          <div className={styles.group}>
            <p className={styles.groupText}>
              Już <strong>2 czerwca o 19:00</strong> Sam Childers odwiedzi
              kościół ZOE.
              <br /> <br />
              <strong>Sam Childers</strong>, czyli Kaznodzieja z karabinem, to
              amerykański aktywista społeczny, który był niegdyś członkiem gangu
              motocyklowego. Założył fundację Angels of East Africa, której
              celem jest ratowanie dzieci w Południowym Sudanie i Ugandzie.
              <br /> <br />
              Nie możesz przegapić tego wydarzenia! Do zobaczenia!
            </p>
          </div>
        </div>
        <div className={styles.secondGroups}>
          <Image
            className={styles.img}
            src={kaznodzieja}
            alt="kursy"
            width="auto"
            height="auto"
          />
        </div>
      </section>

      <h2 className={styles.title}>Kursy Alfa - ruszają 15.01.2024</h2>

      <section className={styles.desc}>
        <div className={styles.mainGroups}>
          <div className={styles.group}>
            <h3 className={styles.courseTitle}>Alpha dla Par</h3>
            <p className={styles.groupText}>
              To 5 wyjątkowych spotkań, które przenoszą formę randki na wyższy
              poziom, oferując miłą i romantyczną atmosferę. Każda para ma swój
              prywatny zakątek, gościnnie przygotowany przez naszych gospodarzy.
              Dzięki temu unikalnemu podejściu, para ma okazję nie tylko lepiej
              się poznać, ale także prowadzić głębokie rozmowy na istotne
              tematy. Te kilka godzin spędzonych razem wniesie wartość dodaną do
              waszego związku, wzmacniając go na całe życie! Kurs jest
              całkowicie bezpłatny.
            </p>
            <button
              onClick={() =>
                handleModalToggle({
                  phone: "515 901 819",
                  email: "aphadlapar@kosciolzoe.pl",
                })
              }
              className={styles.btn}
            >
              Zapisz się
            </button>
          </div>
          <div className={styles.group}>
            <h3 className={styles.courseTitle}>Alpha dla Każdego</h3>
            <p className={styles.groupText}>
              To fascynująca seria 10 niezobowiązujących spotkań, w trakcie
              których rozszerzamy wiedzę z zakresu wiary chrześcijańskiej. Jest
              to czas, kiedy przy wspólnym posiłku, w przyjaznej atmosferze
              poruszane są tematy bliskie każdemu z nas. Miło będzie Cię na nich
              zobaczyć. Kurs jest całkowicie bezpłatny.
            </p>
            <button
              onClick={() =>
                handleModalToggle({
                  phone: "507 038 367",
                  email: "apha@kosciolzoe.pl",
                })
              }
              className={styles.btn}
            >
              Zapisz się
            </button>
          </div>
        </div>
        <div className={styles.secondGroups}>
          <Image
            className={styles.img}
            src={image}
            alt="kursy"
            width="auto"
            height="auto"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Events;
