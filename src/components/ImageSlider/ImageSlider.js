"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logomain from "../../assets/logomain.svg";
import heart from "../../assets/heart.svg";
import messenger from "../../assets/messenger.svg";
import youtube from "../../assets/youtube.svg";
import tbngo from "../../assets/tbngo.svg";
import styles from "./ImageSlider.module.css";
import Link from "next/link";
import HeartIcon from "../heartIcon";
import MessengerIcon from "../messengerIcon";
import YoutubeIcon from "../youtubeIcon";
import TbngoIcon from "../tbngoIcon";

const ImageSlider = ({ images = [], titleBold, titleLight, description }) => {
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
        {pathname !== "/wsparcie" && (
          <div
            style={{ marginBottom: "-20px" }}
            className={`${styles.iconWrapper} ${styles.animated}`}
          >
            <Link href={"wsparcie"}>
              <HeartIcon />
            </Link>
          </div>
        )}

        <div style={{ marginBottom: "-10px" }} className={styles.iconWrapper}>
          <MessengerIcon />
        </div>

        <div style={{ marginBottom: "-10px" }} className={styles.iconWrapper}>
          <YoutubeIcon />
        </div>
        <div style={{ marginBottom: "-20px" }} className={styles.iconWrapper}>
          <a href="https://tbngo.pl" target="_blank">
            <TbngoIcon />
          </a>
        </div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.contentTitle}>
          <strong>{titleBold}</strong> {titleLight}
        </h1>
        <div className={styles.contentTextWrapper}>
          <p className={styles.contentText}>{description}</p>
        </div>
      </div>
      <div className={styles.logoWrapper}>
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
