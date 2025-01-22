"use client";

import CardAbout from "@/components/cardAbout/CardAbout";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <CardAbout
          name="Steven"
          surname="Maitre"
          city="Chartres (28)"
          image="/moi.jpeg" // Remplacez par l'URL de votre photo
          description="Développeur passionné, spécialisé en React et Node.js avec 5 ans d'expérience."
        />
      </div>
    </div>
  );
};

export default About;
