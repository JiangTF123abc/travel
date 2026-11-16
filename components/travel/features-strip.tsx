import { Gem, Globe, Headset, ShieldCheck } from 'lucide-react'
import { Reveal } from './reveal'

const FEATURES = [
  { icon: Globe, title: '全球100+热门目的地', desc: '带你看遍世界' },
  { icon: Gem, title: '专业旅行攻略', desc: '深度玩法推荐' },
  { icon: ShieldCheck, title: '安全保障', desc: '出行无忧' },
  { icon: Headset, title: '24小时客服', desc: '随时为您服务' },
]

export function FeaturesStrip() {
  return (
    <section id="features" aria-label="服务优势" className="relative z-10 -mt-14 md:-mt-12">
      <Reveal>
        <div className="border-y border-white/10 bg-[#0b1424]/45 backdrop-blur-xl">
          <ul className="mx-auto grid max-w-7xl grid-cols-2 px-4 md:px-8 lg:grid-cols-4">
            {FEATURES.map(({ icon: Icon, title, desc }, i) => (
              <li
                key={title}
                className={`group flex items-center justify-center gap-4 py-5 lg:py-6 ${
                  i > 0 ? 'lg:border-l lg:border-white/12' : ''
                } ${i % 2 === 1 ? 'border-l border-white/12 lg:border-l' : ''} ${i < 2 ? 'border-b border-white/10 lg:border-b-0' : ''}`}
              >
                <Icon
                  className="size-7 shrink-0 text-gold transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110 md:size-8"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-xs font-medium text-white sm:text-sm md:text-base">{title}</h3>
                  <p className="mt-0.5 text-[11px] text-white/60 md:text-xs">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
