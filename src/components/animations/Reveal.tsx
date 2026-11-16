"use client";

import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function Reveal({ children, delay = 0, direction = "up" }: RevealProps) {
  const getInitial = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 20 };
      case "down":
        return { opacity: 0, y: -20 };
      case "left":
        return { opacity: 0, x: 20 };
      case "right":
        return { opacity: 0, x: -20 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
