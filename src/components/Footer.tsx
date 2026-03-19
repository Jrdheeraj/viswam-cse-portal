const quickLinks = [
  { text: "Home", href: "#hero" },
  { text: "About", href: "#about" },
  { text: "Academics", href: "#academics" },
  { text: "Facilities", href: "#facilities" },
  { text: "Faculty", href: "#faculty" },
  { text: "Activities", href: "#activities" },
  { text: "Placements", href: "#placements" },
  { text: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="bg-background border-t border-border relative overflow-hidden">
    {/* Watermark */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
      <span className="text-[200px] md:text-[260px] font-black text-navy/[0.04] leading-none">CSE</span>
    </div>

    <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="font-terminal text-lg font-bold mb-3">
            <span className="text-gold">{"{ "}</span><span className="text-navy">CSE</span><span className="text-gold">{" }"}</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Department of Computer Science & Engineering, Viswam Engineering College, Madanapalle, Andhra Pradesh
          </p>
          <p className="text-xs text-muted-foreground italic mt-2">Shaping Tomorrow's Engineers & Leaders</p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground text-sm mb-4">Quick Links</h4>
          <div className="space-y-2">
            {quickLinks.map((l) => (
              <a key={l.href} href={l.href} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">{l.text}</a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-foreground text-sm mb-4">Contact</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>+91 9505021075</p>
            <p>principal@viswam.ac.in</p>
            <p>office@viswam.ac.in</p>
            <p>B-Block, Angallu, Madanapalle, AP</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-foreground text-sm mb-4">Connect & Accreditations</h4>
          <div className="space-y-2 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground block">Instagram ↗</a>
            <a href="#" className="text-muted-foreground hover:text-foreground block">LinkedIn ↗</a>
            <a href="#" className="text-muted-foreground hover:text-foreground block">YouTube ↗</a>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {["NAAC A-Grade", "AICTE", "Autonomous", "JNTUA"].map((p) => (
              <span key={p} className="text-[10px] border border-navy text-navy rounded-full px-2 py-0.5">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
        <p>© 2025 Department of CSE, Viswam Engineering College. All Rights Reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-foreground">Privacy Policy</a>
          <a href="#" className="hover:text-foreground">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
