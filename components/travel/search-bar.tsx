'use client'

import { useState, type ReactNode } from 'react'
import { CalendarDays, ChevronDown, MapPin, Search, UsersRound } from 'lucide-react'
import { cn } from '@/lib/utils'

const DESTINATIONS = ['瑞士', '马尔代夫', '法国', '日本', '冰岛', '新西兰', '意大利', '泰国']
const PEOPLE = ['1人', '2人', '3人', '4人', '5人', '6人以上']

function Field({
  icon,
  label,
  htmlFor,
  children,
  className,
}: {
  icon: ReactNode
  label: string
  htmlFor: string
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'group relative flex flex-1 items-center gap-3 rounded-2xl px-5 py-3 transition-colors duration-300 hover:bg-white/5 md:rounded-full',
        className,
      )}
    >
      <span className="text-white/90 transition-colors group-hover:text-gold-light" aria-hidden="true">
        {icon}
      </span>
      <div className="relative flex min-w-0 flex-1 flex-col">
        <label htmlFor={htmlFor} className="text-sm text-white">
          {label}
        </label>
        {children}
      </div>
      <ChevronDown className="pointer-events-none size-4 shrink-0 text-white/60" aria-hidden="true" />
    </div>
  )
}

const controlClass =
  'w-full cursor-pointer appearance-none bg-transparent pt-0.5 text-xs text-white/60 focus:text-white focus:outline-none'

export function SearchBar() {
  const [destination, setDestination] = useState('')
  const [date, setDate] = useState('')
  const [people, setPeople] = useState('1人')
  const [searched, setSearched] = useState(false)

  return (
    <form
      role="search"
      aria-label="行程搜索"
      onSubmit={(e) => {
        e.preventDefault()
        setSearched(true)
        document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })
      }}
      className="glass flex w-full max-w-[740px] flex-col gap-1 rounded-3xl p-2 md:flex-row md:items-center md:rounded-full"
    >
      <Field icon={<MapPin className="size-5" />} label="目的地" htmlFor="search-destination">
        <select
          id="search-destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className={cn(controlClass, destination && 'text-white')}
        >
          <option value="" className="bg-[#101a2c]">
            请选择目的地
          </option>
          {DESTINATIONS.map((d) => (
            <option key={d} value={d} className="bg-[#101a2c]">
              {d}
            </option>
          ))}
        </select>
      </Field>

      <span className="hidden h-8 w-px bg-white/15 md:block" aria-hidden="true" />

      <Field icon={<CalendarDays className="size-5" />} label="出行日期" htmlFor="search-date">
        <div className="relative">
          <span className={cn('block pt-0.5 text-xs', date ? 'text-white' : 'text-white/60')} aria-hidden="true">
            {date || '请选择日期'}
          </span>
          <input
            id="search-date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="absolute inset-0 cursor-pointer opacity-0"
          />
        </div>
      </Field>

      <span className="hidden h-8 w-px bg-white/15 md:block" aria-hidden="true" />

      <Field icon={<UsersRound className="size-5" />} label="旅行人数" htmlFor="search-people">
        <select
          id="search-people"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          className={cn(controlClass, 'text-white/80')}
        >
          {PEOPLE.map((p) => (
            <option key={p} value={p} className="bg-[#101a2c]">
              {p}
            </option>
          ))}
        </select>
      </Field>

      <button
        type="submit"
        className="bg-gold-gradient group relative mt-1 flex h-14 shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full px-8 text-base font-medium text-[#2a1b07] shadow-[0_6px_24px_rgba(230,189,116,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(230,189,116,0.6)] active:translate-y-0 md:mt-0"
      >
        <span
          className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/40 transition-transform duration-700 group-hover:translate-x-[400%]"
          aria-hidden="true"
        />
        <Search className="size-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
        开始探索
      </button>

      <p className="sr-only" aria-live="polite">
        {searched ? `正在搜索${destination || '全部目的地'}，${people}出行` : ''}
      </p>
    </form>
  )
}
