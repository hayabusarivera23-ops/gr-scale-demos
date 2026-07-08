import type { DemoConfig } from '../types'

const config: DemoConfig = {
  slug:            'pest-control',
  businessName:    'ShieldPro Pest Control',
  industry:        'Pest Control',
  agencyTag:       'Demo site by GR Scale',
  primaryColor:    'green',
  heroGradient:    'from-green-900/70 via-slate-900 to-slate-950',
  accentClass:     'text-green-400',
  bgAccentClass:   'bg-green-500',
  tagline:         'Tampa Bay\'s Pest-Free Guarantee',
  heroHeadline:    'Pests Don\'t Stand a Chance. Neither Does Their Return.',
  heroSubheadline: 'Roaches, ants, termites, rodents, mosquitoes — eliminated with pet-safe treatments and backed by our re-treat-free guarantee. Same-week service across Tampa Bay.',
  cta:             'Get a Free Pest Quote',
  phone:           '(813) 555-0900',
  email:           'defend@shieldpropest.com',
  address:         '990 Barrier Rd',
  city:            'Tampa',
  stateAbbr:       'FL',
  mapEmbedUrl:     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225321.5!2d-82.4572!3d27.9506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c31!2sTampa%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890',
  licenseText:     'Licensed & Insured · FL Pest Control License #JB123456',
  yearEstablished: 2012,
  guaranteeText:   'Free Re-Treatment Guarantee',
  emergencyAvailable: true,
  offerLine:       '$50 off your first treatment + free inspection',
  heroImage:       'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1920&q=80',
  trustBadges: [
    { label: 'FL Licensed',      sub: 'JB123456 · verified' },
    { label: 'Pet-Safe Products',sub: 'EPA registered' },
    { label: 'A+ BBB Rating',    sub: 'Accredited business' },
    { label: 'Free Re-Treats',   sub: 'Unlimited, guaranteed' },
    { label: 'Same-Week Service',sub: 'Most new customers' },
    { label: 'From $45/mo',      sub: '12 pests covered' },
  ],
  metaTitle:       'ShieldPro Pest Control — Tampa Exterminator | Free Inspection',
  metaDescription: 'Tampa pest control: roaches, ants, termites, rodents, mosquitoes. Pet-safe treatments, free re-treatments. Call (813) 555-0900.',

  services: [
    { name: 'General Pest Control',   desc: 'Roaches, ants, spiders, silverfish — quarterly barrier treatments that keep them out for good.', price: 'From $45/mo' },
    { name: 'Termite Protection',     desc: 'Sentricon systems, inspections, and WDO reports. Protect your biggest investment from Florida\'s #1 destroyer.', price: 'Free inspection' },
    { name: 'Rodent Control',         desc: 'Humane removal, entry-point sealing, and attic sanitation. We get them out and keep them out.', price: 'From $299' },
    { name: 'Mosquito Treatment',     desc: 'Monthly yard treatments that cut mosquito populations up to 90%. Take your backyard back.', price: 'From $59/mo' },
    { name: 'Bed Bug Elimination',    desc: 'Heat treatment kills every stage in one day — no thrown-out furniture, no repeat infestations.', price: 'Free inspection' },
    { name: 'Commercial Pest Plans',  desc: 'Restaurants, offices, and multifamily. Discreet service, compliance documentation included.', price: 'Custom quote' },
  ],

  testimonials: [
    { name: 'Gloria M.', role: 'Homeowner — Tampa',      quote: 'Had German roaches from a used appliance. Two treatments and they were GONE. It\'s been 14 months on the quarterly plan — not a single bug since.', rating: 5 },
    { name: 'Tim R.',    role: 'Homeowner — Lutz',        quote: 'Rats in the attic. ShieldPro sealed 11 entry points, trapped everything in a week, and sanitized the insulation. The noise stopped completely.', rating: 5 },
    { name: 'Chef Anna', role: 'Restaurant Owner',        quote: 'They service our kitchen monthly, keep our compliance binder updated for inspections, and always come after close. Zero violations in 3 years.', rating: 5 },
  ],

  faqs: [
    { q: 'Are your treatments safe for kids and pets?',  a: 'Yes. We use EPA-registered, pet-safe products applied by licensed technicians. Most treatments only require you to stay off treated surfaces until dry — about 30 minutes.' },
    { q: 'What if pests come back between visits?',      a: 'We come back and re-treat free — unlimited, no questions asked. That\'s our guarantee on every recurring plan.' },
    { q: 'How fast can you get here?',                   a: 'Most new customers get treated within 48 hours. Active infestations (bed bugs, rodents in living areas) get priority same-week scheduling.' },
    { q: 'Do I need quarterly service?',                 a: 'In Florida? Honestly, yes. Our climate never gets cold enough to knock pest populations down. Quarterly barriers are why our customers stay pest-free year-round.' },
    { q: 'Do you do termite inspections for home sales?',a: 'Yes — licensed WDO (wood-destroying organism) inspections with same-week reports, accepted by all Florida lenders.' },
  ],

  gallery: [
    { label: 'Quarterly Barrier',    desc: 'Full perimeter treatment — interior + exterior',   before: 'bg-gray-800', after: 'bg-green-900' },
    { label: 'Termite Defense',      desc: 'Sentricon bait system installation',               before: 'bg-gray-800', after: 'bg-green-900' },
    { label: 'Rodent Exclusion',     desc: '11 entry points sealed + attic restoration',       before: 'bg-gray-800', after: 'bg-green-900' },
    { label: 'Mosquito Program',     desc: 'Backyard treatment — 90% reduction',               before: 'bg-gray-800', after: 'bg-green-900' },
    { label: 'Bed Bug Heat Treat',   desc: 'Whole-room heat treatment — one day',              before: 'bg-gray-800', after: 'bg-green-900' },
    { label: 'Commercial Kitchen',   desc: 'Monthly compliance service for restaurants',       before: 'bg-gray-800', after: 'bg-green-900' },
  ],

  serviceAreas: ['Tampa', 'Brandon', 'Riverview', 'Wesley Chapel', 'Lutz', 'Carrollwood', 'Plant City', 'Valrico'],

  highlight: {
    tag:   'Monthly Protection',
    title: 'The ShieldPro Plan: Year-Round Protection, One Low Monthly Price.',
    body:  'One-time treatments kill what\'s there. Our protection plan keeps them from coming back — quarterly barrier treatments, unlimited free re-treats, and coverage for 12 common Florida pests.',
    bullets: [
      'From $45/month — covers 12 common pests',
      'Unlimited free re-treatments between visits',
      'Termite monitoring add-on available',
      'No contracts — cancel anytime',
    ],
  },
}

export default config
