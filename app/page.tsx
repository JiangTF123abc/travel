import { SiteHeader } from '@/components/travel/site-header'
import { HeroSection } from '@/components/travel/hero-section'
import { FeaturesStrip } from '@/components/travel/features-strip'
import { DestinationsSection } from '@/components/travel/destinations-section'
import { StatsSection } from '@/components/travel/stats-section'
import { SiteFooter } from '@/components/travel/site-footer'
import { FloatingActions } from '@/components/travel/floating-actions'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="relative overflow-hidden">
        <HeroSection />
        <FeaturesStrip />
        <DestinationsSection />
        <StatsSection />
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  )
}
