import React from "react";
import { motion } from "framer-motion";

const AnimatedTextBottomToTop = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
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

export default AnimatedTextBottomToTop;
