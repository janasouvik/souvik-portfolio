"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group p-8 cursor-default hover:bg-secondary/20 transition-colors duration-300"
    >
      {/* Number + Arrow button row */}
      <div className="flex items-start justify-between mb-5">
        <span className="text-3xl font-bold font-mono text-accent/80 tracking-wider">
          {service.number}
        </span>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors duration-300"
        >
          <ArrowDownRight
            size={18}
            className="text-muted group-hover:text-black transition-colors duration-300"
          />
        </motion.div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold font-mono text-primary mb-3 group-hover:text-accent transition-colors duration-300">
        {service.title}
      </h2>

      {/* Description */}
      <p className="text-sm font-mono text-secondary leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Bottom separator */}
      <div className="h-px bg-border w-full" />
    </motion.div>
  );
}
