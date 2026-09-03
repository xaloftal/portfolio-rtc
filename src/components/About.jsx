import { useEffect, useRef, useState } from 'react';
import SectionLayout from './SectionLayout';
import { ArrowRight, Download } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

export default function About() {
  const animationRef = useRef(null);
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);

  useEffect(() => {
    const target = animationRef.current;

    if (!target) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAnimationVisible(entry.isIntersecting);
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <SectionLayout id="about" className="bg-gradient-to-br from-background via-background to-primary/5 ">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 ">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Hi, I'm <span className="text-primary">Diana</span>.
          </h1>
          <div ref={animationRef} className="min-h-[9rem] md:min-h-[8rem] pt-2 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            {isAnimationVisible ? (
              <TypeAnimation
                key="about-animation"
                sequence={[
                  'I enjoy solving complex problems.',
                  2000,
                  'I build backend systems.',
                  2000,
                  'I design complex databases.',
                  2000,
                  'I am a Medical Informatics Engineer.',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="block text-foreground/90"
              />
            ) : (
              <span className="block text-foreground/90">&nbsp;</span>
            )}
          </div>
          <div className="space-y-2">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mx-auto md:mx-0">
              Medical Informatics Engineer and Master's student, with a preference for back-end and database development, alongside hands-on experience in full-stack development and academic research.
            </p>

            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#projects" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
                View Work <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Profile Picture Placeholder */}
        <div className="shrink-0">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-primary to-secondary p-1">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQElI7XeUV74Jw/profile-displayphoto-scale_400_400/B4EZ.F4ShfIkAg-/0/1784657554994?e=1789603200&v=beta&t=OzVizc-ZxA9SKbJ1qm6vcofmLc9N4kD6Yu99WmjkZi0"
                alt="Profile"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
