import { Mail, MapPin, Phone } from 'lucide-react'
import { Logo } from './logo'

const COLUMNS = [
  { title: '热门目的地', links: ['瑞士', '马尔代夫', '法国', '日本', '冰岛'] },
  { title: '旅行服务', links: ['定制旅行', '跟团游', '自由行', '签证办理', '酒店预订'] },
  { title: '关于我们', links: ['品牌故事', '加入我们', '合作伙伴', '隐私政策', '用户协议'] },
]

export function SiteFooter() {
  return (
    <footer id="footer" className="relative border-t border-white/10 bg-[#050a13]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-gold/70 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1.4fr_repeat(3,1fr)] md:px-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            TravelWorld 致力于为每一位旅行者打造高品质的环球旅程，让世界的美好触手可及。
          </p>
          <ul className="mt-6 space-y-2.5 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-gold" aria-hidden="true" />
              400-888-6666
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-gold" aria-hidden="true" />
              hello@travelworld.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-gold" aria-hidden="true" />
              上海市静安区南京西路 1266 号
            </li>
          </ul>
        </div>

        {COLUMNS.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="font-serif text-base font-semibold text-gold-light">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-white/60 transition-colors hover:text-gold-light">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/45 md:flex-row md:px-8">
          <p>© 2026 TravelWorld. All rights reserved.</p>
          <p>Explore More · Discover More</p>
        </div>
      </div>
    </footer>
  )
}
