import SectionLayout from './SectionLayout';
import { education } from '../data';

export default function Education() {
  return (
    <SectionLayout id="education" title="Education">
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((edu) => (
          <div key={edu.id} className="bg-gradient-to-b from-card to-transparent border border-border p-8 rounded-3xl flex flex-col gap-3 group hover:border-primary/50 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div className="text-sm text-primary font-mono">{edu.period}</div>
              {edu.gpa && (
                <span className="shrink-0 text-xs font-semibold bg-primary/10 text-primary border border-primary/30 px-2 py-1 rounded-full">
                  GPA {edu.gpa}
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{edu.degree}</h3>
            <p className="text-muted-foreground">{edu.institution}</p>
            {edu.location && <p className="text-xs text-muted-foreground/60">{edu.location}</p>}
            {edu.note && <p className="text-sm text-muted-foreground/80 leading-relaxed border-t border-border pt-3 mt-1">{edu.note}</p>}
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
