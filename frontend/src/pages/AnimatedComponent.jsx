import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedComponent = ({ children, direction = "left" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true , // Animates only once
    threshold: 0.3, // Starts when 30% of the component is visible
  });

  const variants = {
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
