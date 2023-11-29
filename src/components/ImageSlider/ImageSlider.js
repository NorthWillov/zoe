"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logomain from "../../assets/logomain.svg";
import heart from "../../assets/heart.svg";
import messenger from "../../assets/messenger.svg";
import youtube from "../../assets/youtube.svg";
import tbngo from "../../assets/tbngo.svg";
import styles from "./ImageSlider.module.css";

const ImageSlider = ({ images = [], titleBold, titleLight, description }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
        <div className={styles.iconWrapper}>
          <Image
            className={`${styles.logo} ${styles.animated}`}
            style={{ marginBottom: "-20px" }}
            src={heart}
            alt="serce"
            width="100"
            height="100"
          />
        </div>
        <div className={styles.iconWrapper}>
          <Image
            className={styles.logo}
            style={{ marginBottom: "-20px" }}
            src={messenger}
            alt="messenger"
            width="100"
            height="100"
          />
        </div>
        <div className={styles.iconWrapper}>
          <Image
            className={styles.logo}
            style={{ marginBottom: "-20px" }}
            src={youtube}
            alt="youtube"
            width="80"
            height="100"
          />
        </div>
        <div className={styles.iconWrapper}>
          <Image
            className={styles.logo}
            src={tbngo}
            alt="tbngo"
            width="80"
            height="100"
          />
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
