import Image from "next/image";
import styles from "./page.module.css";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import Navbar from "@/components/Navbar/navbar";
import About from "@/components/About/about";
import Meetings from "@/components/Meetings/meetings";
import Logoline from "@/components/LogoLine/logoline";
import Courses from "@/components/Courses/courses";
import Groups from "@/components/Groups/groups";
import Footer from "@/components/Footer/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <ImageSlider />
      <Logoline />
      <About />
      <Logoline />
      <Meetings />
      <Logoline />
      <Courses />
      <Logoline />
      <Groups />
      <Footer />
    </main>
  );
}
