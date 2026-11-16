"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectDetails from "@/components/work/ProjectDetails";
import ProjectImage from "@/components/work/ProjectImage";
import ProjectNavigation from "@/components/work/ProjectNavigation";

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
  }),
};

export default function ProjectShowcase() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const project = projects[current];

  const navigate = (dir: 1 | -1) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + projects.length) % projects.length);
  };

  const select = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  return (
    <div className="flex flex-col xl:flex-row gap-10 items-start">
      {/* LEFT — Details */}
      <div className="xl:w-[420px] flex-shrink-0 w-full">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={project.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <ProjectDetails project={project} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* RIGHT — Screenshot + navigation */}
      <div className="flex-1 min-w-0 w-full">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={project.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <ProjectImage project={project} />
          </motion.div>
        </AnimatePresence>

        <ProjectNavigation
          onPrev={() => navigate(-1)}
          onNext={() => navigate(1)}
          total={projects.length}
          current={current}
          onSelect={select}
        />
      </div>
    </div>
  );
}
