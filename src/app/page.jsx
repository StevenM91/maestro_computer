"use client";

import Social from "@/components/social/Social";
import styles from "./home.module.css";
import GradientText from "@/components/gradientText/GradientText";
import Ballpit from "@/components/ballPit/BallPit";
import ScrollBasedAnimation from "@/components/ScrollBasedAnimation/ScrollBasedAnimation";
import BurgerMenu from "@/components/burgerMenu/BurgerMenu";

const Home = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
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
          <div
            style={{
              position: "absolute",
              overflow: "hidden",
              minHeight: "100%",
              maxHeight: "100%",
              width: "100%",
              bottom: "0",
            }}
          >
            <Ballpit
              count={50}
              gravity={0.2}
              friction={1}
              wallBounce={0.95}
              followCursor={true}
            />
            <ScrollBasedAnimation />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
