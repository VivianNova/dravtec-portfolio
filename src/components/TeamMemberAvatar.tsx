import type { TeamMember } from '@/lib/data';

type Props = {
  member: TeamMember;
  size: 'sm' | 'md';
  className?: string;
};

const box = {
  sm: 'w-12 h-12 text-sm',
  md: 'w-20 h-20 sm:w-24 sm:h-24 text-lg',
} as const;

/** Circular avatar: photo or initials fallback */
export default function TeamMemberAvatar({ member, size, className = '' }: Props) {
  const dim = box[size];
  const base = `rounded-full border-2 border-primary/35 overflow-hidden shrink-0 ${dim} ${className}`;

  if (member.image) {
    return (
      <div className={`relative bg-muted ${base}`}>
        <img src={member.image} alt={member.name} className="h-full w-full object-cover" loading="lazy" />
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center bg-primary/15 font-bold text-primary ${base}`} aria-hidden>
      {member.initials}
    </div>
  );
}
