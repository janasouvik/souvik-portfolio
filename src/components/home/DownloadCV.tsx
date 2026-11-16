import { Download } from "lucide-react";
import { personalInfo } from "@/data/personal";

export default function DownloadCV() {
  return (
    <a
      href={personalInfo.resume}
      download
      className="flex items-center gap-2 px-6 py-2.5 border border-primary text-primary text-xs font-mono font-semibold rounded-full hover:bg-primary hover:text-black transition-all duration-200"
    >
      DOWNLOAD CV <Download size={14} />
    </a>
  );
}
