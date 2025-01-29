"use client";

import Social from "@/components/social/Social";
import styles from "./home.module.css";
import GradientText from "@/components/gradientText/GradientText";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.partTop}>
            <GradientText
              colors={["#0050fc", "#ffffff", "#ff0000"]}
              animationSpeed={3.5}
              showBorder={false}
              className={styles.title}
            >
              Maestro Computer
            </GradientText>
          </div>
          <div className={styles.partBottom}>
            <Social />
          </div>
        </div>
        {/* <ScrollBasedAnimation /> */}
      </div>
    </>
  );
};

export default Home;
