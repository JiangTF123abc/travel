import { ChevronsRight } from 'lucide-react'
import { DestinationCard, type Destination } from './destination-card'
import { Reveal } from './reveal'

const DESTINATIONS: Destination[] = [
  { name: '瑞士', tagline: '阿尔卑斯的纯净之美', image: '/images/switzerland.png', alt: '瑞士阿尔卑斯雪山与松林' },
  { name: '马尔代夫', tagline: '邂逅蓝色的浪漫', image: '/images/maldives.png', alt: '马尔代夫碧蓝泻湖上的水上屋' },
  { name: '法国', tagline: '浪漫之都的永恒魅力', image: '/images/france.png', alt: '日落时分的巴黎埃菲尔铁塔' },
  { name: '日本', tagline: '感受樱花下的诗意', image: '/images/japan.png', alt: '樱花与富士山前的日式五重塔' },
]

export function DestinationsSection() {
  return (
    <section id="destinations" aria-labelledby="destinations-title" className="relative py-14 md:py-16">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(40,60,100,0.35),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-gold">Popular Destinations</p>
            <h2 id="destinations-title" className="mt-1 flex items-center gap-4 font-serif text-2xl font-semibold text-white md:text-3xl">
              精选目的地
              <span className="h-px w-16 bg-gradient-to-r from-gold to-transparent md:w-24" aria-hidden="true" />
            </h2>
          </div>
          <a
            href="#"
            className="group flex items-center gap-1 text-sm text-white/90 transition-colors hover:text-gold-light"
          >
            探索更多目的地
            <ChevronsRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </Reveal>

        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {DESTINATIONS.map((d, i) => (
            <li key={d.name}>
              <Reveal delay={i * 120}>
                <DestinationCard destination={d} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
