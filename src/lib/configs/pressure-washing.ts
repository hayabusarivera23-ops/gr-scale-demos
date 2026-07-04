import type { DemoConfig } from '../types'

const config: DemoConfig = {
  slug:            'pressure-washing',
  businessName:    'SparkClean Pressure Washing',
  industry:        'Pressure Washing',
  agencyTag:       'Demo site by GR Scale',
  primaryColor:    'orange',
  heroGradient:    'from-orange-900/70 via-slate-900 to-slate-950',
  accentClass:     'text-orange-400',
  bgAccentClass:   'bg-orange-500',
  tagline:         'Florida\'s Favorite Pressure Washing Service',
  heroHeadline:    'We Make Dirty Surfaces Look Brand New',
  heroSubheadline: 'Driveways, roofs, homes, and commercial properties. Fast, affordable pressure and soft washing service in Greater Orlando.',
  cta:             'Get an Instant Quote',
  phone:           '(407) 555-0300',
  email:           'quote@sparkcleanpw.com',
  address:         '910 Clean Street',
  city:            'Orlando',
  stateAbbr:       'FL',
  mapEmbedUrl:     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224143.9992064609!2d-81.5087!3d28.5383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890',
  licenseText:     'Licensed & Insured · Eco-Friendly Solutions',
  yearEstablished: 2018,
  guaranteeText:   'Satisfaction Guaranteed or We Come Back Free',
  emergencyAvailable: false,
  offerLine:       '10% off your first service — mention this site',
  metaTitle:       'SparkClean Pressure Washing Orlando | Driveways, Homes, Roofs',
  metaDescription: 'Professional pressure washing in Orlando FL. Driveways, house washing, roof cleaning, and more. Licensed & insured. Get an instant quote today.',

  services: [
    { name: 'Driveway Cleaning',      desc: 'Remove oil stains, mildew, and years of grime. Your driveway will look like it was just poured.', price: 'From $99' },
    { name: 'House Washing',          desc: 'Soft wash your entire home exterior. Safe for all surfaces, removes mold, algae, and dirt.', price: 'From $199' },
    { name: 'Roof Cleaning',          desc: 'Low-pressure soft wash removes black streaks and algae without damaging shingles. Extends roof life.', price: 'From $299' },
    { name: 'Sidewalk & Patio',       desc: 'Pool decks, patios, walkways, pavers — restored to like-new condition.', price: 'From $79' },
    { name: 'Commercial Properties',  desc: 'Storefronts, parking lots, warehouses, and HOA common areas. Volume pricing available.', price: 'Get quote' },
    { name: 'Fence & Deck Cleaning',  desc: 'Wood and vinyl fences. Pre-paint prep available. Deck brightening included.', price: 'From $149' },
  ],

  testimonials: [
    {
      name:   'Jessica T.',
      role:   'Homeowner — Dr. Phillips',
      quote:  'My driveway was black from mold and oil. SparkClean made it look literally brand new in 45 minutes. I wish I had called them years ago. Will definitely use again.',
      rating: 5,
    },
    {
      name:   'Marcus W.',
      role:   'HOA Manager — Lake Nona',
      quote:  'They handle all 47 driveways in our community every spring. Always on time, professional crew, and the results speak for themselves. Our residents love it.',
      rating: 5,
    },
    {
      name:   'Patricia L.',
      role:   'Homeowner — Oviedo',
      quote:  'Roof was covered in black streaks. Thought I might have to replace it. SparkClean did a soft wash and it looks incredible. Saved me thousands. Thank you!',
      rating: 5,
    },
  ],

  faqs: [
    { q: 'What\'s the difference between pressure washing and soft washing?', a: 'Pressure washing uses high PSI for hard surfaces like concrete and brick. Soft washing uses low pressure and specialized cleaning solutions for roofs, painted surfaces, and wood — it\'s safer and more effective for organic growth like mold and algae.' },
    { q: 'Will pressure washing damage my home?',                              a: 'Not with us. We use the right pressure and technique for every surface. Roofs and painted surfaces always get soft wash treatment.' },
    { q: 'How long does a driveway cleaning take?',                           a: 'A standard two-car driveway takes about 45–60 minutes. Larger projects take proportionally longer. We can usually get to you within 2–3 business days of booking.' },
    { q: 'Do I need to be home during the service?',                          a: 'Not necessarily. For exterior services, we just need access to a water spigot. We\'ll confirm this when booking.' },
    { q: 'Do you offer discounts for multiple services?',                      a: 'Yes. Bundle driveway + house wash for 15% off, or add roof cleaning to any package for a discount. Ask when you call.' },
  ],

  gallery: [
    { label: 'Driveway — Before & After', desc: 'Oil stains and mold gone in under an hour',   before: 'bg-gray-900', after: 'bg-orange-950' },
    { label: 'House Wash',                desc: 'Full exterior soft wash — algae and mildew removed', before: 'bg-gray-900', after: 'bg-orange-950' },
    { label: 'Roof Cleaning',             desc: 'Black streak removal — soft wash safe for shingles', before: 'bg-gray-900', after: 'bg-orange-950' },
    { label: 'Pool Deck',                 desc: 'Travertine deck restored for summer season',   before: 'bg-gray-900', after: 'bg-orange-950' },
    { label: 'Commercial Storefront',     desc: 'Retail strip mall — quarterly maintenance',    before: 'bg-gray-900', after: 'bg-orange-950' },
    { label: 'Wood Fence',                desc: 'Cedar fence brightened and prepped for stain', before: 'bg-gray-900', after: 'bg-orange-950' },
  ],
}

export default config
