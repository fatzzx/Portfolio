/* eslint-disable react/prop-types */
import { motion } from "motion/react";

export const BlurFadeText = ({ text, className, delay = 0, yOffset = 8 }) => (
  <div className="flex">
    <motion.span
      key={text}
      initial={{ y: -yOffset, opacity: 0, filter: "blur(8px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={`inline-block ${className ?? ""}`}
    >
      {text}
    </motion.span>
  </div>
);
