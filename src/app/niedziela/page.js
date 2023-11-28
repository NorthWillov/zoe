import React from "react";
import styles from "./page.module.css";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";

function Sunday() {
  return (
    <main className={styles.main}>
      <Navbar />
      <ImageSlider titleBold={"Spotkanie:"} titleLight={"Niedziela"} />
      <section className={styles.desc}>
        
      </section>
      <Footer />
    </main>
  );
}

export default Sunday;
