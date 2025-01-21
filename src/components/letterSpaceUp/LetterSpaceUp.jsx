import { motion } from "framer-motion";

const LetterSpaceUp = ({ text, className }) => {
  // Variants pour l'animation des lettres
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Délai entre chaque lettre
      },
    },
  };

  const letter = {
    hidden: {
      opacity: 0,
      y: 20, // Position initiale (descendante)
    },
    visible: {
      opacity: 1,
      y: 0, // Position finale
      transition: {
        duration: 1.5, // Durée de l'animation
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ display: "flex", gap: "5px" }} // Espace entre les lettres
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letter}>
          {char === " " ? "\u00A0" : char} {/* Gérer les espaces */}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default LetterSpaceUp;
