interface ResumeCardProps {
  date: string;
  title: string;
  subtitle?: string;
  description?: string;
  details?: string[];
}

export default function ResumeCard({
  date,
  title,
  subtitle,
  description,
  details,
}: ResumeCardProps) {
  return (
    <div className="bg-secondary p-5 rounded-sm border border-border">
      <span className="text-xs font-mono text-accent">{date}</span>
      <h4 className="text-sm font-bold font-mono text-primary mt-1 mb-1">{title}</h4>
      {subtitle && <p className="text-xs font-mono text-muted mb-2">• {subtitle}</p>}
      {description && (
        <p className="text-xs font-mono text-secondary leading-relaxed">{description}</p>
      )}
      {details && details.length > 0 && (
        <div className="space-y-1 mt-2">
          {details.map((d, i) => (
            <p key={i} className="text-xs font-mono text-secondary">
              • {d}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
