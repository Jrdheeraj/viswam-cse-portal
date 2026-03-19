import { GraduationCap, Lightbulb, Shield, Code, Brain } from "lucide-react";

const courseStrip = [
  { label: "Duration", value: "4 Years Full-Time" },
  { label: "Course Code", value: "05" },
  { label: "Location", value: "B-Block" },
  { label: "Intake", value: "B.Tech 264 | M.Tech 20" },
];

const peos = [
  {
    icon: GraduationCap,
    title: "Foundation & Field Readiness",
    desc: "Cultivate individuals with a robust base of expertise in CSE, ensuring they graduate well-equipped for the field.",
    visual: (
      <div className="h-full w-full bg-[#111] flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-[#1a1a1a] transition-colors duration-500">
        <div className="absolute inset-0 opacity-20 flex flex-wrap gap-4 p-4 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="text-white text-[10px] font-terminal animate-float-particle" style={{ animationDelay: `${i * 200}ms` }}>{i % 2 === 0 ? "0" : "1"}</span>
          ))}
        </div>
        <div className="relative z-10 p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
          <GraduationCap size={40} className="text-white group-hover:animate-bounce" strokeWidth={1.5} />
        </div>
        <div className="mt-4 text-white/40 text-[10px] font-terminal uppercase tracking-[3px]">Academic Core</div>
      </div>
    )
  },
  {
    icon: Lightbulb,
    title: "Innovation & Higher Studies",
    desc: "Analyze existing frameworks and devise inventive solutions aligned with the evolving landscape of computer engineering.",
    visual: (
      <div className="h-full w-full bg-[#f0f2f5] flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-[#e8eaee] transition-colors duration-500">
        <div className="absolute inset-x-0 top-12 flex justify-around opacity-30 pointer-events-none">
          {["AI", "IoT", "Cloud"].map((tag, i) => (
            <span key={tag} className="bg-navy text-white text-[8px] px-2 py-0.5 rounded-full animate-float-particle" style={{ animationDelay: `${i * 300}ms` }}>{tag}</span>
          ))}
        </div>
        <div className="relative z-10 p-6 bg-white rounded-2xl shadow-xl border border-gray-100 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
          <Lightbulb size={40} className="text-navy group-hover:animate-pulse" strokeWidth={1.5} />
        </div>
        <div className="mt-4 text-navy/40 text-[10px] font-bold uppercase tracking-[3px]">Research Path</div>
      </div>
    )
  },
  {
    icon: Shield,
    title: "Leadership & Ethics",
    desc: "Generate capability for leadership, teamwork, analytical thinking and rigid ethical principles for professionals.",
    visual: (
      <div className="h-full w-full bg-[#e8c875] flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-[#dfbd63] transition-colors duration-500">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-32 h-32 border-2 border-navy rounded-full animate-pulse-glow" />
          <div className="absolute w-44 h-44 border border-navy rounded-full animate-pulse-glow" style={{ animationDelay: '500ms' }} />
        </div>
        <div className="relative z-10 p-6 bg-white/40 rounded-2xl backdrop-blur-sm border border-white/20 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
          <Shield size={40} className="text-navy" strokeWidth={1.5} />
        </div>
        <div className="mt-4 text-navy/40 text-[10px] font-black uppercase tracking-[3px]">Ethics Framework</div>
      </div>
    )
  },
];

const psos = [
  {
    icon: Code,
    title: "Software Engineering Excellence",
    desc: "Administer software engineering principles for building high innovative software systems using modern tools.",
    visual: (
      <div className="h-full w-full bg-[#1a1a2e] flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-[#20203a] transition-colors duration-500">
        <div className="absolute inset-4 rounded-xl border border-gold/10 bg-black/40 font-terminal p-4 overflow-hidden pointer-events-none group-hover:opacity-60 transition-opacity">
          <div className="text-gold/30 text-[8px] animate-pulse"># building excellence...</div>
          <div className="text-gold/20 text-[8px] mt-1 ml-2">class Innovation { "{" }</div>
          <div className="text-gold/20 text-[8px] mt-1 ml-4">build() { "{ ... }" }</div>
          <div className="text-gold/20 text-[8px] mt-1 ml-2">{ "}" }</div>
        </div>
        <div className="relative z-10 p-6 bg-gold/10 rounded-2xl backdrop-blur-md border border-gold/20 group-hover:scale-110 transition-transform duration-500">
          <Code size={40} className="text-gold group-hover:animate-bounce" strokeWidth={1.5} />
        </div>
        <div className="mt-4 text-gold/40 text-[10px] font-bold uppercase tracking-[3px]">Code Mastery</div>
      </div>
    )
  },
  {
    icon: Brain,
    title: "Problem Solving Mastery",
    desc: "Inspect challenging problems across various domains with computational techniques and evaluate effectiveness.",
    visual: (
      <div className="h-full w-full bg-[#c4d4b0] flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-[#b8c9a3] transition-colors duration-500">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle cx="20" cy="20" r="1.5" fill="black" />
            <circle cx="80" cy="30" r="1.5" fill="black" />
            <circle cx="50" cy="70" r="1.5" fill="black" />
            <circle cx="30" cy="80" r="1.5" fill="black" />
            <line x1="20" y1="20" x2="80" y2="30" stroke="black" strokeWidth="0.2" className="animate-pulse" />
            <line x1="80" y1="30" x2="50" y2="70" stroke="black" strokeWidth="0.2" className="animate-pulse" style={{ animationDelay: '300ms' }} />
            <line x1="50" y1="70" x2="30" y2="80" stroke="black" strokeWidth="0.2" className="animate-pulse" style={{ animationDelay: '600ms' }} />
            <line x1="30" y1="80" x2="20" y2="20" stroke="black" strokeWidth="0.2" className="animate-pulse" style={{ animationDelay: '900ms' }} />
          </svg>
        </div>
        <div className="relative z-10 p-6 bg-white/50 rounded-2xl backdrop-blur-sm border border-white/20 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
          <Brain size={40} className="text-navy" strokeWidth={1.5} />
        </div>
        <div className="mt-4 text-navy/40 text-[10px] font-black uppercase tracking-[3px]">Algorithmic Mind</div>
      </div>
    )
  },
];

const ObjectiveCard = ({ item }: { item: typeof peos[0] | typeof psos[0] }) => (
  <div className="group rounded-[2.5rem] bg-white border border-gray-100 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
    {/* Top Visual Area */}
    <div className="h-48 shrink-0">
      {item.visual}
    </div>

    {/* Content Area */}
    <div className="p-8 flex flex-col flex-grow">
      <h4 className="text-xl font-black text-navy leading-tight tracking-tight group-hover:text-gold transition-colors duration-300">
        {item.title}
      </h4>
      <p className="text-[15px] text-muted-foreground mt-4 leading-relaxed line-clamp-3">
        {item.desc}
      </p>
    </div>
  </div>
);

const Academics = () => (
  <section id="academics" className="py-24 bg-card relative overflow-hidden">
    {/* Decorative background element */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -mr-48 -mt-48" />

    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <span className="section-badge px-6 py-2 bg-gold text-navy font-black rounded-full uppercase tracking-widest text-[10px]">Framework</span>
        <h2 className="section-heading mt-6 tracking-tight">Programme Education Objectives</h2>
        <p className="section-subtext mt-4 opacity-80">
          Our academic framework builds well-rounded engineers ready for industry leadership, innovation and complex problem-solving.
        </p>
      </div>

      {/* Course strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 bg-navy rounded-[2.5rem] overflow-hidden mb-20 shadow-xl border border-white/10">
        {courseStrip.map((s, i) => (
          <div key={s.label} className={`text-center py-8 px-4 border-white/5 lg:border-r last:border-r-0 ${i < 2 ? 'border-b lg:border-b-0' : ''}`}>
            <div className="text-gold font-black text-lg tracking-tight">{s.value}</div>
            <div className="text-white/40 text-[10px] uppercase font-bold tracking-[2px] mt-2 italic">{s.label}</div>
          </div>
        ))}
      </div>

      {/* PEOs Section */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px bg-gray-200 flex-grow" />
          <h3 className="text-[14px] font-black uppercase tracking-[4px] text-black">Programme Education Objectives (PEOs)</h3>
          <div className="h-px bg-gray-200 flex-grow" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {peos.map((item) => (
            <ObjectiveCard key={item.title} item={item} />
          ))}
        </div>
      </div>

      {/* PSOs Section */}
      <div>
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px bg-gray-200 flex-grow" />
          <h3 className="text-[14px] font-black uppercase tracking-[4px] text-black">Specific Outcomes (PSOs)</h3>
          <div className="h-px bg-gray-200 flex-grow" />
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {psos.map((item) => (
            <ObjectiveCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </div>
  </section>
);


export default Academics;
