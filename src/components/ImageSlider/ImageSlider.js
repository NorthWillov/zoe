"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logomain from "../../assets/logomain.svg";
import styles from "./ImageSlider.module.css";
import Link from "next/link";
import HeartIcon from "../heartIcon";
import MessengerIcon from "../messengerIcon";
import YoutubeIcon from "../youtubeIcon";
import TbngoIcon from "../tbngoIcon";

const ImageSlider = ({
  images = [],
  titleBold,
  titleLight,
  description,
  mainPage,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const pathname = usePathname();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentImageIndex]); // Include currentImageIndex in the dependency array

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.sliderImages}
        style={{
          width: `${images.length}00%`,
          transform: `translateX(-${
            currentImageIndex * (100 / images.length)
          }%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.sliderImage}
            style={{
              backgroundImage: `url(/${image})`,
              opacity: index === currentImageIndex ? 1 : 0,
            }}
          ></div>
        ))}
      </div>
      {images.length > 1 && (
        <div className={styles.dotsContainer}>
          {images.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${
                index === currentImageIndex ? styles.active : ""
              }`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      )}

      <div className={styles.icons}>
        <div
          style={{ marginBottom: "-15px" }}
          className={`${styles.iconWrapper} ${styles.animated} ${
            pathname === "/wsparcie" ? styles.hidden : ""
          }`}
        >
          <Link href={"wsparcie"}>
            <HeartIcon />
          </Link>
        </div>

        <div style={{ marginBottom: "-10px" }} className={styles.iconWrapper}>
          <a href="https://www.facebook.com/kosciolzoe" target="_blank">
            <MessengerIcon />
          </a>
        </div>

        <div style={{ marginBottom: "-10px" }} className={styles.iconWrapper}>
          <a
            href="https://www.youtube.com/@kosciozoetrojmiasto1012"
            target="_blank"
          >
            <YoutubeIcon />
          </a>
        </div>
        <div style={{ marginBottom: "-20px" }} className={styles.iconWrapper}>
          <a href="https://tbngo.pl" target="_blank">
            <TbngoIcon />
          </a>
        </div>
      </div>
      <div className={styles.content}>
        {mainPage ? (
          <h1 className={styles.contentMainPageTitle}>Kościół Ewangeliczny</h1>
        ) : (
          <h1 className={styles.contentTitle}>
            <strong>{titleBold}</strong> {titleLight}
          </h1>
        )}
        <div className={styles.contentTextWrapper}>
          {mainPage ? (
            <p className={styles.contentMainPageText}>
              ZOE to greckie słowo oznaczające <strong>życie wieczne</strong>,
              <br />
              które przynosi nam Jezus. On jest naszym <strong>życiem</strong>.
            </p>
          ) : (
            <p className={styles.contentText}>{description}</p>
          )}
        </div>
      </div>
      <div className={styles.logoWrapper}>
        <h1>Kościół Chrześcijański ZOE Trójmiasto</h1>
        <Image
          className={styles.logo}
          src={logomain}
          alt="logotyp"
          width="auto"
          height="auto"
        />
      </div>
    </div>
  );
};

export default ImageSlider;
