import Image from "next/image";
import styles from "./page.module.css";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import Navbar from "@/components/Navbar/navbar";
import About from "@/components/About/about";
import Meetings from "@/components/Meetings/meetings";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <ImageSlider />
      <About />
      <Meetings />
    </main>
  );
}
