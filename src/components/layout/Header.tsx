"use client";

import { Menu } from "lucide-react";
import { personalInfo } from "@/data/personal";
import Navbar from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { useActiveSection } from "@/hooks/useActiveSection";
import { scrollToSection } from "@/lib/utils";

export default function Header() {
  const { isOpen, toggle, close } = useMobileMenu();
  const { activeSection } = useActiveSection();

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-main/90 backdrop-blur-md border-b border-border/30 py-5 transition-all duration-200">
        <div className="container mx-auto px-6 flex items-center justify-between max-w-[1000px]">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold text-white font-mono tracking-tight cursor-pointer hover:opacity-90 transition-opacity"
            aria-label="Scroll to top"
          >
            {personalInfo.firstName}
            <span className="text-accent">.</span>
          </button>

          {/* Desktop Nav */}
          <Navbar activeSection={activeSection} />

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-white p-1 hover:text-accent transition-colors"
            onClick={toggle}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isOpen}
        onClose={close}
        activeSection={activeSection}
      />
    </>
  );
}
