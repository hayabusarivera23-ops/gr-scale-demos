import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, ArrowRight, MessageCircle } from 'lucide-react'
import { getDemo, VALID_SLUGS } from '@/lib/demo-registry'
import { getTheme } from '@/lib/theme'
import FAQAccordion from '@/components/demo/FAQAccordion'
import type { FAQItem } from '@/lib/types'

export function generateStaticParams() {
  return VALID_SLUGS.map(slug => ({ niche: slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ niche: string }> }): Promise<Metadata> {
  const { niche } = await params
  const cfg = getDemo(niche)
  if (!cfg) return {}
  return {
    title: `FAQ | ${cfg.businessName}`,
    description: `Common questions about ${cfg.businessName}'s ${cfg.industry.toLowerCase()} services in ${cfg.city}, FL. Pricing, licensing, service area, and more.`,
  }
}

export default async function FAQPage({ params }: { params: Promise<{ niche: string }> }) {
  const { niche } = await params
  const cfg = getDemo(niche)
  if (!cfg) notFound()

  const theme = getTheme(cfg.primaryColor)
  const base  = `/${niche}`

  const allFaqs: FAQItem[] = [
    ...cfg.faqs,
    {
      q: 'How do I know your prices are fair?',
      a: `We give you a written quote before any work begins. We don't start until you approve the price. Our rates reflect the actual cost of quality materials and experienced labor — no inflated margins. You're always welcome to compare.`,
    },
    {
      q: 'Do I need to be home during the service?',
      a: `For most jobs, yes — we need access to the work area. We'll give you a 2-hour arrival window and send a text 30 minutes before arrival so you can plan. For some exterior work, we can complete the job with a key or gate code.`,
    },
    {
      q: 'What happens if something goes wrong after the job?',
      a: `Call us immediately. Our ${cfg.guaranteeText} means we stand behind every job. If something related to our service isn't right, we come back and fix it at no charge. We've built this business on referrals — unhappy customers don't refer anyone.`,
    },
    {
      q: 'Can I get a quote before deciding?',
      a: `Absolutely. Call us or submit a quote request online. For most jobs we can give you a price range over the phone and a firm quote when we arrive. For larger projects like repiping, we offer free on-site estimates with no obligation.`,
    },
  ]

  return (
    <div>

      {/* ── PAGE HEADER ──────────────────────────────────────────────── */}
      <section className={`bg-gradient-to-br ${theme.heroBg} text-white py-20`}>
        <div className="container-demo">
          <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">FAQ</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Frequently Asked Questions
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Answers to the most common questions we get from {cfg.city} homeowners and businesses
            about our {cfg.industry.toLowerCase()} services, pricing, and process.
          </p>
        </div>
      </section>

      {/* ── FAQ ACCORDION ────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-demo max-w-3xl mx-auto">
          <FAQAccordion faqs={allFaqs} theme={theme} />

          {/* Still have a question? */}
          <div className={`mt-12 rounded-2xl ${theme.accentBgLight} border ${theme.accentBorderLight} p-8 text-center`}>
            <MessageCircle className={`mx-auto mb-4 h-10 w-10 ${theme.iconText}`} />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Still have a question?</h3>
            <p className="text-sm text-gray-500 mb-5">
              Call us or send a message. We respond to every inquiry within minutes during business hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`tel:${cfg.phone}`}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition ${theme.btnPrimary}`}
              >
                <Phone className="h-4 w-4" /> Call {cfg.phone}
              </a>
              <Link
                href={`${base}/contact`}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition ${theme.btnOutline}`}
              >
                Send a Message <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────────── */}
      <section className={`py-20 bg-gradient-to-br ${theme.heroBg} text-white`}>
        <div className="container-demo text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5">
            Ready to Book?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Get a free estimate today. No obligation, no pressure.
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
