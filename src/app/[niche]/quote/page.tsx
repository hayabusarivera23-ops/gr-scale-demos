import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Phone, Shield, Star, Clock, CheckCircle } from 'lucide-react'
import { getDemo, VALID_SLUGS } from '@/lib/demo-registry'
import { getTheme } from '@/lib/theme'
import QuoteForm from '@/components/demo/QuoteForm'

export function generateStaticParams() {
  return VALID_SLUGS.map(slug => ({ niche: slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ niche: string }> }): Promise<Metadata> {
  const { niche } = await params
  const cfg = getDemo(niche)
  if (!cfg) return {}
  return {
    title: `Free Estimate | ${cfg.businessName}`,
    description: `Request a free ${cfg.industry.toLowerCase()} estimate from ${cfg.businessName} in ${cfg.city}, FL. ${cfg.offerLine}. Call ${cfg.phone} or submit online.`,
  }
}

export default async function QuotePage({ params }: { params: Promise<{ niche: string }> }) {
  const { niche } = await params
  const cfg = getDemo(niche)
  if (!cfg) notFound()

  const theme = getTheme(cfg.primaryColor)

  const trustPoints = [
    'Upfront price before we start',
    'No obligation to book',
    'Response within 15 minutes',
    `${cfg.guaranteeText}`,
    cfg.licenseText,
  ]

  return (
    <div>

      {/* ── PAGE HEADER ──────────────────────────────────────────────── */}
      <section className={`bg-gradient-to-br ${theme.heroBg} text-white py-16`}>
        <div className="container-demo">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">Free Estimate</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Get Your Free Estimate
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Fill out the form and we&apos;ll give you an upfront price — no surprises, no commitment.
              Or call us now for a faster response.
            </p>
            <a
              href={`tel:${cfg.phone}`}
              className={`mt-6 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold transition ${theme.btnPrimary}`}
            >
              <Phone className="h-4 w-4" /> Call {cfg.phone} — We Answer 24/7
            </a>
          </div>
        </div>
      </section>

      {/* ── OFFER STRIP ──────────────────────────────────────────────── */}
      <div className={`${theme.offerBg} py-3 text-center`}>
        <p className="text-white text-sm font-semibold tracking-wide">
          🎁 {cfg.offerLine}
        </p>
      </div>

      {/* ── FORM + SIDEBAR ───────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-demo">
          <div className="grid gap-12 lg:grid-cols-5">

            {/* ── FORM ─ 3/5 */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Request Your Estimate</h2>
              <p className="text-gray-500 text-sm mb-8">
                The more detail you give us, the more accurate your estimate will be. We&apos;ll contact you
                to confirm the details and schedule your appointment.
              </p>
              <QuoteForm cfg={{
                phone: cfg.phone,
                niche: cfg.slug,
                services: cfg.services.map(s => s.name),
                emergencyAvailable: cfg.emergencyAvailable,
                offerLine: cfg.offerLine,
              }} theme={theme} />
            </div>

            {/* ── TRUST SIDEBAR ─ 2/5 */}
            <div className="lg:col-span-2">
              <div className={`rounded-2xl ${theme.accentBgLight} border ${theme.accentBorderLight} p-7 mb-6`}>
                <h3 className={`text-sm font-bold ${theme.accentText} uppercase tracking-wider mb-5`}>
                  Why Get a Free Estimate?
                </h3>
                <ul className="space-y-4">
                  {trustPoints.map(pt => (
                    <li key={pt} className="flex items-start gap-3">
                      <CheckCircle className={`h-5 w-5 mt-0.5 shrink-0 ${theme.iconText}`} />
                      <span className="text-sm text-gray-700">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rating card */}
              <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 mb-5">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-1.5 text-sm font-bold text-gray-900">5.0</span>
                </div>
                <p className="text-xs text-gray-500 mb-4">100+ verified Google reviews</p>
                {cfg.testimonials[0] && (
                  <div>
                    <p className="text-sm text-gray-700 italic leading-relaxed mb-3">
                      &ldquo;{cfg.testimonials[0].quote.slice(0, 120)}...&rdquo;
                    </p>
                    <p className="text-xs font-bold text-gray-900">{cfg.testimonials[0].name}</p>
                    <p className="text-xs text-gray-400">{cfg.testimonials[0].role}</p>
                  </div>
                )}
              </div>

              {/* Credentials */}
              <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5">
                <div className="space-y-3">
                  {[
                    { icon: Shield, text: cfg.licenseText  },
                    { icon: Clock,  text: cfg.emergencyAvailable ? '24/7 Emergency Response' : 'Same-Day Service Available' },
                    { icon: Star,   text: cfg.guaranteeText },
                  ].map(item => {
                    const Icon = item.icon
                    return (
                      <div key={item.text} className="flex items-center gap-3">
                        <Icon className={`h-4 w-4 shrink-0 ${theme.iconText}`} />
                        <span className="text-xs text-gray-600">{item.text}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
