import type { DemoConfig } from '../types'

const config: DemoConfig = {
  slug:            'flooring',
  businessName:    'Solid Ground Flooring',
  industry:        'Flooring',
  agencyTag:       'Demo site by GR Scale',
  primaryColor:    'amber',
  heroGradient:    'from-amber-900/70 via-slate-900 to-slate-950',
  accentClass:     'text-amber-400',
  bgAccentClass:   'bg-amber-500',
  tagline:         'Tampa\'s Flooring Installation Experts',
  heroHeadline:    'Beautiful Floors, Installed Right, Priced Fair',
  heroSubheadline: 'Hardwood, luxury vinyl, tile, laminate, and carpet — with free in-home estimates, honest pricing, and installers who treat your home like their own.',
  cta:             'Book Free In-Home Estimate',
  phone:           '(813) 555-1100',
  email:           'hello@solidgroundfloors.com',
  address:         '3320 Plank Ave',
  city:            'Tampa',
  stateAbbr:       'FL',
  mapEmbedUrl:     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225321.5!2d-82.4572!3d27.9506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c31!2sTampa%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890',
  licenseText:     'Licensed & Insured · 1M+ sq ft installed',
  yearEstablished: 2010,
  guaranteeText:   'Lifetime Installation Warranty',
  emergencyAvailable: false,
  offerLine:       'Free upgrade to premium underlayment this month',
  metaTitle:       'Solid Ground Flooring — Flooring Installation in Tampa, FL | Free Estimate',
  metaDescription: 'Tampa flooring: hardwood, LVP, tile, laminate, carpet. Free in-home estimates, lifetime install warranty, financing. (813) 555-1100.',

  services: [
    { name: 'Hardwood Flooring',      desc: 'Solid and engineered hardwood, plus sanding and refinishing that makes old floors new again.', price: 'From $8/sq ft' },
    { name: 'Luxury Vinyl Plank',     desc: '100% waterproof, kid-proof, pet-proof. The most popular floor in Florida — for good reason.', price: 'From $4.50/sq ft' },
    { name: 'Tile Installation',      desc: 'Porcelain, ceramic, and large-format tile for floors, showers, and backsplashes. Precision-set.', price: 'From $6/sq ft' },
    { name: 'Laminate Flooring',      desc: 'Real-wood look at a fraction of the cost, with modern water-resistant cores.', price: 'From $3.50/sq ft' },
    { name: 'Carpet Installation',    desc: 'Plush comfort for bedrooms and family rooms, with stain-resistant options and next-day install.', price: 'From $2.50/sq ft' },
    { name: 'Floor Removal & Prep',   desc: 'Tile demo, subfloor leveling, and moisture barriers — the prep work that makes floors last.', price: 'Included in quote' },
  ],

  testimonials: [
    { name: 'Jason & Amy T.', role: 'Homeowners — Tampa',   quote: '1,800 sq ft of LVP through the whole house in 3 days. They moved the furniture, the seams are invisible, and the quote didn\'t change by a penny.', rating: 5 },
    { name: 'Lorraine K.',    role: 'Homeowner — Carrollwood', quote: 'They refinished my 60-year-old oak floors instead of pushing me to replace them. Saved me thousands and they\'re gorgeous. Honest company.', rating: 5 },
    { name: 'Victor M.',      role: 'Landlord — 6 units',     quote: 'I\'ve used Solid Ground on six rental units. Fast turnarounds between tenants, durable product recommendations, fair pricing every time.', rating: 5 },
  ],

  faqs: [
    { q: 'How much does new flooring cost?',        a: 'Installed prices typically run: carpet $2.50–5/sq ft, laminate $3.50–6, LVP $4.50–8, tile $6–12, hardwood $8–15. Your free in-home estimate gives you an exact all-in number.' },
    { q: 'How long does installation take?',        a: 'Most whole-home LVP or laminate jobs take 2–4 days. Tile runs longer (4–7 days), carpet is often same-day or next-day.' },
    { q: 'Do you move furniture?',                  a: 'Yes — furniture moving is included on most jobs. We also handle appliance disconnection/reconnection for kitchen installs.' },
    { q: 'What\'s the best floor for Florida?',     a: 'Luxury vinyl plank, honestly. It\'s 100% waterproof, handles humidity, survives pets and kids, and looks like real wood. It\'s 60% of what we install.' },
    { q: 'Do you offer financing?',                 a: 'Yes — 0% for 12 months on projects over $2,500, with longer terms available. Approval takes about a minute.' },
  ],

  gallery: [
    { label: 'Whole-Home LVP',       desc: '1,800 sq ft waterproof plank — 3 days',           before: 'bg-gray-800', after: 'bg-amber-900' },
    { label: 'Hardwood Refinish',    desc: '60-year-old oak sanded and refinished',            before: 'bg-gray-800', after: 'bg-amber-900' },
    { label: 'Master Shower Tile',   desc: 'Floor-to-ceiling porcelain, niche + bench',        before: 'bg-gray-800', after: 'bg-amber-900' },
    { label: 'Large-Format Tile',    desc: '24x48 porcelain — open living area',               before: 'bg-gray-800', after: 'bg-amber-900' },
    { label: 'Bedroom Carpet',       desc: 'Stain-resistant plush — 4 bedrooms in a day',      before: 'bg-gray-800', after: 'bg-amber-900' },
    { label: 'Staircase Remodel',    desc: 'Carpet to hardwood treads with iron balusters',    before: 'bg-gray-800', after: 'bg-amber-900' },
  ],

  serviceAreas: ['Tampa', 'Brandon', 'Riverview', 'Wesley Chapel', 'Carrollwood', 'Westchase', 'Lutz', 'Valrico'],

  financing: {
    headline: 'New Floors From $79/Month',
    body:     'Whole-home flooring is a big investment — your payment doesn\'t have to be. 0% options and terms up to 60 months on projects over $2,500.',
    points:   ['0% interest for 12 months', 'Terms up to 60 months', 'Instant approval decision'],
  },

  highlight: {
    tag:   'Our Process',
    title: 'Free In-Home Estimate. Exact Price. Zero Surprises.',
    body:  'We measure your space, bring samples to your door, check your subfloor, and hand you one all-in price — materials, prep, install, and cleanup. The price we quote is the price you pay.',
    bullets: [
      'Samples brought to your home — see them in your light',
      'Subfloor inspection included in every quote',
      'All-in pricing: materials, install, haul-away',
      'Lifetime warranty on installation workmanship',
    ],
  },
}

export default config
