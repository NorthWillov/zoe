import PrintObject from "@/components/Checkout/PrintObject";
import { stripe } from "@/lib/stripe";

export default async function ResultPage({ searchParams }) {
  if (!searchParams.session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  const checkoutSession = await stripe.checkout.sessions.retrieve(
    searchParams.session_id,
    {
      expand: ["line_items", "payment_intent"],
    }
  );

  const paymentIntent = checkoutSession.payment_intent;

  return (
    <>
      <h2>Status: {paymentIntent.status}</h2>
      <h3>Checkout Session response:</h3>
      <PrintObject content={checkoutSession} />
    </>
  );
}
