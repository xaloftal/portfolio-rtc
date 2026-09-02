import { useState } from 'react';
import SectionLayout from './SectionLayout';
import { socials } from '../data';

const carnivalColors = [
  { bg: 'from-yellow-400/20 to-yellow-600/10', border: 'border-yellow-400/40', glow: 'shadow-yellow-400/20', dot: 'bg-yellow-400', text: 'group-hover:text-yellow-300' },
  { bg: 'from-blue-400/20 to-blue-600/10', border: 'border-blue-400/40', glow: 'shadow-blue-400/20', dot: 'bg-blue-400', text: 'group-hover:text-blue-300' },
  { bg: 'from-pink-400/20 to-pink-600/10', border: 'border-pink-400/40', glow: 'shadow-pink-400/20', dot: 'bg-pink-400', text: 'group-hover:text-pink-300' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <SectionLayout id="contact" title={null}>

      {/* ── Big heading ── */}
      <div className="text-center mb-20 relative">
        {/* carnival ticker tape dots */}
        <div className="flex justify-center gap-3 mb-6">
          {['bg-primary', 'bg-blue-400', 'bg-pink-400', 'bg-primary', 'bg-blue-400', 'bg-pink-400', 'bg-primary'].map((c, i) => (
            <span key={i} className={`w-2 h-2 rounded-full ${c} animate-bounce`} style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-300 to-primary">
            Let's Talk
          </span>
        </h2>
        <p className="mt-5 text-muted-foreground text-lg max-w-md mx-auto leading-relaxed">
          Open to new opportunities, collabs, or just a friendly hello. Pick your favourite way to reach me.
        </p>
      </div>

      {/* ── Carnival social cards ── */}
      <div className="flex flex-wrap justify-center gap-6 mb-20">
        {socials.map((social, i) => {
          const Icon = social.icon;
          const colors = carnivalColors[i % carnivalColors.length];
          /* not github*/
          if (social.name === 'GitHub') {
            return null;
          }
          return (

            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group relative flex flex-col items-center gap-4 px-10 py-8
                bg-gradient-to-br ${colors.bg}
                border ${colors.border}
                rounded-3xl
                shadow-xl ${colors.glow}
                backdrop-blur-sm
                transition-all duration-300
                hover:scale-105 hover:shadow-2xl hover:-translate-y-2
                min-w-[160px]
              `}
            >
              {/* hover ring */}
              <span className={`
                absolute inset-0 rounded-3xl border-2 ${colors.border} opacity-0
                group-hover:opacity-100 group-hover:scale-105
                transition-all duration-500
                pointer-events-none
              `} />
              {/* pulse dot badge */}
              <span className={`absolute top-3 right-3 w-2.5 h-2.5 rounded-full ${colors.dot} animate-pulse`} />
              <Icon size={36} className="text-foreground group-hover:scale-110 transition-transform duration-200" />
              <span className={`text-sm font-semibold tracking-widest uppercase text-muted-foreground transition-colors ${colors.text}`}>
                {social.name}
              </span>
            </a>
          );
        })}
      </div>

      {/* ── Divider ── */}
      {/*
      <div className="flex items-center gap-4 mb-16 max-w-2xl mx-auto">
        <div className="flex-1 h-px bg-border" />
        <span className="text-muted-foreground text-xs tracking-widest uppercase px-2">or drop a message</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* ── Contact form ── */}
      {/*
      
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto w-full space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              id="name"
              type="text"
              required
              tabIndex={1}
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-card border border-border rounded-2xl px-5 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              type="email"
              required
              tabIndex={2}
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-card border border-border rounded-2xl px-5 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
            rows={5}
            required
            tabIndex={3}
            placeholder="What's on your mind?"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-card border border-border rounded-2xl px-5 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 resize-none"
          />
        </div>
        <button
          type="submit"
          tabIndex={4}
          className={`w-full py-4 rounded-2xl font-semibold text-sm tracking-widest uppercase transition-all duration-300 ${
            sent
              ? 'bg-green-500/20 border border-green-500/50 text-green-400 cursor-default'
              : 'bg-primary text-primary-foreground hover:bg-primary/85 hover:scale-[1.01] active:scale-[0.99]'
          }`}
        >
          {sent ? '✓ Message sent!' : 'Send Message →'}
        </button>
      </form>
        */}

    </SectionLayout>
  );
}

