'use client'

import { useEffect, useState } from 'react'
import { ArrowUp, ArrowUpToLine, Headset } from 'lucide-react'
import { cn } from '@/lib/utils'

const btn =
  'glass grid size-11 place-items-center rounded-full text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold-light'

export function FloatingActions() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => window.scrollBy({ top: -window.innerHeight * 0.8, behavior: 'smooth' })
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div
      className={cn(
        'fixed bottom-6 right-4 z-40 flex flex-col gap-3 transition-all duration-500 md:right-6',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      <button type="button" onClick={scrollUp} aria-label="向上滚动" className={btn}>
        <ArrowUp className="size-5" />
      </button>
      <a href="#" aria-label="联系在线客服" className={btn}>
        <Headset className="size-5" />
      </a>
      <button type="button" onClick={toTop} aria-label="返回顶部" className={cn(btn, 'flex flex-col gap-0 text-[10px]')}>
        <ArrowUpToLine className="size-4" aria-hidden="true" />
        <span aria-hidden="true">TOP</span>
      </button>
    </div>
  )
}
