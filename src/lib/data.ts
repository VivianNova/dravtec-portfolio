export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  description: string[];
  features: string[];
  useCases: string[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: 'Web' | 'Mobile' | 'Design';
  techStack: string[];
  thumbnail: string;
  problem: string;
  approach: string;
  solution: string;
  outcome: string;
  team: string[];
  images: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  sector: string;
  initials: string;
  bio: string;
  /** Path under /public, e.g. /team/vivian.png */
  image?: string;
}

export interface Product {
  slug: string;
  name: string;
  creator: string;
  creatorRole: string;
  category: 'Digital Products' | 'Artwork' | 'Merchandise';
  price: number;
  priceType: 'one-time' | 'subscription';
  description: string[];
  images: string[];
  plans?: { name: string; price: number; features: string[] }[];
}

/** Company facts and marketing copy sourced from DravTech collateral and public profiles */
export const siteInfo = {
  brandName: 'DravTech',
  legalName: 'Dravtech Company',
  /** As registered under the Companies Act, 2015 (Kenya) */
  registeredName: 'DRAVTECH PRIVATE LIMITED',
  tagline: 'Quality with expertise',
  phoneLocal: '0741406076',
  phoneDisplay: '+254 741 406 076',
  phoneHref: 'tel:+254741406076',
  whatsappLocal: '0720357085',
  whatsappDisplay: '+254 720 357 085',
  whatsappHref: 'https://wa.me/254720357085',
  /** Appears on some print materials alongside the primary WhatsApp line */
  whatsappAltLocal: '0720357038',
  email: 'hello@dravtech.com',
  publicWebsite: 'https://dravis55.pythonanywhere.com/',
  linkedinUrl: 'https://www.linkedin.com/company/dravtech-company/',
  instagramUrl: 'https://www.instagram.com/dravtech.company/',
  /** Add your public page URL when available */
  facebookUrl: '#',
  tiktokUrl: '#',
  industry:
    'Web development, graphic design, system development & management, data analysis, digital marketing, and IT consulting across Kenya.',
  primaryLocation: 'Nairobi, Kenya',
  locations: ['Nairobi, Kenya', 'Chuka, Kenya'] as const,
  foundedYear: 2024,
  heroBlurb:
    "Elevate your brand's presence with smart digital marketing tactics that convert visitors into loyal customers.",
  growthBlurb:
    "Join us to explore strategies and tools to elevate your business performance and operational efficiency in today's market.",
  conversionLine: 'Transform clicks into clients with a website designed to convert.',
  programItems: [
    'Modern & user-friendly designs',
    'Web development',
    'Personal branding',
    'Social media strategy',
  ] as const,
  marketingPillars: ['Expert support team', 'Affordable pricing', 'Website analytics'] as const,
  clientBenefits: [
    'Mobile-first responsiveness',
    'Social proof and credibility',
    'Operational efficiency',
    'Robust security and privacy',
  ] as const,
  /** Campus timetabling & student portal (collateral) */
  campusTimetablingUrl: 'https://samuelkibunja.pythonanywhere.com/',
  campusTimetablingCta: 'Have a look at our new interface and user-friendly features now.',
  /** Printed on timetabling promo alongside main WhatsApp */
  phoneTimetablingLocal: '0729717046',
  phoneTimetablingDisplay: '+254 729 717 046',
  phoneTimetablingHref: 'tel:+254729717046',
  phoneTimetablingWhatsappHref: 'https://wa.me/254729717046',
} as const;

export type CampaignSpotlight = {
  slug: string;
  image: string;
  imageAlt: string;
  headline: string;
  body: string;
  primaryCta?: { label: string; href: string };
  secondaryNote?: string;
  meta?: string;
  partner?: string;
};

/** Featured launches and partnerships from DravTech collateral */
export const campaignSpotlights: CampaignSpotlight[] = [
  {
    slug: 'timetabling-portal',
    image: '/marketing/flyer-timetabling-portal.png',
    imageAlt:
      'DravTech timetabling website promotion: portal dashboard on desktop, tablet, and mobile with campus modules',
    headline: 'We have updated our timetabling website',
    body: 'Explore the refreshed portal dashboard — main access, live chat, confessions, timetable, exams, fees and bursaries, mess, hostels, halls, news, and reels. Scan the QR code on the flyer to open the app where available.',
    primaryCta: { label: 'Open live site', href: 'https://samuelkibunja.pythonanywhere.com/' },
    secondaryNote: 'Contact: 0729717046 · 0720357085',
  },
  {
    slug: 'chuka-radio-future-systems',
    image: '/marketing/flyer-chuka-radio-live.png',
    imageAlt:
      'DravTech IT Solutions and Chuka University Radio CU 98.8 FM partnership — live broadcast The Future Of Systems',
    headline: 'We will be live on CU Radio 98.8 FM',
    body: 'DravTech IT Solutions joins Chuka Uni Radio for “The Future Of Systems” — a conversation on how institutions can build smarter, more reliable digital systems.',
    meta: 'Monday 9 March · 11:00 a.m. · with Mugichagi',
    partner: 'Chuka University Radio (CU Radio 98.8 FM)',
  },
];

export const services: Service[] = [
  {
    slug: 'web-development',
    title: 'Custom Website Design & Development',
    shortDescription: 'Modern sites and platforms built to convert — mobile-first and easy to manage.',
    icon: '🌐',
    description: [
      'We focus on custom website design and development so your business shows up online with clarity and confidence.',
      siteInfo.conversionLine,
      'Our builds emphasize mobile-first responsiveness, fast load times, and structures that support growth as you add content, products, or services.',
      'Whether you need a marketing site, a booking flow, or internal tools, we pair solid engineering with design that matches your brand.',
    ],
    features: [
      'Responsive, mobile-first layouts',
      'Performance and SEO-friendly setup',
      'CMS-ready content structures',
      'Integrations (forms, analytics, messaging)',
      'Ongoing improvements and support',
    ],
    useCases: [
      'Service business sites that drive calls and WhatsApp leads',
      'Landing pages for campaigns and events',
      'Portals for members, clients, or staff',
    ],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'Campaigns and messaging that pair with strong website platforms.',
    icon: '📣',
    description: [
      siteInfo.heroBlurb,
      'We connect digital marketing to your website so traffic has a clear path to enquiry, sign-up, or purchase.',
      'Our approach balances practical tactics — content, targeting, and measurement — with what your team can sustain day to day.',
      siteInfo.growthBlurb,
    ],
    features: [
      'Channel strategy (web, social, email)',
      'Conversion-focused copy and CTAs',
      'Campaign tracking and refinement',
      'Alignment with your site and brand',
      'Reporting you can act on',
    ],
    useCases: [
      'Growing visibility for a local or national brand',
      'Launching a new offer or service line',
      'Improving lead quality from online channels',
    ],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX & Personal Branding',
    shortDescription: 'Modern, user-friendly design systems and a visual identity that fits you.',
    icon: '🎨',
    description: [
      'We deliver modern, user-friendly designs that make your product or site easy to understand the first time.',
      "Personal branding work articulates who you serve and why you're different — then we reflect that consistently across web and print touchpoints.",
      'From wireframes to polished UI, we keep accessibility and readability in mind so your audience trusts what they see.',
      'Design deliverables are organized for handoff to development or print, so implementation stays smooth.',
    ],
    features: [
      'UI flows and high-fidelity screens',
      'Brand palette, type, and usage rules',
      'Social-ready assets and templates',
      'Design collaboration with your team',
      'Iterating based on feedback and analytics',
    ],
    useCases: [
      'Founders refining their professional presence online',
      'Teams refreshing an outdated site or slide deck',
      'Organizations aligning visuals after a strategy shift',
    ],
  },
  {
    slug: 'social-media-strategy',
    title: 'Social Media Strategy',
    shortDescription: 'Channel plans and content rhythm that build social proof and credibility.',
    icon: '💬',
    description: [
      'We help you define what to say, where to show up, and how often — so social media supports trust, not noise.',
      'Strategy ties back to your website and business goals: awareness, enquiries, or community building.',
      'We plan for realistic production — templates, batching, and clear roles — so you can keep publishing after launch.',
      'Metrics focus on meaningful engagement and traffic patterns, not vanity alone.',
    ],
    features: [
      'Platform fit and audience mapping',
      'Content pillars and calendar outlines',
      'Guidelines for tone and visuals',
      'Hashtag and collaboration ideas',
      'Review cadence and improvement loops',
    ],
    useCases: [
      'B2B consultancies building thought leadership',
      'Local brands growing awareness in Kenya',
      'Events and launches needing coordinated pushes',
    ],
  },
  {
    slug: 'data-analytics',
    title: 'Data & Website Analytics',
    shortDescription: 'Dashboards and website analytics that make performance visible.',
    icon: '📊',
    description: [
      'Timely access to data underpins good decisions. We set up views that show what matters to your team.',
      'Website analytics connect marketing effort to behaviour on your site — where people arrive, what they click, and where they drop off.',
      'Where useful, we combine spreadsheet workflows, dashboards, and simple automation so reporting stays consistent.',
      'We explain metrics in plain language so leadership and operators can agree on next steps.',
    ],
    features: [
      'Web analytics setup and goals',
      'Executive and operational dashboards',
      'Spreadsheet and light BI workflows',
      'Training for in-house updates',
      'Recommendations based on trends',
    ],
    useCases: [
      'Lead tracking from ads and organic search',
      'Monthly performance reviews for leadership',
      'Operational KPIs for distributed teams',
    ],
  },
  {
    slug: 'cloud-devops',
    title: 'Systems, Cloud & Security',
    shortDescription: 'Operational efficiency with reliable hosting and robust security practices.',
    icon: '☁️',
    description: [
      'Operational growth often exposes gaps in structure. We help with system development and ongoing management so performance stays steady.',
      'Hosting, backups, and access control are designed for your risk profile — from simple brochure sites to apps with sensitive data.',
      'We emphasise robust security and privacy basics: updates, HTTPS, least-privilege access, and sensible monitoring.',
      "When you're ready to scale, we plan infrastructure that matches real traffic and compliance needs.",
    ],
    features: [
      'Hosting and environment setup',
      'Backups, SSL, and hardening checklists',
      'CI/CD and deployment discipline',
      'Monitoring and incident response basics',
      'Documentation for your team',
    ],
    useCases: [
      'Moving from ad-hoc updates to a maintainable setup',
      'Reducing downtime after traffic spikes',
      'Preparing for audit or partnership security questions',
    ],
  },
];

export const projects: Project[] = [
  {
    slug: 'campus-timetabling-portal',
    title: 'Campus Timetabling & Student Portal',
    tagline: 'Updated web experience with a dashboard for campus life',
    category: 'Web',
    techStack: ['Responsive UI', 'Student portal', 'Live chat', 'Python hosting'],
    thumbnail: '/marketing/flyer-timetabling-portal.png',
    problem:
      'A campus community needed one place to reach timetables, exams, fees, residential services, and day-to-day communication — on phone, tablet, and desktop.',
    approach:
      'We redesigned the portal around clear “cards” for the main portal, live chat, and community features, then grouped academic, services, and media tools so students find what they need quickly.',
    solution:
      'A dark-themed, mobile-first dashboard with modules for timetable, exams, fees and bursaries, mess and hostels, news, reels, and more — with QR access to the companion app experience promoted on collateral.',
    outcome:
      'Launched the updated timetabling website with a stronger interface and user-friendly navigation; live at samuelkibunja.pythonanywhere.com with support lines 0729717046 and 0720357085.',
    team: ['Samuel Kibunja Macharia', 'Godwin'],
    images: [
      '/marketing/flyer-timetabling-portal.png',
      'https://placehold.co/800x400/0d1b4b/c9a94f?text=Portal+modules',
      'https://placehold.co/800x400/0d1b4b/c9a94f?text=Mobile+%2B+tablet',
    ],
  },
  {
    slug: 'chuka-radio-future-of-systems',
    title: 'The Future Of Systems — CU Radio 98.8 FM',
    tagline: 'Live broadcast partnership with Chuka University Radio',
    category: 'Design',
    techStack: ['Community outreach', 'Live radio', 'Partnership'],
    thumbnail: '/marketing/flyer-chuka-radio-live.png',
    problem:
      'DravTech wanted to meet students and staff where they listen — sharing how thoughtful systems improve campus and organisational life.',
    approach:
      'We partnered with Chuka University Radio (Chuka Uni Radio, 98.8 FM) to host a live segment on “The Future Of Systems” with host Mugichagi.',
    solution:
      'A scheduled live show highlighting IT systems thinking, reliability, and practical digital transformation for institutions.',
    outcome:
      'On-air presence on Monday 9 March at 11:00 a.m., strengthening ties with the Chuka University community and CU Radio audience.',
    team: ['Fredrick Mbugua Wainaina', 'Chuka University Radio'],
    images: [
      '/marketing/flyer-chuka-radio-live.png',
      'https://placehold.co/800x400/0d1b4b/c9a94f?text=Live+broadcast',
    ],
  },
  {
    slug: 'cucu-platform',
    title: 'CUCU Platform',
    tagline: 'Church management system for modern congregations',
    category: 'Web',
    techStack: ['Next.js', 'Prisma', 'PostgreSQL', 'TypeScript'],
    thumbnail: 'https://placehold.co/800x500/0d1b4b/c9a94f?text=CUCU+Platform',
    problem: 'A large church needed a centralized platform to manage members, events, finances, and communications across multiple branches.',
    approach: 'We conducted extensive interviews with church administrators and built a modular system with role-based access.',
    solution: 'A comprehensive web platform with member management, event scheduling, tithe tracking, and automated communication tools.',
    outcome: 'Successfully deployed to serve 5000+ members with 99.8% uptime and a 60% reduction in administrative workload.',
    team: ['Samuel Kibunja Macharia', 'David Muiruri', 'Edwin Mwangi'],
    images: ['https://placehold.co/800x400/0d1b4b/c9a94f?text=Dashboard', 'https://placehold.co/800x400/0d1b4b/c9a94f?text=Members', 'https://placehold.co/800x400/0d1b4b/c9a94f?text=Events']
  },
  {
    slug: 'examflow',
    title: 'ExamFlow',
    tagline: 'Online examination platform with anti-cheat features',
    category: 'Web',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    thumbnail: 'https://placehold.co/800x500/0d1b4b/c9a94f?text=ExamFlow',
    problem: 'Academic institutions needed a secure, scalable way to administer online exams with integrity controls.',
    approach: 'We built a real-time exam system with tab-switch detection, timed sessions, and automated grading.',
    solution: 'A full exam platform with roles for admins, trainers, and students, featuring MCQ and essay question types.',
    outcome: 'Adopted by multiple institutions, handling 1000+ concurrent exam sessions with zero data loss.',
    team: ['Samuel Kibunja Macharia', 'Fredrick Mbugua Wainaina'],
    images: ['https://placehold.co/800x400/0d1b4b/c9a94f?text=Exam+View', 'https://placehold.co/800x400/0d1b4b/c9a94f?text=Results', 'https://placehold.co/800x400/0d1b4b/c9a94f?text=Grading']
  },
  {
    slug: 'lowlands-hotel',
    title: 'Lowlands Hotel Website',
    tagline: 'Luxury hotel and spa web presence',
    category: 'Web',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    thumbnail: 'https://placehold.co/800x500/0d1b4b/c9a94f?text=Lowlands+Hotel',
    problem: 'A luxury hotel needed a modern website that captured the essence of their brand and drove direct bookings.',
    approach: 'We focused on immersive visual storytelling with smooth animations and intuitive booking flows.',
    solution: 'A stunning responsive website with virtual tours, room galleries, and an integrated booking system.',
    outcome: 'Direct bookings increased by 45% within the first quarter after launch.',
    team: ['Vivian', 'Samuel Kibunja Macharia'],
    images: ['https://placehold.co/800x400/0d1b4b/c9a94f?text=Homepage', 'https://placehold.co/800x400/0d1b4b/c9a94f?text=Rooms', 'https://placehold.co/800x400/0d1b4b/c9a94f?text=Booking']
  },
  {
    slug: 'boyvate-brand',
    title: 'Boyvate Brand Platform',
    tagline: 'Leadership organization website and brand identity',
    category: 'Design',
    techStack: ['React', 'Figma', 'Tailwind CSS'],
    thumbnail: 'https://placehold.co/800x500/0d1b4b/c9a94f?text=Boyvate',
    problem: 'A youth leadership organization needed a professional digital presence and cohesive brand identity.',
    approach: 'We started with brand strategy workshops, defined visual identity guidelines, then built the website.',
    solution: 'Complete brand package including logo, color system, typography, and a modern responsive website.',
    outcome: 'Membership inquiries increased by 200% and the organization secured two major partnerships.',
    team: ['Vivian', 'Edwin Mwangi'],
    images: ['https://placehold.co/800x400/0d1b4b/c9a94f?text=Brand+Guide', 'https://placehold.co/800x400/0d1b4b/c9a94f?text=Website', 'https://placehold.co/800x400/0d1b4b/c9a94f?text=Social']
  },
  {
    slug: 'dravtech-dashboard',
    title: 'DravTech Internal Dashboard',
    tagline: 'Company operations and project management hub',
    category: 'Web',
    techStack: ['Next.js', 'TypeScript', 'Recharts', 'Tailwind'],
    thumbnail: 'https://placehold.co/800x500/0d1b4b/c9a94f?text=Dashboard',
    problem: 'DravTech needed an internal tool to track projects, team performance, and financial metrics in real-time.',
    approach: 'We built an internal-first product using our own tech stack, iterating based on daily team feedback.',
    solution: 'A real-time dashboard with project tracking, time logging, invoice management, and team analytics.',
    outcome: 'Reduced project management overhead by 35% and improved on-time delivery rate to 94%.',
    team: ['Fredrick Mbugua Wainaina', 'Samuel Kibunja Macharia', 'David Muiruri'],
    images: ['https://placehold.co/800x400/0d1b4b/c9a94f?text=Overview', 'https://placehold.co/800x400/0d1b4b/c9a94f?text=Projects', 'https://placehold.co/800x400/0d1b4b/c9a94f?text=Analytics']
  },
  {
    slug: 'certificate-automation',
    title: 'Certificate Automation Tool',
    tagline: 'Bulk certificate generation and email delivery',
    category: 'Mobile',
    techStack: ['Python', 'Gmail SMTP', 'Pillow', 'CSV'],
    thumbnail: 'https://placehold.co/800x500/0d1b4b/c9a94f?text=Certificates',
    problem: 'An organization needed to generate and distribute hundreds of personalized certificates after events.',
    approach: 'We automated the entire pipeline from CSV data to personalized PDF generation and email delivery.',
    solution: 'A Python tool that reads participant data, generates branded certificates, and sends them via Gmail SMTP.',
    outcome: 'Reduced certificate distribution time from 2 weeks to under 30 minutes for 500+ participants.',
    team: ['Godwin'],
    images: ['https://placehold.co/800x400/0d1b4b/c9a94f?text=Template', 'https://placehold.co/800x400/0d1b4b/c9a94f?text=Generated', 'https://placehold.co/800x400/0d1b4b/c9a94f?text=Email']
  }
];

/** Leadership order aligned with Dravtech Private Limited constitution (shareholding & roles) */
export const team: TeamMember[] = [
  {
    name: 'Fredrick Mbugua Wainaina',
    role: 'CEO & Founder',
    sector: 'Governance & strategy',
    initials: 'FM',
    image: '/team/fredrick.png',
    bio: 'Sets company vision, strategy, and investor relations, with final authority on major decisions under the constitution.',
  },
  {
    name: 'Samuel Kibunja Macharia',
    role: 'CTO & Founder',
    sector: 'Technology',
    initials: 'SM',
    image: '/team/samuel.png',
    bio: 'Leads technical direction, architecture, and engineering oversight across products and delivery.',
  },
  {
    name: 'Edwin Mwangi',
    role: 'Co-Founder & Director, Software Engineering',
    sector: 'Engineering delivery',
    initials: 'EM',
    image: '/team/edwin.png',
    bio: 'Co-founder with a director remit for software engineering — execution, team leadership, and shipping quality systems.',
  },
  {
    name: 'David Muiruri',
    role: 'Co-Founder & Director, Software Engineering',
    sector: 'Engineering delivery',
    initials: 'DM',
    image: '/team/david.png',
    bio: 'Co-founder and director of software engineering; focuses on execution, delivery, and technical team leadership.',
  },
  {
    name: 'Vivian',
    role: 'Research & partnerships',
    sector: 'Research / ops',
    initials: 'V',
    image: '/team/vivian.png',
    bio: 'Supports research, partnerships, and day-to-day operations that keep Dravtech connected to clients and communities.',
  },
  {
    name: 'Godwin',
    role: 'Software engineer',
    sector: 'Engineering',
    initials: 'G',
    image: '/team/godwin.png',
    bio: 'Builds and maintains features across the stack, contributing to reliable products for education and enterprise clients.',
  },
];

export const products: Product[] = [
  {
    slug: 'art-savanna-lion-print',
    name: 'Savanna Lion Art Print',
    creator: 'DravTech',
    creatorRole: 'Studio',
    category: 'Artwork',
    price: 2800,
    priceType: 'one-time',
    description: [
      'Double-exposure style piece blending a lion profile with acacia trees, sunset, and savanna cliffs on a marble-textured ground.',
      'Warm gold, amber, and burnt orange palette — statement wall art for office or home.',
      'Printed on high-quality stock; sizes available on request.',
      'Quality with expertise — the same care we bring to digital work.',
    ],
    images: ['/marketplace/art-savanna-lion.png'],
  },
  {
    slug: 'art-blue-harmony-print',
    name: 'Blue Harmony Art Print',
    creator: 'DravTech',
    creatorRole: 'Studio',
    category: 'Artwork',
    price: 2600,
    priceType: 'one-time',
    description: [
      'Vibrant composition with traditional pattern dress, birds, and roses on a clean white ground.',
      'Bold greens and warm yellows — uplifting colour for reception areas or creative studios.',
      'Available as a premium print; framing options on enquiry.',
    ],
    images: ['/marketplace/art-blue-harmony.png'],
  },
  {
    slug: 'merch-dravtech-cap',
    name: 'DravTech Cap',
    creator: 'DravTech',
    creatorRole: 'Merchandise',
    category: 'Merchandise',
    price: 1800,
    priceType: 'one-time',
    description: [
      'Royal blue six-panel cap with embroidered DRAV-TECH wordmark, stylised D icon, and Quality with Expertise line.',
      'Classic dad-hat fit; adjustable closure.',
      'Bright, modern mockup-ready branding for events and everyday wear.',
    ],
    images: ['/marketplace/merch-cap.png'],
  },
  {
    slug: 'merch-dravtech-hoodie',
    name: 'DravTech Hoodie',
    creator: 'DravTech',
    creatorRole: 'Merchandise',
    category: 'Merchandise',
    price: 4200,
    priceType: 'one-time',
    description: [
      'Royal blue hooded sweatshirt with front pouch pocket and ribbed cuffs.',
      'White print: D mark, DRAV-TECH, and Quality with Expertise.',
      'Unisex sizing; soft fleece interior — ideal for team kits and giveaways.',
    ],
    images: ['/marketplace/merch-hoodie.png'],
  },
  {
    slug: 'merch-dravtech-tote',
    name: 'DravTech Canvas Tote',
    creator: 'DravTech',
    creatorRole: 'Merchandise',
    category: 'Merchandise',
    price: 1400,
    priceType: 'one-time',
    description: [
      'Natural canvas tote with navy DRAV-TECH logotype and Quality with Expertise tagline.',
      'Features the blue D mark with orange accent — matches our brand guidelines.',
      'Sturdy shoulder carry; perfect for conferences and daily use.',
    ],
    images: ['/marketplace/merch-tote.png'],
  },
  {
    slug: 'merch-valentine-cupcake-box',
    name: 'Valentine Cupcake Bouquet Box',
    creator: 'DravTech',
    creatorRole: 'Limited run',
    category: 'Merchandise',
    price: 3200,
    priceType: 'one-time',
    description: [
      'Seven rose-piped cupcakes with red and pink frosting, green stem detail, and ribbon — presented in a gift box.',
      'Hand-piped message option; seasonal availability.',
      'Great for client appreciation or team celebrations.',
    ],
    images: ['/marketplace/merch-valentine-cupcakes.png'],
  },
  {
    slug: 'art-golden-muse-triptych',
    name: 'Golden Muse Triptych',
    creator: 'DravTech',
    creatorRole: 'Studio',
    category: 'Artwork',
    price: 3200,
    priceType: 'one-time',
    description: [
      'Three-panel black-and-gold luxury study: jewellery, portrait, and ornament motifs.',
      'High contrast matte black with metallic gold — boardroom or gallery-ready.',
      'Delivered as premium prints; mounting guidance available.',
    ],
    images: ['/marketplace/art-golden-muse.png'],
  },
  {
    slug: 'art-geometric-elegance-triptych',
    name: 'Geometric Elegance Print Set',
    creator: 'DravTech',
    creatorRole: 'Studio',
    category: 'Artwork',
    price: 3400,
    priceType: 'one-time',
    description: [
      'Three coordinated panels: navy, gold, marble, and wood textures with spheres and fine line accents.',
      'Modern minimalist look aligned with tech and architecture spaces.',
      'Sold as a set; individual panel sizes on request.',
    ],
    images: ['/marketplace/art-geometric-triptych.png'],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getRelatedServices(currentSlug: string): Service[] {
  return services.filter(s => s.slug !== currentSlug).slice(0, 3);
}

export function getRelatedProjects(currentSlug: string): Project[] {
  return projects.filter(p => p.slug !== currentSlug).slice(0, 3);
}

export function getRelatedProducts(currentSlug: string): Product[] {
  return products.filter(p => p.slug !== currentSlug).slice(0, 3);
}
