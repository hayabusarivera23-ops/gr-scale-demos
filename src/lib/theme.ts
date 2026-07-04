/**
 * Demo Factory — Theme System
 * Maps primaryColor strings from DemoConfig to static Tailwind class sets.
 * All class strings must be complete (no string interpolation) so Tailwind
 * includes them in the production CSS bundle.
 */

export interface DemoTheme {
  // Hero section
  heroBg: string
  // Buttons
  btnPrimary: string
  btnSecondary: string
  btnOutline: string
  // Text accents
  accentText: string
  accentTextDark: string
  // Backgrounds
  accentBg: string
  accentBgHover: string
  accentBgLight: string
  accentBgMed: string
  // Borders
  accentBorder: string
  accentBorderLight: string
  // Badges / chips
  badge: string
  // Section backgrounds (alternating)
  sectionAlt: string
  // Icon containers
  iconBg: string
  iconText: string
  // Nav active indicator
  navActive: string
  // Focus ring
  ring: string
  // Emergency strip
  emergencyBg: string
  // Offer banner
  offerBg: string
}

const THEMES: Record<string, DemoTheme> = {
  blue: {
    heroBg:           'from-blue-950 via-blue-900 to-slate-900',
    btnPrimary:       'bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white shadow-lg shadow-blue-600/25',
    btnSecondary:     'bg-white/10 hover:bg-white/20 text-white border border-white/25',
    btnOutline:       'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
    accentText:       'text-blue-600',
    accentTextDark:   'text-blue-700',
    accentBg:         'bg-blue-600',
    accentBgHover:    'hover:bg-blue-500',
    accentBgLight:    'bg-blue-50',
    accentBgMed:      'bg-blue-100',
    accentBorder:     'border-blue-600',
    accentBorderLight:'border-blue-200',
    badge:            'bg-blue-100 text-blue-700 border border-blue-200',
    sectionAlt:       'bg-slate-50',
    iconBg:           'bg-blue-100',
    iconText:         'text-blue-600',
    navActive:        'text-blue-600 border-b-2 border-blue-600',
    ring:             'focus:ring-blue-500',
    emergencyBg:      'bg-red-600',
    offerBg:          'bg-blue-700',
  },
  amber: {
    heroBg:           'from-amber-950 via-amber-900 to-slate-900',
    btnPrimary:       'bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-white shadow-lg shadow-amber-500/25',
    btnSecondary:     'bg-white/10 hover:bg-white/20 text-white border border-white/25',
    btnOutline:       'border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white',
    accentText:       'text-amber-600',
    accentTextDark:   'text-amber-700',
    accentBg:         'bg-amber-500',
    accentBgHover:    'hover:bg-amber-400',
    accentBgLight:    'bg-amber-50',
    accentBgMed:      'bg-amber-100',
    accentBorder:     'border-amber-500',
    accentBorderLight:'border-amber-200',
    badge:            'bg-amber-100 text-amber-700 border border-amber-200',
    sectionAlt:       'bg-slate-50',
    iconBg:           'bg-amber-100',
    iconText:         'text-amber-600',
    navActive:        'text-amber-600 border-b-2 border-amber-500',
    ring:             'focus:ring-amber-500',
    emergencyBg:      'bg-red-600',
    offerBg:          'bg-amber-600',
  },
  orange: {
    heroBg:           'from-orange-950 via-orange-900 to-slate-900',
    btnPrimary:       'bg-orange-500 hover:bg-orange-400 active:bg-orange-600 text-white shadow-lg shadow-orange-500/25',
    btnSecondary:     'bg-white/10 hover:bg-white/20 text-white border border-white/25',
    btnOutline:       'border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white',
    accentText:       'text-orange-600',
    accentTextDark:   'text-orange-700',
    accentBg:         'bg-orange-500',
    accentBgHover:    'hover:bg-orange-400',
    accentBgLight:    'bg-orange-50',
    accentBgMed:      'bg-orange-100',
    accentBorder:     'border-orange-500',
    accentBorderLight:'border-orange-200',
    badge:            'bg-orange-100 text-orange-700 border border-orange-200',
    sectionAlt:       'bg-slate-50',
    iconBg:           'bg-orange-100',
    iconText:         'text-orange-600',
    navActive:        'text-orange-600 border-b-2 border-orange-500',
    ring:             'focus:ring-orange-500',
    emergencyBg:      'bg-red-600',
    offerBg:          'bg-orange-600',
  },
  green: {
    heroBg:           'from-green-950 via-green-900 to-slate-900',
    btnPrimary:       'bg-green-600 hover:bg-green-500 active:bg-green-700 text-white shadow-lg shadow-green-600/25',
    btnSecondary:     'bg-white/10 hover:bg-white/20 text-white border border-white/25',
    btnOutline:       'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white',
    accentText:       'text-green-600',
    accentTextDark:   'text-green-700',
    accentBg:         'bg-green-600',
    accentBgHover:    'hover:bg-green-500',
    accentBgLight:    'bg-green-50',
    accentBgMed:      'bg-green-100',
    accentBorder:     'border-green-600',
    accentBorderLight:'border-green-200',
    badge:            'bg-green-100 text-green-700 border border-green-200',
    sectionAlt:       'bg-slate-50',
    iconBg:           'bg-green-100',
    iconText:         'text-green-600',
    navActive:        'text-green-600 border-b-2 border-green-600',
    ring:             'focus:ring-green-500',
    emergencyBg:      'bg-red-600',
    offerBg:          'bg-green-700',
  },
}

export function getTheme(primaryColor: string): DemoTheme {
  return THEMES[primaryColor] ?? THEMES.blue
}
