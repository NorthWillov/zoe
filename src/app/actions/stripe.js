"use server";

import { redirect } from "next/navigation";
import { headers } from "next/headers";

import { CURRENCY } from "@/config";
import { formatAmountForStripe } from "@/utils/stripe-helpers";
import { stripe } from "@/lib/stripe";

export async function createCheckoutSession(data) {
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    submit_type: "donate",
    payment_method_types: ["card", "blik", "p24"],
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: CURRENCY,
          product_data: {
            name: "Kwota darowizny",
          },
          unit_amount: formatAmountForStripe(
            Number(data.get("customDonation")),
            CURRENCY
          ),
        },
      },
    ],
    success_url: `${headers().get(
      "origin"
    )}/wsparcie/result?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${headers().get("origin")}/wsparcie`,
  });

  redirect(checkoutSession.url);
}

export async function createPaymentIntent(data) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: formatAmountForStripe(Number(data.get("customDonation")), CURRENCY),
    automatic_payment_methods: { enabled: true },
    currency: CURRENCY,
  });

  return { client_secret: paymentIntent.client_secret };
}
