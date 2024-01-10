"use client";

import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/logonav.svg";
import ScrollLink from "../ScrollLink";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);

  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);

  const router = useRouter();
  const pathname = usePathname();

  const handleLinkClick = (to) => {
    // Check if the current page is not the root page
    if (pathname !== "/") {
      // Navigate to the root page
      router.push("/", undefined, { shallow: true });
    }

    // Scroll to the specified section
    setTimeout(() => {
      const element = document.getElementById(to);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
    handleClick();
  };

  const handleClick = () => {
    setActive(!active);
  };

  const toggleDropdown1 = () => {
    setIsDropdown1Open(!isDropdown1Open);
  };
  const toggleDropdown2 = () => {
    setIsDropdown2Open(!isDropdown2Open);
  };

  const closeDropdown = (event) => {
    if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
      setIsDropdown1Open(false);
    }
    if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
      setIsDropdown2Open(false);
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
        <div className={styles.logoText}>
          <span>Bliżej boga</span>
          <span>
            <strong>Bliżej Człowieka</strong>
          </span>
        </div>
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
          ref={dropdownRef1}
          onClick={toggleDropdown1}
          className={styles.dropdown}
        >
          <span
            className={`${styles.dropdownBtn} ${
              isDropdown1Open ? styles.dropdownBtnActive : ""
            }`}
          >
            O kościele
            <i className="fa-solid fa-chevron-down" />
          </span>
          <div
            className={`${styles.dropdownContent} ${
              isDropdown1Open ? styles.activeDropdown : ""
            }`}
          >
            {pathname === "/" ? (
              <>
                <ScrollLink onClick={handleClick} to="wyznanie">
                  Wyznanie wiary
                </ScrollLink>
                <ScrollLink onClick={handleClick} to="zbawienie">
                  Modlitwa zbawienia
                </ScrollLink>
                <ScrollLink onClick={handleClick} to="corobimy">
                  Co robimy
                </ScrollLink>
              </>
            ) : (
              <>
                <a href="#" onClick={() => handleLinkClick("wyznanie")}>
                  Wyznanie wiary
                </a>
                <a href="#" onClick={() => handleLinkClick("zbawienie")}>
                  Modlitwa zbawienie
                </a>
                <a href="#" onClick={() => handleLinkClick("corobimy")}>
                  Co robimy
                </a>
              </>
            )}
          </div>
        </li>
        <li
          ref={dropdownRef2}
          onClick={toggleDropdown2}
          className={styles.dropdown}
        >
          <span
            className={`${styles.dropdownBtn} ${
              isDropdown2Open ? styles.dropdownBtnActive : ""
            }`}
          >
            Spotkania
            <i className="fa-solid fa-chevron-down" />
          </span>
          <div
            className={`${styles.dropdownContent} ${
              isDropdown2Open ? styles.activeDropdown : ""
            }`}
          >
            {pathname === "/" ? (
              <>
                <ScrollLink onClick={handleClick} to="niedziela">
                  Niedziela
                </ScrollLink>
                <ScrollLink onClick={handleClick} to="sroda">
                  Środa
                </ScrollLink>
                <ScrollLink onClick={handleClick} to="dzieci">
                  Dzieci
                </ScrollLink>
                <ScrollLink onClick={handleClick} to="mlodziez">
                  Młodzież
                </ScrollLink>
                <ScrollLink onClick={handleClick} to="meskie">
                  Męskie
                </ScrollLink>
                <ScrollLink onClick={handleClick} to="zenskie">
                  Żeńskie
                </ScrollLink>
                <ScrollLink onClick={handleClick} to="wydarzenia">
                  Wydarzenia
                </ScrollLink>
              </>
            ) : (
              <>
                <a href="#" onClick={() => handleLinkClick("niedziela")}>
                  Niedziela
                </a>
                <a href="#" onClick={() => handleLinkClick("sroda")}>
                  Środa
                </a>
                <a href="#" onClick={() => handleLinkClick("dzieci")}>
                  Dzieci
                </a>
                <a href="#" onClick={() => handleLinkClick("mlodziez")}>
                  Młodzież
                </a>
                <a href="#" onClick={() => handleLinkClick("meskie")}>
                  Męskie
                </a>
                <a href="#" onClick={() => handleLinkClick("zenskie")}>
                  Żeńskie
                </a>
                <a href="#" onClick={() => handleLinkClick("wydarzenia")}>
                  Wydarzenia
                </a>
              </>
            )}
          </div>
        </li>

        {pathname === "/" ? (
          <>
            <li>
              <ScrollLink onClick={handleClick} to="courses">
                Kursy
              </ScrollLink>
            </li>
            <li>
              <ScrollLink onClick={handleClick} to="groups">
                Grupy Domowe
              </ScrollLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <a href="#" onClick={() => handleLinkClick("courses")}>
                Kursy
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleLinkClick("groups")}>
                Grupy Domowe
              </a>
            </li>
          </>
        )}

        {/* <li>
          <ScrollLink onClick={handleClick} to="contact">
            Kontakt
          </ScrollLink>
        </li> */}
        <li>
          <Link onClick={handleClick} href="wsparcie">
            Wesprzyj nas
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
