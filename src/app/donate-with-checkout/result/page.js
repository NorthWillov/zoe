import PrintObject from "@/components/Checkout/PrintObject";
import { stripe } from "@/lib/stripe";
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
    <div className={styles.main}>
      <h2 className={styles.title}>Dziękujemy za Twoją Hojność!</h2>
      <p className={styles.text}>
        W imieniu ZOE chcielibyśmy wyrazić naszą najgłębszą wdzięczność za Twoją
        hojną datkę. Twoje wsparcie odgrywa kluczową rolę w szerzeniu miłości
        Boga, wspieraniu działań na rzecz społeczności oraz utrzymaniu naszych
        obiektów.
        <br /> <br />
        Twoje zaangażowanie w szerzenie miłości Boga, wspieranie działań na
        rzecz społeczności i utrzymanie naszych obiektów jest naprawdę
        inspirujące. Dzięki Twojemu wkładowi możemy kontynuować nasze wysiłki na
        rzecz rozpowszechniania Bożej miłości, wspierania potrzebujących w
        społeczności oraz dbania o nasze miejsca kultu.
        <br /> <br />
        Wierzymy, że razem możemy dokonać zmiany i stworzyć jaśniejszą
        przyszłość dla wszystkich. Twoja wierność i hojność umożliwiają nam
        prowadzenie różnych działań i inicjatyw, które definiują nasz kościół.
        <br /> <br />
        Jeszcze raz dziękujemy za bycie cennym członkiem naszej społeczności i
        za wsparcie Królestwa. Jesteśmy błogosławieni, że możemy Cię mieć w
        naszej rodzinie ZOE.
        <br /> <br />
        Niech Bóg obficie Ci błogosławi za Twoją życzliwość i hojność.
        <br /> <br />
        Z serdeczną wdzięcznością,
        <br /> <br />
        <strong>Kościół ZOE</strong>
      </p>
      <Link href={"/"}>...wroć na stronę ZOE</Link>
    </div>
  );
}
