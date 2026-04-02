import { useState } from 'react';
import { services, siteInfo } from '@/lib/data';

export default function Demo() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '', date: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [field]: e.target.value }));

  const inputClass = "w-full bg-card border border-border rounded-md px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary";

  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-max">
          <h1 className="text-4xl font-bold text-foreground mb-2 text-center">Book a Demo or Consultation</h1>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">Tell us about your project and we'll get back to you within 24 hours.</p>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="md:col-span-2">
              {submitted ? (
                <div className="glass-card p-12 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Request Received!</h2>
                  <p className="text-muted-foreground">We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" placeholder="Full Name" required value={form.name} onChange={update('name')} className={inputClass} />
                  <input type="email" placeholder="Email" required value={form.email} onChange={update('email')} className={inputClass} />
                  <input type="text" placeholder="Company / Organization" value={form.company} onChange={update('company')} className={inputClass} />
                  <select value={form.service} onChange={update('service')} className={inputClass}>
                    <option value="">Service / Product of Interest</option>
                    {services.map(s => <option key={s.slug} value={s.slug}>{s.title}</option>)}
                  </select>
                  <textarea placeholder="Tell us about your project..." rows={4} value={form.message} onChange={update('message')} className={`${inputClass} resize-none`} />
                  <input type="date" value={form.date} onChange={update('date')} className={inputClass} />
                  <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
                    Send Request
                  </button>
                </form>
              )}
            </div>
            <div className="space-y-6">
              <div className="glass-card p-6">
                <h3 className="text-foreground font-semibold mb-3">Why Work With Us</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ 10+ projects delivered</li>
                  <li>✓ Full-stack expertise</li>
                  <li>✓ Agile development</li>
                  <li>✓ Post-launch support</li>
                </ul>
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">Phone</h4>
                <a href={siteInfo.phoneHref} className="text-sm text-muted-foreground hover:text-primary">
                  {siteInfo.phoneDisplay}
                </a>
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">WhatsApp</h4>
                <a href={siteInfo.whatsappHref} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">
                  {siteInfo.whatsappDisplay}
                </a>
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">Email</h4>
                <a href={`mailto:${siteInfo.email}`} className="text-sm text-muted-foreground hover:text-primary">
                  {siteInfo.email}
                </a>
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">Locations</h4>
                <p className="text-sm text-muted-foreground">{siteInfo.locations.join(' · ')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
