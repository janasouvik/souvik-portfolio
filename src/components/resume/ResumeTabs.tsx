"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Experience from "@/components/resume/Experience";
import Education from "@/components/resume/Education";
import Skills from "@/components/resume/Skills";
import AboutMe from "@/components/resume/AboutMe";

type TabId = "experience" | "education" | "skills" | "about";

const tabs: { id: TabId; label: string }[] = [
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About me" },
];

const contentVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
};

export default function ResumeTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("experience");

  return (
    <div className="flex flex-col xl:flex-row gap-10">
      {/* LEFT — Why hire me + tabs */}
      <div className="xl:w-[320px] flex-shrink-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl font-bold font-mono text-primary mb-4">
            Why hire me?
          </h2>
          <p className="text-sm font-mono text-secondary leading-relaxed mb-8">
            An enthusiastic Computer Science undergraduate focused on full-stack development,
            practical engineering and open-source contributions. I enjoy learning new technologies
            and building meaningful software projects.
          </p>

          <div className="flex flex-col gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full py-3 px-4 text-sm font-mono font-medium rounded-sm transition-all duration-200 text-left ${
                  activeTab === tab.id
                    ? "bg-accent text-black"
                    : "bg-secondary text-secondary hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* RIGHT — Tab content */}
      <div className="flex-1 min-w-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {activeTab === "experience" && <Experience />}
            {activeTab === "education" && <Education />}
            {activeTab === "skills" && <Skills />}
            {activeTab === "about" && <AboutMe />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
