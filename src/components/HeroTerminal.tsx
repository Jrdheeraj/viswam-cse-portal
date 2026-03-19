import { useEffect, useRef, useState } from "react";

const CODE_COLORS = ["bg-gold", "bg-terminal-cyan", "bg-terminal-pink", "bg-terminal-blue", "bg-terminal-green"];
const CODE_WIDTHS = [120, 90, 150, 70, 110, 130, 80, 140, 100, 60, 135, 95, 115, 85, 125];
const PROGRESS_BARS = [
  { label: "Neural", target: 94 },
  { label: "Memory", target: 87 },
  { label: "Compile", target: 100 },
  { label: "Output", target: 76 },
];

const HeroTerminal = () => {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState([0, 0, 0, 0]);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    const run = () => {
      setStep(0);
      setProgress([0, 0, 0, 0]);
      let s = 0;
      intervalRef.current = setInterval(() => {
        s++;
        setStep(s);
        setProgress(PROGRESS_BARS.map((p) => Math.min(p.target, Math.floor((s / 15) * p.target))));
        if (s >= 15) {
          clearInterval(intervalRef.current);
          setTimeout(run, 200);
        }
      }, 175);
    };
    run();
    return () => clearInterval(intervalRef.current);
  }, []);

  const pct = Math.min(100, Math.floor((step / 15) * 100));

  return (
    <section id="hero" className="relative bg-card overflow-hidden">
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-gold/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-particle ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 py-4 md:py-6 relative z-10">
        {/* Terminal Card Wrapper */}
        <div className="rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-border/60 bg-card overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          {/* Department header block */}
          <div className="bg-terminal-black px-6 py-5 text-center border-b border-[#1e1e1e]">
            <h1 className="font-terminal text-gold text-xl md:text-2xl font-bold tracking-widest">
              {"{ "} COMPUTER SCIENCE & ENGINEERING {" }"}
            </h1>
            <p className="text-muted-foreground text-xs mt-1 font-terminal">
              Viswam Engineering College, Madanapalle
            </p>
          </div>

          {/* Terminal window */}
          <div className="bg-card">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-secondary border-b border-border">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-xs font-terminal text-muted-foreground flex-1 text-center">
              bash — intelligence.py — CSE_CORE — 80×24
            </span>
            <span className="flex items-center gap-1 text-[10px] text-terminal-green font-bold uppercase">
              <span className="w-2 h-2 rounded-full bg-terminal-green" style={{ animation: "pulse-glow 1.5s infinite" }} />
              LIVE
            </span>
          </div>

          {/* Terminal body */}
          <div className="flex flex-col md:flex-row bg-terminal-black">
            {/* Left: code blocks */}
            <div className="flex-1 p-4 md:p-6 lg:p-8 border-b md:border-b-0 md:border-r border-[#1e1e1e] font-terminal text-[13px] leading-relaxed relative min-h-[340px]">
              {Array.from({ length: 14 }).map((_, i) => {
                const stepThreshold = i + 1;
                const isVisible = step >= stepThreshold;
                
                const getLineClasses = (visible: boolean) => 
                  `h-3 rounded-sm transition-all duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`;

                let lineContent = null;
                switch (i) {
                  case 0: lineContent = <><div className={`w-24 bg-gold ${getLineClasses(isVisible)}`} /><div className={`w-8 bg-terminal-blue ${getLineClasses(isVisible)}`} /></>; break;
                  case 1: lineContent = <><div className={`w-16 bg-terminal-cyan ${getLineClasses(isVisible)}`} /><div className={`w-10 bg-terminal-pink ${getLineClasses(isVisible)}`} /><div className={`w-28 bg-terminal-cyan ${getLineClasses(isVisible)}`} /></>; break;
                  case 2: lineContent = <><div className={`w-20 bg-terminal-blue ${getLineClasses(isVisible)}`} /><div className={`w-8 bg-gold ${getLineClasses(isVisible)}`} /></>; break;
                  case 3: lineContent = <><div className={`w-8 bg-terminal-pink ${getLineClasses(isVisible)}`} /><div className={`w-32 bg-gold ${getLineClasses(isVisible)}`} /><div className={`w-8 bg-terminal-pink ${getLineClasses(isVisible)}`} /></>; break;
                  case 4: lineContent = <><div className={`w-12 bg-terminal-green ${getLineClasses(isVisible)}`} /><div className={`w-14 bg-terminal-blue ${getLineClasses(isVisible)}`} /></>; break;
                  case 5: lineContent = <><div className={`w-24 bg-gold ${getLineClasses(isVisible)}`} /><div className={`w-6 bg-terminal-cyan ${getLineClasses(isVisible)}`} /><div className={`w-10 bg-terminal-pink ${getLineClasses(isVisible)}`} /></>; break;
                  case 6: lineContent = <><div className={`w-16 bg-terminal-cyan ${getLineClasses(isVisible)}`} /></>; break;
                  case 7: lineContent = <><div className={`w-10 bg-terminal-pink ${getLineClasses(isVisible)}`} /><div className={`w-24 bg-gold ${getLineClasses(isVisible)}`} /></>; break;
                  case 8: lineContent = <><div className={`w-8 bg-terminal-blue ${getLineClasses(isVisible)}`} /><div className={`w-16 bg-terminal-green ${getLineClasses(isVisible)}`} /><div className={`w-12 bg-terminal-cyan ${getLineClasses(isVisible)}`} /></>; break;
                  case 9: lineContent = <><div className={`w-32 bg-gold ${getLineClasses(isVisible)}`} /></>; break;
                  case 10: lineContent = <><div className={`w-14 bg-terminal-cyan ${getLineClasses(isVisible)}`} /><div className={`w-14 bg-terminal-pink ${getLineClasses(isVisible)}`} /></>; break;
                  case 11: lineContent = <><div className={`w-24 bg-terminal-blue ${getLineClasses(isVisible)}`} /><div className={`w-8 bg-terminal-green ${getLineClasses(isVisible)}`} /></>; break;
                  case 12: lineContent = <><div className={`w-8 bg-terminal-pink ${getLineClasses(isVisible)}`} /><div className={`w-20 bg-gold ${getLineClasses(isVisible)}`} /><div className={`w-10 bg-terminal-cyan ${getLineClasses(isVisible)}`} /></>; break;
                  case 13: lineContent = <><div className={`w-28 bg-terminal-green ${getLineClasses(isVisible)}`} /></>; break;
                }

                return (
                  <div key={i} className="flex min-h-[22px] md:min-h-[24px]">
                    <span className="w-8 text-[#555] select-none text-right pr-4">{i + 1}</span>
                    <div className="flex-1 flex gap-2 items-center">{lineContent}</div>
                    {i === 4 && <div className="absolute inset-x-0 mx-2 bg-[#1a1a1a] h-6 -z-10 rounded-sm" style={{ opacity: isVisible ? 1 : 0 }} />}
                  </div>
                );
              })}
            </div>

            {/* Right: progress bars & stats */}
            <div className="w-full md:w-80 p-5 md:p-6 flex flex-col gap-6 text-[11px] font-terminal tracking-wider mt-4 md:mt-0">
              <div className="text-[#444] font-bold uppercase tracking-[0.2em] mb-1">MODULES</div>
              
              <div className="space-y-4">
                {[
                  { label: "Neural", target: 94, color: "bg-gold" },
                  { label: "Memory", target: 87, color: "bg-terminal-cyan" },
                  { label: "Compile", target: 100, color: "bg-terminal-pink" },
                  { label: "Output", target: 76, color: "bg-terminal-green" },
                ].map((bar, i) => (
                  <div key={bar.label}>
                    <div className="flex justify-between text-[#888] mb-1.5">
                      <span>{bar.label}</span>
                      <span className="text-gold">{progress[i]}%</span>
                    </div>
                    <div className="h-1.5 bg-[#1a1a1a] rounded-full overflow-hidden">
                      <div
                        className={`h-full ${bar.color} rounded-full transition-all duration-300`}
                        style={{ width: `${progress[i]}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#1e1e1e] my-1" />

              <div className="space-y-2.5">
                <div className="flex justify-between text-[#888]">
                  <span>CPU</span>
                  <span className="text-terminal-green">{Math.min(100, Math.floor((step / 15) * 50) + 12)}%</span>
                </div>
                <div className="flex justify-between text-[#888]">
                  <span>RAM</span>
                  <span className="text-terminal-green">{Math.floor((step / 15) * 276)} MB</span>
                </div>
                <div className="flex justify-between text-[#888]">
                  <span>OPS</span>
                  <span className="text-terminal-green">{Math.floor((step / 15) * 6245)}/s</span>
                </div>
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-4 py-2 bg-navy text-[11px] font-terminal">
            <span className="text-gold">⚡ {step >= 15 ? "Compilation complete" : "Processing neural pathways..."}</span>
            <span className="text-card">{pct}%</span>
          </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-4 gap-3 mt-6">
          {[
            { value: step >= 15 ? "2,847" : `${Math.floor(step * 190)}`, label: "Lines" },
            { value: `${Math.min(99.9, step * 6.66).toFixed(1)}%`, label: "Accuracy" },
            { value: `${Math.min(512, step * 34)}`, label: "Nodes" },
            { value: `${(step * 0.12).toFixed(2)}s`, label: "Exec Time" },
          ].map((s) => (
            <div key={s.label} className="text-center py-3 bg-secondary rounded-xl border border-border">
              <div className="text-lg font-bold text-navy font-terminal">{s.value}</div>
              <div className="text-[11px] text-muted-foreground uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroTerminal;
