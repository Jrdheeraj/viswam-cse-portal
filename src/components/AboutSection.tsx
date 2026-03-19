const badges = ["NAAC A-Grade", "AICTE Approved", "Autonomous", "JNTUA Affiliated"];
const infoCards = [
  { icon: "🎓", title: "4 Years Full-Time", desc: "B.Tech programme with 264 student intake" },
  { icon: "🏢", title: "B-Block Campus", desc: "Dedicated building with state-of-the-art labs" },
  { icon: "📚", title: "M.Tech Programme", desc: "Post Graduate with 20 student intake" },
  { icon: "🏆", title: "Est. 2006", desc: "Nearly two decades of engineering excellence" },
];

const AboutSection = () => (
  <section id="about" className="py-20 bg-background dashed-bg">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-12 scroll-reveal">
        <span className="section-badge">About the Department</span>
        <h2 className="section-heading mt-4">Why Computer Science & Engineering at Viswam?</h2>
        <p className="section-subtext mt-3">Established in 2006, shaping engineers with cutting-edge curriculum, expert faculty and real-world labs.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="scroll-reveal">
          <p className="text-[15px] leading-relaxed text-muted-foreground mb-6">
            The Department of Computer Science and Engineering was established in 2006 with the Under Graduate programme B.Tech in CSE. The Post Graduate Programme M.Tech Software Engineering was started in 2012. Both programmes are conducted under JNTUA, Anantapuramu, Andhra Pradesh. The department is equipped with well-trained faculty and modern computing facilities. Periodic workshops, seminars and industry collaborations strengthen the learning ecosystem.
          </p>
          <div className="flex flex-wrap gap-2">
            {badges.map((b) => (
              <span key={b} className="text-xs font-semibold border border-navy text-navy rounded-full px-3 py-1">{b}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {infoCards.map((c) => (
            <div key={c.title} className="cse-card p-5 scroll-reveal">
              <div className="text-2xl mb-2">{c.icon}</div>
              <h4 className="font-semibold text-foreground text-sm">{c.title}</h4>
              <p className="text-xs text-muted-foreground mt-1">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
