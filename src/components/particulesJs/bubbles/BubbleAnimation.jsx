import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./bubble.module.css";

const BubblesAnimation = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Générer des bulles initiales
    const createBubbles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 50 + 10, // Taille aléatoire entre 10px et 60px
      x: Math.random() * 100, // Position horizontale aléatoire
      duration: Math.random() * 5 + 5, // Durée de l'animation entre 5s et 10s
    }));
    setBubbles(createBubbles);
  }, []);

  return (
    <div className={styles.bubblesContainer}>
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className={styles.bubble}
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.x}%`,
          }}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "-100vh", opacity: 1 }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}
    </div>
  );
};

export default BubblesAnimation;
