"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { pageTransitionVariants } from "@/lib/animations";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      variants={pageTransitionVariants}
      initial="hidden"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
