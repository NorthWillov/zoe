"use client";

import React, { useState } from "react";
import { formatAmountForDisplay } from "@/utils/stripe-helpers";
import * as config from "@/config";
import { createCheckoutSession } from "../../app/actions/stripe";
import styles from "./CheckoutForm.module.css";

export default function CheckoutForm() {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    customDonation: 40,
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
          <input type="hidden" name="customDonation" value={10} />
          <button type="submit" className={styles.fixedBtn} disabled={loading}>
            {formatAmountForDisplay(10, config.CURRENCY)}
          </button>
        </form>
        <form className={styles.fixedForm} action={createCheckoutSession}>
          <input type="hidden" name="customDonation" value={20} />
          <button type="submit" className={styles.fixedBtn} disabled={loading}>
            {formatAmountForDisplay(20, config.CURRENCY)}
          </button>
        </form>
        <form className={styles.fixedForm} action={createCheckoutSession}>
          <input type="hidden" name="customDonation" value={50} />
          <button type="submit" className={styles.fixedBtn} disabled={loading}>
            {formatAmountForDisplay(50, config.CURRENCY)}
          </button>
        </form>
        <form className={styles.fixedForm} action={createCheckoutSession}>
          <input type="hidden" name="customDonation" value={100} />
          <button type="submit" className={styles.fixedBtn} disabled={loading}>
            {formatAmountForDisplay(100, config.CURRENCY)}
          </button>
        </form>
        <form className={styles.fixedForm} action={createCheckoutSession}>
          <input type="hidden" name="customDonation" value={200} />
          <button type="submit" className={styles.fixedBtn} disabled={loading}>
            {formatAmountForDisplay(200, config.CURRENCY)}
          </button>
        </form>
        <form className={styles.fixedForm} action={createCheckoutSession}>
          <input type="hidden" name="customDonation" value={300} />
          <button type="submit" className={styles.fixedBtn} disabled={loading}>
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
            Darowizna{" "}
            {formatAmountForDisplay(input.customDonation, config.CURRENCY)}
          </button>
        </form>
      </div>
    </>
  );
}
