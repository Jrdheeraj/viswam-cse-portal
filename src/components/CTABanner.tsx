const leftItems = ["Cloud & DevOps", "UI/UX", "Data Science", "Web Development", "AI/ML", "IoT", "Cybersecurity", "Blockchain"];
const rightItems = ["Research", "Innovation", "Leadership", "Problem Solving", "Teamwork", "Entrepreneurship", "Networking", "Ethics"];

const CTABanner = () => (
  <section className="py-10 bg-background">
    <div className="max-w-6xl mx-auto px-4">
      <div className="bg-navy rounded-3xl px-6 py-16 text-center scroll-reveal">
        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
          You've Reached the End — Now Shape Your Future in Tech!
        </h2>
        <p className="text-white/60 mt-4 text-base max-w-xl mx-auto">
          Join the CSE Department at Viswam Engineering College and become tomorrow's engineer and innovator.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a href="#contact" className="bg-gold text-navy font-bold px-8 py-3 rounded-full hover:brightness-90 transition-all">
            Apply for Admission
          </a>
          <button className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-navy transition-all">
            Download Brochure
          </button>
        </div>

        <div className="bg-white/5 rounded-2xl mt-12 py-6 overflow-hidden">
          <p className="text-white/50 text-sm mb-4">Trust us we are good at this :)</p>
          <div className="flex items-center overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...leftItems, ...leftItems].map((t, i) => (
                <span key={`l${i}`} className="text-white/40 text-sm mx-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30" />{t}
                </span>
              ))}
              <span className="text-gold font-terminal font-bold text-sm mx-6">{"{ CSE }"}</span>
              {[...rightItems, ...rightItems].map((t, i) => (
                <span key={`r${i}`} className="text-white/40 text-sm mx-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />{t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTABanner;
