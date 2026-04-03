export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-2">
      <svg width="200" height="20" viewBox="0 0 200 20" className="opacity-40">
        <line x1="0" y1="10" x2="85" y2="10" stroke="hsl(var(--primary))" strokeWidth="1" />
        <polygon points="100,2 108,10 100,18 92,10" fill="hsl(var(--primary))" />
        <line x1="115" y1="10" x2="200" y2="10" stroke="hsl(var(--primary))" strokeWidth="1" />
      </svg>
    </div>
  );
}
