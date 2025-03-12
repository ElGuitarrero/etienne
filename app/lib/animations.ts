"use client"
import { useRef } from "react";
import { useInView } from "framer-motion";

export function useScrollAnimation(options = { once: true, rootMargin: "-50px" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, options); // Detecta si el objeto está en pantalla

  return { ref, isInView };
}