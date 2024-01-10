import styles from "./page.module.css";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import Navbar from "@/components/Navbar/navbar";
import About from "@/components/About/about";
import Meetings from "@/components/Meetings/meetings";
import Logoline from "@/components/LogoLine/logoline";
import Courses from "@/components/Courses/courses";
import Groups from "@/components/Groups/groups";
import Footer from "@/components/Footer/footer";
import Alpha from "@/components/Alpha/alpha";
import Contact from "@/components/Contact/contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <ImageSlider
        mainPage={true}
        images={["image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg"]}
        titleBold={""}
        titleLight={""}
        description={
          "ZOE to greckie słowo, które oznacza: życie, życie wieczne. Słowo Boże przynosi życie, Jezus przynosi życie. Jezus jest Twoim, moim, naszym życiem."
        }
      />
      <About />
      <Meetings />
      <Alpha />
      <Groups />
      <Contact />
      <Footer />
    </main>
  );
}
