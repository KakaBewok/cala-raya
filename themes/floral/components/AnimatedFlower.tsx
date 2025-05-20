// components/AnimatedFlower.js
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimatedFlower({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <motion.img
      ref={ref}
      src={src}
      alt="flower"
      className={`${className}`}
      initial={{ opacity: 0, y: -50, rotate: -30 }}
      animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    />
  );
}
