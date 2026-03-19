import { useState } from "react";

const contactInfo = [
  { icon: "📞", label: "Phone", value: "+91 9505021075" },
  { icon: "📧", label: "Principal Email", value: "principal@viswam.ac.in" },
  { icon: "📧", label: "Office Email", value: "office@viswam.ac.in" },
  { icon: "📍", label: "Location", value: "B-Block, Viswam Engineering College, Angallu, Madanapalle, AP" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 scroll-reveal">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-heading mt-4">Contact the CSE Department</h2>
          <p className="section-subtext mt-3">Have questions about admissions, academics or facilities? We are here to help.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            {contactInfo.map((c) => (
              <div key={c.label} className="cse-card p-4 flex gap-4 items-start scroll-reveal">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-lg shrink-0">{c.icon}</div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{c.label}</p>
                  <p className="text-sm font-semibold text-foreground">{c.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cse-card p-6 scroll-reveal">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {[
                { key: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                { key: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                { key: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
              ].map((f) => (
                <div key={f.key}>
                  <label className="text-sm font-medium text-foreground block mb-1">{f.label}</label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
              ))}
              <div>
                <label className="text-sm font-medium text-foreground block mb-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="Your message here..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold text-navy font-bold py-3 rounded-lg hover:brightness-90 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
