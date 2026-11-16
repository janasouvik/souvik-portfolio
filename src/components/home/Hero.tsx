"use client";

import { motion, Variants } from "framer-motion";
import { personalInfo } from "@/data/personal";
import ProfileImage from "@/components/home/ProfileImage";
import DownloadCV from "@/components/home/DownloadCV";
import SocialLinks from "@/components/home/SocialLinks";
import Statistics from "@/components/home/Statistics";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <div className="min-h-[calc(100vh-88px)] flex flex-col justify-center">
      {/* Two-column hero */}
      <div className="flex flex-col-reverse xl:flex-row items-center justify-between gap-10 py-12">
        {/* LEFT */}
        <div className="flex-1 flex flex-col gap-5 xl:max-w-[520px]">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-xs font-mono text-muted tracking-widest uppercase"
          >
            {personalInfo.role}
          </motion.p>

          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-mono leading-tight text-primary">
              Hello, I&apos;m
            </h1>
            <h1 className="text-5xl md:text-6xl font-bold font-mono leading-tight text-accent">
              {personalInfo.name}
            </h1>
          </motion.div>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-sm font-mono text-secondary leading-relaxed max-w-md"
          >
            Computer Science undergraduate and aspiring Full Stack Developer passionate about
            building scalable web applications, exploring AI technologies, and contributing to
            open-source projects.
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-sm font-mono text-muted leading-relaxed max-w-md"
          >
            I enjoy turning ideas into practical digital solutions through modern web technologies,
            backend engineering and continuous learning.
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-4 flex-wrap mt-2"
          >
            <DownloadCV />
            <SocialLinks />
          </motion.div>
        </div>

        {/* RIGHT — Profile Image */}
        <ProfileImage />
      </div>

      {/* Stats row */}
      <Statistics />
    </div>
  );
}
