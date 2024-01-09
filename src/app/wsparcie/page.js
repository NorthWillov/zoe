"use client";
import React from "react";
import styles from "./page.module.css";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import Navbar from "@/components/Navbar/navbar";
import CheckoutForm from "@/components/Checkout/CheckoutForm";
import Footer from "@/components/Footer/footer";

function DonatePage() {
  return (
    <main className={styles.main}>
      <Navbar />
      <ImageSlider
        images={["image6.jpeg"]}
        titleBold={"Wespzyj nas"}
        titleLight={""}
        description={
          "Twoje wsparcie pomaga nam kontynuować naszą misję i służyć naszej wspólnocie. Jeśli pragniesz wesprzeć naszą pracę, możesz przekazać darowiznę poprzez poniższy formularz. Każda wpłata, bez względu na wielkość, jest dla nas cenna i pomaga w realizacji naszych celów."
        }
      />
      <section className={styles.desc}>
        <div className={styles.checkoutForm}>
          <h1 className={styles.title}>Wesprzyj nas</h1>
          <CheckoutForm />
          <div className={styles.transfer}>
            <h3 className={styles.customFormTitle}>
              Również możesz wesprzeć nas{" "}
              <strong>przelewem tradycyjnym:</strong>
            </h3>
            <div className={styles.transferData}>
              <div className={styles.transferDataText}>
                <h4 className={styles.transferDataTextTitle}>Kościół ZOE</h4>
                <p className={styles.transferDataTextDesc}>BNP Paribas Bank</p>
              </div>
              <div className={styles.transferDataText}>
                <h4 className={styles.transferDataTextTitle}>Numer konta</h4>
                <p className={styles.transferDataTextDesc}>
                  77 1600 1114 1744 8347 4000 0001
                </p>
              </div>
              <div className={styles.transferDataText}>
                <h4 className={styles.transferDataTextTitle}>Tytuł</h4>
                <p className={styles.transferDataTextDesc}>
                  Darowizna na cele kultu religijnego
                </p>
              </div>
            </div>
            <h3 className={styles.customFormTitle}>
              Dane do <strong>przelewu zagranicznego:</strong>
            </h3>
            <div className={styles.transferIntData}>
              <div className={styles.transferIntDataText}>
                <h4 className={styles.transferDataTextTitle}>
                  Kosciol Chrzescijanski ZOE
                </h4>
                <p className={styles.transferDataTextDesc}>
                  Address Street:{" "}
                  <strong>Kasprzaka 2, ZIP CODE 01-211 CITY Warszawa</strong>{" "}
                  <br />
                  Bank’s Name: <strong>BNP Paribas Bank Polska S.A.</strong>
                </p>
              </div>
              <div className={styles.transferIntDataText}>
                <h4 className={styles.transferDataTextTitle}>Account number</h4>
                <p className={styles.transferDataTextDesc}>
                  IBAN: <strong>PL50 1600 1114 1744 8347 4000 0002</strong>
                  <br />
                  SWIFT/BIC: <strong>PPABPLPK</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default DonatePage;
