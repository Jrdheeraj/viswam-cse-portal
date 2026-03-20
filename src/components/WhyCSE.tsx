import { BookOpen, Lightbulb, Rocket, Server, Trophy, Users, type LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
};

const features: Feature[] = [
  {
    icon: BookOpen,
    title: "Industry-Ready Curriculum",
    desc: "Leading-edge courses with project-heavy labs aligned to real industry needs.",
    color: "#c9a227",
  },
  {
    icon: Users,
    title: "Expert Faculty Members",
    desc: "PhD-qualified mentors with strong academic depth and practical exposure.",
    color: "#3b82f6",
  },
  {
    icon: Server,
    title: "State-of-the-Art Labs",
    desc: "AI, IoT, Cloud, Networking and Programming labs for hands-on mastery.",
    color: "#10b981",
  },
  {
    icon: Lightbulb,
    title: "Research & Innovation",
    desc: "Faculty-guided research, publications and innovation-driven project culture.",
    color: "#f59e0b",
  },
  {
    icon: Trophy,
    title: "Placement Excellence",
    desc: "Strong recruiter network with focused training for consistent placements.",
    color: "#8b5cf6",
  },
  {
    icon: Rocket,
    title: "Beyond Academics",
    desc: "Hackathons, clubs and tech events that shape confident, future-ready engineers.",
    color: "#ec4899",
  },
];

const WhyCSE = () => (
  <section className="why-creative-section relative overflow-hidden py-10 md:py-12 lg:min-h-screen lg:h-screen lg:py-0">
    <div className="why-aurora why-aurora-a" aria-hidden="true" />
    <div className="why-aurora why-aurora-b" aria-hidden="true" />
    <div className="why-aurora why-aurora-c" aria-hidden="true" />

    <div className="max-w-6xl mx-auto px-4 relative z-10 h-full flex flex-col items-center justify-center lg:justify-center lg:py-6">
      <div className="why-title-shell why-title-reveal text-center mb-6 md:mb-7 lg:mb-6 px-5 py-5 md:px-8 md:py-6 lg:py-4 w-full">
        <span className="section-badge shadow-sm">Why Choose Us</span>
        <h2 className="section-heading mt-3 lg:mt-2.5">The Challenges We Solve for You</h2>
        <p className="section-subtext why-subtext mt-2.5">
          Modern education demands modern solutions. Here is what we bring to every student.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <article
              key={feature.title}
              className="why-feature-pod why-card-reveal group text-center px-3.5 py-4 md:px-4 md:py-4 lg:px-3 lg:py-3"
              style={{ animationDelay: `${180 + i * 95}ms` }}
            >
              <span
                className="why-feature-ambient"
                style={{ background: `radial-gradient(circle at 30% 30%, ${feature.color}3d, transparent 72%)` }}
                aria-hidden="true"
              />
              <span
                className="why-feature-accent"
                style={{ background: `linear-gradient(90deg, ${feature.color}00 0%, ${feature.color}80 52%, ${feature.color}00 100%)` }}
                aria-hidden="true"
              />
              <span className="why-feature-index" style={{ color: feature.color }}>
                {(i + 1).toString().padStart(2, "0")}
              </span>

              <div className="why-icon-stage mx-auto mb-2.5 md:mb-3 lg:mb-2">
                <span
                  className="why-icon-pulse"
                  style={{ background: `radial-gradient(circle, ${feature.color}42 0%, ${feature.color}00 72%)` }}
                  aria-hidden="true"
                />
                <span className="why-icon-orbit why-icon-orbit-a" style={{ borderColor: `${feature.color}54` }} aria-hidden="true" />
                <span className="why-icon-orbit why-icon-orbit-b" style={{ borderColor: `${feature.color}3d` }} aria-hidden="true" />
                <span className="why-icon-dot" style={{ backgroundColor: feature.color, color: feature.color }} aria-hidden="true" />
                <span className="why-icon-core" style={{ background: `radial-gradient(circle at 35% 32%, #ffffff 0%, ${feature.color}24 75%, ${feature.color}2f 100%)` }}>
                  <Icon size={23} strokeWidth={1.95} style={{ color: feature.color }} className="why-icon-glyph" />
                </span>
              </div>

              <h3 className="why-feature-title text-[1.3rem] md:text-[1.42rem] lg:text-[1.3rem] font-semibold leading-[1.08] text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="why-feature-desc text-[13px] md:text-[13.5px] leading-[1.5] text-slate-700 group-hover:text-navy transition-colors duration-500">
                {feature.desc}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyCSE;