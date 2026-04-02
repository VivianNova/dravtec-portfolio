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

export const services: Service[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    shortDescription: 'Custom websites and web apps built with modern frameworks.',
    icon: '🌐',
    description: [
      'We build high-performance websites and web applications using modern technologies like React, Next.js, and TypeScript. Our solutions are scalable, secure, and designed for the best user experience.',
      'From landing pages to complex enterprise platforms, we deliver pixel-perfect implementations that drive business results.',
      'Our development process follows agile methodologies ensuring rapid delivery without compromising quality.',
      'Every project includes responsive design, SEO optimization, and performance tuning as standard.'
    ],
    features: ['Custom React/Next.js applications', 'Progressive Web Apps (PWA)', 'E-commerce platforms', 'Content Management Systems', 'API integrations'],
    useCases: ['Church management platform for 5000+ members', 'Hotel booking system with real-time availability', 'Internal company dashboard for team operations']
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    shortDescription: 'iOS and Android solutions for modern businesses.',
    icon: '📱',
    description: [
      'We create native and cross-platform mobile applications that deliver exceptional user experiences on both iOS and Android.',
      'Using React Native and Flutter, we build apps that feel native while maintaining a single codebase for efficiency.',
      'Our mobile solutions include offline-first architecture, push notifications, and seamless backend integration.',
      'We handle the entire lifecycle from design to deployment on App Store and Google Play.'
    ],
    features: ['Cross-platform development', 'Native iOS & Android', 'Offline-first architecture', 'Push notifications', 'App Store deployment'],
    useCases: ['Event management app for conferences', 'Fitness tracking application', 'Food delivery platform for local restaurants']
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    shortDescription: 'User-centered design systems that convert.',
    icon: '🎨',
    description: [
      'We craft intuitive, beautiful interfaces through research-driven design processes that put users first.',
      'Our design team creates comprehensive design systems, prototypes, and user flows that guide development.',
      'We believe great design is invisible — it simply works. Every interaction is intentional, every pixel purposeful.',
      'From wireframes to high-fidelity mockups, we deliver design assets ready for development.'
    ],
    features: ['User research & personas', 'Wireframing & prototyping', 'Design systems', 'Usability testing', 'Brand identity design'],
    useCases: ['Complete rebrand for a leadership organization', 'Design system for a SaaS platform', 'Mobile app UX overhaul reducing churn by 40%']
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    shortDescription: 'Scalable infrastructure and deployment pipelines.',
    icon: '☁️',
    description: [
      'We architect and manage cloud infrastructure that scales with your business on AWS, Google Cloud, and Azure.',
      'Our DevOps practices include CI/CD pipelines, container orchestration, and infrastructure as code.',
      'We ensure 99.9% uptime with monitoring, alerting, and automated recovery systems.',
      'Security is built into every layer with encryption, access controls, and compliance frameworks.'
    ],
    features: ['AWS/GCP/Azure setup', 'CI/CD pipelines', 'Docker & Kubernetes', 'Infrastructure as Code', 'Monitoring & alerting'],
    useCases: ['Migration of legacy systems to cloud', 'Auto-scaling setup for an exam platform', 'Multi-region deployment for a fintech startup']
  },
  {
    slug: 'data-analytics',
    title: 'Data & Analytics',
    shortDescription: 'Turn your data into actionable insights.',
    icon: '📊',
    description: [
      'We help organizations make data-driven decisions with custom analytics solutions and dashboards.',
      'From data pipeline architecture to visualization, we transform raw data into strategic insights.',
      'Our team builds ETL processes, data warehouses, and real-time analytics platforms.',
      'We specialize in predictive analytics and machine learning models for business forecasting.'
    ],
    features: ['Custom dashboards', 'ETL pipelines', 'Data visualization', 'Predictive analytics', 'Business intelligence'],
    useCases: ['Student performance analytics for universities', 'Sales forecasting for e-commerce', 'Real-time operational metrics dashboard']
  },
  {
    slug: 'it-consulting',
    title: 'IT Consulting',
    shortDescription: 'Strategic tech advisory for growing organizations.',
    icon: '💡',
    description: [
      'We provide strategic technology consulting to help organizations navigate digital transformation.',
      'Our advisors bring decades of combined experience in enterprise technology and startup ecosystems.',
      'We assess your current technology stack, identify opportunities, and create actionable roadmaps.',
      'From vendor selection to architecture reviews, we ensure your technology investments deliver ROI.'
    ],
    features: ['Technology audits', 'Digital transformation roadmaps', 'Vendor selection', 'Architecture reviews', 'Team training & workshops'],
    useCases: ['Digital transformation for a government agency', 'Tech stack evaluation for a growing startup', 'IT strategy for a multi-branch organization']
  }
];

export const projects: Project[] = [
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
    team: ['Victor Dravi', 'Brian Ochieng', 'Grace Muthoni'],
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
    team: ['Victor Dravi', 'Alex Kimani'],
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
    team: ['Grace Muthoni', 'Victor Dravi'],
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
    team: ['Grace Muthoni', 'Sarah Njeri'],
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
    team: ['Victor Dravi', 'Brian Ochieng', 'Alex Kimani'],
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
    team: ['Victor Dravi'],
    images: ['https://placehold.co/800x400/0d1b4b/c9a94f?text=Template', 'https://placehold.co/800x400/0d1b4b/c9a94f?text=Generated', 'https://placehold.co/800x400/0d1b4b/c9a94f?text=Email']
  }
];

export const team: TeamMember[] = [
  { name: 'Victor Dravi', role: 'CEO & Lead Engineer', sector: 'Strategy', initials: 'VD', bio: 'Visionary technologist leading DravTech\'s mission to build impactful digital solutions across Africa.' },
  { name: 'Brian Ochieng', role: 'Software Engineer', sector: 'Backend', initials: 'BO', bio: 'Backend specialist with expertise in scalable APIs, microservices, and database architecture.' },
  { name: 'Alex Kimani', role: 'Software Engineer', sector: 'Frontend', initials: 'AK', bio: 'Frontend craftsman passionate about pixel-perfect interfaces and seamless user interactions.' },
  { name: 'James Mutua', role: 'Software Engineer', sector: 'Full-stack / DevOps', initials: 'JM', bio: 'Full-stack engineer and DevOps lead ensuring our systems run smoothly at scale.' },
  { name: 'Grace Muthoni', role: 'UI/UX Designer', sector: 'UI / Brand', initials: 'GM', bio: 'Creative designer who transforms complex problems into elegant, intuitive interfaces.' },
  { name: 'Sarah Njeri', role: 'Marketing Lead', sector: 'Growth / Content', initials: 'SN', bio: 'Growth strategist driving DravTech\'s brand presence and client acquisition.' }
];

export const products: Product[] = [
  {
    slug: 'ui-component-kit',
    name: 'UI Component Kit',
    creator: 'Grace Muthoni',
    creatorRole: 'UI/UX Designer',
    category: 'Digital Products',
    price: 1200,
    priceType: 'one-time',
    description: [
      'A comprehensive UI component library built with React and Tailwind CSS, featuring 50+ production-ready components.',
      'Every component is fully responsive, accessible, and customizable. Dark mode support included out of the box.',
      'Perfect for startups and teams who want to ship beautiful interfaces faster without reinventing the wheel.',
      'Includes buttons, forms, modals, navigation, cards, tables, charts, and much more.'
    ],
    images: ['https://placehold.co/800x400/0d1b4b/c9a94f?text=Components', 'https://placehold.co/800x400/0d1b4b/c9a94f?text=Dark+Mode', 'https://placehold.co/800x400/0d1b4b/c9a94f?text=Forms']
  },
  {
    slug: 'brand-identity-template',
    name: 'Brand Identity Template',
    creator: 'Grace Muthoni',
    creatorRole: 'UI/UX Designer',
    category: 'Digital Products',
    price: 800,
    priceType: 'subscription',
    description: [
      'A complete brand identity starter kit with customizable templates for logos, color palettes, typography, and guidelines.',
      'Designed in Figma with fully editable components and auto-layout for easy customization.',
      'Includes social media templates, business card designs, and letterhead layouts.',
      'Perfect for startups and small businesses building their brand from scratch.'
    ],
    images: ['https://placehold.co/800x400/0d1b4b/c9a94f?text=Brand+Kit', 'https://placehold.co/800x400/0d1b4b/c9a94f?text=Logo+Variants'],
    plans: [
      { name: 'Basic', price: 800, features: ['Logo templates', 'Color palette generator', 'Typography guide', 'Email support'] },
      { name: 'Pro', price: 1500, features: ['Everything in Basic', 'Social media templates', 'Business card designs', 'Letterhead layouts', 'Priority support'] },
      { name: 'Enterprise', price: 3000, features: ['Everything in Pro', 'Custom brand consultation', 'Unlimited revisions', 'Brand strategy session', 'Dedicated designer'] }
    ]
  },
  {
    slug: 'dev-starter-kit',
    name: 'DravTech Dev Starter Kit',
    creator: 'Brian Ochieng',
    creatorRole: 'Software Engineer',
    category: 'Digital Products',
    price: 500,
    priceType: 'subscription',
    description: [
      'A production-ready starter template with Next.js, TypeScript, Prisma, and authentication pre-configured.',
      'Skip weeks of boilerplate setup and start building your application logic immediately.',
      'Includes database migrations, API routes, authentication flows, and deployment configs.',
      'Battle-tested architecture used in multiple DravTech client projects.'
    ],
    images: ['https://placehold.co/800x400/0d1b4b/c9a94f?text=Starter+Kit', 'https://placehold.co/800x400/0d1b4b/c9a94f?text=Architecture'],
    plans: [
      { name: 'Basic', price: 500, features: ['Next.js template', 'TypeScript config', 'Basic auth', 'Community support'] },
      { name: 'Pro', price: 1200, features: ['Everything in Basic', 'Prisma + DB setup', 'Payment integration', 'Email templates', 'Priority support'] },
      { name: 'Enterprise', price: 2500, features: ['Everything in Pro', 'Multi-tenancy', 'Admin dashboard', 'CI/CD pipeline', '1-on-1 setup call'] }
    ]
  },
  {
    slug: 'api-boilerplate',
    name: 'API Integration Boilerplate',
    creator: 'Alex Kimani',
    creatorRole: 'Software Engineer',
    category: 'Digital Products',
    price: 2000,
    priceType: 'one-time',
    description: [
      'A collection of ready-to-use API integration modules for popular services like M-Pesa, Stripe, SendGrid, and more.',
      'Each module includes TypeScript types, error handling, retry logic, and comprehensive documentation.',
      'Copy-paste ready code that saves days of integration work on every project.',
      'Regularly updated to match the latest API versions and best practices.'
    ],
    images: ['https://placehold.co/800x400/0d1b4b/c9a94f?text=API+Kit', 'https://placehold.co/800x400/0d1b4b/c9a94f?text=Integrations']
  },
  {
    slug: 'tech-poster-set',
    name: 'Abstract Tech Poster Set',
    creator: 'Grace Muthoni',
    creatorRole: 'UI/UX Designer',
    category: 'Artwork',
    price: 600,
    priceType: 'one-time',
    description: [
      'A curated collection of 5 abstract technology-inspired art prints in high resolution.',
      'Featuring geometric patterns, circuit-inspired designs, and futuristic compositions.',
      'Available in multiple sizes for office walls, meeting rooms, or your home workspace.',
      'Each poster is delivered as a high-resolution PDF and PNG file ready for printing.'
    ],
    images: ['https://placehold.co/800x400/0d1b4b/c9a94f?text=Poster+1', 'https://placehold.co/800x400/0d1b4b/c9a94f?text=Poster+2']
  },
  {
    slug: 'dravtech-tee',
    name: 'DravTech Logo Tee',
    creator: 'Sarah Njeri',
    creatorRole: 'Marketing Lead',
    category: 'Merchandise',
    price: 1500,
    priceType: 'one-time',
    description: [
      'Premium quality cotton t-shirt featuring the DravTech logo in gold on a dark navy base.',
      'Available in sizes S through XXL with a modern unisex fit.',
      'Made from 100% combed ring-spun cotton for maximum comfort.',
      'Screen-printed with eco-friendly inks that last wash after wash.'
    ],
    images: ['https://placehold.co/800x400/0d1b4b/c9a94f?text=Tee+Front', 'https://placehold.co/800x400/0d1b4b/c9a94f?text=Tee+Back']
  },
  {
    slug: 'dravtech-mug',
    name: 'DravTech Mug',
    creator: 'Sarah Njeri',
    creatorRole: 'Marketing Lead',
    category: 'Merchandise',
    price: 800,
    priceType: 'one-time',
    description: [
      'A sleek ceramic mug with the DravTech logo and a motivational developer quote.',
      'Holds 350ml of your favorite beverage — perfect for those long coding sessions.',
      'Dishwasher and microwave safe with a premium matte finish.',
      'The perfect desk companion for any developer or tech enthusiast.'
    ],
    images: ['https://placehold.co/800x400/0d1b4b/c9a94f?text=Mug+Side', 'https://placehold.co/800x400/0d1b4b/c9a94f?text=Mug+Top']
  },
  {
    slug: 'social-media-playbook',
    name: 'Social Media Growth Playbook',
    creator: 'Sarah Njeri',
    creatorRole: 'Marketing Lead',
    category: 'Digital Products',
    price: 300,
    priceType: 'subscription',
    description: [
      'A comprehensive guide to growing your tech brand on social media with proven strategies.',
      'Covers content calendars, engagement tactics, analytics tracking, and paid advertising basics.',
      'Updated monthly with new trends, algorithm changes, and case studies from real campaigns.',
      'Includes ready-to-use templates for posts, stories, and campaigns.'
    ],
    images: ['https://placehold.co/800x400/0d1b4b/c9a94f?text=Playbook', 'https://placehold.co/800x400/0d1b4b/c9a94f?text=Templates'],
    plans: [
      { name: 'Basic', price: 300, features: ['Monthly playbook PDF', 'Content calendar template', 'Basic analytics guide', 'Email support'] },
      { name: 'Pro', price: 700, features: ['Everything in Basic', 'Video tutorials', 'Live monthly Q&A', 'Post templates pack', 'Priority support'] },
      { name: 'Enterprise', price: 1500, features: ['Everything in Pro', 'Custom strategy session', 'Brand audit', 'Competitor analysis', 'Dedicated consultant'] }
    ]
  }
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
