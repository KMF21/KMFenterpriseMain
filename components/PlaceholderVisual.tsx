export default function PlaceholderVisual({
  label,
  className = '',
}: {
  label: string
  className?: string
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-[12px] bg-brand-panel ${className}`}
    >
      <svg
        className="absolute -right-10 -bottom-10 w-[200px] h-[200px] opacity-40"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="85" stroke="#F7AB0A" strokeWidth="1" strokeDasharray="3 8" />
        <circle cx="100" cy="100" r="60" stroke="#F7AB0A" strokeWidth="1" strokeDasharray="2 6" />
        <circle cx="100" cy="100" r="38" stroke="#F7AB0A" strokeWidth="1" />
      </svg>
      <span className="relative z-10 font-mono text-[11px] tracking-[0.1em] uppercase text-brand-gold/80 px-4 text-center">
        {label}
      </span>
    </div>
  )
}