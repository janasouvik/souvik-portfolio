import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "@/data/personal";

interface SocialIconProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

function SocialIcon({ href, label, children }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all duration-200"
    >
      {children}
    </a>
  );
}

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {personalInfo.github && (
        <SocialIcon href={personalInfo.github} label="GitHub">
          <FaGithub size={18} />
        </SocialIcon>
      )}
      {personalInfo.linkedin && (
        <SocialIcon href={personalInfo.linkedin} label="LinkedIn">
          <FaLinkedin size={18} />
        </SocialIcon>
      )}
    </div>
  );
}
