export interface ServiceItem {
  name: string
  desc: string
  price?: string
}

export interface Testimonial {
  name: string
  role: string
  quote: string
  rating: number
}

export interface FAQItem {
  q: string
  a: string
}

export interface GalleryItem {
  label: string
  before?: string  // placeholder color class (fallback when no img)
  after?: string
  desc: string
  /** Real photo URL — slider shows it clean (after) vs worn-filter (before) */
  img?: string
}

export interface DemoConfig {
  /** Slug — matches the [niche] route segment */
  slug: string
  /** Business display name */
  businessName: string
  /** Industry label */
  industry: string
  /** GR Scale agency tag shown in demo banner */
  agencyTag: string
  /** Brand colors — Tailwind color names used in dynamic classes */
  primaryColor: string     // e.g. 'sky', 'blue', 'green', 'amber', 'orange'
  heroGradient: string     // full Tailwind gradient class
  accentClass: string      // e.g. 'text-sky-400'
  bgAccentClass: string    // e.g. 'bg-sky-500'
  /** Meta */
  tagline: string
  heroHeadline: string
  heroSubheadline: string
  cta: string
  phone: string
  email: string
  address: string
  city: string
  stateAbbr: string
  mapEmbedUrl: string
  licenseText: string
  yearEstablished: number
  /** Content */
  services: ServiceItem[]
  testimonials: Testimonial[]
  faqs: FAQItem[]
  gallery: GalleryItem[]
  /** SEO */
  metaTitle: string
  metaDescription: string
  /** Badge shown in demos gallery */
  guaranteeText: string
  emergencyAvailable: boolean
  /** Offer for quote form */
  offerLine: string

  // ── Optional premium sections (rendered only when present) ────────────
  /** Cities/areas served — replaces default list in Service Area section */
  serviceAreas?: string[]
  /** Financing section (roofing, plumbing, electrician, flooring, HVAC…) */
  financing?: {
    headline: string
    body: string
    points: string[]
  }
  /** Flexible highlight section: insurance claims, guarantees, seasonal
   *  packages, private events — one strong info block per niche. */
  highlight?: {
    tag: string
    title: string
    body: string
    bullets: string[]
  }
  /** "How it works" process timeline (flagship demos) */
  process?: {
    title: string
    desc: string
  }[]
  /** Real-number stats for the animated counter row (flagship demos) */
  stats?: {
    value: number
    suffix: string
    label: string
  }[]
  /** Hero background photo (licensed stock; swap for client photos later) */
  heroImage?: string
  /** About-section photo (technician/team at work) */
  aboutImage?: string
  /** Trust strip: certifications, warranties, financing partners */
  trustBadges?: {
    label: string
    sub: string
  }[]
}
