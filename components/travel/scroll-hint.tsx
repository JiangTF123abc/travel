import { ChevronDown } from 'lucide-react'

export function ScrollHint() {
  return (
    <a
      href="#features"
      className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/85 transition-colors hover:text-gold-light md:flex"
    >
      <span className="flex items-center gap-3 text-xs">
        <span className="flex h-7 w-[18px] justify-center rounded-full border border-white/70 pt-1.5" aria-hidden="true">
          <span className="animate-scroll-dot h-1.5 w-[3px] rounded-full bg-white" />
        </span>
        向下滚动，发现更多
      </span>
      <ChevronDown className="animate-float-down size-4" aria-hidden="true" />
    </a>
  )
}
