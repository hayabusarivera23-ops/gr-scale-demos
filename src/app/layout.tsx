import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Demo Gallery — GR Scale',
  description: 'Production-quality demo websites for local service businesses.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  )
}
