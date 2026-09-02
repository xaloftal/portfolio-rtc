export default function SectionLayout({ id, title, children, className = '' }) {
  return (
    <section
      id={id}
      className={`w-full py-24 min-h-screen flex flex-col justify-center ${className}`}
    >
      <div className="w-full max-w-6xl mx-auto px-8">
        {title && (
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
            {title}
          </h2>
        )}
        <div className="w-full">
          {children}
        </div>
      </div>
    </section>
  );
}
