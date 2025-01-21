import Link from "next/link";
import styles from "./social.module.css";

const Social = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}></div>
      <div>
        <h2 className={styles.title}>Developpeur Web FullStack</h2>
      </div>

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
    </div>
  );
};

export default Social;
