import PrintObject from "@/components/Checkout/PrintObject";
import { stripe } from "@/lib/stripe";
import Footer from "../../../components/Footer/footer";
import LogoLine from "../../../components/LogoLine/logoline";
import Link from "next/link";
import styles from "./page.module.css";

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
      <LogoLine />
      <div className={styles.main}>
        <h2 className={styles.title}>DZIĘKUJEMY za Twoje wsparcie!</h2>
        <p className={styles.text}>
          Dzięki Twojej modlitwie lub darowiźnie finansowej, będziemy mogli
          służyć dzieciom, rodzinom, zanosić pomoc oraz głosić dobrą nowinę o
          Jezusie Chrystusie. Planujemy budować Kościół Chrześcijański przez
          regularną działalność lokalnie i regionalnie. Dziękujemy z głębokiego
          serca.
          <br /> <br />
          Wierzymy, że dobry Ojciec będzie błogosławił Ciebie i Twój dom.
          <br /> <br />
          "Kto mało sieje, mało zbiera. A kto wiele sieje, wiele też zbiera.
          Niech więc każdy w sercu postanowi, ile chce dać - bez żalu, ale też
          bez przymusu. Bóg kocha bowiem tych, którzy dają z radością. Co więcej
          - potrafi to hojnie wynagrodzić! On może dać wam wszystko, czego
          potrzebujecie, abyście wy z kolei mogli pomagać innym". (2 Koryntian
          9:6-8 Tłumaczenie "Słowo życia")
          <br /> <br />
        </p>
        <Link href={"/"}>...wroć na stronę ZOE</Link>
      </div>
      <Footer />
    </>
  );
}
