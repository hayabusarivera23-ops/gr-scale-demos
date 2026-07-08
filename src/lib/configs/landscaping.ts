import type { DemoConfig } from '../types'

const config: DemoConfig = {
  slug:            'landscaping',
  businessName:    'GreenEdge Landscaping',
  industry:        'Landscaping',
  agencyTag:       'Demo site by GR Scale',
  primaryColor:    'green',
  heroGradient:    'from-green-900/70 via-slate-900 to-slate-950',
  accentClass:     'text-green-400',
  bgAccentClass:   'bg-green-500',
  tagline:         'Orlando\'s Premier Landscaping Company',
  heroHeadline:    'Beautiful Yards, Zero Stress',
  heroSubheadline: 'Weekly lawn care, landscape design, irrigation, and full yard transformations. Serving Greater Orlando with licensed pros and a satisfaction guarantee.',
  cta:             'Get a Free Estimate',
  phone:           '(407) 555-0400',
  email:           'quote@greenedgelandscaping.com',
  address:         '2020 Garden Lane',
  city:            'Orlando',
  stateAbbr:       'FL',
  mapEmbedUrl:     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224143.9992064609!2d-81.5087!3d28.5383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890',
  licenseText:     'Licensed & Insured · FL Pesticide License #JE1234567',
  yearEstablished: 2011,
  guaranteeText:   '100% Satisfaction Guarantee',
  emergencyAvailable: false,
  offerLine:       'First lawn service FREE when you sign up for a monthly plan',
  heroImage:       'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1920&q=80',
  trustBadges: [
    { label: 'Licensed & Insured',sub: 'Full coverage' },
    { label: 'Monthly Plans',    sub: 'From $180/mo' },
    { label: 'All Irrigation Brands',sub: 'Hunter, Rain Bird +' },
    { label: 'Free Estimates',   sub: 'Honest recommendations' },
    { label: 'Seasonal Programs',sub: 'Year-round care' },
    { label: 'A+ BBB Rating',    sub: 'Accredited business' },
  ],
  metaTitle:       'GreenEdge Landscaping Orlando | Lawn Care & Landscape Design',
  metaDescription: 'Professional landscaping in Orlando FL. Lawn care, landscape design, irrigation, and more. Licensed & insured. Get a free estimate today.',

  services: [
    { name: 'Weekly Lawn Care',      desc: 'Mow, edge, blow, and go. Consistent service every week, on schedule, without the hassle.', price: 'From $45/visit' },
    { name: 'Landscape Design',      desc: 'Transform your yard with a custom design. We handle plants, mulch, stone, and installation.', price: 'Free consultation' },
    { name: 'Irrigation Systems',    desc: 'Smart sprinkler installation, repair, and seasonal tune-ups. Save water and money.', price: 'From $799' },
    { name: 'Sod Installation',      desc: 'Bahia, St. Augustine, Zoysia — we prep the soil, lay the sod, and have your lawn established in days.', price: 'From $0.65/sq ft' },
    { name: 'Tree & Shrub Trimming', desc: 'Keep your property looking sharp with professional trimming and pruning service.', price: 'From $99' },
    { name: 'Seasonal Cleanups',     desc: 'Pre-summer and post-storm cleanups. Mulch refreshing, bed preparation, and debris removal.', price: 'Get quote' },
  ],

  testimonials: [
    {
      name:   'Angela P.',
      role:   'Homeowner — Winter Garden',
      quote:  'GreenEdge completely transformed my backyard. Dead patches, bare spots — they laid new sod, added plants, and now my yard is the nicest on the block. Neighbors keep asking who did it.',
      rating: 5,
    },
    {
      name:   'David K.',
      role:   'HOA President — MetroWest',
      quote:  'We switched to GreenEdge for our community maintenance and the difference was immediate. Professional, reliable, and they show up when they say they will. Our residents are happy.',
      rating: 5,
    },
    {
      name:   'Nicole R.',
      role:   'Homeowner — Ocoee',
      quote:  'They installed a new sprinkler system and it cut my water bill by 40%. Plus the lawn has never looked better. Fast install, explained everything, no mess left behind.',
      rating: 5,
    },
  ],

  faqs: [
    { q: 'Do you offer monthly lawn care contracts?',          a: 'Yes. Our most popular option is a monthly maintenance plan that includes weekly mowing, edging, blowing, and a quarterly weed control treatment. Plans start at $180/month.' },
    { q: 'What areas do you serve?',                           a: 'We serve all of Greater Orlando including Orange, Osceola, Seminole, and Lake counties. This includes Orlando, Kissimmee, Winter Garden, Ocoee, Clermont, and surrounding areas.' },
    { q: 'Do you offer irrigation repair?',                    a: 'Yes. We service all brands of irrigation systems — Hunter, Rain Bird, Orbit, and more. We also offer smart controller upgrades that save water and money.' },
    { q: 'Can you fix a lawn that\'s mostly dead or patchy?',  a: 'Absolutely. We\'ll evaluate whether your lawn needs overseeding, aeration, soil treatment, or full sod replacement. We\'ll give you an honest recommendation and a free estimate.' },
    { q: 'Do you do one-time jobs or only contracts?',         a: 'Both. We do one-time cleanups, landscape installs, and sod jobs with no ongoing commitment. Monthly maintenance plans are optional but save you about 15%.' },
  ],

  gallery: [
    { label: 'Backyard Transformation', desc: 'Dead lawn to lush sod + landscape beds in one week', before: 'bg-gray-900', after: 'bg-green-950' },
    { label: 'Front Yard Redesign',     desc: 'New sod, plants, mulch, and curb edging',            before: 'bg-gray-900', after: 'bg-green-950' },
    { label: 'Irrigation Install',      desc: '12-zone smart system for 0.5 acre property',         before: 'bg-gray-900', after: 'bg-green-950' },
    { label: 'Commercial Property',     desc: 'Office park — monthly maintenance contract',          before: 'bg-gray-900', after: 'bg-green-950' },
    { label: 'Garden Bed Design',       desc: 'Low-maintenance native planting with rock mulch',     before: 'bg-gray-900', after: 'bg-green-950' },
    { label: 'Tree Trimming',           desc: 'Palm trimming + oak canopy reduction, HOA property',  before: 'bg-gray-900', after: 'bg-green-950' },
  ],

  highlight: {
    tag:   'Seasonal Packages',
    title: 'Year-Round Beautiful — One Simple Seasonal Plan.',
    body:  'Florida yards need different care every season. Our annual plan bundles mowing, mulching, trimming, fertilization, and seasonal color into one predictable monthly price — so your yard is the best on the street all year.',
    bullets: [
      'Spring: mulch refresh + fertilization + irrigation check',
      'Summer: weekly mowing + pest and weed control',
      'Fall: trimming, cleanups + overseeding',
      'Winter: annuals, palm care + monthly maintenance',
    ],
  },
}

export default config
