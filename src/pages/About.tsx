import { team } from '@/lib/data';
import { Lightbulb, Users, Star, Zap } from 'lucide-react';

const values = [
  { icon: Lightbulb, title: 'Innovation', desc: 'We embrace new technologies and creative approaches to solve complex problems.' },
  { icon: Users, title: 'Collaboration', desc: 'We work closely with our clients, treating every project as a partnership.' },
  { icon: Star, title: 'Quality', desc: 'We deliver polished, production-ready solutions that exceed expectations.' },
  { icon: Zap, title: 'Impact', desc: 'We measure success by the tangible value our solutions create.' },
];

export default function About() {
  return (
    <div className="pt-16">
      <section className="section-padding bg-card">
        <div className="container-max text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">About DravTech</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">A Nairobi-based tech company building digital products that drive real impact across Africa.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-max grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-foreground mb-3">🎯 Our Mission</h2>
            <p className="text-muted-foreground">To empower organizations with accessible, high-quality technology solutions that solve real problems and create lasting value in communities across Africa.</p>
          </div>
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-foreground mb-3">🔭 Our Vision</h2>
            <p className="text-muted-foreground">To be Africa's most trusted technology partner — known for building digital products that matter, with a team that cares deeply about craft and impact.</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-card">
        <div className="container-max max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-6">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            DravTech started as a small team of passionate developers and designers who believed technology could be a powerful equalizer. Founded in Nairobi, we set out to bridge the gap between world-class digital products and the organizations that need them most.
          </p>
          <p className="text-muted-foreground">
            Today, we've grown into a multidisciplinary team of six, serving clients across education, hospitality, non-profit, and enterprise sectors. Every project we take on is guided by a simple question: "Will this make a real difference?"
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-foreground text-center mb-12">The Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map(member => (
              <div key={member.name} className="glass-card p-6 hover-lift">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{member.initials}</span>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold">{member.name}</h4>
                    <p className="text-xs text-primary">{member.role}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
                <span className="inline-block mt-2 text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded">{member.sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(v => (
              <div key={v.title} className="glass-card p-6 text-center hover-lift">
                <v.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-foreground font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
