import { team, siteInfo } from '@/lib/data';
import TeamMemberAvatar from '@/components/TeamMemberAvatar';
import { Lightbulb, Users, Star, Zap } from 'lucide-react';

const values = [
  { icon: Lightbulb, title: 'Innovation', desc: 'We embrace new technologies and creative approaches to solve real-world challenges.' },
  { icon: Users, title: 'Collaboration', desc: 'We work closely with clients across Kenya, treating every project as a partnership.' },
  { icon: Star, title: 'Quality with expertise', desc: 'We are committed to delivering work you can trust — the same promise behind our brand.' },
  { icon: Zap, title: 'Impact', desc: 'We measure success by clarity, efficiency, and the outcomes your organisation feels day to day.' },
];

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Hero Background */}
        <img 
          src="/hero/hero1.jpeg" 
          alt="About DravTech" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-white mb-3">{siteInfo.tagline}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">About {siteInfo.brandName}</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            {siteInfo.legalName} — {siteInfo.industry}
          </p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {siteInfo.legalName} is an IT services company based in {siteInfo.primaryLocation}, with a presence in{' '}
            {siteInfo.locations[1]}. Founded in {siteInfo.foundedYear}, we specialise in {siteInfo.industry}
          </p>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{siteInfo.growthBlurb}</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-max grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-foreground mb-3">🎯 Our Mission</h2>
            <p className="text-muted-foreground">
              To help organisations grow through websites that convert, digital marketing that fits their goals, and systems that stay reliable over time — with honest communication and support you can reach by phone or WhatsApp.
            </p>
          </div>
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-foreground mb-3">🔭 Our Vision</h2>
            <p className="text-muted-foreground">{siteInfo.growthBlurb}</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-card">
        <div className="container-max max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-6">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            <strong className="text-foreground font-semibold">{siteInfo.registeredName}</strong> is incorporated in Kenya under the Companies Act, 2015. Operating as {siteInfo.legalName}, we were founded in {siteInfo.foundedYear} in {siteInfo.primaryLocation}. We work with businesses and institutions that need clear digital presence — from custom website design and development to data visibility and ongoing system care.
          </p>
          <p className="text-muted-foreground mb-4">
            We collaborate with partners such as <strong className="text-foreground font-semibold">Chuka University Radio (CU Radio 98.8 FM)</strong> to discuss the future of systems on campus and beyond, and we ship student-facing products like our updated{' '}
            <a href={siteInfo.campusTimetablingUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              campus timetabling portal
            </a>
            .
          </p>
          <p className="text-muted-foreground mb-4">
            We also serve clients from {siteInfo.locations[1]}, consulting and delivering projects across the country. {siteInfo.conversionLine}
          </p>
          <p className="text-muted-foreground">{siteInfo.heroBlurb}</p>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-foreground text-center mb-12">The Team</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {team.map(member => (
              <div key={member.name} className="glass-card overflow-hidden hover-lift flex flex-col sm:flex-row sm:items-stretch">
                <div className="sm:w-44 md:w-48 shrink-0 bg-muted">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-56 w-full sm:h-full min-h-[200px] object-cover object-top"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-56 sm:h-full min-h-[200px] items-center justify-center bg-primary/10 p-6">
                      <TeamMemberAvatar member={member} size="md" className="!w-28 !h-28" />
                    </div>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-foreground font-semibold text-lg">{member.name}</h4>
                  <p className="text-sm text-primary font-medium mt-1">{member.role}</p>
                  <p className="text-sm text-muted-foreground mt-3 flex-1">{member.bio}</p>
                  <span className="inline-block mt-4 w-fit text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded">
                    {member.sector}
                  </span>
                </div>
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
