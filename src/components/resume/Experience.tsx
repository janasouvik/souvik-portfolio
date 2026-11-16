import { experience } from "@/data/resume";
import ResumeCard from "@/components/resume/ResumeCard";

export default function Experience() {
  return (
    <div>
      <h3 className="text-2xl font-bold font-mono text-primary mb-2">My Experience</h3>
      <p className="text-sm font-mono text-secondary mb-6">
        Hands-on experience developing projects and contributing to open-source software.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {experience.map((item) => (
          <ResumeCard
            key={item.id}
            date={item.date}
            title={item.role}
            subtitle={item.organization}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
