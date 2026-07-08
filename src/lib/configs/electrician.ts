import type { DemoConfig } from '../types'

const config: DemoConfig = {
  slug:            'electrician',
  businessName:    'Bright Current Electric',
  industry:        'Electrical',
  agencyTag:       'Demo site by GR Scale',
  primaryColor:    'amber',
  heroGradient:    'from-amber-900/70 via-slate-900 to-slate-950',
  accentClass:     'text-amber-400',
  bgAccentClass:   'bg-amber-500',
  tagline:         'Tampa\'s Trusted Licensed Electricians',
  heroHeadline:    'Licensed Electricians. Same-Day Service. Done Safe.',
  heroSubheadline: 'From flickering lights to full panel upgrades and EV chargers — background-checked, licensed electricians who show up on time and quote the full price upfront.',
  cta:             'Call an Electrician Now',
  phone:           '(813) 555-0400',
  email:           'service@brightcurrent.com',
  address:         '2200 Voltage Way',
  city:            'Tampa',
  stateAbbr:       'FL',
  mapEmbedUrl:     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225321.5!2d-82.4572!3d27.9506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c31!2sTampa%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890',
  licenseText:     'Licensed & Insured · FL License #EC13012345',
  yearEstablished: 2011,
  guaranteeText:   'Lifetime Workmanship Guarantee',
  emergencyAvailable: true,
  offerLine:       '$49 electrical safety inspection with any repair',
  heroImage:       'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=80',
  trustBadges: [
    { label: 'FL Licensed EC',   sub: 'EC13012345 · verified' },
    { label: '24/7 Emergency',   sub: 'Real electrician answers' },
    { label: 'A+ BBB Rating',    sub: 'Accredited business' },
    { label: 'Fully Insured',    sub: 'Liability + workers comp' },
    { label: 'Lifetime Warranty',sub: 'On workmanship' },
    { label: '0% Financing',     sub: 'Panels & EV chargers' },
  ],
  metaTitle:       'Bright Current Electric — Licensed Electrician in Tampa, FL | 24/7',
  metaDescription: 'Licensed Tampa electricians. Panel upgrades, EV chargers, emergency service 24/7. Upfront pricing. Call (813) 555-0400.',

  services: [
    { name: 'Emergency Electrician',  desc: 'Sparking outlets, burning smells, total power loss — we dispatch 24/7 and make it safe fast.', price: '24/7' },
    { name: 'Panel Upgrades',         desc: '100A to 200A upgrades, breaker replacements, and code corrections for older homes.', price: 'From $1,800' },
    { name: 'EV Charger Installation',desc: 'Level 2 home charging for Tesla, Rivian, and every major EV. Permit and inspection included.', price: 'From $649' },
    { name: 'Residential Electrical', desc: 'Outlets, switches, ceiling fans, lighting, whole-home rewires — done to code, guaranteed.', price: 'Upfront quote' },
    { name: 'Commercial Electrical',  desc: 'Build-outs, dedicated circuits, lighting retrofits, and maintenance for Tampa businesses.', price: 'Free estimate' },
    { name: 'Lighting Design',        desc: 'Recessed lighting, landscape lighting, and smart home lighting that transforms your space.', price: 'Free design' },
  ],

  testimonials: [
    { name: 'Derek W.',  role: 'Homeowner — Tampa',        quote: 'Panel was original to my 1978 house. They upgraded to 200A in one day, handled the permit, and the inspector signed off first visit. Worth every penny.', rating: 5 },
    { name: 'Alicia P.', role: 'EV Owner — Brandon',        quote: 'EV charger installed 3 days after I called. Clean install, walked me through the app setup, and the price matched the quote exactly.', rating: 5 },
    { name: 'Sam K.',    role: 'Restaurant Owner — Ybor',   quote: 'Kitchen kept tripping breakers during dinner rush. They found the problem, ran two dedicated circuits, and we haven\'t had an issue since.', rating: 5 },
  ],

  faqs: [
    { q: 'Do I need a panel upgrade?',            a: 'If your home has a 100A panel, fuses, breakers that trip frequently, or you\'re adding an EV charger, pool, or major appliance — yes, likely. We\'ll assess it free with any service call.' },
    { q: 'How much does an EV charger install cost?', a: 'Most Level 2 installs run $649–$1,200 depending on panel capacity and distance to your garage. That includes permit, materials, and inspection.' },
    { q: 'Are you really available 24/7?',        a: 'Yes. Electrical emergencies are dangerous — burning smells, sparking, or hot outlets should never wait until morning. A licensed electrician answers our line around the clock.' },
    { q: 'Are your electricians licensed?',       a: 'Every electrician on our team works under our Florida EC license, carries insurance, and passes background checks and drug tests. No subcontractors, ever.' },
    { q: 'Do you offer financing?',               a: 'Yes — panel upgrades and larger projects qualify for financing with 0% options and terms up to 60 months. Approval takes about a minute.' },
  ],

  gallery: [
    { label: '200A Panel Upgrade',   desc: 'Full panel replacement with surge protection',       before: 'bg-gray-800', after: 'bg-amber-900' },
    { label: 'Tesla Wall Connector', desc: 'Level 2 charger with dedicated 60A circuit',         before: 'bg-gray-800', after: 'bg-amber-900' },
    { label: 'Kitchen Lighting',     desc: 'Recessed LED conversion — 12 fixtures',              before: 'bg-gray-800', after: 'bg-amber-900' },
    { label: 'Whole-Home Rewire',    desc: '1960s home brought fully to code',                   before: 'bg-gray-800', after: 'bg-amber-900' },
    { label: 'Commercial Build-Out', desc: 'Retail space electrical — lighting + circuits',      before: 'bg-gray-800', after: 'bg-amber-900' },
    { label: 'Landscape Lighting',   desc: 'Low-voltage path and accent lighting system',        before: 'bg-gray-800', after: 'bg-amber-900' },
  ],

  serviceAreas: ['Tampa', 'Brandon', 'Riverview', 'Wesley Chapel', 'Carrollwood', 'Town \'N\' Country', 'Lutz', 'Temple Terrace'],

  financing: {
    headline: 'Panel Upgrades & Rewires — From $89/Month',
    body:     'Electrical safety can\'t wait for the budget to catch up. Finance your panel upgrade, rewire, or EV charger with fast approval and fair terms.',
    points:   ['0% interest for 12 months', 'Terms up to 60 months', 'Approval in about a minute'],
  },

  highlight: {
    tag:   'Safety First',
    title: 'Old Wiring Is the #1 Cause of House Fires. Know Where You Stand.',
    body:  'Homes built before 1990 often have undersized panels, aluminum branch wiring, or double-tapped breakers. Our 32-point electrical safety inspection finds hazards before they find you.',
    bullets: [
      '32-point inspection with written report and photos',
      'Thermal imaging of your panel to catch hot spots',
      'Code-violation review with straight answers on what matters',
      'Free with any repair — or $49 standalone',
    ],
  },
}

export default config
