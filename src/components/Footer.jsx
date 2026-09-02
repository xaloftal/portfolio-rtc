import { socials } from '../data';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-card/40 backdrop-blur-sm py-8">
      <div className="max-w-6xl mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Copyright */}
        <p className="text-muted-foreground/60 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} Diana Dinis
        </p>

        {/* Decorative dots */}
        <div className="flex items-center gap-2">
          {['bg-primary', 'bg-blue-400', 'bg-pink-400'].map((c, i) => (
            <span key={i} className={`w-1.5 h-1.5 rounded-full ${c} opacity-60`} />
          ))}
        </div>

        {/* Social icon pills */}
        <div className="flex items-center gap-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className="
                  flex items-center gap-2 px-3 py-1.5
                  rounded-full border border-border
                  text-muted-foreground hover:text-foreground
                  hover:border-primary/50 hover:bg-primary/5
                  transition-all duration-200 text-xs
                "
              >
                <Icon size={14} />
                <span className="hidden sm:inline tracking-wide">{social.name}</span>
              </a>
            );
          })}
        </div>

      </div>
    </footer>
  );
}

