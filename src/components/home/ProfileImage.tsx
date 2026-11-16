"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/data/personal";

const circleVariants: Variants = {
  animate: {
    rotate: 360,
    transition: { duration: 20, repeat: Infinity, ease: "linear" },
  },
};

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex items-center justify-center w-[260px] h-[260px] md:w-[320px] md:h-[320px] flex-shrink-0"
    >
      {/* Rotating dashed green border */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 320 320"
        variants={circleVariants}
        animate="animate"
      >
        {Array.from({ length: 8 }).map((_, i) => {
          const startAngle = i * 45;
          const endAngle = startAngle + 32;
          const toRad = (deg: number) => (deg * Math.PI) / 180;
          const r = 150;
          const cx = 160;
          const cy = 160;
          const x1 = cx + r * Math.cos(toRad(startAngle));
          const y1 = cy + r * Math.sin(toRad(startAngle));
          const x2 = cx + r * Math.cos(toRad(endAngle));
          const y2 = cy + r * Math.sin(toRad(endAngle));
          return (
            <path
              key={i}
              d={`M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`}
              stroke="#00E6A8"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          );
        })}
      </motion.svg>

      {/* Profile portrait */}
      <div className="relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full overflow-hidden border-4 border-secondary bg-secondary">
        <Image
          src={personalInfo.profileImage}
          alt={`${personalInfo.name} portrait`}
          fill
          className="object-cover"
          priority
        />
      </div>
    </motion.div>
  );
}
