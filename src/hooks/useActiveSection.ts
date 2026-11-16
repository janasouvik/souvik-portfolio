"use client";

import { useState, useEffect } from "react";
import { navLinks } from "@/data/navigation";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.id);
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionElements.length === 0) return;

    // Use IntersectionObserver with a balanced rootMargin
    const observer = new IntersectionObserver(
      (entries) => {
        // Find visible sections
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -50% 0px",
        threshold: 0.1,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    // Handle edge cases: very top and very bottom of page
    const handleScroll = () => {
      if (window.scrollY < 120) {
        setActiveSection("home");
      } else if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { activeSection, setActiveSection };
}
