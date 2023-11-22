import Image from "next/image";
import styles from "./page.module.css";
import ImageSlider from "@/components/ImageSlider/ImageSlider";

export default function Home() {
  return (
    <main className={styles.main}>
      <ImageSlider />
    </main>
  );
}
