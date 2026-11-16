import { education } from "@/data/resume";
import ResumeCard from "@/components/resume/ResumeCard";

export default function Education() {
  return (
    <div>
      <h3 className="text-2xl font-bold font-mono text-primary mb-2">My Education</h3>
      <p className="text-sm font-mono text-secondary mb-6">
        Academic background and engineering qualifications.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {education.map((item) => (
          <ResumeCard
            key={item.id}
            date={item.date}
            title={item.degree}
            subtitle={item.location ? `${item.institution}, ${item.location}` : item.institution}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}
