import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { text: "Home", href: "#hero" },
  { text: "About", href: "#about" },
  { text: "Academics", href: "#academics" },
  { text: "Facilities", href: "#facilities" },
  { text: "Faculty", href: "#faculty" },
  { text: "Activities", href: "#activities" },
  { text: "Placements", href: "#placements" },
  { text: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#hero" className="font-terminal text-xl font-bold">
          <span className="text-gold">{"{ "}</span>
          <span className="text-navy">CSE</span>
          <span className="text-gold">{" }"}</span>
        </a>

        <div className="hidden md:flex items-center bg-secondary border border-border rounded-full px-2 py-1 gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
            >
              {l.text}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1 bg-navy text-gold font-bold text-sm rounded-full px-5 py-2.5 hover:bg-gold hover:text-navy transition-colors"
        >
          Apply Now ↗
        </a>

        <button className="md:hidden p-2 text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="absolute top-[65px] left-0 right-0 bg-card border-b border-border shadow-2xl px-4 py-6 flex flex-col gap-3 md:hidden z-50">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-sm font-medium text-foreground bg-secondary/50 rounded-lg hover:bg-secondary active:scale-[0.98] transition-all"
            >
              {l.text}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 bg-navy text-gold text-center font-bold text-sm rounded-lg px-5 py-4 active:scale-[0.98] transition-transform"
          >
            Apply Now ↗
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
