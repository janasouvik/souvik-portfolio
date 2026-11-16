import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectNavigationProps {
  onPrev: () => void;
  onNext: () => void;
  total: number;
  current: number;
  onSelect: (index: number) => void;
}

export default function ProjectNavigation({
  onPrev,
  onNext,
  total,
  current,
  onSelect,
}: ProjectNavigationProps) {
  return (
    <div className="mt-4">
      {/* Prev / Next buttons */}
      <div className="flex justify-end gap-2">
        <button
          onClick={onPrev}
          className="w-10 h-10 bg-accent flex items-center justify-center rounded-sm hover:bg-accent-hover transition-colors duration-200"
          aria-label="Previous project"
        >
          <ChevronLeft size={18} className="text-black" />
        </button>
        <button
          onClick={onNext}
          className="w-10 h-10 bg-accent flex items-center justify-center rounded-sm hover:bg-accent-hover transition-colors duration-200"
          aria-label="Next project"
        >
          <ChevronRight size={18} className="text-black" />
        </button>
      </div>

      {/* Indicator dots */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              i === current ? "bg-accent" : "bg-border"
            }`}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
