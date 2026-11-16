"use client";

import { motion } from "framer-motion";
import { navLinks } from "@/data/navigation";
import { scrollToSection } from "@/lib/utils";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  return (
    <nav className="hidden md:flex items-center gap-7">
      {navLinks.map((link) => {
        const isActive = activeSection === link.id;
        return (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className={`relative text-sm font-mono pb-1 transition-colors duration-200 cursor-pointer ${
              isActive ? "text-white" : "text-muted hover:text-white"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {link.label}
            {isActive && (
              <motion.span
                layoutId="nav-underline"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        );
      })}
      <button
        onClick={() => scrollToSection("contact")}
        className="ml-1 px-5 py-2 bg-accent text-black text-sm font-mono font-semibold rounded-full hover:bg-accent-hover transition-colors duration-200 cursor-pointer"
      >
        Hire me
      </button>
    </nav>
  );
}
