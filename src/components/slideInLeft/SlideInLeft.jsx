import { motion } from "framer-motion";

const SlideInLeft = ({ children, className }) => {
  // Définir les variants pour l'animation
  const variants = {
    hidden: {
      opacity: 0,
      x: -500, // Position initiale à gauche
    },
    visible: {
      opacity: 1,
      x: 0, // Position finale
      transition: {
        duration: 1.8, // Durée de l'animation
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};

export default SlideInLeft;
