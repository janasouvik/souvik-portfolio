"use client";

import { motion } from "framer-motion";
import { statistics } from "@/data/personal";

export default function Statistics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-t border-border mt-4"
    >
      {statistics.map((stat, i) => (
        <div key={i} className="flex items-start gap-3">
          <span className="text-5xl font-bold font-mono text-primary leading-none">
            {stat.value}
          </span>
          <p className="text-xs font-mono text-muted leading-snug pt-1 whitespace-pre-line">
            {stat.label}
          </p>
        </div>
      ))}
    </motion.div>
  );
}
