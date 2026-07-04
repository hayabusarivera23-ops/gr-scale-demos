import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, ArrowRight, Star, CheckCircle } from 'lucide-react'
import { getDemo, VALID_SLUGS } from '@/lib/demo-registry'
import { getTheme } from '@/lib/theme'

export function generateStaticParams() {
  return VALID_SLUGS.map(slug => ({ niche: slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ niche: string }> }): Promise<Metadata> {
  const { niche } = await params
  const cfg = getDemo(niche)
  if (!cfg) return {}
  return {
    title: `Project Gallery | ${cfg.businessName}`,
    description: `See real ${cfg.industry.toLowerCase()} projects completed by ${cfg.businessName} in ${cfg.city}, FL. Before & after photos from actual customer jobs.`,
  }
}

// Color classes for gallery placeholder panels — all static for Tailwind safety
const CARD_COLORS = [
  { bg: 'bg-slate-800',   label: 'Before' },
  { bg: 'bg-blue-900',    label: 'After'  },
  { bg: 'bg-gray-800',    label: 'Before' },
  { bg: 'bg-indigo-900',  label: 'After'  },
  { bg: 'bg-zinc-800',    label: 'Before' },
  { bg: 'bg-sky-900',     label: 'After'  },
]

export default async function GalleryPage({ params }: { params: Promise<{ niche: string }> }) {
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
          <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">Our Work</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Project Gallery
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Real jobs. Real results. Browse before &amp; after photos from actual {cfg.industry.toLowerCase()} projects
            we&apos;ve completed for homeowners and businesses throughout {cfg.city}.
          </p>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-100 py-6">
        <div className="container-demo">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { num: '500+',   label: 'Jobs Completed'         },
              { num: '5.0★',   label: 'Google Rating'          },
              { num: `${cfg.services.length}`, label: 'Service Types'  },
              { num: '100%',   label: 'Satisfaction Guaranteed' },
            ].map(s => (
              <div key={s.label}>
                <p className={`text-2xl font-extrabold ${theme.accentText}`}>{s.num}</p>
                <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── GALLERY GRID ─────────────────────────────────────────────── */}
      <section className={`py-20 ${theme.sectionAlt}`}>
        <div className="container-demo">
          <div className="text-center mb-14">
            <p className={`text-xs font-bold uppercase tracking-widest ${theme.accentText} mb-2`}>Before &amp; After</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Recent Projects
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Every project listed here was completed by our licensed team. Customer photos shared with permission.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cfg.gallery.map((item, i) => (
              <div key={item.label}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition group">

                {/* Before/After image panels */}
                <div className="grid grid-cols-2 h-48">
                  <div className={`relative ${item.before ?? CARD_COLORS[i % CARD_COLORS.length].bg} flex items-end justify-start p-3`}>
                    <span className="text-xs font-bold text-white/60 uppercase tracking-wider bg-black/40 px-2 py-1 rounded">
                      Before
                    </span>
                  </div>
                  <div className={`relative ${item.after ?? CARD_COLORS[(i + 1) % CARD_COLORS.length].bg} flex items-end justify-end p-3`}>
                    <span className={`text-xs font-bold text-white uppercase tracking-wider px-2 py-1 rounded ${theme.accentBg}`}>
                      After
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-bold uppercase tracking-wider ${theme.badge} px-2 py-0.5 rounded-full`}>
                      {item.label}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  <Link
                    href={`${base}/quote`}
                    className={`mt-4 inline-flex items-center gap-1.5 text-xs font-semibold ${theme.accentText} hover:gap-2.5 transition-all`}
                  >
                    Get a quote for this service <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES COVERED ─────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container-demo max-w-3xl mx-auto text-center">
          <p className={`text-xs font-bold uppercase tracking-widest ${theme.accentText} mb-3`}>Services in This Gallery</p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">
            We Do It All
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {cfg.services.map(s => (
              <div key={s.name}
                className={`flex items-center gap-2 rounded-full border ${theme.accentBorderLight} ${theme.accentBgLight} px-4 py-2 text-sm font-medium ${theme.accentText}`}>
                <CheckCircle className="h-3.5 w-3.5" />
                {s.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section className={`py-20 ${theme.sectionAlt}`}>
        <div className="container-demo max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className={`text-xs font-bold uppercase tracking-widest ${theme.accentText} mb-2`}>From the Customers in This Gallery</p>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">What They Said</h2>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-sm text-gray-500">5.0 average</span>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {cfg.testimonials.map(t => (
              <div key={t.name}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-4 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-xs font-bold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF BANNER ──────────────────────────────────────── */}
      <section className="py-12 bg-white">
        <div className="container-demo max-w-3xl mx-auto">
          <div className={`rounded-2xl ${theme.accentBgLight} border ${theme.accentBorderLight} p-8 text-center`}>
            <p className={`text-base font-bold ${theme.accentText} mb-2`}>
              Ready to see results like these at your property?
            </p>
            <p className="text-gray-600 text-sm mb-5">
              Get a free estimate and we&apos;ll walk you through exactly what we&apos;d recommend.
              No pressure, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`tel:${cfg.phone}`}
                className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold transition ${theme.btnPrimary}`}
              >
                <Phone className="h-4 w-4" /> Call {cfg.phone}
              </a>
              <Link
                href={`${base}/quote`}
                className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold transition ${theme.btnOutline}`}
              >
                Request Free Estimate <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
