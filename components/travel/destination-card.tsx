import Image from 'next/image'
import { ArrowRight, MapPin } from 'lucide-react'

export type Destination = {
  name: string
  tagline: string
  image: string
  alt: string
}

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <a
      href="#"
      className="group relative block aspect-[16/10] overflow-hidden rounded-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_18px_40px_rgba(0,0,0,0.55),0_0_0_1px_rgba(230,189,116,0.25)]"
    >
      <Image
        src={destination.image}
        alt={destination.alt}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-3 md:p-4">
        <div>
          <h3 className="flex items-center gap-1.5 text-base font-medium text-white">
            <MapPin className="size-4" aria-hidden="true" />
            {destination.name}
          </h3>
          <p className="mt-0.5 text-xs text-white/85">{destination.tagline}</p>
        </div>
        <span
          className="grid size-8 shrink-0 place-items-center rounded-full border border-white/70 bg-black/20 text-white backdrop-blur transition-all duration-300 group-hover:border-transparent group-hover:bg-gold group-hover:text-[#2a1b07]"
          aria-hidden="true"
        >
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </div>
      <span className="sr-only">查看{destination.name}详情</span>
    </a>
  )
}
