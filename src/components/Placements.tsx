import { Trophy } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const tickerItems = [
  "💼 Highest Package: ₹10 LPA",
  "🌍 Recruiters: Infosys · Accenture · Tech Mahindra · Wipro · Hexaware · Genpact · TCS",
  "🎯 235 Offers in 2023–24",
  "📈 60%+ Placement Rate in 2023",
  "🧠 Internships: Fincare Bank · Delphi TVS · MRV Technologies",
  "🚀 Training in AI · Robotics · Cyber Security",
  "📅 2025 Placement Drive — Register Now!",
];

const companies = ["Infosys", "Accenture", "Wipro", "TCS", "Tech Mahindra", "Hexaware", "Genpact"];

const StatCard = ({ target, suffix = "", label }: { target: number; suffix?: string; label: string }) => {
  const { ref, value } = useCountUp(target);
  return (
    <div ref={ref} className="text-center py-8 px-4 transition-all duration-300 hover:bg-navy/5">
      <div className="text-3xl font-bold text-navy">{value}{suffix}</div>
      <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-2 font-medium">{label}</div>
    </div>
  );
};

const Placements = () => (
  <section id="placements" className="py-24 bg-background relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <span className="section-badge">Placements</span>
        <h2 className="section-heading mt-4">Our Placement Record</h2>
        <p className="section-subtext mt-3">Connecting graduates with India's top tech companies.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1: Offers */}
        <div className="group rounded-[2.5rem] bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
          <div className="h-48 bg-[#14203a] flex flex-col items-center justify-center relative overflow-hidden">
            <span className="text-6xl font-black text-gold/90 group-hover:scale-110 transition-transform duration-500">235</span>
            <div className="absolute inset-x-0 bottom-4 flex flex-wrap justify-center gap-1.5 px-4 opacity-60 group-hover:opacity-100 transition-opacity">
              {["Infosys", "Accenture", "Wipro", "TCS"].map((t, i) => (
                <span key={t} className={`text-[10px] bg-white/10 text-white/80 px-2.5 py-0.5 rounded-full backdrop-blur-sm group-hover:animate-bounce`} style={{ animationDelay: `${i * 100}ms` }}>{t}</span>
              ))}
            </div>
          </div>
          <div className="p-8">
            <h3 className="text-xl font-bold text-foreground">235 Offers</h3>
            <p className="text-[11px] font-bold text-gold uppercase tracking-[2px] mt-1">Batch 2023–24</p>
            <p className="text-[15px] text-muted-foreground mt-4 leading-relaxed">
              Connecting graduates with top opportunities across India's leading technology companies.
            </p>
          </div>
        </div>

        {/* Card 2: Recruiters */}
        <div className="group rounded-[2.5rem] bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
          <div className="h-48 bg-navy flex flex-col items-center justify-center relative overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap [animation-duration:80s] group-hover:[animation-duration:60s] transition-all duration-500">
              {[...companies, ...companies].map((t, i) => (
                <span key={i} className="text-white/40 text-sm mx-6 font-terminal font-bold uppercase tracking-widest group-hover:text-gold/80 transition-colors">{t}</span>
              ))}
            </div>
            <div className="mt-4 flex animate-marquee-reverse whitespace-nowrap [animation-duration:100s] group-hover:[animation-duration:80s] transition-all duration-500">
              {[...companies, ...companies].reverse().map((t, i) => (
                <span key={i} className="text-white/20 text-[10px] mx-4 font-terminal uppercase tracking-[3px]">{t}</span>
              ))}
            </div>
          </div>
          <div className="p-8">
            <h3 className="text-xl font-bold text-foreground">7+ Top Recruiters</h3>
            <p className="text-[11px] font-bold text-gold uppercase tracking-[2px] mt-1">on campus</p>
            <p className="text-[15px] text-muted-foreground mt-4 leading-relaxed">
              Bringing seasoned industry partners to every placement season for diverse career paths.
            </p>
          </div>
        </div>

        {/* Card 3: Package */}
        <div className="group rounded-[2.5rem] bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
          <div className="h-48 bg-[#fdfdfd] flex flex-col items-center justify-center relative overflow-hidden border-b border-gray-50">
            <div className="relative w-24 h-24 mb-2">
              <div className="absolute inset-0 bg-gold/10 rounded-2xl animate-pulse-glow group-hover:bg-gold/20 transition-all border border-gold/5" />
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Trophy size={48} className="text-gold" strokeWidth={1.5} />
              </div>
            </div>
            <span className="text-[10px] text-gold-dark font-black uppercase tracking-[3px] mt-2">Highest Package</span>
          </div>
          <div className="p-8">
            <h3 className="text-xl font-bold text-foreground group-hover:text-navy transition-colors">₹10 LPA Reached</h3>
            <p className="text-[11px] font-bold text-green-600 uppercase tracking-[2px] mt-1">Top Career Growth</p>
            <p className="text-[15px] text-muted-foreground mt-4 leading-relaxed">
              Empowering students to reach their highest career potential and top-tier earning power consistently.
            </p>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-20 bg-white shadow-xl rounded-3xl border border-gray-100 overflow-hidden">
        <StatCard target={235} label="Offers 2023-24" />
        <div className="text-center py-8 px-4 border-l border-gray-50 transition-all duration-300 hover:bg-navy/5">
          <div className="text-3xl font-bold text-navy">₹10 LPA</div>
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-2 font-medium">Highest Package</div>
        </div>
        <StatCard target={60} suffix="%+" label="Placement Rate" />
        <StatCard target={100} suffix="+" label="Recruiting Companies" />
      </div>

      {/* Placement Ticker */}
      <div className="bg-navy rounded-2xl overflow-hidden mt-12 h-14 flex items-center shadow-2xl">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="text-gold text-sm font-bold mx-8 flex items-center tracking-wide">
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-white/20 ml-8" />
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Placements;
