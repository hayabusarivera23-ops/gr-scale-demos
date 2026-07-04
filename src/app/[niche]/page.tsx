import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import {
  Phone, ArrowRight, CheckCircle, Shield, Clock, Star,
  Award, Wrench, Droplets, Flame, AlertTriangle, Gauge,
  MapPin, ChevronRight, ThumbsUp, Wind, Scissors, User,
  Thermometer, Zap, Bug, TreePine, Paintbrush, Utensils,
  Sparkles, Layers, CreditCard, FileCheck,
} from 'lucide-react'
import { getDemo, VALID_SLUGS } from '@/lib/demo-registry'
import { getTheme } from '@/lib/theme'
import { Reveal, AnimatedStat, BeforeAfterSlider, StickyCallBar } from '@/components/demo/Premium'
import type { ElementType } from 'react'

export function generateStaticParams() {
  return VALID_SLUGS.map(slug => ({ niche: slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ niche: string }> }): Promise<Metadata> {
  const { niche } = await params
  const cfg = getDemo(niche)
  if (!cfg) return {}
  return { title: cfg.metaTitle, description: cfg.metaDescription }
}

const SERVICE_ICONS: Record<string, ElementType> = {
  // Plumbing
  'Emergency Plumbing':   AlertTriangle,
  'Drain Cleaning':       Droplets,
  'Water Heater Repair':  Flame,
  'Leak Detection':       Gauge,
  'Toilet Repair':        Wrench,
  'Repiping':             Wrench,
  // Roofing
  'Roof Replacement':     Shield,
  'Storm Damage Repair':  AlertTriangle,
  'Roof Repair':          Wrench,
  'New Construction':     Award,
  'Gutters & Downspouts': Droplets,
  'Roof Inspection':      Gauge,
  // Pressure Washing
  'Driveway Cleaning':    Droplets,
  'House Washing':        Droplets,
  'Roof Cleaning':        Droplets,
  'Sidewalk & Patio':     Droplets,
  'Commercial Properties':Award,
  'Fence & Deck Cleaning':Droplets,
  // Landscaping
  'Weekly Lawn Care':     Gauge,
  'Landscape Design':     Award,
  'Irrigation Systems':   Droplets,
  'Sod Installation':     Wrench,
  'Tree & Shrub Trimming':Wrench,
  'Seasonal Cleanups':    Wrench,
  // HVAC
  'AC Repair':            Thermometer,
  'AC Installation':      Wind,
  'AC Maintenance':       Gauge,
  'Duct Cleaning':        Wind,
  'Commercial HVAC':      Award,
  'Emergency Service':    AlertTriangle,
  // Barbershop
  'Fade & Taper':         Scissors,
  'Classic Haircut':      Scissors,
  'Straight Razor Shave': User,
  'Beard Trim & Shape':   User,
  'Cut + Beard Combo':    Scissors,
  'Kids Cut (12 & Under)':Zap,
}

/** Keyword-based icon fallback so NEW niches need zero icon wiring. */
function iconFor(name: string): ElementType {
  if (SERVICE_ICONS[name]) return SERVICE_ICONS[name]
  const n = name.toLowerCase()
  if (/emergency|storm|urgent/.test(n))                return AlertTriangle
  if (/electric|panel|ev |charger|light/.test(n))      return Zap
  if (/pest|termite|roach|rodent|mosquito|ant/.test(n))return Bug
  if (/tree|stump|crane|land clear/.test(n))           return TreePine
  if (/paint|cabinet|color|stain/.test(n))             return Paintbrush
  if (/menu|dining|catering|brunch|dinner|event/.test(n)) return Utensils
  if (/clean|wash|maid|move|sanit/.test(n))            return Sparkles
  if (/floor|hardwood|tile|vinyl|laminate|carpet/.test(n)) return Layers
  if (/water|drain|leak|pipe|sewer|irrigat/.test(n))   return Droplets
  if (/heat|furnace|water heater/.test(n))             return Flame
  if (/inspect|detect|test/.test(n))                   return Gauge
  if (/commercial|design|custom/.test(n))              return Award
  if (/protect|warranty|guarantee|insur/.test(n))      return Shield
  return Wrench
}

export default async function NicheHomePage({ params }: { params: Promise<{ niche: string }> }) {
  const { niche } = await params
  const cfg = getDemo(niche)
  if (!cfg) notFound()

  const theme = getTheme(cfg.primaryColor)
  const base  = `/${niche}`
  const yearsInBusiness = new Date().getFullYear() - cfg.yearEstablished

  return (
    <div>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className={`relative bg-gradient-to-br ${theme.heroBg} text-white overflow-hidden`}>
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />

        <div className="container-demo relative py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-medium text-white/90 mb-6">
              <MapPin className="h-3.5 w-3.5" />
              {cfg.city}, {cfg.stateAbbr} · Serving the Greater Area
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              {cfg.heroHeadline}
            </h1>

            <p className="text-lg sm:text-xl text-white/75 leading-relaxed mb-8 max-w-2xl">
              {cfg.heroSubheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={`tel:${cfg.phone}`}
                className={`inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold transition ${theme.btnPrimary}`}
              >
                <Phone className="h-5 w-5" />
                {cfg.cta}
              </a>
              <Link
                href={`${base}/quote`}
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold transition ${theme.btnSecondary}`}
              >
                Get a Free Estimate <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Trust bar */}
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {[
                { icon: Shield,   text: 'Licensed & Insured'           },
                { icon: Clock,    text: cfg.emergencyAvailable ? '24/7 Emergency Service' : 'Same-Day Service' },
                { icon: Star,     text: '5.0 Stars · 100+ Reviews'     },
                { icon: Award,    text: cfg.guaranteeText               },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-white/70">
                  <Icon className="h-4 w-4 text-white/40 shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFER STRIP ──────────────────────────────────────────────── */}
      <div className={`${theme.offerBg} py-3 text-center`}>
        <p className="text-white text-sm font-semibold tracking-wide">
          🎁 {cfg.offerLine}
        </p>
      </div>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container-demo">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon:  Shield,
                title: 'Licensed & Insured',
                desc:  `${cfg.licenseText}. Every technician is background-checked and drug-tested for your protection.`,
              },
              {
                icon:  Clock,
                title: cfg.emergencyAvailable ? '24/7 Availability' : 'Fast Response',
                desc:  cfg.emergencyAvailable
                  ? 'We answer calls around the clock. Emergency calls dispatched within 15 minutes, on site within 1 hour.'
                  : 'Same-day and next-day appointments available. We show up on time, every time — or we call you.',
              },
              {
                icon:  ThumbsUp,
                title: 'Upfront Pricing',
                desc:  'We give you the full price before we start. No surprise charges, no hidden fees. What we quote is what you pay.',
              },
              {
                icon:  Award,
                title: cfg.guaranteeText,
                desc:  `${yearsInBusiness}+ years serving ${cfg.city}. If you\'re not completely satisfied, we make it right — no questions asked.`,
              },
            ].map(item => {
              const Icon = item.icon
              return (
                <div key={item.title} className="text-center p-6">
                  <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${theme.iconBg}`}>
                    <Icon className={`h-7 w-7 ${theme.iconText}`} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ────────────────────────────────────────── */}
      <section className={`py-20 ${theme.sectionAlt}`}>
        <div className="container-demo">
          <div className="text-center mb-14">
            <p className={`text-xs font-bold uppercase tracking-widest ${theme.accentText} mb-2`}>What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Professional service on every job. We handle everything from emergency calls to full system replacements.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cfg.services.map(s => {
              const Icon = iconFor(s.name)
              return (
                <div key={s.name}
                  className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-gray-200 transition group">
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${theme.iconBg} transition group-hover:scale-105`}>
                    <Icon className={`h-6 w-6 ${theme.iconText}`} />
                  </div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-base font-bold text-gray-900">{s.name}</h3>
                    {s.price && (
                      <span className={`text-xs font-bold ${theme.accentText} whitespace-nowrap shrink-0`}>
                        {s.price}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                  <Link
                    href={`${base}/services`}
                    className={`inline-flex items-center gap-1 text-xs font-semibold ${theme.accentText} hover:gap-2 transition-all`}
                  >
                    Learn more <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              href={`${base}/services`}
              className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold transition ${theme.btnPrimary}`}
            >
              View All Services & Pricing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-demo">
          <div className="grid gap-14 lg:grid-cols-2 items-center">
            {/* Animated stats */}
            <div className="grid grid-cols-2 gap-5">
              {(cfg.stats ?? [
                { value: yearsInBusiness, suffix: '+',  label: `Years serving ${cfg.city}` },
                { value: 500,             suffix: '+',  label: 'Jobs completed' },
                { value: 5,               suffix: '.0★', label: 'Average Google rating' },
                { value: 100,             suffix: '%',  label: 'Satisfaction guaranteed' },
              ]).map(s => (
                <AnimatedStat key={s.label} value={s.value} suffix={s.suffix} label={s.label}
                  accentClass={theme.accentText} bgClass={theme.accentBgLight} />
              ))}
            </div>

            {/* Copy */}
            <div>
              <p className={`text-xs font-bold uppercase tracking-widest ${theme.accentText} mb-3`}>About Us</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
                {cfg.city}&apos;s Trusted {cfg.industry} Team Since {cfg.yearEstablished}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {cfg.businessName} was founded in {cfg.yearEstablished} with one goal: provide honest,
                reliable {cfg.industry.toLowerCase()} service to homeowners and businesses in {cfg.city}
                and surrounding areas. We believe in treating every job — big or small — with the same
                level of care and professionalism.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We hold a Florida {cfg.industry} license and carry full liability and workers&apos;
                compensation insurance on every job. When we arrive at your home, you can trust that
                the technician you meet is trained, background-checked, and focused on solving your
                problem the right way the first time.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  'Fully licensed & insured in Florida',
                  'Background-checked, drug-tested technicians',
                  'Upfront pricing — no surprise bills',
                  `Serving ${cfg.city} for ${yearsInBusiness}+ years`,
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className={`h-5 w-5 ${theme.iconText} shrink-0`} />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href={`${base}/about`}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition ${theme.btnPrimary}`}
              >
                Learn More About Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section className={`py-20 ${theme.sectionAlt}`}>
        <div className="container-demo">
          <div className="text-center mb-14">
            <p className={`text-xs font-bold uppercase tracking-widest ${theme.accentText} mb-2`}>Reviews</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-1.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-sm text-gray-500">5.0 · 100+ Google reviews</span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {cfg.testimonials.map(t => (
              <div key={t.name}
                className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm flex flex-col gap-5">
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed text-sm flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href={`${base}/reviews`}
              className={`inline-flex items-center gap-2 text-sm font-semibold ${theme.accentText} hover:underline`}
            >
              Read all reviews <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS TIMELINE (flagship) ──────────────────────────────── */}
      {cfg.process && (
        <section className="py-20 bg-white">
          <div className="container-demo">
            <Reveal>
              <div className="text-center mb-14">
                <p className={`text-xs font-bold uppercase tracking-widest ${theme.accentText} mb-2`}>How It Works</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                  From First Call to Job Done
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                  No runaround, no surprises. Here&apos;s exactly what happens when you call us.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {cfg.process.map((step, i) => (
                <Reveal key={step.title} delay={i * 120}>
                  <div className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm h-full">
                    <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${theme.iconBg}`}>
                      <span className={`text-lg font-black ${theme.iconText}`}>{i + 1}</span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                    {i < (cfg.process?.length ?? 0) - 1 && (
                      <ChevronRight className="hidden lg:block absolute top-1/2 -right-4 h-5 w-5 text-gray-300" />
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BEFORE / AFTER (interactive) ─────────────────────────────── */}
      {cfg.gallery.length > 0 && (
        <section className={`py-20 ${theme.sectionAlt}`}>
          <div className="container-demo">
            <Reveal>
              <div className="text-center mb-14">
                <p className={`text-xs font-bold uppercase tracking-widest ${theme.accentText} mb-2`}>Our Work</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                  See the Difference — Drag to Compare
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                  Real projects, real results. Slide the handle to see the transformation.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              {cfg.gallery.slice(0, 3).map((g, i) => (
                <Reveal key={g.label} delay={i * 120}>
                  <BeforeAfterSlider
                    label={g.label}
                    desc={g.desc}
                    beforeClass={g.before ?? 'bg-gray-800'}
                    afterClass={g.after ?? 'bg-slate-900'}
                    accentBg={cfg.bgAccentClass}
                  />
                </Reveal>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href={`${base}/gallery`}
                className={`inline-flex items-center gap-2 text-sm font-semibold ${theme.accentText} hover:underline`}>
                View the full gallery <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── HIGHLIGHT (insurance claims / guarantee / packages) ──────── */}
      {cfg.highlight && (
        <section className="py-20 bg-white">
          <div className="container-demo">
            <div className={`rounded-3xl ${theme.accentBgLight} p-8 md:p-14 grid gap-10 lg:grid-cols-2 items-center`}>
              <div>
                <p className={`text-xs font-bold uppercase tracking-widest ${theme.accentText} mb-3 flex items-center gap-2`}>
                  <FileCheck className="h-4 w-4" /> {cfg.highlight.tag}
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">{cfg.highlight.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{cfg.highlight.body}</p>
                <a href={`tel:${cfg.phone}`}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition ${theme.btnPrimary}`}>
                  <Phone className="h-4 w-4" /> Talk to Us — {cfg.phone}
                </a>
              </div>
              <div className="flex flex-col gap-4">
                {cfg.highlight.bullets.map(b => (
                  <div key={b} className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 shadow-sm px-5 py-4">
                    <CheckCircle className={`h-5 w-5 ${theme.iconText} shrink-0 mt-0.5`} />
                    <span className="text-sm text-gray-700 leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── FINANCING ────────────────────────────────────────────────── */}
      {cfg.financing && (
        <section className={`py-20 ${theme.sectionAlt}`}>
          <div className="container-demo text-center max-w-3xl mx-auto">
            <div className={`mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${theme.iconBg}`}>
              <CreditCard className={`h-7 w-7 ${theme.iconText}`} />
            </div>
            <p className={`text-xs font-bold uppercase tracking-widest ${theme.accentText} mb-2`}>Financing Available</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">{cfg.financing.headline}</h2>
            <p className="text-gray-600 leading-relaxed mb-8">{cfg.financing.body}</p>
            <div className="grid gap-4 sm:grid-cols-3 mb-8">
              {cfg.financing.points.map(p => (
                <div key={p} className="bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-5">
                  <p className="text-sm font-semibold text-gray-800">{p}</p>
                </div>
              ))}
            </div>
            <Link href={`${base}/quote`}
              className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold transition ${theme.btnPrimary}`}>
              Check Your Options <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="text-xs text-gray-400 mt-4">Subject to credit approval. No impact to check your rate.</p>
          </div>
        </section>
      )}

      {/* ── SERVICE AREA + MAP ───────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-demo">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className={`text-xs font-bold uppercase tracking-widest ${theme.accentText} mb-3`}>Service Area</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
                Proudly Serving Greater {cfg.city}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We serve homeowners and businesses throughout {cfg.city} and all surrounding communities.
                Our team is local, fast, and familiar with the specific needs of {cfg.stateAbbr} properties.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {(cfg.serviceAreas ?? [
                  cfg.city,
                  'Kissimmee', 'Winter Park', 'Sanford',
                  'Oviedo', 'Altamonte Springs',
                  'Lake Mary', 'Longwood',
                ]).map(area => (
                  <div key={area} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className={`h-4 w-4 ${theme.iconText} shrink-0`} />
                    {area}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Don&apos;t see your city? Call us — we likely serve your area.
              </p>
            </div>

            {/* Google Map */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-md" style={{ height: 360 }}>
              <iframe
                src={cfg.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${cfg.businessName} service area`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────── */}
      <section className={`py-20 bg-gradient-to-br ${theme.heroBg} text-white`}>
        <div className="container-demo text-center max-w-3xl mx-auto">
          {cfg.emergencyAvailable && (
            <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6">
              🚨 Emergency Service Available 24/7
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5">
            Need {cfg.industry} Service Today?
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Call now or request a free estimate online. We respond fast, show up on time, and get the job done right.
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
              Request Free Estimate <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <p className="text-white/40 text-xs mt-6">
            {cfg.licenseText} · Serving {cfg.city}, {cfg.stateAbbr}
          </p>
        </div>
      </section>

      {/* ── STICKY MOBILE CALL BAR ───────────────────────────────────── */}
      <StickyCallBar
        phone={cfg.phone}
        cta="Call Now"
        quoteHref={`${base}/quote`}
        btnPrimary={theme.btnPrimary}
      />

    </div>
  )
}
