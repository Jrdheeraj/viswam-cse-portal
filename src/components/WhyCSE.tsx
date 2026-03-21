import { BookOpen, Lightbulb, Rocket, Server, Trophy, Users, type LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
  bg: string;
};

const features: Feature[] = [
  {
    icon: BookOpen,
    title: "Industry-Ready Curriculum",
    desc: "Leading-edge courses with project-heavy labs aligned to real industry needs.",
    color: "#c9a227",
    bg: "rgba(201, 162, 39, 0.08)",
  },
  {
    icon: Users,
    title: "Expert Faculty Members",
    desc: "PhD-qualified mentors with strong academic depth and practical exposure.",
    color: "#3b82f6",
    bg: "rgba(59, 130, 246, 0.08)",
  },
  {
    icon: Server,
    title: "State-of-the-Art Labs",
    desc: "AI, IoT, Cloud, Networking and Programming labs for hands-on mastery.",
    color: "#10b981",
    bg: "rgba(16, 185, 129, 0.08)",
  },
  {
    icon: Lightbulb,
    title: "Research & Innovation",
    desc: "Faculty-guided research, publications and innovation-driven project culture.",
    color: "#f59e0b",
    bg: "rgba(245, 158, 11, 0.08)",
  },
  {
    icon: Trophy,
    title: "Placement Excellence",
    desc: "Strong recruiter network with focused training for consistent placements.",
    color: "#8b5cf6",
    bg: "rgba(139, 92, 246, 0.08)",
  },
  {
    icon: Rocket,
    title: "Beyond Academics",
    desc: "Hackathons, clubs and tech events that shape confident, future-ready engineers.",
    color: "#ec4899",
    bg: "rgba(236, 72, 153, 0.08)",
  },
];

const WhyCSE = () => (
  <section className="why-section relative overflow-hidden py-20 md:py-28">
    {/* Soft background blobs */}
    <div className="why-blob why-blob-a" aria-hidden="true" />
    <div className="why-blob why-blob-b" aria-hidden="true" />
    <div className="why-blob why-blob-c" aria-hidden="true" />

    <div className="max-w-6xl mx-auto px-4 relative z-10">
      {/* Section header */}
      <div className="text-center mb-14 scroll-reveal">
        <span className="section-badge shadow-sm">Why Choose Us</span>
        <h2 className="section-heading mt-4">The Challenges We Solve for You</h2>
        <p className="section-subtext mt-3 max-w-2xl mx-auto text-slate-500">
          Modern education demands modern solutions. Here is what we bring to every student.
        </p>
      </div>

      {/* Feature cards grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <article
              key={feature.title}
              className="why-card group scroll-reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Colored accent bar at top */}
              <div
                className="why-card-accent"
                style={{ background: `linear-gradient(90deg, ${feature.color}00, ${feature.color}80, ${feature.color}00)` }}
              />

              {/* Number indicator */}
              <span className="why-card-number" style={{ color: feature.color }}>
                <span className="why-card-dot" style={{ backgroundColor: feature.color }} />
                {(i + 1).toString().padStart(2, "0")}
              </span>

              {/* Animated icon */}
              <div className="why-card-icon-wrap" style={{ backgroundColor: feature.bg }}>
                <Icon
                  size={28}
                  strokeWidth={1.8}
                  style={{ color: feature.color }}
                  className="why-card-icon"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-foreground mt-5 mb-2 leading-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
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