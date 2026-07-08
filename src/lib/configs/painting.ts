import type { DemoConfig } from '../types'

const config: DemoConfig = {
  slug:            'painting',
  businessName:    'TrueCoat Painting',
  industry:        'Painting',
  agencyTag:       'Demo site by GR Scale',
  primaryColor:    'blue',
  heroGradient:    'from-blue-900/70 via-slate-900 to-slate-950',
  accentClass:     'text-blue-400',
  bgAccentClass:   'bg-blue-500',
  tagline:         'Orlando\'s Highest-Rated Painting Company',
  heroHeadline:    'A Flawless Paint Job, On Time and On Budget',
  heroSubheadline: 'Interior, exterior, and cabinet painting by full-time professional painters — not day labor. Free color consultation and a 5-year warranty on every project.',
  cta:             'Get My Free Estimate',
  phone:           '(407) 555-1000',
  email:           'quotes@truecoatpainting.com',
  address:         '1550 Palette Pkwy',
  city:            'Orlando',
  stateAbbr:       'FL',
  mapEmbedUrl:     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224143.9992064609!2d-81.5087!3d28.5383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890',
  licenseText:     'Licensed & Insured · Lead-Safe EPA Certified',
  yearEstablished: 2013,
  guaranteeText:   '5-Year Workmanship Warranty',
  emergencyAvailable: false,
  offerLine:       'Free color consultation with every estimate ($150 value)',
  heroImage:       'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1920&q=80',
  trustBadges: [
    { label: 'Licensed & Insured',sub: 'Lead-safe EPA certified' },
    { label: 'W-2 Painters',     sub: 'No day labor, ever' },
    { label: '5-Yr Warranty',    sub: 'Workmanship in writing' },
    { label: 'Sherwin-Williams', sub: 'Premium paint standard' },
    { label: 'Free Color Consult',sub: '$150 value included' },
    { label: 'A+ BBB Rating',    sub: 'Accredited business' },
  ],
  metaTitle:       'TrueCoat Painting — Interior & Exterior Painters in Orlando, FL',
  metaDescription: 'Orlando\'s top-rated painters. Interior, exterior, cabinets. 5-year warranty, free color consultation. Call (407) 555-1000.',

  services: [
    { name: 'Interior Painting',     desc: 'Walls, ceilings, trim, and doors with crisp lines and zero mess. Most rooms done in a day.', price: 'From $399/room' },
    { name: 'Exterior Painting',     desc: 'Pressure wash, repair, prime, and two coats of premium paint built for Florida sun and rain.', price: 'Free estimate' },
    { name: 'Cabinet Painting',      desc: 'Factory-smooth sprayed finish that transforms your kitchen for 80% less than replacement.', price: 'From $2,400' },
    { name: 'Commercial Painting',   desc: 'Offices, retail, and HOAs. Night and weekend scheduling to keep your business open.', price: 'Custom quote' },
    { name: 'Color Consultation',    desc: 'Our designer helps you pick the perfect palette — free with every project estimate.', price: 'Free' },
    { name: 'Drywall & Repair',      desc: 'Texture matching, water damage repair, and drywall patching — fixed right before we paint.', price: 'From $149' },
  ],

  testimonials: [
    { name: 'Beth C.',   role: 'Homeowner — Winter Park',  quote: 'Whole interior — 2,800 sq ft — done in 4 days. Lines so crisp they look computer-drawn. They moved furniture, covered everything, and vacuumed before leaving each day.', rating: 5 },
    { name: 'Mark J.',   role: 'Homeowner — Dr. Phillips',  quote: 'My kitchen cabinets look factory-new. Sprayed finish, soft-close hardware installed, done in 3 days. Quotes for new cabinets were $28k — I paid $3,100.', rating: 5 },
    { name: 'Susan H.',  role: 'HOA Board President',       quote: 'TrueCoat repainted all 14 buildings in our community on schedule and $6k under the next bid. Residents actually complimented the crews\' professionalism.', rating: 5 },
  ],

  faqs: [
    { q: 'How much does interior painting cost?',   a: 'Most rooms run $399–$699 including paint, prep, and two coats. Whole-home interiors typically range $3,500–$8,000 depending on size and condition.' },
    { q: 'What paint brands do you use?',           a: 'Sherwin-Williams Duration and Emerald lines by default — premium paint that lasts. Prefer Benjamin Moore? No problem.' },
    { q: 'Are your painters employees?',            a: 'Yes — full-time, background-checked employees, not day labor or subs. The crew that starts your project finishes it.' },
    { q: 'How does the 5-year warranty work?',      a: 'If our workmanship fails — peeling, blistering, flaking — within 5 years, we fix it free. Simple as that.' },
    { q: 'Do you handle HOA color approvals?',      a: 'Yes, we prepare color submittals and samples for HOA approval, and we know most Orlando-area HOA requirements already.' },
  ],

  gallery: [
    { label: 'Kitchen Cabinets',     desc: 'Oak to bright white — sprayed finish',            before: 'bg-gray-800', after: 'bg-blue-900' },
    { label: 'Full Exterior',        desc: '2-story stucco — pressure wash + 2 coats',        before: 'bg-gray-800', after: 'bg-blue-900' },
    { label: 'Open-Concept Interior',desc: 'Walls, ceilings, trim — 1 week',                  before: 'bg-gray-800', after: 'bg-blue-900' },
    { label: 'Accent Wall',          desc: 'Board-and-batten + deep navy',                    before: 'bg-gray-800', after: 'bg-blue-900' },
    { label: 'Commercial Office',    desc: '12,000 sq ft — nights and weekends',              before: 'bg-gray-800', after: 'bg-blue-900' },
    { label: 'Front Door Refresh',   desc: 'High-gloss statement door + trim',                before: 'bg-gray-800', after: 'bg-blue-900' },
  ],

  serviceAreas: ['Orlando', 'Winter Park', 'Windermere', 'Dr. Phillips', 'Lake Nona', 'Maitland', 'Winter Garden', 'Oviedo'],

  highlight: {
    tag:   'Color Consultation',
    title: 'Not Sure What Color? Our Designer Picks With You — Free.',
    body:  'The wrong color costs you a repaint. Every TrueCoat estimate includes a free color consultation: large-format samples on your actual walls, lighting checks morning and evening, and a palette that works with your floors and furniture.',
    bullets: [
      'In-home consultation with large-format samples',
      'Palettes tested in your actual lighting',
      'HOA submittal prep included where needed',
      '$150 value — free with every estimate',
    ],
  },
}

export default config
