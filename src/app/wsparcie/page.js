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
        titleBold={"Wsparcie"}
        titleLight={""}
        description={
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
        }
      />
      <section className={styles.desc}>
        <div className={styles.checkoutForm}>
          <h1 className={styles.title}>Wesprzyj nas</h1>
          <CheckoutForm />
          <div className={styles.transfer}>
            <h3 className={styles.customFormTitle}>
              Również możesz wesprzyć nas{" "}
              <strong>Przelewem Tradycyjnym:</strong>
            </h3>
            <div className={styles.transferData}>
              <div className={styles.transferDataText}>
                <h4 className={styles.transferDataTextTitle}>Kościół ZOE</h4>
                <p className={styles.transferDataTextDesc}>BNP Pariba Bank</p>
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
              Dane do <strong>Przelewu Zagranicznego:</strong>
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
