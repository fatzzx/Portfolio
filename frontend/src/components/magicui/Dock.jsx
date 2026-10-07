/* eslint-disable react/prop-types */
// Adapted from the Magic UI portfolio template (MIT, Dillion Verma).
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { createContext, useContext, useRef } from "react";

const SPRING = { mass: 0.1, stiffness: 150, damping: 12 };
const DockContext = createContext(null);

export const Dock = ({ className, children, baseSize = 40, magnification = 60, distance = 100 }) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <DockContext.Provider value={{ mouseX, baseSize, magnification, distance }}>
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={`mx-auto w-max h-full flex items-end justify-center overflow-visible rounded-full border ${className ?? ""}`}
      >
        {children}
      </motion.div>
    </DockContext.Provider>
  );
};

export const DockIcon = ({ className, children }) => {
  const ref = useRef(null);
  const { mouseX, baseSize, magnification, distance } = useContext(DockContext);

  const distanceCalc = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  const size = useSpring(
    useTransform(distanceCalc, [-distance, 0, distance], [baseSize, magnification, baseSize]),
    SPRING,
  );
  const iconSize = useSpring(
    useTransform(distanceCalc, [-distance, 0, distance], [baseSize / 2, magnification / 2, baseSize / 2]),
    SPRING,
  );

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      className={`relative flex aspect-square items-center justify-center rounded-full shrink-0 ${className ?? ""}`}
    >
      <motion.div style={{ width: iconSize, height: iconSize }} className="flex items-center justify-center">
        {children}
      </motion.div>
    </motion.div>
  );
};
