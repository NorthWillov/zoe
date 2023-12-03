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
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default DonatePage;
