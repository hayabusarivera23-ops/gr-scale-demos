import type { DemoConfig } from '../types'

const config: DemoConfig = {
  slug:            'tree-service',
  businessName:    'IronOak Tree Service',
  industry:        'Tree Service',
  agencyTag:       'Demo site by GR Scale',
  primaryColor:    'green',
  heroGradient:    'from-green-900/70 via-slate-900 to-slate-950',
  accentClass:     'text-green-400',
  bgAccentClass:   'bg-green-500',
  tagline:         'Orlando\'s Certified Arborists & Tree Experts',
  heroHeadline:    'Dangerous Tree? Storm Damage? We\'re On the Way.',
  heroSubheadline: 'ISA-certified arborists with cranes, chippers, and 24/7 emergency response. From precision trimming to full removals — insured to $2M, respected by insurance companies.',
  cta:             'Get Emergency Service',
  phone:           '(407) 555-1200',
  email:           'dispatch@ironoaktree.com',
  address:         '7780 Timber Trail',
  city:            'Orlando',
  stateAbbr:       'FL',
  mapEmbedUrl:     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224143.9992064609!2d-81.5087!3d28.5383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890',
  licenseText:     'ISA Certified Arborists · Insured to $2M',
  yearEstablished: 2008,
  guaranteeText:   'ISA-Certified Arborists',
  emergencyAvailable: true,
  offerLine:       'Free estimates + 10% off any job booked this month',
  metaTitle:       'IronOak Tree Service — Tree Removal & Trimming in Orlando | 24/7 Emergency',
  metaDescription: 'Orlando tree removal, trimming, stump grinding, crane work. ISA-certified, $2M insured, 24/7 storm response. (407) 555-1200.',

  services: [
    { name: 'Emergency Tree Removal', desc: 'Tree on your house or blocking your driveway? 24/7 storm response with crane support. We work with your insurance.', price: '24/7 dispatch' },
    { name: 'Tree Trimming & Pruning',desc: 'ISA-standard pruning that keeps trees healthy, storm-resistant, and beautiful — never topped, never butchered.', price: 'Free estimate' },
    { name: 'Tree Removal',           desc: 'Safe removal of any size tree, including tight-access and over-structure removals. Cleanup included.', price: 'Free estimate' },
    { name: 'Stump Grinding',         desc: 'Stumps ground 8–12" below grade, debris hauled, ready to sod or replant.', price: 'From $149' },
    { name: 'Crane Work',             desc: 'Our 40-ton crane handles massive oaks and hazardous removals other companies walk away from.', price: 'Free assessment' },
    { name: 'Arborist Consultations', desc: 'Health assessments, risk evaluations, and written arborist reports for insurance and permits.', price: 'From $150' },
  ],

  testimonials: [
    { name: 'Paul V.',    role: 'Homeowner — Orlando',       quote: 'Oak limb came through the roof at 2am during the storm. They were here by 4am, tarped the roof, craned the limb off by 9, and their report got my insurance claim approved.', rating: 5 },
    { name: 'Denise F.',  role: 'Homeowner — Winter Garden', quote: 'Three other companies said my 80-foot oak couldn\'t come down without destroying the pool cage. IronOak craned it out piece by piece. Not a scratch.', rating: 5 },
    { name: 'HOA Manager',role: 'Stoneybrook Community',     quote: 'They maintain 400+ trees across our community. Professional crews, certified arborists on every job, and they never leave a mess. Five years running.', rating: 5 },
  ],

  faqs: [
    { q: 'Do you work with insurance after storms?',  a: 'Yes — we document everything with photos, provide itemized invoices and arborist reports, and bill many insurers directly for covered storm damage.' },
    { q: 'How much does tree removal cost?',          a: 'Small trees run $300–800, medium $800–1,800, large oaks with crane work $2,000–6,000+. Every removal gets a free, exact written quote first.' },
    { q: 'Do I need a permit to remove a tree?',      a: 'In most Orlando-area jurisdictions, yes for protected species and larger trunk diameters. We handle the permit process for you — it\'s included.' },
    { q: 'Is stump grinding included in removal?',    a: 'It\'s quoted separately (from $149) so you only pay for it if you want it. Most customers bundle it for a discount.' },
    { q: 'Are you actually insured for this?',        a: '$2M general liability plus workers\' comp on every climber and ground crew member. Certificates provided before work begins — always verify this with any tree company.' },
  ],

  gallery: [
    { label: 'Storm Response',       desc: 'Oak off a roof at dawn — crane assisted',          before: 'bg-gray-800', after: 'bg-green-900' },
    { label: '80ft Oak Removal',     desc: 'Piece-by-piece crane removal over pool cage',      before: 'bg-gray-800', after: 'bg-green-900' },
    { label: 'Canopy Raise',         desc: 'ISA-standard pruning — healthier, safer tree',     before: 'bg-gray-800', after: 'bg-green-900' },
    { label: 'Stump Grinding',       desc: '36" oak stump — ground and ready for sod',         before: 'bg-gray-800', after: 'bg-green-900' },
    { label: 'Lot Clearing',         desc: 'Half-acre cleared for new construction',           before: 'bg-gray-800', after: 'bg-green-900' },
    { label: 'HOA Maintenance',      desc: 'Community-wide trimming program — 400 trees',      before: 'bg-gray-800', after: 'bg-green-900' },
  ],

  serviceAreas: ['Orlando', 'Winter Garden', 'Apopka', 'Ocoee', 'Windermere', 'Clermont', 'Winter Park', 'Lake Mary'],

  highlight: {
    tag:   'Storm Season Ready',
    title: 'Hurricane Season Prep: The Trim That Saves Your Roof.',
    body:  'Most storm damage comes from limbs that should have been pruned in spring. Our pre-season canopy reduction and hazard assessment cuts your storm risk dramatically — and costs a fraction of a roof repair.',
    bullets: [
      'Pre-season hazard assessment by a certified arborist',
      'Canopy thinning that lets wind pass through',
      'Deadwood and overhang removal near structures',
      'Priority storm response for maintenance customers',
    ],
  },
}

export default config
