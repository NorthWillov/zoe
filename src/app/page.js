import Image from "next/image";
import styles from "./page.module.css";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import Navbar from "@/components/Navbar/navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <ImageSlider />
    </main>
  );
}
