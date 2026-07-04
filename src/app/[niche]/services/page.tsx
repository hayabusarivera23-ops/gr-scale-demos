import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import {
  Phone, ArrowRight, CheckCircle, Shield, Clock,
  Wrench, Droplets, Flame, AlertTriangle, Gauge, Award,
  Wind, Scissors, User, Thermometer, Zap,
} from 'lucide-react'
import { getDemo, VALID_SLUGS } from '@/lib/demo-registry'
import { getTheme } from '@/lib/theme'
import type { ElementType } from 'react'

export function generateStaticParams() {
  return VALID_SLUGS.map(slug => ({ niche: slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ niche: string }> }): Promise<Metadata> {
  const { niche } = await params
  const cfg = getDemo(niche)
  if (!cfg) return {}
  return {
    title: `Services & Pricing | ${cfg.businessName}`,
    description: `${cfg.businessName} offers professional ${cfg.industry.toLowerCase()} services in ${cfg.city}, FL. View our services, pricing, and get a free estimate today.`,
  }
}

const SERVICE_ICONS: Record<string, ElementType> = {
  'Emergency Plumbing':    AlertTriangle,
  'Drain Cleaning':        Droplets,
  'Water Heater Repair':   Flame,
  'Leak Detection':        Gauge,
  'Toilet Repair':         Wrench,
  'Repiping':              Wrench,
  'Roof Replacement':      Shield,
  'Storm Damage Repair':   AlertTriangle,
  'Roof Repair':           Wrench,
  'New Construction':      Award,
  'Gutters & Downspouts':  Droplets,
  'Roof Inspection':       Gauge,
  'Driveway Cleaning':     Droplets,
  'House Washing':         Droplets,
  'Roof Cleaning':         Droplets,
  'Sidewalk & Patio':      Droplets,
  'Commercial Properties': Award,
  'Fence & Deck Cleaning': Droplets,
  'Weekly Lawn Care':      Gauge,
  'Landscape Design':      Award,
  'Irrigation Systems':    Droplets,
  'Sod Installation':      Wrench,
  'Tree & Shrub Trimming': Wrench,
  'Seasonal Cleanups':     Wrench,
  // HVAC
  'AC Repair':             Thermometer,
  'AC Installation':       Wind,
  'AC Maintenance':        Gauge,
  'Duct Cleaning':         Wind,
  'Commercial HVAC':       Award,
  'Emergency Service':     AlertTriangle,
  // Barbershop
  'Fade & Taper':          Scissors,
  'Classic Haircut':       Scissors,
  'Straight Razor Shave':  User,
  'Beard Trim & Shape':    User,
  'Cut + Beard Combo':     Scissors,
  'Kids Cut (12 & Under)': Zap,
}

// What's included with every service call
const ALWAYS_INCLUDED = [
  'Upfront pricing before any work starts',
  'Licensed & insured technician',
  'No hidden fees or surprise charges',
  'Work area cleaned when we leave',
  'Satisfaction guarantee on all work',
  'Same-day service available',
]

export default async function ServicesPage({ params }: { params: Promise<{ niche: string }> }) {
  const { niche } = await params
  const cfg = getDemo(niche)
  if (!cfg) notFound()

  const theme = getTheme(cfg.primaryColor)
  const base  = `/${niche}`

  return (
    <div>

      {/* ── PAGE HEADER ──────────────────────────────────────────────── */}
      <section className={`bg-gradient-to-br ${theme.heroBg} text-white py-20`}>
        <div className="container-demo">
          <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">What We Offer</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            {cfg.industry} Services & Pricing
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Professional {cfg.industry.toLowerCase()} services for homeowners and businesses in {cfg.city} and Greater Orlando.
            All work is performed by licensed technicians with upfront pricing.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${cfg.phone}`}
              className={`inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold transition ${theme.btnPrimary}`}
            >
              <Phone className="h-5 w-5" /> Call Now — {cfg.phone}
            </a>
            <Link
              href={`${base}/quote`}
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold transition ${theme.btnSecondary}`}
            >
              Get a Free Estimate <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── OFFER BANNER ─────────────────────────────────────────────── */}
      <div className={`${theme.offerBg} py-3 text-center`}>
        <p className="text-white text-sm font-semibold tracking-wide">
          🎁 {cfg.offerLine}
        </p>
      </div>

      {/* ── SERVICES GRID ────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-demo">
          <div className="text-center mb-14">
            <p className={`text-xs font-bold uppercase tracking-widest ${theme.accentText} mb-2`}>Our Services</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              From routine maintenance to emergency repairs, we handle it all. Every job backed by our {cfg.guaranteeText}.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cfg.services.map((s, i) => {
              const Icon = SERVICE_ICONS[s.name] ?? Wrench
              const isEmergency = s.name.toLowerCase().includes('emergency')
              return (
                <div
                  key={s.name}
                  className={`relative rounded-2xl border p-7 shadow-sm hover:shadow-md transition group
                    ${isEmergency ? `${theme.accentBgLight} ${theme.accentBorder}` : 'bg-white border-gray-100 hover:border-gray-200'}`}
                >
                  {isEmergency && (
                    <span className={`absolute top-4 right-4 text-xs font-bold uppercase tracking-wider ${theme.badge} px-2 py-0.5 rounded-full`}>
                      24/7
                    </span>
                  )}
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${theme.iconBg} transition group-hover:scale-105`}>
                    <Icon className={`h-6 w-6 ${theme.iconText}`} />
                  </div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-base font-bold text-gray-900">{s.name}</h3>
                    {s.price && (
                      <span className={`text-sm font-bold ${theme.accentText} shrink-0`}>{s.price}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{s.desc}</p>
                  <Link
                    href={`${base}/quote`}
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold ${theme.accentText} hover:gap-2.5 transition-all`}
                  >
                    Request this service <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── ALWAYS INCLUDED ──────────────────────────────────────────── */}
      <section className={`py-20 ${theme.sectionAlt}`}>
        <div className="container-demo max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className={`text-xs font-bold uppercase tracking-widest ${theme.accentText} mb-2`}>Every Service Call</p>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              What You Always Get
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              No matter how big or small the job — these are standard on every visit. We don&apos;t charge extra for professionalism.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ALWAYS_INCLUDED.map(item => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                <CheckCircle className={`h-5 w-5 mt-0.5 shrink-0 ${theme.iconText}`} />
                <p className="text-sm font-medium text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-demo max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className={`text-xs font-bold uppercase tracking-widest ${theme.accentText} mb-2`}>How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Simple, Stress-Free Process
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '01', icon: Phone,        title: 'Call or Request Online', desc: 'Reach us 24/7 by phone or submit a quote request. We respond within 15 minutes.'    },
              { step: '02', icon: Clock,         title: 'We Book & Confirm',      desc: 'We schedule a window that works for you. You\'ll get a text confirmation and reminder.' },
              { step: '03', icon: Wrench,        title: 'Tech Arrives On Time',   desc: 'Your technician arrives in the window, introduces themselves, and reviews the problem.' },
              { step: '04', icon: CheckCircle,   title: 'Job Done, Guaranteed',   desc: 'We complete the work, walk you through it, and guarantee it. No payment until you\'re happy.' },
            ].map(step => {
              const Icon = step.icon
              return (
                <div key={step.step} className="relative text-center">
                  <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${theme.iconBg}`}>
                    <Icon className={`h-7 w-7 ${theme.iconText}`} />
                  </div>
                  <div className={`absolute top-0 right-0 text-xs font-black ${theme.accentText} opacity-30 text-5xl leading-none`}>
                    {step.step}
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── LICENSE + WARRANTY ───────────────────────────────────────── */}
      <section className={`py-16 ${theme.sectionAlt}`}>
        <div className="container-demo max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
              {[
                { icon: Shield, title: 'Licensed & Insured',    body: cfg.licenseText                           },
                { icon: Award,  title: cfg.guaranteeText,       body: 'Every job we complete is backed by our full satisfaction guarantee. If something isn\'t right, we fix it.' },
                { icon: Clock,  title: cfg.emergencyAvailable ? '24/7 Emergency' : 'Same-Day Service',
                  body: cfg.emergencyAvailable
                    ? 'Emergency calls answered 24/7. We aim to be on-site within 1 hour.'
                    : 'Call before noon and we\'ll be there today in most cases.' },
              ].map(item => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="p-7 text-center">
                    <div className={`mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${theme.iconBg}`}>
                      <Icon className={`h-5 w-5 ${theme.iconText}`} />
                    </div>
                    <p className="text-sm font-bold text-gray-900 mb-1">{item.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────── */}
      <section className={`py-20 bg-gradient-to-br ${theme.heroBg} text-white`}>
        <div className="container-demo text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5">
            Ready to Get Started?
          </h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            Call now or request a free estimate. We serve {cfg.city} and all surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${cfg.phone}`}
              className={`inline-flex items-center gap-2.5 px-10 py-4 rounded-xl text-base font-bold transition ${theme.btnPrimary}`}
            >
              <Phone className="h-5 w-5" /> Call {cfg.phone}
            </a>
            <Link
              href={`${base}/quote`}
              className={`inline-flex items-center gap-2 px-10 py-4 rounded-xl text-base font-semibold transition ${theme.btnSecondary}`}
            >
              Free Estimate Online <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
