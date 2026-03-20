import { useRef, useCallback, useEffect, useState } from "react";

const labs = [
  {
    image: "/programming-lab.png",
    title: "Programming Lab",
    desc: "High-end desktops and modern IDEs for intensive coding practice, software development and project work.",
  },
  {
    image: "/ai-lab.png",
    title: "Artificial Intelligence Lab",
    desc: "GPU servers and ML frameworks including TensorFlow and PyTorch for advanced AI research and deep learning.",
  },
  {
    image: "/iot-lab.png",
    title: "IoT Innovation Lab",
    desc: "Microcontrollers, sensors and embedded systems for hands-on Internet of Things projects and prototyping.",
  },
  {
    image: "/networking-lab.png",
    title: "Networking Lab",
    desc: "Routers, switches, firewalls and network simulation tools for designing and securing enterprise networks.",
  },
  {
    image: "/cloud-lab.png",
    title: "Cloud Computing Lab",
    desc: "Direct access to AWS, Azure and big-data frameworks for cloud architecture and real-time deployment training.",
  },
];

const Facilities = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Cursor glow spotlight effect
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current || !glowRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glowRef.current.style.opacity = "1";
    glowRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(201,162,39,0.07), transparent 40%)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (glowRef.current) {
      glowRef.current.style.opacity = "0";
    }
  }, []);

  const updateActiveIndex = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>("[data-lab-card='true']");
    if (!cards.length) return;

    const viewportCenter = container.scrollLeft + container.clientWidth / 2;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(cardCenter - viewportCenter);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setActiveIndex(nearestIndex);
  }, []);

  const scrollToLab = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>("[data-lab-card='true']");
    cards[index]?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onScroll = () => updateActiveIndex();
    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateActiveIndex();

    return () => {
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [updateActiveIndex]);

  return (
    <section
      id="facilities"
      className="py-20 bg-background relative overflow-hidden"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Cursor glow overlay */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
        style={{ opacity: 0 }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <span className="section-badge">Our Facilities</span>
          <h2 className="section-heading mt-4">State-of-the-Art Laboratories</h2>
          <p className="section-subtext mt-3">
            Equipped with cutting-edge infrastructure to prepare students for real-world tech challenges.
          </p>
        </div>
      </div>

      {/* Manual horizontal scroll */}
      <div className="relative z-10">
        <div
          ref={scrollRef}
          className="hide-scrollbar overflow-x-auto overflow-y-hidden pb-4"
          aria-label="Laboratory facilities"
        >
          <div className="flex w-max snap-x snap-mandatory gap-6 px-4 md:px-6">
            {labs.map((lab) => (
              <div
                key={lab.title}
                data-lab-card="true"
                className="group w-[350px] flex-shrink-0 snap-start rounded-[2rem] border border-gray-200 bg-white p-4 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 hover:border-gold/30"
              >
                <div className="relative h-52 overflow-hidden rounded-2xl">
                  <img
                    src={lab.image}
                    alt={lab.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/10" />
                </div>
                <div className="px-2 pt-5 pb-2">
                  <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-navy">{lab.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{lab.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {labs.map((lab, index) => (
            <button
              key={`${lab.title}-dot`}
              type="button"
              onClick={() => scrollToLab(index)}
              aria-label={`Go to ${lab.title}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "h-2.5 w-8 bg-navy"
                  : "h-2.5 w-2.5 bg-navy/30 hover:bg-navy/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
