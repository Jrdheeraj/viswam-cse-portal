import { BookOpen, Building2, GraduationCap, Trophy, type LucideIcon } from "lucide-react";

const badges = ["NAAC A-Grade", "AICTE Approved", "Autonomous", "JNTUA Affiliated"];

type InfoCard = {
  icon: LucideIcon;
  title: string;
  desc: string;
  tint: string;
};

const infoCards: InfoCard[] = [
  { icon: GraduationCap, title: "4 Years Full-Time", desc: "B.Tech programme with 264 student intake", tint: "#c9a227" },
  { icon: Building2, title: "B-Block Campus", desc: "Dedicated building with state-of-the-art labs", tint: "#3b82f6" },
  { icon: BookOpen, title: "M.Tech Programme", desc: "Post Graduate with 20 student intake", tint: "#10b981" },
  { icon: Trophy, title: "Est. 2006", desc: "Nearly two decades of engineering excellence", tint: "#f59e0b" },
];

const AboutSection = () => (
  <section id="about" className="relative overflow-hidden py-20 bg-background dashed-bg">
    <div className="clay-orb clay-orb-a" aria-hidden="true" />
    <div className="clay-orb clay-orb-b" aria-hidden="true" />

    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <div className="clay-panel clay-fade-in px-6 py-10 md:px-10 text-center mb-12">
        <span className="section-badge shadow-sm">About the Department</span>
        <h2 className="section-heading mt-4">Why Computer Science & Engineering at Viswam?</h2>
        <p className="section-subtext mt-3">
          Established in 2006, shaping engineers with cutting-edge curriculum, expert faculty and real-world labs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
        <div className="clay-panel clay-fade-in p-6 md:p-8" style={{ animationDelay: "80ms" }}>
          <p className="text-[15px] leading-relaxed text-muted-foreground mb-6">
            The Department of Computer Science and Engineering was established in 2006 with the Under Graduate programme
            B.Tech in CSE. The Post Graduate Programme M.Tech Software Engineering was started in 2012. Both programmes are
            conducted under JNTUA, Anantapuramu, Andhra Pradesh. The department is equipped with well-trained faculty and modern
            computing facilities. Periodic workshops, seminars and industry collaborations strengthen the learning ecosystem.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {badges.map((badge, i) => (
              <span key={badge} className="clay-pill text-xs font-semibold text-navy px-3.5 py-1.5" style={{ animationDelay: `${i * 80}ms` }}>
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {infoCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="clay-card clay-fade-in p-5 group transition-all duration-500"
                style={{ animationDelay: `${160 + i * 90}ms` }}
              >
                <div className="clay-icon-wrap mb-4" style={{ background: `linear-gradient(145deg, ${card.tint}2b, #ffffff)` }}>
                  <Icon size={20} strokeWidth={2} style={{ color: card.tint }} />
                </div>
                <h4 className="font-semibold text-foreground text-2xl/none mb-2">{card.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
