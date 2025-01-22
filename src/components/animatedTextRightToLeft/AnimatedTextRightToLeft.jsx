import React from "react";
import { motion } from "framer-motion";

const AnimatedTextRightToLeft = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.9, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedTextRightToLeft;
