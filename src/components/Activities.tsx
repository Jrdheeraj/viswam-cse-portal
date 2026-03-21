import { Cpu, Code2, BookOpen, Handshake, Users, Rocket } from "lucide-react";

const cards = [
  {
    icon: Cpu,
    iconLabel: "AI  IoT  CLOUD  CYBER",
    bg: "#14203a",
    badge: { text: "Learning", bg: "#FFF3CD", color: "#856404" },
    title: "Workshops & Seminars",
    desc: "Hands-on sessions on AI, IoT, Cybersecurity, Cloud Computing and Data Science with industry experts.",
  },
  {
    icon: Code2,
    iconLabel: "{ HACK }  CODE  WIN",
    bg: "#14203a",
    badge: { text: "Competition", bg: "#D1ECF1", color: "#0C5460" },
    title: "Hackathons & Coding",
    desc: "Innovation and problem-solving through coding contests, hackathons and competitive programming events.",
  },
  {
    icon: BookOpen,
    iconLabel: "IEEE  ACM  SCOPUS",
    bg: "#14203a",
    badge: { text: "Research", bg: "#D4EDDA", color: "#155724" },
    title: "Research & Publications",
    desc: "Faculty and students publishing in IEEE, Springer, ACM and Scopus-indexed international journals.",
  },
  {
    icon: Handshake,
    iconLabel: "MoU  INTERNSHIP  COLLAB",
    bg: "#14203a",
    badge: { text: "Industry", bg: "#F8D7DA", color: "#721C24" },
    title: "Industry Collaboration",
    desc: "MoUs with leading IT companies for internships, industrial training and joint research projects.",
  },
  {
    icon: Users,
    iconLabel: "IEEE  CSI  ISTE  ACM",
    bg: "#14203a",
    badge: { text: "Community", bg: "#E2D9F3", color: "#432874" },
    title: "Student Clubs",
    desc: "Active IEEE, CSI, ISTE and ACM student chapters organizing technical, cultural and leadership events.",
  },
  {
    icon: Rocket,
    iconLabel: "STARTUP  IDEA  INCUBATE",
    bg: "#14203a",
    badge: { text: "Innovation", bg: "#FFD700", color: "#1B2A4A" },
    title: "Innovation & Start-ups",
    desc: "Incubation support for entrepreneurial ventures and interdisciplinary innovation projects from students.",
  },
];

const Activities = () => (
  <section id="activities" className="py-20 bg-card">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <span className="section-badge">Department Activities</span>
        <h2 className="section-heading mt-4">Beyond the Classroom</h2>
        <p className="section-subtext mt-3">
          A vibrant ecosystem of learning, innovation and collaboration that prepares students for the real world.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c, index) => {
          const Icon = c.icon;
          return (
            <div
              key={c.title}
              className="group rounded-3xl border border-gray-200 bg-white p-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
            >
              {/* Visual box at top */}
              <div
                className="rounded-2xl h-44 flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-500"
                style={{ backgroundColor: c.bg }}
              >
                {/* Specialized Background Animations */}
                {c.title === "Workshops & Seminars" && (
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={i} className="absolute w-1 h-1 bg-white rounded-full animate-pulse-glow" style={{ 
                        top: `${Math.random() * 100}%`, 
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${i * 300}ms`
                      }} />
                    ))}
                  </div>
                )}

                {c.title === "Hackathons & Coding" && (
                  <div className="absolute inset-x-0 bottom-0 top-0 opacity-10 flex flex-wrap gap-x-6 gap-y-4 p-4 pointer-events-none overflow-hidden">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <span key={i} className="text-white text-[10px] font-terminal animate-float-particle" style={{ animationDelay: `${i * 200}ms` }}>{i % 2 === 0 ? "0" : "1"}</span>
                    ))}
                  </div>
                )}

                {c.title === "Research & Publications" && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                    <div className="w-40 h-40 border border-white rounded-full animate-pulse-glow" />
                    <div className="absolute w-56 h-56 border border-white rounded-full animate-pulse-glow" style={{ animationDelay: '500ms' }} />
                  </div>
                )}

                {c.title === "Industry Collaboration" && (
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <svg className="w-full h-full">
                      <line x1="0" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="0.5" className="animate-pulse" />
                      <line x1="100%" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="0.5" className="animate-pulse" style={{ animationDelay: '1s' }} />
                    </svg>
                  </div>
                )}

                {c.title === "Student Clubs" && (
                   <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <div className="w-32 h-32 bg-white/5 rounded-full animate-pulse-glow" />
                   </div>
                )}

                {c.title === "Innovation & Start-ups" && (
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div key={i} className="absolute w-0.5 h-0.5 bg-white rounded-full animate-float-particle" style={{ 
                        top: `${Math.random() * 100}%`, 
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${i * 150}ms`
                      }} />
                    ))}
                  </div>
                )}

                {/* Floating icon */}
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] relative z-10">
                  <Icon size={30} strokeWidth={1.5} className="text-white group-hover:animate-bounce" />
                </div>
                {/* Label text */}
                <span className="font-terminal text-[11px] tracking-[0.25em] text-white/60 uppercase relative z-10 group-hover:text-white transition-colors duration-300">
                  {c.iconLabel}
                </span>
                {/* Subtle outer glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, transparent 70%)`,
                  }}
                />
              </div>

              {/* Badge + text below */}
              <div className="px-3 pt-4 pb-3">
                <span
                  className="inline-block text-[11px] font-semibold px-3 py-1 rounded-full"
                  style={{ background: c.badge.bg, color: c.badge.color }}
                >
                  {c.badge.text}
                </span>
                <h3 className="text-lg font-bold text-foreground mt-3">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{c.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Activities;
