import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import styles from "./ScrollBasedAnimation.module.css";

const ScrollBasedAnimation = () => {
  const { scrollY } = useScroll(); // Obtenir la position de défilement verticale
  const y = useTransform(scrollY, [0, 1000], [0, -300]); // Transformer le défilement en mouvement vertical

  const logos = [
    { name: "JavaScript", src: "/javascript.png" },
    { name: "ReactJS", src: "/react.png" },
    { name: "NextJS", src: "/next.png" },
    { name: "CSS", src: "/css.png" },
    { name: "SASS", src: "/sass.png" },
    { name: "Framer", src: "/framer.png" },
    { name: "Figma", src: "/figma.png" },
  ];

  return (
    <motion.div
      className={styles.container}
      initial={{ x: "100%" }}
      animate={{ x: "-100%" }}
      transition={{
        duration: 30, // Durée de l'animation du texte
        repeat: Infinity, // Défilement infini
        ease: "linear", // Vitesse constante
      }}
    >
      <div className={styles.scrollingContent}>
        {logos.map((logo, index) => (
          <div key={index} className={styles.item}>
            <img
              src={logo.src}
              alt={logo.name}
              fill="true"
              className={styles.logo}
            />
            <span>{logo.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ScrollBasedAnimation;
