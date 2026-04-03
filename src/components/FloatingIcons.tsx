const icons = [
  // code brackets
  <svg key="code" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  // database
  <svg key="db" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
  // cloud
  <svg key="cloud" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>,
  // shield
  <svg key="shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  // terminal
  <svg key="term" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>,
];

const positions = [
  { top: '8%', left: '5%', delay: '0s', dur: '7s' },
  { top: '15%', right: '8%', delay: '1.2s', dur: '6s' },
  { bottom: '20%', left: '3%', delay: '2.4s', dur: '8s' },
  { bottom: '10%', right: '5%', delay: '0.8s', dur: '6.5s' },
  { top: '50%', right: '2%', delay: '1.8s', dur: '7.5s' },
];

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
      {icons.map((icon, i) => {
        const pos = positions[i];
        return (
          <div
            key={i}
            className="absolute w-12 h-12 text-primary"
            style={{
              ...pos,
              opacity: 0.05,
              animation: `floatIcon ${pos.dur} ease-in-out infinite`,
              animationDelay: pos.delay,
            } as React.CSSProperties}
          >
            {icon}
          </div>
        );
      })}
    </div>
  );
}
