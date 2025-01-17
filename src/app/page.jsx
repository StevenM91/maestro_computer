import Social from "@/components/social/Social";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.partTop}>
          <h1 className={`${styles.title} ${styles.shadowColor}`}>
            developpeur web
          </h1>
          <h2 className={`${styles.titlesecond} ${styles.shadowColor}`}>
            FullStack
          </h2>
        </div>
        <div className={styles.partBottom}>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Home;
