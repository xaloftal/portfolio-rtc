import SectionLayout from './SectionLayout';
import { skills } from '../data';

export default function Skills() {
  return (
    <SectionLayout id="skills" title="Skills & Technologies">
      <div className="space-y-10">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <div
                  key={skill}
                  className="px-5 py-2 bg-secondary/50 border border-border rounded-full text-foreground font-medium hover:border-primary hover:bg-primary/10 transition-all cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
