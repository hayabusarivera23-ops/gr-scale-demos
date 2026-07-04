import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, ArrowRight, Shield, Star } from 'lucide-react'
import { getDemo, VALID_SLUGS } from '@/lib/demo-registry'
import { getTheme } from '@/lib/theme'
import ContactForm from '@/components/demo/ContactForm'

export function generateStaticParams() {
  return VALID_SLUGS.map(slug => ({ niche: slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ niche: string }> }): Promise<Metadata> {
  const { niche } = await params
  const cfg = getDemo(niche)
  if (!cfg) return {}
  return {
    title: `Contact Us | ${cfg.businessName}`,
    description: `Contact ${cfg.businessName} for ${cfg.industry.toLowerCase()} service in ${cfg.city}, FL. Call ${cfg.phone} or send us a message — we respond fast.`,
  }
}

export default async function ContactPage({ params }: { params: Promise<{ niche: string }> }) {
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
          <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">Get In Touch</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Contact {cfg.businessName}
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Call, email, or send us a message below. We respond to every inquiry fast — usually within 15 minutes during business hours.
          </p>
        </div>
      </section>

      {/* ── CONTACT BODY ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-demo">
          <div className="grid gap-12 lg:grid-cols-5">

            {/* ── CONTACT FORM ─ 3/5 */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-500 text-sm mb-8">
                Fill out the form and we&apos;ll get back to you within 15 minutes. For emergencies, call directly.
              </p>
              <ContactForm phone={cfg.phone} niche={niche} theme={theme} />
            </div>

            {/* ── CONTACT INFO ─ 2/5 */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Contact Info</h2>
              <p className="text-gray-500 text-sm mb-8">Multiple ways to reach us — use whichever is easiest.</p>

              <div className="space-y-5">
                {/* Phone */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl shrink-0 ${theme.iconBg}`}>
                    <Phone className={`h-5 w-5 ${theme.iconText}`} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Phone</p>
                    <a href={`tel:${cfg.phone}`}
                      className={`text-lg font-bold ${theme.accentText} hover:underline`}>
                      {cfg.phone}
                    </a>
                    {cfg.emergencyAvailable && (
                      <p className="text-xs text-gray-500 mt-1">Available 24/7 for emergencies</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl shrink-0 ${theme.iconBg}`}>
                    <Mail className={`h-5 w-5 ${theme.iconText}`} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Email</p>
                    <a href={`mailto:${cfg.email}`}
                      className={`text-sm font-semibold ${theme.accentText} hover:underline break-all`}>
                      {cfg.email}
                    </a>
                    <p className="text-xs text-gray-500 mt-1">Response within 1 hour</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl shrink-0 ${theme.iconBg}`}>
                    <MapPin className={`h-5 w-5 ${theme.iconText}`} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Location</p>
                    <p className="text-sm font-semibold text-gray-800">
                      {cfg.address}<br />{cfg.city}, {cfg.stateAbbr}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">We come to you — no drop-off required</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl shrink-0 ${theme.iconBg}`}>
                    <Clock className={`h-5 w-5 ${theme.iconText}`} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Hours</p>
                    <div className="space-y-1">
                      <div className="flex justify-between gap-8 text-sm">
                        <span className="text-gray-600">Mon – Fri</span>
                        <span className="font-semibold text-gray-900">7:00 AM – 7:00 PM</span>
                      </div>
                      <div className="flex justify-between gap-8 text-sm">
                        <span className="text-gray-600">Saturday</span>
                        <span className="font-semibold text-gray-900">8:00 AM – 5:00 PM</span>
                      </div>
                      <div className="flex justify-between gap-8 text-sm">
                        <span className="text-gray-600">Sunday</span>
                        <span className="font-semibold text-gray-900">
                          {cfg.emergencyAvailable ? 'Emergency only' : 'Closed'}
                        </span>
                      </div>
                    </div>
                    {cfg.emergencyAvailable && (
                      <p className="text-xs font-semibold text-red-600 mt-2">🚨 Emergency service available 24/7</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Trust mini-badges */}
              <div className="mt-6 flex flex-wrap gap-3">
                <div className={`flex items-center gap-1.5 rounded-full text-xs font-medium ${theme.badge} px-3 py-1.5`}>
                  <Shield className="h-3 w-3" /> Licensed & Insured
                </div>
                <div className={`flex items-center gap-1.5 rounded-full text-xs font-medium ${theme.badge} px-3 py-1.5`}>
                  <Star className="h-3 w-3" /> 5.0 Google Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ──────────────────────────────────────────────────────── */}
      <div className="overflow-hidden border-y border-gray-100" style={{ height: 320 }}>
        <iframe
          src={cfg.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${cfg.businessName} location map`}
        />
      </div>

      {/* ── BOTTOM CTA ───────────────────────────────────────────────── */}
      <section className={`py-20 bg-gradient-to-br ${theme.heroBg} text-white`}>
        <div className="container-demo text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5">
            Need Service Now?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Don&apos;t wait for a callback — call us directly and we&apos;ll have someone out to you fast.
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
              Get a Free Estimate <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
