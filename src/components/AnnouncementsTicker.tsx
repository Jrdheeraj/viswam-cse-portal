const items = [
  "📢 Admissions Open for 2025–26 – Apply Now!",
  "🎓 Final Year Project Reviews Start from May 20, 2025",
  "📅 Campus Placement Drive by TCS on May 28, 2025",
  "📝 Mid-Term Exams Scheduled from June 3, 2025",
  "📚 Summer Internship Registrations Close on May 15, 2025",
  "🎯 AI & Cyber Security Workshop – June 10–12",
  "💼 Resume Building Session for 3rd Years – May 22",
  "📢 Hostel Allotment for New Admissions Begins in July!",
];

const AnnouncementsTicker = () => (
  <div className="bg-navy overflow-hidden h-11 flex items-center">
    <div className="flex animate-marquee whitespace-nowrap">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="text-white text-sm mx-6">
          {item}
          <span className="text-gold ml-6">●</span>
        </span>
      ))}
    </div>
  </div>
);

export default AnnouncementsTicker;
