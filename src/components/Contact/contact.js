import React from "react";
import styles from "./contact.module.css";

function Contact() {
  return (
    <div className={styles.main} data-testid={"contact"} id="contact">
      <h1 className={styles.title}>Kontakt</h1>
      <div className={styles.info}>
        <span>Telefon: 514 514 186</span>
        <span>E-mail: biuro@kosciolzoe.pl</span>
      </div>
    </div>
  );
}

export default Contact;
