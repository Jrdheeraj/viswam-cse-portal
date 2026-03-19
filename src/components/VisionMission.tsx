import { Rocket, Cpu, ShieldCheck, Target } from "lucide-react";

const missions = [
  { 
    icon: Target,
    badge: "Industry Ready", 
    text: "Provide the environment to become industry ready Professionals, Scientists and Industrialists by offering courses on leading edge technology and innovative laboratory courses.",
    color: "#48bb78",
    bg: "rgba(72, 187, 120, 0.1)"
  },
  { 
    icon: Cpu,
    badge: "Experiential Learning", 
    text: "Impart high quality experiential learning to get expertise in modern software tools and to cater to the real time requirements of the industry.",
    color: "#4299e1",
    bg: "rgba(66, 153, 225, 0.1)"
  },
  { 
    icon: ShieldCheck,
    badge: "Ethics & Skills", 
    text: "Inculcate problem solving and team building skills and promote lifelong learning with a sense of societal and ethical responsibilities.",
    color: "#ed8936",
    bg: "rgba(237, 137, 54, 0.1)"
  },
];

const VisionMission = () => (
  <section id="vision" className="py-24 bg-background relative overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-navy/5 rounded-full blur-3xl opacity-50" />
    </div>

    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <span className="section-badge">Vision & Mission</span>
        <h2 className="section-heading mt-4">Our Core Purpose</h2>
        <p className="section-subtext mt-3">The guiding principles that drive everything we do at CSE Viswam.</p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Our Vision Card - Left Column */}
        <div className="lg:col-span-5">
          <div className="group relative rounded-[2rem] bg-gradient-to-br from-navy to-navy-deep p-8 md:p-10 shadow-2xl overflow-hidden border border-white/10 hover:shadow-gold/10 transition-all duration-500">
            {/* Pulsing Rocket Icon in Glass Box */}
            <div className="relative w-24 h-24 mb-8">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl animate-pulse-glow" />
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12">
                <Rocket size={48} className="text-gold" strokeWidth={1.5} />
              </div>
            </div>

            <span className="inline-block text-[11px] uppercase tracking-[3px] font-bold text-gold/60 mb-4">Our Vision</span>
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-white/90 italic">
              To envision a Computer Science and Engineering department that cultivates a culture of curiosity, creativity, and excellence, where students and faculty thrive in an inclusive and supportive environment.
            </p>
            
            {/* Abstract Background Decoration */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-2xl group-hover:bg-gold/20 transition-all" />
          </div>
        </div>

        {/* Missions - Right Column */}
        <div className="lg:col-span-7 grid gap-6">
          {missions.map((m, i) => {
            const Icon = m.icon;
            return (
              <div 
                key={m.badge} 
                className="group cse-card p-6 flex gap-6 items-start hover:border-gold/50 hover:bg-white/40 transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-all duration-300"
                  style={{ backgroundColor: m.bg }}
                >
                  <Icon size={28} style={{ color: m.color }} strokeWidth={1.5} className="group-hover:animate-bounce" />
                </div>
                
                <div>
                  <span 
                    className="inline-block text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3"
                    style={{ backgroundColor: `${m.color}20`, color: m.color }}
                  >
                    {m.badge}
                  </span>
                  <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {m.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default VisionMission;
