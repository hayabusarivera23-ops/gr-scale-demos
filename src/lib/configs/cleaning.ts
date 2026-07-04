import type { DemoConfig } from '../types'

const config: DemoConfig = {
  slug:            'cleaning',
  businessName:    'FreshNest Cleaning Co.',
  industry:        'Cleaning',
  agencyTag:       'Demo site by GR Scale',
  primaryColor:    'blue',
  heroGradient:    'from-blue-900/70 via-slate-900 to-slate-950',
  accentClass:     'text-blue-400',
  bgAccentClass:   'bg-blue-500',
  tagline:         'Orlando\'s 5-Star Home & Office Cleaning',
  heroHeadline:    'Come Home to a Spotless House — Every Time',
  heroSubheadline: 'Background-checked, insured cleaners with a 200% satisfaction guarantee. Book in 60 seconds, get the same great team every visit.',
  cta:             'Get My Free Quote',
  phone:           '(407) 555-0800',
  email:           'hello@freshnestclean.com',
  address:         '4410 Sparkle St',
  city:            'Orlando',
  stateAbbr:       'FL',
  mapEmbedUrl:     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224143.9992064609!2d-81.5087!3d28.5383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890',
  licenseText:     'Bonded & Insured · Background-Checked Teams',
  yearEstablished: 2015,
  guaranteeText:   '200% Satisfaction Guarantee',
  emergencyAvailable: false,
  offerLine:       '$40 off your first deep clean — this month only',
  metaTitle:       'FreshNest Cleaning — House Cleaning & Maid Service in Orlando, FL',
  metaDescription: 'Top-rated Orlando house cleaning. Recurring, deep clean, move-in/out. Bonded, insured, 200% guarantee. Book: (407) 555-0800.',

  services: [
    { name: 'Recurring Cleaning',    desc: 'Weekly, bi-weekly, or monthly. Same trusted team every visit, and your priorities remembered.', price: 'From $129' },
    { name: 'Deep Cleaning',         desc: 'Baseboards, inside appliances, grout, blinds — the top-to-bottom reset your home deserves.', price: 'From $249' },
    { name: 'Move In / Move Out',    desc: 'Get your deposit back or move into a truly clean home. Empty-home clean built for landlord walkthroughs.', price: 'From $299' },
    { name: 'Commercial Cleaning',   desc: 'Offices, studios, and retail up to 10,000 sq ft. After-hours scheduling, consistent crews.', price: 'Custom quote' },
    { name: 'Post-Construction',     desc: 'Dust, debris, paint splatter, stickers — we make new builds and remodels move-in ready.', price: 'Custom quote' },
    { name: 'Airbnb Turnovers',      desc: 'Same-day turnovers with photo checklists, restocking, and damage reporting for hosts.', price: 'From $99' },
  ],

  testimonials: [
    { name: 'Katie B.',  role: 'Bi-weekly client — 2 years',  quote: 'Same two wonderful ladies every visit for two years. They remember that I want the ceiling fans done and my dog treats hidden. It\'s the best money I spend.', rating: 5 },
    { name: 'Ron D.',    role: 'Move-out clean',              quote: 'Landlord did the walkthrough and gave us the FULL deposit back. He asked who cleaned it so he could hire them for the next tenant.', rating: 5 },
    { name: 'Priya S.',  role: 'Office Manager',              quote: 'They clean our office twice a week after hours. Reliable, thorough, and the crew is trustworthy — we\'ve never had a single issue in 18 months.', rating: 5 },
  ],

  faqs: [
    { q: 'Are your cleaners background-checked?',   a: 'Every cleaner passes a national background check, reference verification, and a 2-week paid training program before entering any home. We\'re bonded and insured.' },
    { q: 'Do I get the same team every time?',      a: 'Yes — recurring clients get the same team every visit. They learn your home and your preferences, which is why our quality stays consistent.' },
    { q: 'What\'s the 200% guarantee?',             a: 'If anything isn\'t right, we return within 24 hours and re-clean it free. Still not happy? We refund the visit. That\'s the 200%.' },
    { q: 'Do I need to provide supplies?',          a: 'No — we bring everything, including HEPA vacuums and eco-friendly products. Prefer we use your products? Just tell us.' },
    { q: 'How does pricing work?',                  a: 'Flat-rate by bedrooms/bathrooms — no hourly surprises. A 3-bed/2-bath recurring clean is typically $129–$159. Quote takes 60 seconds online or by phone.' },
  ],

  gallery: [
    { label: 'Kitchen Deep Clean',    desc: 'Inside oven, fridge, cabinets — the works',        before: 'bg-gray-800', after: 'bg-blue-900' },
    { label: 'Bathroom Reset',        desc: 'Grout, glass, and fixtures back to new',           before: 'bg-gray-800', after: 'bg-blue-900' },
    { label: 'Move-Out Clean',        desc: 'Empty home, deposit-back standard',                before: 'bg-gray-800', after: 'bg-blue-900' },
    { label: 'Office Clean',          desc: '6,000 sq ft office — nightly service',             before: 'bg-gray-800', after: 'bg-blue-900' },
    { label: 'Post-Construction',     desc: 'Remodel dust and debris — gone',                   before: 'bg-gray-800', after: 'bg-blue-900' },
    { label: 'Airbnb Turnover',       desc: '4-hour turnaround with photo checklist',           before: 'bg-gray-800', after: 'bg-blue-900' },
  ],

  serviceAreas: ['Orlando', 'Winter Park', 'Lake Nona', 'Dr. Phillips', 'Windermere', 'Baldwin Park', 'Maitland', 'Altamonte Springs'],

  highlight: {
    tag:   'Recurring Plans',
    title: 'Set It and Forget It — Your Home, Always Clean.',
    body:  'Our recurring plans keep your home guest-ready year-round, with the same trusted team, locked-in pricing, and priority scheduling. Skip or reschedule anytime with 48 hours notice.',
    bullets: [
      'Weekly from $109 · Bi-weekly from $129 · Monthly from $159',
      'Same team every visit — they learn your home',
      'Locked-in rate for 12 months',
      'Skip, pause, or reschedule anytime',
    ],
  },
}

export default config
