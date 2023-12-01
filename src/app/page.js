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
      <ImageSlider
        images={["image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg"]}
        titleBold={"Lorem ipsum!"}
        titleLight={"Lorem"}
        description={
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
        }
      />
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
