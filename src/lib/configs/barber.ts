import type { DemoConfig } from '../types'

const config: DemoConfig = {
  slug:            'barber',
  businessName:    'Sharp & Co. Barbershop',
  industry:        'Barbershop',
  agencyTag:       'Demo site by GR Scale',
  primaryColor:    'amber',
  heroGradient:    'from-amber-950 via-zinc-900 to-slate-950',
  accentClass:     'text-amber-400',
  bgAccentClass:   'bg-amber-500',
  tagline:         'Orlando\'s Premier Men\'s Grooming Studio',
  heroHeadline:    'Precision Cuts. No Waiting. Book Online.',
  heroSubheadline: 'Sharp & Co. is where Orlando men come for clean fades, classic cuts, and straight razor shaves. Walk in or book your slot in 30 seconds.',
  cta:             'Book Your Cut',
  phone:           '(407) 555-0175',
  email:           'appointments@sharpandco.com',
  address:         '789 Barber Street',
  city:            'Orlando',
  stateAbbr:       'FL',
  mapEmbedUrl:     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224143.9992064609!2d-81.5087!3d28.5383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890',
  licenseText:     'Licensed Florida Barber · State License #BB1234567',
  yearEstablished: 2017,
  guaranteeText:   'Love Your Cut or We Fix It Free',
  emergencyAvailable: false,
  offerLine:       'First-time clients: $5 off any service — mention this site',
  metaTitle:       'Sharp & Co. Barbershop Orlando | Precision Fades & Classic Cuts',
  metaDescription: 'Orlando\'s top-rated barbershop. Precision fades, classic cuts, straight razor shaves. Book online in 30 seconds. Walk-ins welcome at (407) 555-0175.',

  services: [
    { name: 'Fade & Taper',       desc: 'Skin fades, low fades, high fades — every variation, done clean and precise.', price: 'From $35' },
    { name: 'Classic Haircut',    desc: 'Timeless men\'s cut shaped to your face structure and style preferences.', price: 'From $30' },
    { name: 'Straight Razor Shave',desc: 'Hot towel, straight razor, and aftercare — the full traditional shave experience.', price: '$40' },
    { name: 'Beard Trim & Shape', desc: 'Sculpted beard lines, edge cleanup, and beard oil treatment.', price: 'From $20' },
    { name: 'Cut + Beard Combo',  desc: 'Full haircut and beard service together. Most popular booking at Sharp & Co.', price: '$55' },
    { name: 'Kids Cut (12 & Under)', desc: 'Patient, skilled cuts for boys. Clean up the back and sides, style on top.', price: '$25' },
  ],

  testimonials: [
    {
      name:   'Marcus T.',
      role:   'Regular Client — Orlando',
      quote:  'Best barbershop in Orlando, no question. I drive 20 minutes past three other shops to come here. The fade is always clean, the atmosphere is great, and they remember exactly how I like my cut every time.',
      rating: 5,
    },
    {
      name:   'Anthony R.',
      role:   'Client — Winter Park',
      quote:  'Finally found a barber who can do a proper skin fade without leaving lines. Booked online in 30 seconds and was in the chair within 10 minutes of my appointment. Sharp & Co. is the real deal.',
      rating: 5,
    },
    {
      name:   'Devon L.',
      role:   'Client — Kissimmee',
      quote:  'I brought my son for his first real haircut and they were so patient with him. Cut came out great and he felt like a little man walking out. This is our spot now.',
      rating: 5,
    },
  ],

  faqs: [
    { q: 'Do I need an appointment?',              a: 'No, walk-ins are always welcome. But booking online guarantees your time slot and avoids any wait. You can book on this site in about 30 seconds.' },
    { q: 'How long does a cut take?',              a: 'Most cuts take 30–45 minutes depending on the style. Combo services (cut + beard) take about 60 minutes. We never rush — every client gets the full service.' },
    { q: 'What should I bring or tell you?',       a: 'If you have photos of the style you want, bring them. Otherwise our barbers will consult with you for a minute before picking up the clippers. Communication is part of every service.' },
    { q: 'What payment methods do you accept?',    a: 'We accept cash, all major credit and debit cards, Venmo, Cash App, and Zelle. Tipping is appreciated but always optional.' },
    { q: 'Can you match a style from a photo?',    a: 'Yes. Bring a reference photo and our barbers will match it as closely as your hair type allows. We\'ll be honest with you if a certain style won\'t work for your hair.' },
  ],

  gallery: [
    { label: 'Skin Fade',        desc: 'Zero-to-one skin fade with textured top — clean lines throughout', before: 'bg-zinc-800',  after: 'bg-amber-900' },
    { label: 'Classic Cut',      desc: 'Scissor cut on thick hair — structured shape, natural finish',     before: 'bg-gray-800',  after: 'bg-amber-900' },
    { label: 'Beard Shaping',    desc: 'Full beard sculpt — sharp lines, even fade into the skin',        before: 'bg-slate-800', after: 'bg-amber-900' },
    { label: 'Straight Shave',   desc: 'Hot towel straight razor shave — old school technique, smooth finish', before: 'bg-zinc-800', after: 'bg-amber-950' },
    { label: 'Taper Fade',       desc: 'Low taper with a hard part — clean, professional look',           before: 'bg-gray-800',  after: 'bg-amber-900' },
    { label: 'Cut + Beard Combo',desc: 'Full cut and beard service — most popular booking at Sharp & Co.', before: 'bg-slate-800', after: 'bg-amber-900' },
  ],
}

export default config
