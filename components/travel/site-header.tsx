'use client'

import { useEffect, useState } from 'react'
import { Menu, Search, UserRound, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from './logo'

const NAV_ITEMS = [
  { label: '首页', href: '#top' },
  { label: '目的地', href: '#destinations' },
  { label: '旅游攻略', href: '#features' },
  { label: '热门路线', href: '#stats' },
  { label: '关于我们', href: '#footer' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('首页')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled ? 'border-b border-white/10 bg-[#070d18]/70 backdrop-blur-xl' : 'bg-gradient-to-b from-black/50 to-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 md:h-[72px] md:px-8">
        <Logo />
        <span className="hidden h-8 w-px bg-white/15 lg:block" aria-hidden="true" />

        <nav aria-label="主导航" className="hidden flex-1 lg:block">
          <ul className="flex items-center gap-10 pl-6">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.label
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setActive(item.label)}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'relative py-6 text-sm transition-colors duration-300',
                      isActive ? 'text-gold-light' : 'text-white/85 hover:text-gold-light',
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        'absolute inset-x-[-10px] bottom-2 mx-auto h-[2px] rounded-full bg-gold-gradient shadow-[0_0_10px_rgba(230,189,116,0.8)] transition-transform duration-300',
                        isActive ? 'scale-x-100' : 'scale-x-0',
                      )}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3 md:gap-4">
          <form
            role="search"
            onSubmit={(e) => e.preventDefault()}
            className="glass hidden h-9 items-center rounded-full pl-4 pr-1 md:flex"
          >
            <label htmlFor="nav-search" className="sr-only">
              搜索目的地
            </label>
            <input
              id="nav-search"
              type="search"
              placeholder="搜索目的地..."
              className="w-36 bg-transparent text-xs text-white placeholder:text-white/55 focus:outline-none xl:w-44"
            />
            <button
              type="submit"
              aria-label="搜索"
              className="grid size-7 place-items-center rounded-full text-white/80 transition-colors hover:text-gold-light"
            >
              <Search className="size-4" />
            </button>
          </form>

          <a
            href="#"
            className="bg-gold-gradient hidden h-9 items-center rounded-full px-5 text-sm font-medium text-[#2a1b07] shadow-[0_4px_20px_rgba(230,189,116,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(230,189,116,0.55)] sm:inline-flex"
          >
            登录 / 注册
          </a>

          <a
            href="#"
            aria-label="个人中心"
            className="grid size-9 place-items-center rounded-full border border-white/60 text-white transition-all duration-300 hover:border-gold hover:text-gold-light"
          >
            <UserRound className="size-5" />
          </a>

          <button
            type="button"
            aria-label={open ? '关闭菜单' : '打开菜单'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-full text-white lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          'overflow-hidden border-white/10 bg-[#070d18]/95 backdrop-blur-xl transition-[max-height] duration-500 lg:hidden',
          open ? 'max-h-96 border-t' : 'max-h-0',
        )}
      >
        <ul className="flex flex-col px-4 py-3">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => {
                  setActive(item.label)
                  setOpen(false)
                }}
                className={cn(
                  'block rounded-lg px-3 py-3 text-sm',
                  active === item.label ? 'bg-white/5 text-gold-light' : 'text-white/85',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-2 sm:hidden">
            <a href="#" className="bg-gold-gradient block rounded-full py-2.5 text-center text-sm font-medium text-[#2a1b07]">
              登录 / 注册
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
