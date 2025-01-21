"use client";

import Social from "@/components/social/Social";
import styles from "./home.module.css";
import LetterSpaceUp from "@/components/letterSpaceUp/LetterSpaceUp";
import SlideInLeft from "@/components/slideInLeft/SlideInLeft";
import BubblesAnimation from "@/components/particulesJs/bubbles/BubbleAnimation";
import ScrollBasedAnimation from "@/components/ScrollBasedAnimation/ScrollBasedAnimation";

const Home = () => {
  return (
    <>
      <BubblesAnimation />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.partTop}>
            <LetterSpaceUp
              text="Meastro"
              className={`${styles.title} ${styles.shadowColor}`}
            />
            <LetterSpaceUp
              text="Computer"
              className={`${styles.titlesecond} ${styles.shadowColor}`}
            />
          </div>
          <div className={styles.partBottom}>
            <SlideInLeft>
              <Social />
            </SlideInLeft>
          </div>
        </div>
        <ScrollBasedAnimation />
      </div>
    </>
  );
};

export default Home;
