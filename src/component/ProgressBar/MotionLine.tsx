import { motion, useScroll, useSpring } from "framer-motion";
export const MotionLine = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="bg-primary top-0 left-0 right-0 h-1 fixed"
      style={{
        scaleX: scaleX,
        transformOrigin: "0%",
        position: "fixed",
      }}
    ></motion.div>
  );
};
