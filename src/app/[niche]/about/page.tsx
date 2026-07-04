import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import {
  Shield, Award, Star, Clock, CheckCircle,
  Phone, ArrowRight, Users, Wrench, ThumbsUp,
} from 'lucide-react'
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
    title: `About Us | ${cfg.businessName}`,
    description: `Learn about ${cfg.businessName} — ${cfg.city}'s trusted ${cfg.industry.toLowerCase()} company. Licensed, insured, and serving the area since ${cfg.yearEstablished}.`,
  }
}

export default async function AboutPage({ params }: { params: Promise<{ niche: string }> }) {
  const { niche } = await params
  const cfg = getDemo(niche)
  if (!cfg) notFound()

  const theme = getTheme(cfg.primaryColor)
  const base  = `/${niche}`
  const yearsInBusiness = new Date().getFullYear() - cfg.yearEstablished

  const values = [
    {
      icon: ThumbsUp,
      title: 'Honest Pricing',
      desc:  'We give you the full price before we start any work. No hidden fees, no surprise charges. The number on your quote is the number on your invoice.',
    },
    {
      icon: Clock,
      title: 'Reliable & On Time',
      desc:  'We know your time is valuable. We show up in the window we promise and call ahead when we\'re 30 minutes out. No hours-long waits.',
    },
    {
      icon: Shield,
      title: 'Quality That Lasts',
      desc:  `We use manufacturer-approved materials and follow Florida code on every job. Our work is backed by a ${cfg.guaranteeText}.`,
    },
    {
      icon: Users,
      title: 'Your Neighbors',
      desc:  `We\'re a local ${cfg.city} business, not a national franchise. When you call us, you reach someone who lives and works in your community.`,
    },
  ]

  const certifications = [
    { label: 'Florida Licensed',       detail: cfg.licenseText              },
    { label: 'Fully Insured',          detail: 'Liability + Workers\' Comp' },
    { label: 'Background-Checked Techs',detail: 'Every team member'         },
    { label: 'Drug-Free Workplace',    detail: 'Tested & verified'          },
    { label: 'Continuing Education',   detail: 'Annual code updates'        },
    { label: 'Google Verified Business',detail: '5.0 average, 100+ reviews' },
  ]

  return (
    <div>

      {/* ── PAGE HEADER ──────────────────────────────────────────────── */}
      <section className={`bg-gradient-to-br ${theme.heroBg} text-white py-20`}>
        <div className="container-demo">
          <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">About Us</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            {cfg.city}&apos;s Trusted {cfg.industry} Team
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            {cfg.businessName} has been serving homeowners and businesses in {cfg.city} and surrounding communities
            since {cfg.yearEstablished}. Here&apos;s who we are and why our customers keep coming back.
          </p>
        </div>
      </section>

      {/* ── STORY SECTION ────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-demo">
          <div className="grid gap-14 lg:grid-cols-2 items-center max-w-5xl mx-auto">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: `${yearsInBusiness}+`, label: 'Years in Business'       },
                { num: '500+',               label: 'Jobs Completed'            },
                { num: '5.0★',               label: 'Google Rating'             },
                { num: '100%',               label: 'Satisfaction Guaranteed'   },
              ].map(s => (
                <div key={s.label} className={`rounded-2xl ${theme.accentBgLight} p-6 text-center`}>
                  <p className={`text-4xl font-extrabold ${theme.accentText} mb-1`}>{s.num}</p>
                  <p className="text-sm text-gray-600 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Story copy */}
            <div>
              <p className={`text-xs font-bold uppercase tracking-widest ${theme.accentText} mb-3`}>Our Story</p>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-5">
                Built on Referrals, Not Ads
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {cfg.businessName} was founded in {cfg.yearEstablished} by a licensed {cfg.industry.toLowerCase()} technician
                  who saw the same problem everywhere: homeowners getting overcharged, under-informed, and left waiting.
                  We started with one truck and a simple promise — show up when we say, charge what we quote, do the job right.
                </p>
                <p>
                  Word spread. Customers called their neighbors, neighbors called their friends. {yearsInBusiness} years later,
                  the majority of our new customers still come from referrals. That&apos;s the business we set out to build —
                  one where doing excellent work is the marketing.
                </p>
                <p>
                  Today we serve all of greater {cfg.city} with a team of licensed, background-checked technicians who share
                  the same values. We&apos;re big enough to handle any job quickly, small enough to answer the phone ourselves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────────────── */}
      <section className={`py-20 ${theme.sectionAlt}`}>
        <div className="container-demo">
          <div className="text-center mb-14">
            <p className={`text-xs font-bold uppercase tracking-widest ${theme.accentText} mb-2`}>What We Stand For</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {values.map(v => {
              const Icon = v.icon
              return (
                <div key={v.title} className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm">
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${theme.iconBg}`}>
                    <Icon className={`h-6 w-6 ${theme.iconText}`} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-demo max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className={`text-xs font-bold uppercase tracking-widest ${theme.accentText} mb-2`}>Credentials</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Licensed, Insured & Verified
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              We hold every credential required to work in Florida homes and businesses. You can ask to see any of these before we begin work.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map(c => (
              <div key={c.label}
                className="flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <CheckCircle className={`h-5 w-5 mt-0.5 shrink-0 ${theme.iconText}`} />
                <div>
                  <p className="text-sm font-bold text-gray-900">{c.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM SECTION ─────────────────────────────────────────────── */}
      <section className={`py-20 ${theme.sectionAlt}`}>
        <div className="container-demo max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className={`text-xs font-bold uppercase tracking-widest ${theme.accentText} mb-2`}>Our Team</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Technicians You Can Trust
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Every {cfg.businessName} technician goes through a rigorous hiring process before they ever step inside a customer&apos;s home.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-8">
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { icon: Shield,  text: 'State background check before hire'                },
                  { icon: Wrench,  text: `Florida ${cfg.industry} license or supervised trainee` },
                  { icon: Award,   text: 'Drug screening at hire and random testing'          },
                  { icon: Star,    text: 'Minimum 2-year field experience required'           },
                  { icon: Users,   text: 'Ongoing training on code changes and new products'  },
                  { icon: ThumbsUp,text: 'Customer service training — every tech'             },
                ].map(item => {
                  const Icon = item.icon
                  return (
                    <div key={item.text} className="flex items-center gap-3">
                      <div className={`h-9 w-9 flex items-center justify-center rounded-lg shrink-0 ${theme.iconBg}`}>
                        <Icon className={`h-5 w-5 ${theme.iconText}`} />
                      </div>
                      <p className="text-sm text-gray-700">{item.text}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className={`${theme.accentBgLight} px-8 py-4 border-t ${theme.accentBorderLight}`}>
              <p className={`text-sm font-semibold ${theme.accentText}`}>
                You will always know the name and photo of the tech coming to your door. We send it via text when dispatched.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS SNIPPET ──────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-demo max-w-4xl mx-auto text-center">
          <p className={`text-xs font-bold uppercase tracking-widest ${theme.accentText} mb-2`}>What People Say</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
            Over 100 Five-Star Reviews
          </h2>
          <div className="flex items-center justify-center gap-1 mb-10">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-sm text-gray-500">5.0 on Google</span>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {cfg.testimonials.map(t => (
              <div key={t.name}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-left">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-xs font-bold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-400">{t.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href={`${base}/reviews`}
              className={`inline-flex items-center gap-2 text-sm font-semibold ${theme.accentText} hover:underline`}
            >
              Read all reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className={`py-20 bg-gradient-to-br ${theme.heroBg} text-white`}>
        <div className="container-demo text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5">
            Ready to Work With Us?
          </h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            Call for a free estimate or book online. We respond same-day and offer evening and weekend appointments.
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
        </div>
      </section>

    </div>
  )
}
