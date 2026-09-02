import { navigation } from '../data';

export default function Navigation() {
  return (
    <nav className="sticky top-0 w-full bg-background/80 backdrop-blur z-50 border-b border-border">
      <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-center md:justify-end gap-6 md:gap-8">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={`#${item.id}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              title={item.name}
            >
              <Icon size={20} className="group-hover:scale-110 transition-transform" />
              <span className="hidden md:block font-medium text-sm">
                {item.name}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
