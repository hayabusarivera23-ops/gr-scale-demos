import type { DemoConfig } from '../types'

const config: DemoConfig = {
  slug:            'roofing',
  businessName:    'Peak Roofing Solutions',
  industry:        'Roofing',
  agencyTag:       'Demo site by GR Scale',
  primaryColor:    'amber',
  heroGradient:    'from-amber-900/70 via-slate-900 to-slate-950',
  accentClass:     'text-amber-400',
  bgAccentClass:   'bg-amber-500',
  tagline:         'Orlando\'s Trusted Roofing Contractor',
  heroHeadline:    'The Roof Over Your Family Deserves Better Than a Guess',
  heroSubheadline: 'Free drone inspection with photo proof — today if you call before 2pm. We\'ve replaced 3,200+ Orlando roofs, get 98% of storm claims approved, and back every nail with a 10-year warranty.',
  heroImage:       'https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&w=1920&q=80',

  trustBadges: [
    { label: 'GAF Certified',   sub: 'Factory-trained installer' },
    { label: 'Owens Corning',   sub: 'Preferred contractor' },
    { label: 'A+ BBB Rating',   sub: 'Accredited since 2011' },
    { label: '$2M Insured',     sub: 'Liability + workers comp' },
    { label: '10-Yr Warranty',  sub: 'Workmanship in writing' },
    { label: '0% Financing',    sub: 'Up to 120 months' },
  ],
  cta:             'Get Free Roof Inspection',
  phone:           '(407) 555-0200',
  email:           'estimate@peakroofing.com',
  address:         '5678 Roofing Blvd',
  city:            'Orlando',
  stateAbbr:       'FL',
  mapEmbedUrl:     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224143.9992064609!2d-81.5087!3d28.5383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890',
  licenseText:     'Licensed & Insured · FL License #CCC1234567',
  yearEstablished: 2009,
  guaranteeText:   '10-Year Workmanship Warranty',
  emergencyAvailable: true,
  offerLine:       'Free roof inspection + same-day estimate',

  serviceAreas: ['Orlando', 'Kissimmee', 'Winter Park', 'Windermere', 'Sanford', 'Oviedo', 'Lake Nona', 'Clermont'],

  highlight: {
    tag:   'Insurance Claims',
    title: 'Storm Damage? We Handle Your Insurance Claim Start to Finish.',
    body:  'After a hurricane or hail storm, the last thing you need is a fight with your insurance company. We document everything, meet your adjuster on the roof, and make sure your claim covers what it should — most customers pay only their deductible.',
    bullets: [
      'Free storm damage inspection with photo documentation',
      'We meet your insurance adjuster on-site',
      'All paperwork and supplements handled for you',
      'Most approved claims: you pay only your deductible',
    ],
  },

  financing: {
    headline: 'A New Roof for as Low as $99/Month',
    body:     'Don\'t let budget delay a roof that\'s protecting everything you own. Flexible financing gets your roof replaced now with payments that fit your budget.',
    points:   ['0% interest options available', 'Terms up to 120 months', '60-second approval decision'],
  },

  stats: [
    { value: 17,   suffix: '+',  label: 'Years protecting Orlando homes' },
    { value: 3200, suffix: '+',  label: 'Roofs replaced & repaired' },
    { value: 98,   suffix: '%',  label: 'Insurance claims approved' },
    { value: 10,   suffix: '-yr', label: 'Workmanship warranty' },
  ],

  process: [
    { title: 'Free Inspection',       desc: 'A certified inspector documents your roof with photos — drone views included. You get the full report, no obligation.' },
    { title: 'Claim or Quote',        desc: 'Storm damage? We meet your adjuster and handle the claim. Otherwise you get an exact written quote — good for 90 days.' },
    { title: 'Build Day',             desc: 'Most roofs done in 1-2 days. Landscaping protected, magnetic nail sweep of your entire yard, dumpster gone same week.' },
    { title: 'Final Walkthrough',     desc: 'We walk the roof with you, register your warranties, and hand over the full photo package for your records.' },
  ],
  metaTitle:       'Peak Roofing Solutions — Orlando Roofing Contractor | Free Inspection',
  metaDescription: 'Licensed Orlando roofing contractor. Free inspections, storm damage specialists, 10-year warranty. Call (407) 555-0200 for a free estimate.',

  services: [
    { name: 'Roof Replacement',     desc: 'Full tear-off and replacement with quality shingles, tile, or metal. 10-year workmanship warranty included.', price: 'Free estimate' },
    { name: 'Storm Damage Repair',  desc: 'We work directly with your insurance company to get your claim approved fast. We handle all the paperwork.', price: 'Free inspection' },
    { name: 'Roof Repair',          desc: 'Missing shingles, leaks, flashing damage. We fix it right the first time so it doesn\'t come back.', price: 'From $299' },
    { name: 'Commercial Roofing',   desc: 'TPO, modified bitumen, and metal systems for offices, retail, and multifamily. Minimal disruption to your business.', price: 'Free estimate' },
    { name: 'Gutters & Downspouts', desc: 'Seamless gutter installation, cleaning, and repair. Protect your roof and foundation.', price: 'From $8/ft' },
    { name: 'Roof Inspection',      desc: 'Comprehensive inspection with photos and written report. Required for home sales and insurance.', price: 'Free' },
  ],

  testimonials: [
    {
      name:   'Robert H.',
      role:   'Homeowner — Orlando',
      quote:  'Hurricane Ian took out a section of my roof. Peak Roofing handled my entire insurance claim, got it approved, and had the new roof done in 3 days. Absolutely professional.',
      rating: 5,
    },
    {
      name:   'Sandra M.',
      role:   'Homeowner — Windermere',
      quote:  'They replaced my 22-year-old roof in two days. Clean crew, great communication, and they left the yard spotless. Couldn\'t be happier.',
      rating: 5,
    },
    {
      name:   'Carlos F.',
      role:   'Property Investor — Kissimmee',
      quote:  'I use Peak Roofing for all my investment properties. Competitive pricing, quality work, and they always deliver on time. Reliable partner.',
      rating: 5,
    },
  ],

  faqs: [
    { q: 'How do I know if I need a full replacement or just a repair?', a: 'We offer free inspections with photos. Generally, if your roof is over 15–20 years old or more than 30% of it is damaged, replacement is more cost-effective than repairs.' },
    { q: 'Do you handle insurance claims?',                              a: 'Yes. We specialize in storm damage claims and work directly with all major insurance companies. We document the damage, communicate with your adjuster, and ensure your claim covers everything it should.' },
    { q: 'How long does a roof replacement take?',                       a: 'Most residential replacements take 1–2 days. We handle permits, inspection scheduling, and material delivery so you don\'t have to worry about anything.' },
    { q: 'What roofing materials do you install?',                       a: 'Asphalt shingles (3-tab, architectural, impact-resistant), tile (concrete and clay), metal, and flat roof systems (TPO, modified bitumen).' },
    { q: 'What warranty do you offer?',                                  a: 'All installations come with our 10-year workmanship warranty plus the manufacturer\'s material warranty (typically 25–50 years for shingles).' },
  ],

  gallery: [
    { label: 'Shingle Replacement',  desc: 'Full architectural shingle replacement — 2,400 sq ft', before: 'bg-gray-800', after: 'bg-amber-900', img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=75' },
    { label: 'Storm Damage',         desc: 'Insurance-covered replacement after hurricane damage',  before: 'bg-gray-800', after: 'bg-amber-900', img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=75' },
    { label: 'Metal Roof Install',   desc: 'Standing seam metal roof on custom home',               before: 'bg-gray-800', after: 'bg-amber-900', img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=75' },
    { label: 'Tile Roof',            desc: 'Concrete tile replacement — Mediterranean style',       before: 'bg-gray-800', after: 'bg-amber-900' },
    { label: 'Flat Roof (TPO)',      desc: 'Commercial TPO membrane installation',                  before: 'bg-gray-800', after: 'bg-amber-900' },
    { label: 'Gutter Install',       desc: 'K-style seamless aluminum gutters + guards',            before: 'bg-gray-800', after: 'bg-amber-900' },
  ],
}

export default config
