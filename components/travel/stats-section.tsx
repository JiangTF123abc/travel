'use client'

import { useEffect, useRef, useState } from 'react'
import { MapPin, Route, ThumbsUp, UsersRound } from 'lucide-react'

const STATS = [
  { icon: UsersRound, value: 1000000, suffix: '+', label: '累计服务游客', format: true },
  { icon: MapPin, value: 100, suffix: '+', label: '热门目的地' },
  { icon: Route, value: 10000, suffix: '+', label: '优质旅游路线', format: true },
  { icon: ThumbsUp, value: 99, suffix: '%', label: '用户好评率' },
]

function useCountUp(target: number, start: boolean, duration = 1800) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!start) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target)
      return
    }
    let raf = 0
    const t0 = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1)
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, start, duration])
  return value
}

function StatItem({ stat, start }: { stat: (typeof STATS)[number]; start: boolean }) {
  const n = useCountUp(stat.value, start)
  const Icon = stat.icon
  return (
    <div className="group flex items-center justify-center gap-3 md:gap-4">
      <Icon
        className="size-7 shrink-0 text-gold transition-transform duration-500 group-hover:scale-110 md:size-8"
        strokeWidth={1.75}
        aria-hidden="true"
      />
      <div>
        <p className="font-serif text-2xl font-semibold leading-none text-gold-gradient tabular-nums md:text-3xl">
          {stat.format ? n.toLocaleString('en-US') : n}
          {stat.suffix}
        </p>
        <p className="mt-1.5 text-xs text-white/70">{stat.label}</p>
      </div>
    </div>
  )
}

export function StatsSection() {
  const ref = useRef<HTMLElement>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true)
          el.querySelector('.reveal')?.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats" ref={ref} aria-label="平台数据" className="relative overflow-hidden pb-16 pt-6 md:pb-20">
      <svg
        className="pointer-events-none absolute bottom-0 left-0 h-24 w-1/3 md:h-32"
        viewBox="0 0 400 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 80 L60 50 L110 70 L170 30 L230 75 L300 60 L400 100 L400 120 L0 120 Z" fill="#0d1729" />
        <path d="M0 110 Q 200 70 400 115" stroke="url(#arc-l)" strokeWidth="2" fill="none" />
        <defs>
          <linearGradient id="arc-l" x1="0" x2="1">
            <stop offset="0" stopColor="#e6bd74" stopOpacity="0" />
            <stop offset="0.5" stopColor="#f6dfae" />
            <stop offset="1" stopColor="#e6bd74" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        className="pointer-events-none absolute bottom-0 right-0 h-24 w-1/3 -scale-x-100 md:h-32"
        viewBox="0 0 400 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 80 L60 50 L110 70 L170 30 L230 75 L300 60 L400 100 L400 120 L0 120 Z" fill="#0d1729" />
        <path d="M0 110 Q 200 70 400 115" stroke="url(#arc-l)" strokeWidth="2" fill="none" />
      </svg>

      <div className="reveal mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-y-0">
          {STATS.map((s, i) => (
            <div key={s.label} className={i > 0 ? 'md:border-l md:border-white/20' : ''}>
              <StatItem stat={s} start={start} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
