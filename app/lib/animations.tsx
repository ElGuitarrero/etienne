"use client"
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

export function useScrollAnimation(options = { once: true, rootMargin: "-50px" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, options); // Detecta si el objeto está en pantalla

  return { ref, isInView };
}


export const AnimatedElement = ({ children }: { children: React.ReactNode }) => {
  const { ref, isInView } = useScrollAnimation();

  return (
    
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>

  );
};
