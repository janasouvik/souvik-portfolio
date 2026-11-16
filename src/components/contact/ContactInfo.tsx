"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, MapPin } from "lucide-react";
import { personalInfo } from "@/data/personal";

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: personalInfo.email || "[ADD YOUR EMAIL]",
      href: personalInfo.email ? `mailto:${personalInfo.email}` : undefined,
    },
    {
      icon: <FaGithub size={20} />,
      label: "GitHub",
      value: "github.com/janasouvik",
      href: personalInfo.github,
    },
    {
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
      value: personalInfo.linkedin || "[ADD YOUR LINK]",
      href: personalInfo.linkedin || undefined,
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: personalInfo.location,
      href: undefined,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.4 }}
      className="xl:w-[280px] flex-shrink-0 flex flex-col gap-6 justify-center"
    >
      {contactDetails.map(({ icon, label, value, href }) => (
        <div key={label} className="flex items-start gap-4">
          <div className="w-12 h-12 bg-secondary border border-border rounded-sm flex items-center justify-center text-accent flex-shrink-0">
            {icon}
          </div>
          <div>
            <p className="text-xs font-mono text-muted mb-0.5">{label}</p>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-primary hover:text-accent transition-colors duration-200"
              >
                {value}
              </a>
            ) : (
              <p className="text-sm font-mono text-primary">{value}</p>
            )}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
