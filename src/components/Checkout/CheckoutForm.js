"use client";

import React, { useState } from "react";
import { formatAmountForDisplay } from "@/utils/stripe-helpers";
import * as config from "@/config";
import { createCheckoutSession } from "../../app/actions/stripe";

export default function CheckoutForm() {
  const [loading] = useState(false);
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
      <form action={createCheckoutSession}>
        <button
          name="customDonation"
          className="checkout-style-background"
          disabled={loading}
          type="submit"
          value={10}
        >
          {formatAmountForDisplay(10, config.CURRENCY)}
        </button>
      </form>
      <form action={createCheckoutSession}>
        <button
          name="customDonation"
          className="checkout-style-background"
          disabled={loading}
          type="submit"
          value={20}
        >
          {formatAmountForDisplay(20, config.CURRENCY)}
        </button>
      </form>
      <form action={createCheckoutSession}>
        <button
          name="customDonation"
          className="checkout-style-background"
          disabled={loading}
          type="submit"
          value={50}
        >
          {formatAmountForDisplay(50, config.CURRENCY)}
        </button>
      </form>
      <form action={createCheckoutSession}>
        <button
          name="customDonation"
          className="checkout-style-background"
          disabled={loading}
          type="submit"
          value={100}
        >
          {formatAmountForDisplay(100, config.CURRENCY)}
        </button>
      </form>
      <form action={createCheckoutSession}>
        <button
          name="customDonation"
          className="checkout-style-background"
          disabled={loading}
          type="submit"
          value={200}
        >
          {formatAmountForDisplay(200, config.CURRENCY)}
        </button>
      </form>
      <form action={createCheckoutSession}>
        <button
          name="customDonation"
          className="checkout-style-background"
          disabled={loading}
          type="submit"
          value={300}
        >
          {formatAmountForDisplay(300, config.CURRENCY)}
        </button>
      </form>
      <form action={createCheckoutSession}>
        <input
          type="number"
          name="customDonation"
          min={config.MIN_AMOUNT}
          currency={config.CURRENCY}
          onChange={handleInputChange}
          value={input.customDonation}
        />
        <button
          className="checkout-style-background"
          type="submit"
          disabled={loading}
        >
          Wesprzyj o{" "}
          {formatAmountForDisplay(input.customDonation, config.CURRENCY)}
        </button>
      </form>
    </>
  );
}
