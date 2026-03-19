import { useRef, useState, useEffect, useCallback } from "react";

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

// Duplicate for seamless infinite loop
const duplicatedLabs = [...labs, ...labs];

const Facilities = () => {
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

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

      {/* Horizontal scrolling marquee */}
      <div
        className="relative z-10 overflow-hidden cursor-pointer"
        onClick={() => setPaused((p) => !p)}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

        <div
          className="flex gap-6 px-6"
          style={{
            animation: "scroll-marquee 30s linear infinite",
            animationPlayState: paused ? "paused" : "running",
            width: "max-content",
          }}
        >
          {duplicatedLabs.map((lab, i) => (
            <div
              key={`${lab.title}-${i}`}
              className="group rounded-[2rem] border border-gray-200 bg-white p-4 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 hover:border-gold/30 flex-shrink-0 w-[350px]"
            >
              <div className="overflow-hidden rounded-2xl h-52 relative">
                <img
                  src={lab.image}
                  alt={lab.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors duration-500" />
              </div>
              <div className="px-2 pt-5 pb-2">
                <h3 className="text-xl font-bold text-foreground group-hover:text-navy transition-colors">{lab.title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{lab.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
