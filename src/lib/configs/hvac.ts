import type { DemoConfig } from '../types'

const config: DemoConfig = {
  slug:            'hvac',
  businessName:    'CoolPro HVAC Services',
  industry:        'HVAC',
  agencyTag:       'Demo site by GR Scale',
  primaryColor:    'blue',
  heroGradient:    'from-blue-900/80 via-slate-900 to-slate-950',
  accentClass:     'text-blue-400',
  bgAccentClass:   'bg-blue-500',
  tagline:         'Orlando\'s Most Trusted HVAC Company',
  heroHeadline:    'Fast AC Repair & Installation — Same Day',
  heroSubheadline: 'AC broke down in the Florida heat? We fix it fast. Licensed HVAC technicians serving Greater Orlando with same-day service, upfront pricing, and a 100% satisfaction guarantee.',
  cta:             'Call Now — We Answer 24/7',
  phone:           '(407) 555-0150',
  email:           'service@coolprohvac.com',
  address:         '3421 Cooling Way',
  city:            'Orlando',
  stateAbbr:       'FL',
  mapEmbedUrl:     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224143.9992064609!2d-81.5087!3d28.5383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890',
  licenseText:     'Licensed & Insured · FL License #CAC1234567',
  yearEstablished: 2008,
  guaranteeText:   '100% Satisfaction Guarantee',
  emergencyAvailable: true,
  offerLine:       'Free diagnostic with any repair — $89 value',
  metaTitle:       'CoolPro HVAC Services — Orlando AC Repair | Same-Day Service',
  metaDescription: 'Licensed Orlando HVAC company. Same-day AC repair, installation, and maintenance. Upfront pricing, satisfaction guaranteed. Call (407) 555-0150.',

  services: [
    { name: 'AC Repair',        desc: 'Fast diagnosis and repair of any AC system. Most repairs completed same day with upfront pricing.', price: 'From $149' },
    { name: 'AC Installation',  desc: 'New energy-efficient system installation sized right for your home. All brands available.', price: 'Free estimate' },
    { name: 'AC Maintenance',   desc: 'Annual tune-up that prevents breakdowns and keeps your system running at peak efficiency.', price: 'From $89' },
    { name: 'Duct Cleaning',    desc: 'Remove allergens, dust, and mold from your duct system for cleaner air and better efficiency.', price: 'From $249' },
    { name: 'Commercial HVAC',  desc: 'Full commercial HVAC services for offices, restaurants, retail, and industrial properties.', price: 'Free estimate' },
    { name: 'Emergency Service', desc: 'AC down at midnight in August? We answer 24/7 and dispatch a tech within the hour.', price: 'Call for pricing' },
  ],

  testimonials: [
    {
      name:   'Jennifer A.',
      role:   'Homeowner — Orlando',
      quote:  'AC went out on a 95-degree day. CoolPro was at my house within 90 minutes and had it running again in under 2 hours. The tech explained everything, and the price was exactly what they quoted. Outstanding service.',
      rating: 5,
    },
    {
      name:   'Carlos M.',
      role:   'Property Manager — Kissimmee',
      quote:  'We manage 30 units and CoolPro handles all our HVAC work. They show up on time, the work is quality, and they never try to upsell us on things we don\'t need. Exactly what we needed.',
      rating: 5,
    },
    {
      name:   'Diane W.',
      role:   'Homeowner — Sanford',
      quote:  'I got three quotes before calling CoolPro. They were $400 cheaper AND showed up the same day. New unit installed, cleaned up everything, and the house was cool by 4pm. Couldn\'t be happier.',
      rating: 5,
    },
  ],

  faqs: [
    { q: 'How fast can you get to my home?',      a: 'For emergency calls, we aim to arrive within 1–2 hours. For same-day non-emergency service, we typically arrive within 4 hours. We always call ahead with an exact arrival time.' },
    { q: 'Do you charge for estimates?',           a: 'We offer free estimates on new installations and replacements. For diagnostic service calls, we charge $89 which is waived if you proceed with the repair.' },
    { q: 'What brands do you service?',            a: 'We service and install all major brands including Carrier, Trane, Lennox, Rheem, Goodman, and all others. We stock parts for the most common systems so repairs can often be done same day.' },
    { q: 'Do you offer maintenance plans?',        a: 'Yes. Our annual maintenance plan includes two tune-ups per year, priority scheduling, and 10% off all repairs. Most customers save more than the plan costs in prevented breakdowns.' },
    { q: 'Are you licensed and insured?',          a: 'Absolutely. We hold a Florida CAC license and carry full liability and workers\' compensation insurance on every job. We\'re happy to provide proof before any work begins.' },
  ],

  gallery: [
    { label: 'AC Repair',           desc: 'Compressor replacement — completed same day, unit running like new',         before: 'bg-slate-700', after: 'bg-blue-900' },
    { label: 'New Installation',    desc: '3-ton Carrier system install — 4 bedroom home, completed in one day',         before: 'bg-gray-700', after: 'bg-blue-900' },
    { label: 'Commercial HVAC',     desc: 'Restaurant HVAC overhaul — 3 rooftop units replaced over a weekend',         before: 'bg-zinc-700', after: 'bg-sky-900'  },
    { label: 'Duct Cleaning',       desc: 'Full duct clean and sanitize — before/after air quality test included',       before: 'bg-slate-800', after: 'bg-blue-900' },
    { label: 'Maintenance Tune-Up', desc: 'Annual tune-up preventing a $1,200 compressor failure for this customer',    before: 'bg-gray-800', after: 'bg-sky-900'  },
    { label: 'Emergency Repair',    desc: 'Midnight call — family of 5, unit down. Back up in 2 hours',                 before: 'bg-zinc-800', after: 'bg-blue-900' },
  ],
}

export default config
