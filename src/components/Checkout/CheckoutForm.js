"use client";

import React, { useState } from "react";
import { formatAmountForDisplay } from "@/utils/stripe-helpers";
import * as config from "@/config";
import { createCheckoutSession } from "../../app/actions/stripe";
import styles from "./CheckoutForm.module.css";

export default function CheckoutForm() {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    customDonation: Math.round(config.MAX_AMOUNT / config.AMOUNT_STEP),
  });

  const handleInputChange = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  return (
    <>
      <div className={styles.fixedForms}>
        <form className={styles.fixedForm} action={createCheckoutSession}>
          <button
            name="customDonation"
            className={styles.fixedBtn}
            disabled={loading}
            type="submit"
            value={10}
          >
            {formatAmountForDisplay(10, config.CURRENCY)}
          </button>
        </form>
        <form className={styles.fixedForm} action={createCheckoutSession}>
          <button
            name="customDonation"
            className={styles.fixedBtn}
            disabled={loading}
            type="submit"
            value={20}
          >
            {formatAmountForDisplay(20, config.CURRENCY)}
          </button>
        </form>
        <form className={styles.fixedForm} action={createCheckoutSession}>
          <button
            name="customDonation"
            className={styles.fixedBtn}
            disabled={loading}
            type="submit"
            value={50}
          >
            {formatAmountForDisplay(50, config.CURRENCY)}
          </button>
        </form>
        <form className={styles.fixedForm} action={createCheckoutSession}>
          <button
            name="customDonation"
            className={styles.fixedBtn}
            disabled={loading}
            type="submit"
            value={100}
          >
            {formatAmountForDisplay(100, config.CURRENCY)}
          </button>
        </form>
        <form className={styles.fixedForm} action={createCheckoutSession}>
          <button
            name="customDonation"
            className={styles.fixedBtn}
            disabled={loading}
            type="submit"
            value={200}
          >
            {formatAmountForDisplay(200, config.CURRENCY)}
          </button>
        </form>
        <form className={styles.fixedForm} action={createCheckoutSession}>
          <button
            name="customDonation"
            className={styles.fixedBtn}
            disabled={loading}
            type="submit"
            value={300}
          >
            {formatAmountForDisplay(300, config.CURRENCY)}
          </button>
        </form>
      </div>
      <div className={styles.customForm}>
        {input.customDonation < 2 ? (
          <h3 className={`${styles.customFormTitle} ${styles.red}`}>
            Minimalna kwota darowizny to: 2 zł
          </h3>
        ) : (
          <h3 className={styles.customFormTitle}>Lub wpisz dowolną kwotę:</h3>
        )}
        <form action={createCheckoutSession}>
          <input
            className={styles.input}
            type="number"
            name="customDonation"
            min={config.MIN_AMOUNT}
            currency={config.CURRENCY}
            onChange={handleInputChange}
            value={input.customDonation}
          />
          <button
            className={styles.fixedBtn}
            type="submit"
            disabled={loading || input.customDonation < 2}
          >
            Wesprzyj o{" "}
            {formatAmountForDisplay(input.customDonation, config.CURRENCY)}
          </button>
        </form>
      </div>
    </>
  );
}
