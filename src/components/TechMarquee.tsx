const techs = [
  'Next.js', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Prisma',
  'Python', 'Tailwind', 'Figma', 'Docker', 'AWS', 'Vercel',
];

export default function TechMarquee() {
  const items = [...techs, ...techs];
  return (
    <div className="bg-poster-navy/40 border-y border-border py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((t, i) => (
          <span
            key={i}
            className="mx-3 px-4 py-1.5 text-sm font-medium text-primary border border-primary/30 rounded-full shrink-0"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
