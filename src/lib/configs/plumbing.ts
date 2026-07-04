import type { DemoConfig } from '../types'

const config: DemoConfig = {
  slug:            'plumbing',
  businessName:    'Elite Plumbing Co',
  industry:        'Plumbing',
  agencyTag:       'Demo site by GR Scale',
  primaryColor:    'blue',
  heroGradient:    'from-blue-900/80 via-slate-900 to-slate-950',
  accentClass:     'text-blue-400',
  bgAccentClass:   'bg-blue-500',
  tagline:         'Orlando\'s Most Trusted Plumbers',
  heroHeadline:    'Fast, Reliable Plumbing — 24/7',
  heroSubheadline: 'Leak? Clog? No hot water? We fix it fast. Serving Greater Orlando with licensed plumbers, same-day service, and upfront pricing.',
  cta:             'Call Now — We Answer 24/7',
  phone:           '(407) 555-0100',
  email:           'service@eliteplumbingco.com',
  address:         '1234 Plumbing Ave',
  city:            'Orlando',
  stateAbbr:       'FL',
  mapEmbedUrl:     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224143.9992064609!2d-81.5087!3d28.5383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890',
  licenseText:     'Licensed & Insured · FL License #CFC1234567',
  yearEstablished: 2014,
  guaranteeText:   '100% Satisfaction Guarantee',
  emergencyAvailable: true,
  offerLine:       'Free service call with any repair over $150',
  metaTitle:       'Elite Plumbing Co — Orlando Plumber | 24/7 Emergency Service',
  metaDescription: 'Licensed Orlando plumbers available 24/7. Same-day service, upfront pricing, satisfaction guaranteed. Call (407) 555-0100 now.',

  services: [
    { name: 'Emergency Plumbing',   desc: 'Burst pipes, major leaks, sewage backups — we respond fast, day or night.', price: 'Call for pricing' },
    { name: 'Drain Cleaning',       desc: 'Clogged sink, shower, or main line? We clear it completely — not just temporarily.', price: 'From $89' },
    { name: 'Water Heater Repair',  desc: 'No hot water? We repair all brands and install new units same day.', price: 'From $149' },
    { name: 'Leak Detection',       desc: 'Hidden leaks behind walls or under slabs. We find it without tearing up your home.', price: 'From $199' },
    { name: 'Toilet Repair',        desc: 'Running, leaking, or not flushing right. Fast fix, honest pricing.', price: 'From $75' },
    { name: 'Repiping',             desc: 'Galvanized or corroded pipes? We repipe your whole home with minimal disruption.', price: 'Free estimate' },
  ],

  testimonials: [
    {
      name:   'Maria S.',
      role:   'Homeowner — Orlando',
      quote:  'Pipe burst at midnight. Called Elite and they were here within an hour. Fixed it fast, cleaned up after themselves, and the price was fair. These guys are the real deal.',
      rating: 5,
    },
    {
      name:   'Tom B.',
      role:   'Property Manager — Winter Park',
      quote:  'I manage 12 rental units and Elite Plumbing is my go-to. They show up on time, the work is quality, and they always give me upfront pricing before starting anything.',
      rating: 5,
    },
    {
      name:   'Linda K.',
      role:   'Homeowner — Kissimmee',
      quote:  'Had a slab leak and was terrified of the cost. Elite came out, diagnosed it quickly, and repaired it for $600 less than the other company quoted. Highly recommend.',
      rating: 5,
    },
  ],

  faqs: [
    { q: 'Do you offer 24/7 emergency service?',         a: 'Yes. We answer calls 24 hours a day, 7 days a week. Emergency calls are answered within 15 minutes and we aim to arrive within 1 hour.' },
    { q: 'Do you give free estimates?',                  a: 'We offer free estimates on all major projects (repiping, water heater replacement, etc.). Diagnostic service calls are $49, which is waived if you proceed with the repair.' },
    { q: 'Are you licensed and insured?',                a: 'Absolutely. We hold a Florida Certified Plumbing Contractor license (CFC1234567) and carry full liability and workers\' compensation insurance.' },
    { q: 'What areas do you serve?',                     a: 'We serve Greater Orlando including Orange, Osceola, Seminole, and Lake counties — Orlando, Kissimmee, Winter Park, Oviedo, Sanford, and surrounding areas.' },
    { q: 'What payment methods do you accept?',          a: 'We accept cash, all major credit cards, and offer financing options for larger projects through third-party lenders. No payment is due until the job is complete.' },
  ],

  gallery: [
    { label: 'Drain Cleaning',   desc: 'Complete main line cleanout — cleared same day', before: 'bg-gray-800', after: 'bg-blue-900' },
    { label: 'Water Heater',     desc: '50-gal tank replacement, installed in 3 hours',  before: 'bg-gray-800', after: 'bg-blue-900' },
    { label: 'Slab Leak Repair', desc: 'Detected and repaired with minimal floor damage', before: 'bg-gray-800', after: 'bg-blue-900' },
    { label: 'Repipe Project',   desc: 'Full home repipe — 4 bed/2 bath, 2 days',        before: 'bg-gray-800', after: 'bg-blue-900' },
    { label: 'Bathroom Remodel', desc: 'Full rough-in for master bath addition',          before: 'bg-gray-800', after: 'bg-blue-900' },
    { label: 'Backflow Test',    desc: 'Annual backflow prevention testing & cert',       before: 'bg-gray-800', after: 'bg-blue-900' },
  ],

  financing: {
    headline: 'Water Heaters & Repipes From $59/Month',
    body:     'A burst pipe or dead water heater can\'t wait for payday. Finance major plumbing work with fast approval and payments that fit your budget.',
    points:   ['0% interest for 12 months', 'Terms up to 60 months', 'Approval in about a minute'],
  },

  stats: [
    { value: 14,   suffix: '+',    label: 'Years serving Greater Orlando' },
    { value: 6500, suffix: '+',    label: 'Plumbing jobs completed' },
    { value: 45,   suffix: ' min', label: 'Average emergency arrival' },
    { value: 100,  suffix: '%',    label: 'Upfront flat-rate pricing' },
  ],

  process: [
    { title: 'Talk to a Real Plumber', desc: 'No call center. A licensed plumber answers 24/7, helps you stop the damage, and dispatches a stocked truck.' },
    { title: 'Flat Rate Before Work',  desc: 'We diagnose and quote the complete price up front. The number we say is the number you pay — period.' },
    { title: 'Fixed On First Visit',   desc: 'Our trucks carry the parts for 90% of repairs. Shoe covers on, work area protected, mess gone when we leave.' },
    { title: 'Tested & Guaranteed',    desc: 'We pressure-test the repair, show you the result, and back it with a written parts + labor guarantee.' },
  ],

  highlight: {
    tag:   '24/7 Emergency',
    title: 'Burst Pipe at 2AM? A Real Plumber Answers Our Phone.',
    body:  'No answering service, no callback queue. A licensed plumber picks up 24/7, walks you through shutting off the water, and dispatches a fully-stocked truck to your door — usually within the hour.',
    bullets: [
      'Live plumber on the phone, around the clock',
      'Trucks dispatched within 15 minutes of your call',
      'Fully stocked — most emergencies fixed on first visit',
      'Flat emergency rate quoted before we roll',
    ],
  },
}

export default config
