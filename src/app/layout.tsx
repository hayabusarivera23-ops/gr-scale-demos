import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

// Premium geometric sans — self-hosted by Next, zero layout shift.
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  title: 'Demo Gallery — GR Scale',
  description: 'Production-quality demo websites for local service businesses.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="bg-white text-gray-900" style={{ fontFamily: 'var(--font-jakarta), system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
