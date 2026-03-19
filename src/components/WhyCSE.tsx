import { BookOpen, Users, Server, Lightbulb, Trophy, Rocket } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Industry-Ready Curriculum",
    desc: "Courses on leading-edge technologies with hands-on innovative laboratory sessions aligned with industry needs.",
    color: "#c9a227",
  },
  {
    icon: Users,
    title: "Expert Faculty Members",
    desc: "Experienced professors with PhD qualifications and deep industry backgrounds mentoring every student.",
    color: "#3b82f6",
  },
  {
    icon: Server,
    title: "State-of-the-Art Labs",
    desc: "AI Lab, IoT Lab, Cloud Lab, Networking Lab and Programming Lab — fully equipped for hands-on learning.",
    color: "#10b981",
  },
  {
    icon: Lightbulb,
    title: "Research & Innovation",
    desc: "Active research culture with faculty-guided projects, paper publications and innovation-driven learning.",
    color: "#f59e0b",
  },
  {
    icon: Trophy,
    title: "Placement Excellence",
    desc: "Consistent placement records with top recruiters and dedicated training programs for career readiness.",
    color: "#8b5cf6",
  },
  {
    icon: Rocket,
    title: "Beyond Academics",
    desc: "Hackathons, coding clubs, tech fests and industry visits that shape well-rounded engineers and leaders.",
    color: "#ec4899",
  },
];

const WhyCSE = () => (
  <section className="py-20 bg-background">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16 scroll-reveal">
        <span className="section-badge">Why Choose Us</span>
        <h2 className="section-heading mt-4">The Challenges We Solve for You</h2>
        <p className="section-subtext mt-3">
          Modern education demands modern solutions. Here is what we bring to every student.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-x-10 gap-y-14">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div key={f.title} className="flex flex-col items-center text-center group transition-all duration-300">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:translate-y-[-8px] shadow-sm group-hover:shadow-md"
                style={{ backgroundColor: `${f.color}15` }}
              >
                <Icon size={28} strokeWidth={1.8} style={{ color: f.color }} className="transition-all duration-300 group-hover:animate-bounce" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-navy transition-colors">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs group-hover:text-foreground transition-colors">
                {f.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyCSE;
