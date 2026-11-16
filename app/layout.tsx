import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Great_Vibes, Noto_Sans_SC, Noto_Serif_SC } from 'next/font/google'
import './globals.css'

const notoSans = Noto_Sans_SC({
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans',
  preload: false,
  display: 'swap',
})

const notoSerif = Noto_Serif_SC({
  weight: ['600', '900'],
  variable: '--font-noto-serif',
  preload: false,
  display: 'swap',
})

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TravelWorld · 探索世界，遇见未知',
  description:
    '一场说走就走的旅行，开启属于你的精彩旅程。全球 100+ 热门目的地、专业旅行攻略、安全保障与 24 小时客服。',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#070d18',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${notoSans.variable} ${notoSerif.variable} ${greatVibes.variable} bg-background`}
    >
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
