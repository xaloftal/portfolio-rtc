import SectionLayout from './SectionLayout';
import { projects } from '../data';
import { ExternalLink } from 'lucide-react';
import { FaAngleRight, FaGithub } from 'react-icons/fa';

export default function Projects() {
  return (
    <SectionLayout id="projects" title="Featured Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            className="bg-card border border-border rounded-3xl p-8 flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-300"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-primary/20 text-primary rounded-xl">
                  <ExternalLink size={24} />
                </div>
                <div className="flex gap-3">
                  <FaGithub size={25} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
              <ul className="overflow-y-auto flex-1 pr-1 space-y-2 no-scrollbar">
                {(Array.isArray(project.description) ? project.description : [project.description]).map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <FaAngleRight className="text-primary mt-[3px] shrink-0" size={12} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-sm font-mono text-primary/80 mt-auto pt-6">
              {project.class}
            </div>
          </a>
        ))}
      </div>
    </SectionLayout>
  );
}
