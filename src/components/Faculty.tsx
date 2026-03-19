const pills = ["Artificial Intelligence", "Computer Vision", "Deep Learning", "Speech Processing"];

const Faculty = () => (
  <section id="faculty" className="py-20 bg-background dashed-bg">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-12 scroll-reveal">
        <span className="section-badge">Our Faculty</span>
        <h2 className="section-heading mt-4">Meet the Department Head</h2>
        <p className="section-subtext mt-3">Led by visionary researchers and experienced educators committed to student success.</p>
      </div>

      {/* HOD Card */}
      <div className="cse-card p-8 md:p-12 border-l-4 border-l-gold flex flex-col md:flex-row gap-10 mb-16 hover:shadow-2xl transition-all duration-500">
        {/* Left: Image Box */}
        <div className="md:w-1/3 shrink-0">
          <div className="relative group/img aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border border-white/20 bg-muted">
            <img 
              src="/hod.jpg" 
              alt="Dr. R. Vasanthselvakumar" 
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-110"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x500?text=HOD+Profile';
              }}
            />
            <div className="absolute inset-0 bg-navy/5 group-hover/img:bg-transparent transition-colors duration-500" />
          </div>
        </div>

        {/* Right: Content */}
        <div className="md:w-2/3 flex flex-col">
          <div className="mb-6">
            <h3 className="text-3xl font-black text-navy tracking-tight">Dr. R. Vasanthselvakumar</h3>
            <p className="text-gold-dark font-bold text-sm mt-1 uppercase tracking-widest">Professor & Head, Department of CSE</p>
            <p className="text-[11px] text-muted-foreground mt-1 font-medium tracking-wider">Serving at Viswam Engineering College since 2020</p>
          </div>

          <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              Dr. R. Vasanthselvakumar is a visionary leader committed to advancing the field of Computer Science and Engineering through excellence in education, research, and industry collaboration. His dynamic leadership and extensive expertise make him a valuable asset to any academic institution.
            </p>
            <p>
              He completed his PhD in Computer Science and Engineering from Annamalai University, received his PG (ME Computer Science and Engineering) from Anna University, and his UG (B.Tech Information Technology) from Annamalai University. Since 2020, he has been serving as Associate Professor and Head of the Department of Computer Science and Engineering at Viswam Engineering College.
            </p>
            <p>
              He has contributed significantly to research in Artificial Intelligence, particularly in computer vision, speech processing, and deep learning.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-6 pt-8 border-t border-gray-100">
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[2px] text-navy mb-4">Qualifications</h4>
              <ul className="space-y-2.5 text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span className="text-muted-foreground font-medium">PhD — <span className="text-navy">Annamalai University</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span className="text-muted-foreground font-medium">ME CSE — <span className="text-navy">Anna University</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span className="text-muted-foreground font-medium">B.Tech IT — <span className="text-navy">Annamalai University</span></span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[2px] text-navy mb-4">Core Research</h4>
              <div className="flex flex-wrap gap-2">
                {pills.map((p) => (
                  <span key={p} className="text-[10px] font-bold bg-muted text-navy px-3 py-1.5 rounded-lg border border-navy/5 hover:border-gold/50 transition-colors cursor-default lowercase tracking-wider">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Faculty grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="cse-card p-5 text-center scroll-reveal">
            <div className="w-16 h-16 rounded-full bg-muted mx-auto border-b-2 border-navy flex items-center justify-center text-muted-foreground font-bold">
              F{i + 1}
            </div>
            <h4 className="font-semibold text-foreground mt-3 text-sm">Faculty Member {i + 1}</h4>
            <p className="text-xs text-muted-foreground">Assistant Professor</p>
            <p className="text-xs text-muted-foreground">M.Tech / PhD</p>
            <span className="inline-block mt-2 text-[10px] bg-secondary text-navy px-2 py-0.5 rounded-full">Specialization</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Faculty;
