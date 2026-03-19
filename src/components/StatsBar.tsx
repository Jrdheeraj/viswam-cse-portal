import { useCountUp } from "@/hooks/useCountUp";

const StatItem = ({ target, suffix = "", label }: { target: number; suffix?: string; label: string }) => {
  const { ref, value } = useCountUp(target);
  return (
    <div ref={ref} className="text-center py-8 scroll-reveal">
      <div className="text-3xl md:text-4xl font-bold text-navy">
        {value}{suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
};

const StatsBar = () => (
  <section className="bg-card">
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatItem target={264} suffix="+" label="B.Tech Intake" />
      <StatItem target={20} suffix="+" label="M.Tech Intake" />
      <StatItem target={2006} label="Established" />
      <StatItem target={60} suffix="%+" label="Placement Rate" />
    </div>
  </section>
);

export default StatsBar;
