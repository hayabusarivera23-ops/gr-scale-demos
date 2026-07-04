import type { DemoConfig } from '../types'

const config: DemoConfig = {
  slug:            'restaurant',
  businessName:    'Casa Verde Kitchen',
  industry:        'Restaurant',
  agencyTag:       'Demo site by GR Scale',
  primaryColor:    'orange',
  heroGradient:    'from-orange-900/70 via-slate-900 to-slate-950',
  accentClass:     'text-orange-400',
  bgAccentClass:   'bg-orange-500',
  tagline:         'Modern Latin Kitchen · Orlando',
  heroHeadline:    'Wood-Fired Latin Flavors in the Heart of Orlando',
  heroSubheadline: 'Family recipes, locally-sourced ingredients, and a wood-fired grill. Join us for dinner, weekend brunch, or book our private dining room for your next celebration.',
  cta:             'Reserve a Table',
  phone:           '(407) 555-0700',
  email:           'hola@casaverdekitchen.com',
  address:         '815 N Orange Ave',
  city:            'Orlando',
  stateAbbr:       'FL',
  mapEmbedUrl:     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224143.9992064609!2d-81.5087!3d28.5383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890',
  licenseText:     'Open Tue–Sun · Kitchen till 10pm · Bar till midnight',
  yearEstablished: 2016,
  guaranteeText:   'Voted Best Latin — Orlando Weekly',
  emergencyAvailable: false,
  offerLine:       'Happy hour Tue–Fri 4–6pm · half-price signature cocktails',
  metaTitle:       'Casa Verde Kitchen — Modern Latin Restaurant in Orlando | Reservations',
  metaDescription: 'Wood-fired modern Latin cuisine in downtown Orlando. Dinner, weekend brunch, craft cocktails, private events. Reserve: (407) 555-0700.',

  services: [
    { name: 'Dinner Menu',        desc: 'Wood-grilled churrasco, pollo a la brasa, fresh mahi tacos, and our famous short rib empanadas.', price: 'Entrées $18–38' },
    { name: 'Weekend Brunch',     desc: 'Guava french toast, chilaquiles verdes, and bottomless mimosas every Saturday and Sunday 10–2.', price: 'Sat–Sun 10–2' },
    { name: 'Craft Cocktails',    desc: 'Mezcal old fashioneds, passionfruit mojitos, and a Latin-forward wine list curated by our sommelier.', price: 'From $12' },
    { name: 'Private Events',     desc: 'Private dining room for 12–40 guests. Birthdays, rehearsal dinners, corporate events — custom menus available.', price: 'Book ahead' },
    { name: 'Catering',           desc: 'Full-service catering for 20–500. We bring the wood-fired flavor to your venue, office, or backyard.', price: 'Custom quote' },
    { name: 'Chef\'s Tasting',    desc: 'Five courses, chef\'s selection, optional wine pairing. Friday and Saturday nights, reservations required.', price: '$75/person' },
  ],

  testimonials: [
    { name: 'Marisol R.', role: 'Google Review',    quote: 'The churrasco melts in your mouth and the passionfruit mojito is the best cocktail in Orlando, period. We drive 40 minutes every week for this place.', rating: 5 },
    { name: 'James T.',   role: 'Private Event Host', quote: 'Booked the private room for my wife\'s 40th. The staff treated us like family, the custom menu blew everyone away, and the price was more than fair.', rating: 5 },
    { name: 'Dana & Luis',role: 'Regulars since 2019', quote: 'Brunch here is a ritual. Guava french toast, cafecito, and the friendliest servers in the city. Get there before 11 or expect a wait — worth it.', rating: 5 },
  ],

  faqs: [
    { q: 'Do you take reservations?',            a: 'Yes — reservations are recommended Thursday through Sunday. Book by phone, or walk-ins are always welcome at the bar and patio.' },
    { q: 'Where do I park?',                     a: 'Free lot behind the restaurant plus street parking on Orange Ave. The downtown garage on Magnolia is a 3-minute walk.' },
    { q: 'Can you handle dietary restrictions?', a: 'Absolutely. Our menu marks gluten-free and vegetarian items, and the kitchen happily adapts most dishes. Tell your server about any allergies.' },
    { q: 'What\'s the private dining minimum?',  a: 'The private room seats 12–40 with a $500 food & beverage minimum on weeknights, $1,000 on weekends. Custom menus start at $45/person.' },
    { q: 'Do you cater?',                        a: 'Yes — from office lunches to 500-person weddings. We need 72 hours notice for most events. Call for a custom quote.' },
  ],

  gallery: [
    { label: 'Wood-Fired Churrasco',  desc: 'Our signature — 16oz grass-fed, chimichurri',       before: 'bg-gray-800', after: 'bg-orange-900' },
    { label: 'The Dining Room',       desc: 'Warm, modern space for 90 guests',                  before: 'bg-gray-800', after: 'bg-orange-900' },
    { label: 'Weekend Brunch',        desc: 'Guava french toast + bottomless mimosas',           before: 'bg-gray-800', after: 'bg-orange-900' },
    { label: 'Craft Cocktails',       desc: 'Mezcal old fashioned, smoked tableside',            before: 'bg-gray-800', after: 'bg-orange-900' },
    { label: 'Private Dining Room',   desc: 'Seats 40 — custom menus for celebrations',          before: 'bg-gray-800', after: 'bg-orange-900' },
    { label: 'The Patio',             desc: 'Covered outdoor seating, live music Fridays',       before: 'bg-gray-800', after: 'bg-orange-900' },
  ],

  serviceAreas: ['Downtown Orlando', 'Winter Park', 'College Park', 'Thornton Park', 'Mills 50', 'Baldwin Park', 'Ivanhoe Village', 'Lake Eola Heights'],

  highlight: {
    tag:   'Private Events',
    title: 'Your Celebration, Our Private Dining Room.',
    body:  'Birthdays, rehearsal dinners, corporate gatherings — our private room seats up to 40 with a dedicated server, custom menu, and optional wine pairings. Tell us the occasion and we\'ll handle the rest.',
    bullets: [
      'Seats 12–40 guests with dedicated staff',
      'Custom menus from $45/person',
      'A/V setup for presentations and toasts',
      'Weeknight availability books 2–3 weeks out',
    ],
  },
}

export default config
