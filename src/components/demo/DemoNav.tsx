'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, Menu, X, Zap } from 'lucide-react'
import type { DemoTheme } from '@/lib/theme'

interface DemoNavProps {
  businessName: string
  phone: string
  niche: string
  theme: DemoTheme
  emergencyAvailable: boolean
}

const NAV_LINKS = [
  { label: 'Home',     href: ''         },
  { label: 'About',    href: '/about'   },
  { label: 'Services', href: '/services'},
  { label: 'Gallery',  href: '/gallery' },
  { label: 'Reviews',  href: '/reviews' },
  { label: 'FAQ',      href: '/faq'     },
  { label: 'Contact',  href: '/contact' },
]

export default function DemoNav({ businessName, phone, niche, theme, emergencyAvailable }: DemoNavProps) {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const base = `/${niche}`

  return (
    <>
      {/* Emergency bar */}
      {emergencyAvailable && (
        <div className="bg-red-600 text-white text-center py-2 px-4">
          <p className="text-xs font-semibold tracking-wide">
            🚨 24/7 Emergency Service Available — Call{' '}
            <a href={`tel:${phone}`} className="underline font-bold hover:no-underline">
              {phone}
            </a>
          </p>
        </div>
      )}

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-white shadow-md border-b border-gray-100'
            : 'bg-white border-b border-gray-100'
        }`}
      >
        <div className="container-demo flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href={base} className="flex items-center gap-2.5 shrink-0 group">
            <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${theme.accentBg} transition group-hover:brightness-110`}>
              <Zap className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-bold text-gray-900 leading-tight">
              {businessName}
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map(l => (
              <Link
                key={l.href}
                href={`${base}${l.href}`}
                className={`px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right — phone + CTA */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900 transition"
            >
              <Phone className="h-4 w-4" />
              {phone}
            </a>
            <Link
              href={`${base}/quote`}
              className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold transition ${theme.btnPrimary}`}
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile: phone icon + burger */}
          <div className="flex md:hidden items-center gap-2">
            <a href={`tel:${phone}`}
              className={`flex h-9 w-9 items-center justify-center rounded-lg ${theme.accentBg} text-white`}>
              <Phone className="h-4 w-4" />
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition"
              aria-label="Toggle navigation"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 shadow-lg">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map(l => (
                <Link
                  key={l.href}
                  href={`${base}${l.href}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition"
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href={`tel:${phone}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-lg border border-gray-200 text-sm font-semibold text-gray-700"
                >
                  <Phone className="h-4 w-4" /> {phone}
                </a>
                <Link
                  href={`${base}/quote`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-center py-3 rounded-lg text-sm font-semibold transition ${theme.btnPrimary}`}
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
