"use client";

// components/ImageSlider.js
import React, { useState, useEffect } from "react";
import styles from "./ImageSlider.module.css";

const images = ["image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg"];

const ImageSlider = () => {
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
    </div>
  );
};

export default ImageSlider;
