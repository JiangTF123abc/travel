import Link from 'next/link'

export function Logo() {
  return (
    <Link href="#top" className="group flex items-center gap-3" aria-label="TravelWorld 首页">
      <svg
        viewBox="0 0 48 28"
        className="h-7 w-12 transition-transform duration-500 group-hover:scale-105"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logo-gold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fbe7bd" />
            <stop offset="100%" stopColor="#c08a42" />
          </linearGradient>
        </defs>
        <path d="M1 27 L17 6 L24 15 L31 8 L47 27 Z" fill="none" stroke="url(#logo-gold)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M17 6 L13 14 L17 12 L20 16 Z" fill="url(#logo-gold)" />
        <path d="M31 8 L28 14 L31 12.5 L34 15 Z" fill="url(#logo-gold)" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-lg font-semibold tracking-wide text-white">TravelWorld</span>
        <span className="mt-1 text-[10px] tracking-wider text-white/60">Explore More · Discover More</span>
      </span>
    </Link>
  )
}
