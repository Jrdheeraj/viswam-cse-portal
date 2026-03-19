const HodQuote = () => {
  return (
    <section className="py-28 bg-card dashed-bg relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="mb-6 flex justify-center">
          <div className="w-12 h-1 bg-gold rounded-full" />
        </div>
        
        <p className="text-2xl md:text-3xl font-medium italic text-navy leading-tight md:leading-snug">
          "Every great innovation begins with a student who dares to think differently"
        </p>
        

        <div className="mt-10 flex flex-col items-center">
          <p className="text-navy font-bold text-lg md:text-xl">Dr. R. Vasanthselvakumar</p>
          <p className="text-muted-foreground text-sm font-medium mt-1  ">Professor & Head, Department of CSE</p>
        </div>
      </div>
    </section>
  );
};

export default HodQuote;
