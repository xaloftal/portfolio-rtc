import { useRef, useEffect, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { experience } from '../data';

export default function Experience() {
  const targetRef = useRef(null);
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [needsScroll, setNeedsScroll] = useState(true);
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 768);

  useEffect(() => {
    const updateViewportMode = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    const updateMaxScroll = () => {
      if (containerRef.current) {
        const scrollW = containerRef.current.scrollWidth;
        const windowW = window.innerWidth;
        if (!isDesktop || scrollW <= windowW) {
          setNeedsScroll(false);
          setMaxScroll(0);
        } else {
          setNeedsScroll(true);
          // Add padding to ensure the last card can be fully seen
          setMaxScroll(scrollW - windowW + 64);
        }
      }
    };

    updateViewportMode();
    setTimeout(updateMaxScroll, 100);
    window.addEventListener('resize', updateViewportMode);
    window.addEventListener('resize', updateMaxScroll);
    return () => {
      window.removeEventListener('resize', updateViewportMode);
      window.removeEventListener('resize', updateMaxScroll);
    };
  }, [isDesktop]);

  useEffect(() => {
    const handleScroll = () => {
      if (!targetRef.current || !needsScroll || !isDesktop) return;

      const { top, height } = targetRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollEnd = height - windowHeight;
      let progress = -top / scrollEnd;

      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    if (needsScroll) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [needsScroll, isDesktop]);

  const shouldAutoScroll = needsScroll && isDesktop;

  return (
    <section id="experience" ref={targetRef} className={`relative w-full ${shouldAutoScroll ? 'h-[300vh]' : 'h-auto'}`}>
      <div className={`${shouldAutoScroll ? 'sticky top-0 h-screen overflow-hidden' : 'py-24'} w-full flex flex-col justify-center bg-background`}>
        <div className="max-w-6xl mx-auto px-8 w-full">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
            Experience
          </h2>
        </div>

        <div className={`w-full ${shouldAutoScroll ? 'overflow-hidden' : 'overflow-x-auto md:overflow-hidden'}`}>
          <div
            ref={containerRef}
            className={`relative flex w-max gap-6 md:gap-8 px-8 md:pl-[calc((100vw-72rem)/2)] md:pr-8 ${shouldAutoScroll ? 'will-change-transform ease-out' : 'pb-6 md:pb-0'}`}
            style={shouldAutoScroll ? {
              transform: `translateX(-${scrollProgress * maxScroll}px)`
            } : undefined}
          >
            {/* Timeline Line (Background Track) */}
            <div className="absolute top-[38px] left-0 right-0 h-0.5 bg-muted" />

            {experience.map((job) => (
              <div
                key={job.id}
                className="relative pt-16 shrink-0 w-[85vw] md:w-[420px]"
              >
                {/* Timeline Dot */}
                <div className="absolute top-[32px] left-8 w-4 h-4 bg-primary rounded-full ring-4 ring-background z-10" />

                {/* Card Content — fixed height, flex-col so description scrolls */}
                <div className="bg-card border border-border p-8 rounded-3xl hover:bg-muted transition-colors flex flex-col" style={{ height: '380px' }}>
                  <div className="text-primary font-mono text-sm mb-3 shrink-0">
                    {job.period}
                  </div>
                  <h3 className="text-xl font-bold text-foreground shrink-0">{job.title}</h3>
                  <h4 className="text-base text-muted-foreground mb-4 shrink-0">{job.company}</h4>

                  {/* Scrollable description */}
                  <ul className="overflow-y-auto flex-1 pr-1 space-y-2 no-scrollbar">
                    {(Array.isArray(job.description) ? job.description : [job.description]).map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                        <FaAngleRight className="text-primary mt-[3px] shrink-0" size={12} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm font-mono text-primary/80 mt-3 pt-3 border-t border-border/50 shrink-0">
                    {job.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
