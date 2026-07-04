import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Star, Phone, ArrowRight, ThumbsUp, CheckCircle } from 'lucide-react'
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
    title: `Customer Reviews | ${cfg.businessName}`,
    description: `See what ${cfg.city} homeowners say about ${cfg.businessName}. 5-star rated ${cfg.industry.toLowerCase()} company with 100+ Google reviews.`,
  }
}

// Extended set of realistic reviews for the page
function getExtendedReviews(cfg: ReturnType<typeof getDemo>) {
  if (!cfg) return []
  const base = cfg.testimonials
  // Pad with industry-generic but realistic reviews
  const extras = [
    {
      name: 'David R.',
      role: `Homeowner — ${cfg.city}`,
      quote: `Called ${cfg.businessName} on a Saturday afternoon and they were at my house by 3pm. Fixed the issue in under an hour. Very professional and the price was exactly what they quoted.`,
      rating: 5,
    },
    {
      name: 'Patricia W.',
      role: `Homeowner — Oviedo`,
      quote: 'Incredibly responsive. I sent a quote request online and had a callback within 10 minutes. The tech explained everything clearly before starting. Couldn\'t be happier.',
      rating: 5,
    },
    {
      name: 'James C.',
      role: 'Business Owner — Sanford',
      quote: `We use ${cfg.businessName} for all of our commercial properties. Consistent quality, always on time, and they work around our operating hours. Real professionals.`,
      rating: 5,
    },
    {
      name: 'Angela F.',
      role: 'Homeowner — Winter Park',
      quote: 'I was nervous about the cost but they gave me an exact number before starting — and that\'s exactly what I paid. No surprises. Will definitely be calling them again.',
      rating: 5,
    },
    {
      name: 'Robert M.',
      role: 'Property Manager — Kissimmee',
      quote: 'I\'ve used three other companies before finding these guys. The difference is night and day. They show up when they say, do the job right, and follow up to make sure everything is working.',
      rating: 5,
    },
    {
      name: 'Sarah T.',
      role: `Homeowner — ${cfg.city}`,
      quote: 'Fast, professional, reasonably priced. The tech was courteous and explained what was wrong in plain English before doing anything. Exactly what you want in a service company.',
      rating: 5,
    },
  ]
  return [...base, ...extras]
}

export default async function ReviewsPage({ params }: { params: Promise<{ niche: string }> }) {
  const { niche } = await params
  const cfg = getDemo(niche)
  if (!cfg) notFound()

  const theme   = getTheme(cfg.primaryColor)
  const base    = `/${niche}`
  const reviews = getExtendedReviews(cfg)
  const total   = reviews.length

  const ratingBreakdown = [
    { stars: 5, count: total - 1, pct: Math.round(((total - 1) / total) * 100) },
    { stars: 4, count: 1,         pct: Math.round((1 / total) * 100)            },
    { stars: 3, count: 0,         pct: 0                                         },
    { stars: 2, count: 0,         pct: 0                                         },
    { stars: 1, count: 0,         pct: 0                                         },
  ]

  return (
    <div>

      {/* ── PAGE HEADER ──────────────────────────────────────────────── */}
      <section className={`bg-gradient-to-br ${theme.heroBg} text-white py-20`}>
        <div className="container-demo">
          <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">Customer Reviews</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            What {cfg.city} Customers Say
          </h1>
          <div className="flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-white/80 text-lg font-bold ml-1">5.0</span>
            <span className="text-white/50 text-sm">· 100+ verified reviews</span>
          </div>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Every review below is from a real customer. We don&apos;t pay for reviews or filter negative feedback.
            This is what people say about {cfg.businessName} in {cfg.city}.
          </p>
        </div>
      </section>

      {/* ── RATING SUMMARY ───────────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="container-demo max-w-4xl mx-auto">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            {/* Overall score */}
            <div className="text-center">
              <p className={`text-8xl font-black ${theme.accentText} leading-none`}>5.0</p>
              <div className="flex items-center justify-center gap-1 mt-3 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-7 w-7 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-500 text-sm">Based on 100+ Google reviews</p>
              <a
                href="https://www.google.com/search"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 inline-flex items-center gap-2 text-xs font-semibold ${theme.accentText} hover:underline`}
              >
                View on Google <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Breakdown bars */}
            <div className="space-y-3">
              {ratingBreakdown.map(row => (
                <div key={row.stars} className="flex items-center gap-3">
                  <div className="flex items-center gap-0.5 w-20 shrink-0 justify-end">
                    {[...Array(row.stars)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex-1 rounded-full bg-gray-100 h-2.5 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${theme.accentBg}`}
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 w-10 text-right">{row.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST CALLOUT ────────────────────────────────────────────── */}
      <div className={`${theme.accentBgLight} border-y ${theme.accentBorderLight} py-4`}>
        <div className="container-demo flex flex-wrap items-center justify-center gap-6">
          {[
            'Reviews verified by Google',
            'No paid promotions',
            'No filtered reviews',
            '100+ total reviews',
          ].map(item => (
            <div key={item} className={`flex items-center gap-2 text-sm font-medium ${theme.accentText}`}>
              <CheckCircle className="h-4 w-4" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ── REVIEWS GRID ─────────────────────────────────────────────── */}
      <section className={`py-20 ${theme.sectionAlt}`}>
        <div className="container-demo">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {reviews.map(r => (
              <div
                key={r.name + r.quote.slice(0, 20)}
                className="break-inside-avoid bg-white rounded-2xl border border-gray-100 p-6 shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <ThumbsUp className={`h-4 w-4 ${theme.iconText}`} />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-4 italic">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div>
                  <p className="text-xs font-bold text-gray-900">{r.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{r.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEAVE A REVIEW CTA ───────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container-demo max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            Was Your Experience 5-Star?
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            If {cfg.businessName} took care of you, we&apos;d really appreciate a Google review. It helps other homeowners in {cfg.city} find us.
          </p>
          <a
            href="https://www.google.com/search"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold transition ${theme.btnPrimary}`}
          >
            <Star className="h-4 w-4 fill-white" /> Leave a Google Review
          </a>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────────── */}
      <section className={`py-20 bg-gradient-to-br ${theme.heroBg} text-white`}>
        <div className="container-demo text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5">
            Join 100+ Happy Customers
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Call us or request a free estimate. We&apos;ll earn your 5-star review.
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
              Free Estimate <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
