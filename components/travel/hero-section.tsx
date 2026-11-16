import Image from 'next/image'
import { Plane } from 'lucide-react'
import { SearchBar } from './search-bar'
import { ScrollHint } from './scroll-hint'

export function HeroSection() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate min-h-[640px] md:min-h-[min(100vh,820px)]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="日落时分的雪山湖畔木屋"
          fill
          priority
          sizes="100vw"
          className="animate-hero-zoom object-cover object-[65%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070d18]/85 via-[#070d18]/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#070d18] via-[#070d18]/50 to-transparent" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col px-4 pb-24 pt-28 md:px-8 md:pt-36 lg:pt-40">
        <div className="reveal is-visible max-w-2xl">
          <div className="relative w-fit">
            <p
              className="font-script text-gold-gradient -rotate-6 pl-6 text-4xl leading-none drop-shadow-[0_2px_12px_rgba(230,189,116,0.35)] md:text-6xl"
              aria-hidden="true"
            >
              Travel the World
            </p>
            <svg
              viewBox="0 0 300 40"
              className="absolute -bottom-3 left-4 h-8 w-[115%] text-gold/70"
              fill="none"
              aria-hidden="true"
            >
              <path d="M2 34 C 90 30, 190 18, 296 2" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" />
            </svg>
            <Plane
              className="animate-fly absolute -right-12 -top-4 size-6 text-gold-light md:-right-16 md:size-7"
              aria-hidden="true"
            />
          </div>

          <h1
            id="hero-title"
            className="mt-6 font-serif text-[42px] font-black leading-tight tracking-wide text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] sm:text-6xl lg:text-7xl"
          >
            探索世界
            <span className="mx-2 text-gold-gradient md:mx-3">·</span>
            <span className="text-gold-gradient">遇见未知</span>
          </h1>

          <p className="mt-5 flex items-center gap-4 text-sm text-white/85 md:text-lg">
            <span className="hidden h-px w-10 bg-gradient-to-r from-transparent to-white/70 sm:block" aria-hidden="true" />
            一场说走就走的旅行，开启属于你的精彩旅程
            <span className="hidden h-px w-14 bg-gradient-to-l from-transparent to-white/70 sm:block" aria-hidden="true" />
          </p>
        </div>

        <div className="reveal is-visible mt-10 md:mt-12">
          <SearchBar />
        </div>
      </div>

      <ScrollHint />
    </section>
  )
}
