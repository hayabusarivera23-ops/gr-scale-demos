import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Shield, Star, Zap } from 'lucide-react'
import type { DemoConfig } from '@/lib/types'
import type { DemoTheme } from '@/lib/theme'

interface DemoFooterProps {
  cfg: DemoConfig
  niche: string
  theme: DemoTheme
}

export default function DemoFooter({ cfg, niche, theme }: DemoFooterProps) {
  const base = `/${niche}`
  const year = new Date().getFullYear()

  const QUICK_LINKS = [
    { label: 'Home',        href: base              },
    { label: 'About Us',    href: `${base}/about`   },
    { label: 'Services',    href: `${base}/services`},
    { label: 'Gallery',     href: `${base}/gallery` },
    { label: 'Reviews',     href: `${base}/reviews` },
    { label: 'FAQ',         href: `${base}/faq`     },
    { label: 'Contact',     href: `${base}/contact` },
    { label: 'Free Quote',  href: `${base}/quote`   },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA strip */}
      <div className={`${theme.accentBg} py-6`}>
        <div className="container-demo flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-lg">Ready to Get Started?</p>
            <p className="text-white/80 text-sm">{cfg.offerLine}</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${cfg.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-lg text-sm font-bold text-gray-900 hover:bg-gray-100 transition shadow"
            >
              <Phone className="h-4 w-4" /> {cfg.phone}
            </a>
            <Link
              href={`${base}/quote`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/15 border border-white/30 rounded-lg text-sm font-semibold text-white hover:bg-white/25 transition"
            >
              Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-demo py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${theme.accentBg}`}>
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-base font-bold text-white">{cfg.businessName}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-xs">
              {cfg.tagline}. Licensed and insured, serving {cfg.city} and Greater {cfg.stateAbbr} since {cfg.yearEstablished}.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <Shield className="h-3.5 w-3.5 text-gray-500" /> Licensed & Insured
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" /> 5.0 Rating
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <Clock className="h-3.5 w-3.5 text-gray-500" /> Est. {cfg.yearEstablished}
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-2.5">
              <a href={`tel:${cfg.phone}`}
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition">
                <Phone className="h-4 w-4 shrink-0 text-gray-600" /> {cfg.phone}
              </a>
              <a href={`mailto:${cfg.email}`}
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition">
                <Mail className="h-4 w-4 shrink-0 text-gray-600" /> {cfg.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="h-4 w-4 shrink-0 text-gray-600 mt-0.5" />
                {cfg.address}, {cfg.city}, {cfg.stateAbbr}
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-5">Quick Links</p>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map(l => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="text-sm text-gray-400 hover:text-white transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-5">Services</p>
            <ul className="space-y-2.5">
              {cfg.services.map(s => (
                <li key={s.name}>
                  <Link href={`${base}/services`}
                    className="text-sm text-gray-400 hover:text-white transition">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-gray-600 text-center sm:text-left">
            <p>© {year} {cfg.businessName}. All rights reserved.</p>
            <p className="mt-1">{cfg.licenseText}</p>
          </div>
          <p className="text-xs text-gray-700">
            Website by{' '}
            <a href="https://gr-scale-website.vercel.app" target="_blank" rel="noopener noreferrer"
              className="text-sky-400 hover:underline">
              GR Scale
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
