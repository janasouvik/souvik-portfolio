import { personalInfo } from "@/data/personal";

export default function AboutMe() {
  const infoItems = [
    { label: "Name", value: personalInfo.name },
    { label: "Education", value: personalInfo.degree },
    { label: "College", value: personalInfo.college },
    { label: "Location", value: personalInfo.location },
    { label: "Hometown", value: personalInfo.hometown },
    { label: "Graduation", value: personalInfo.graduationYear },
    { label: "Current Status", value: `${personalInfo.semester} (CGPA: ${personalInfo.cgpa})` },
    { label: "Primary Focus", value: "Full Stack Development" },
    { label: "GitHub", value: "github.com/janasouvik", href: personalInfo.github },
    { label: "Email", value: personalInfo.email || "[ADD EMAIL]", href: personalInfo.email ? `mailto:${personalInfo.email}` : undefined },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold font-mono text-primary mb-4">About me</h3>
      <p className="text-sm font-mono text-secondary leading-relaxed mb-6">
        I&apos;m {personalInfo.name}, a Computer Science and Engineering undergraduate at{" "}
        {personalInfo.college}, Bengaluru. My primary interest is full-stack software development,
        particularly building modern applications using JavaScript, TypeScript, React, Next.js, Node.js,
        and PostgreSQL. Alongside web development, I explore AI/ML, software architecture, open-source
        development and research-oriented projects. I enjoy participating in hackathons and working
        with teams to solve practical problems.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
        {infoItems.map(({ label, value, href }) => (
          <div key={label} className="flex gap-3 items-baseline">
            <span className="text-xs font-mono text-muted min-w-[105px] flex-shrink-0">{label}</span>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-primary hover:text-accent transition-colors duration-200 truncate"
              >
                {value}
              </a>
            ) : (
              <span className="text-sm font-mono text-primary font-medium truncate">{value}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
