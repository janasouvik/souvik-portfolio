"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { personalInfo } from "@/data/personal";
import { scrollToSection } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export default function MobileMenu({
  isOpen,
  onClose,
  activeSection,
}: MobileMenuProps) {
  const handleNavClick = (sectionId: string) => {
    onClose();
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 150);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-secondary z-50 md:hidden flex flex-col"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.28, ease: "easeInOut" }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-border/40">
            <button
              onClick={() => handleNavClick("home")}
              className="text-2xl font-bold text-white font-mono"
            >
              {personalInfo.firstName}
              <span className="text-accent">.</span>
            </button>
            <button
              onClick={onClose}
              className="text-white p-1 hover:text-accent transition-colors"
              aria-label="Close menu"
            >
              <X size={24} className="text-accent" />
            </button>
          </div>

          {/* Nav links — centered */}
          <nav className="flex flex-col items-center justify-center flex-1 gap-2 pb-12">
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.id;
              return (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                  className="w-full text-center"
                >
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`block w-full text-2xl font-mono py-4 transition-colors ${
                      isActive
                        ? "text-accent border-b-2 border-accent"
                        : "text-primary hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </button>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05, duration: 0.25 }}
              className="mt-6"
            >
              <button
                onClick={() => handleNavClick("contact")}
                className="px-8 py-3 bg-accent text-black text-sm font-mono font-semibold rounded-full hover:bg-accent-hover transition-colors"
              >
                Hire me
              </button>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
