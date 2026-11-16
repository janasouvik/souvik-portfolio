import { personalInfo } from "@/data/personal";

export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-border mt-16">
      <div className="container mx-auto px-6 max-w-[1000px] flex items-center justify-center text-xs font-mono text-muted text-center">
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
