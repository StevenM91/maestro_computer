"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link
            href="/"
            className={`${pathname === "/" ? styles.active : styles.link}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${pathname === "/about" ? styles.active : styles.link}`}
          >
            About
          </Link>
          <Link
            href="/project"
            className={`${
              pathname === "/project" ? styles.active : styles.link
            }`}
          >
            Project
          </Link>
          <Link
            href="/contact"
            className={`${
              pathname === "/contact" ? styles.active : styles.link
            }`}
          >
            Contact
          </Link>
        </div>
        <div className={styles.responsive}>
          <Link
            href="/"
            className={`${pathname === "/" ? styles.active : styles.linkres}`}
          >
            <img src="/home1.png" alt="bouton home" className={styles.image} />
          </Link>
          <Link
            href="/about"
            className={`${
              pathname === "/about" ? styles.active : styles.linkres
            }`}
          >
            <img src="/about1.png" alt="bouton home" className={styles.image} />
          </Link>
          <Link
            href="/project"
            className={`${
              pathname === "/project" ? styles.active : styles.linkres
            }`}
          >
            <img
              src="/project1.png"
              alt="bouton home"
              className={styles.image}
            />
          </Link>
          <Link
            href="/contact"
            className={`${
              pathname === "/contact" ? styles.active : styles.linkres
            }`}
          >
            <img
              src="/contact1.png"
              alt="bouton home"
              className={styles.image}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
