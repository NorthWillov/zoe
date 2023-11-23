"use client";

import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/logomain.svg";
import ScrollLink from "../ScrollLink";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isDropdown1Open, setIsDropdown1Open] = useState(false);

  const dropdownRef = useRef(null);

  const handleClick = () => {
    setActive(!active);
  };

  const toggleDropdown = () => {
    setIsDropdown1Open(!isDropdown1Open);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdown1Open(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <nav data-testid="navbar" className={styles.navBar}>
      <div className={styles.logoWrapper}>
        <Link href="/">
          <Image
            className={styles.logo}
            src={logo}
            alt="logo"
            width="auto"
            height="auto"
          />
        </Link>
      </div>
      <div className={styles.icon} onClick={handleClick}>
        <i
          data-testid="menu-icon"
          className={
            active
              ? `fas fa-times ${styles.icon}`
              : `fas fa-bars ${styles.icon}`
          }
        ></i>
      </div>
      <ul
        className={`${styles.navBarMenu} ${active && styles.navBarMenuActive}`}
      >
        <li
          ref={dropdownRef}
          onClick={toggleDropdown}
          className={styles.dropdown}
        >
          <span className={styles.dropdownBtn}>
            O kościele
            <i className="fa-solid fa-chevron-down" />
          </span>
          <div
            className={`${styles.dropdownContent} ${
              isDropdown1Open ? styles.activeDropdown : ""
            }`}
          >
            <ScrollLink onClick={handleClick} to="features">
              Wyznanie wiary
            </ScrollLink>
            <ScrollLink onClick={handleClick} to="features">
              Modlitwa zbawienie
            </ScrollLink>
            <ScrollLink onClick={handleClick} to="features">
              Co robimy
            </ScrollLink>
          </div>
        </li>
        <li>
          <ScrollLink onClick={handleClick} to="features">
            Spotkania
          </ScrollLink>
        </li>
        <li>
          <ScrollLink onClick={handleClick} to="roadmap">
            Kursy
          </ScrollLink>
        </li>
        <li>
          <ScrollLink onClick={handleClick} to="contact">
            Grupy Domowe
          </ScrollLink>
        </li>
        <li>
          <ScrollLink onClick={handleClick} to="contact">
            Kontakt
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
