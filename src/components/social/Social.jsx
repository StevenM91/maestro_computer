import Link from "next/link";
import styles from "./social.module.css";
import SplitText from "../splitText/SplitText";
import AnimatedTextRightToLeft from "../animatedTextRightToLeft/AnimatedTextRightToLeft";

const Social = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div className={styles.container}>
      <div className={styles.logo}></div>
      <div>
        <h2 className={styles.title}>
          <SplitText
            text="Developpeur web Full Stack"
            className="text-2xl font-semibold text-center"
            delay={80}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </h2>
      </div>

      <AnimatedTextRightToLeft>
        <div className={styles.social}>
          <Link href="/" className={styles.icons}>
            <img
              src="/insta.png"
              alt=""
              className={styles.icon}
              target="_blank"
            />
          </Link>
          <Link
            href="https://github.com/StevenM91"
            className={styles.icons}
            target="_blank"
          >
            <img src="/github.png" alt="" className={styles.icon} />
          </Link>
        </div>
      </AnimatedTextRightToLeft>
    </div>
  );
};

export default Social;
