import React from "react";
import styles from "./page.module.css";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";

function Events() {
  return (
    <main className={styles.main}>
      <Navbar />
      <ImageSlider
        images={["image12.jpeg"]}
        titleBold={"Wydarzenia"}
        titleLight={""}
        description={
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
        }
      />
      <section className={styles.desc}>
        <div className={styles.mainGroups}>
          <h2 className={styles.title}>
            <strong>Lorem Ipsum!</strong> Lorem
          </h2>
          <div className={styles.group}>
            <p className={styles.groupText}>
              <strong>Lorem ipsum dolor sit amet </strong>
              <br />
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons
              ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
              ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
              minim veniam, quis nostrud exerci tation ullamcorper suscipit
              lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet dolore{" "}
            </p>
          </div>
          <div className={styles.group}>
            <p className={styles.groupText}>
              <strong>Lorem ipsum dolor sit amet </strong>
              <br />
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons
              ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
              ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
              minim veniam, quis nostrud exerci tation ullamcorper suscipit
              lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet dolore{" "}
            </p>
          </div>
          <div className={styles.group}>
            <p className={styles.groupText}>
              <strong>Lorem ipsum dolor sit amet </strong>
              <br />
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons
              ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
              ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
              minim veniam, quis nostrud exerci tation ullamcorper suscipit
              lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet dolore{" "}
            </p>
          </div>
        </div>
        <div className={styles.secondGroups}>
          <div className={styles.map}>SOME PICTURE</div>
          <div className={styles.group}>
            <p className={styles.groupText}>
              <strong>Lorem ipsum dolor sit amet </strong>
              <br />
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons
              ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
              ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
              minim veniam, quis nostrud exerci tation ullamcorper suscipit
              lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet dolore{" "}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Events;
