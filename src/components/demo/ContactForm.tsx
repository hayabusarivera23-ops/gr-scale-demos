'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import type { DemoTheme } from '@/lib/theme'

interface Props {
  phone: string
  niche: string
  theme: DemoTheme
}

const SERVICES_BY_NICHE: Record<string, string[]> = {
  hvac:              ['AC Repair', 'AC Installation', 'AC Maintenance', 'Duct Cleaning', 'Commercial HVAC', 'Emergency Service', 'Other'],
  barber:            ['Fade & Taper', 'Classic Haircut', 'Straight Razor Shave', 'Beard Trim & Shape', 'Cut + Beard Combo', 'Kids Cut (12 & Under)', 'Other'],
  plumbing:          ['Emergency Plumbing', 'Drain Cleaning', 'Water Heater Repair', 'Leak Detection', 'Toilet Repair', 'Repiping', 'Other'],
  roofing:           ['Roof Replacement', 'Storm Damage Repair', 'Roof Repair', 'New Construction', 'Gutters & Downspouts', 'Roof Inspection', 'Other'],
  'pressure-washing':['Driveway Cleaning', 'House Washing', 'Roof Cleaning', 'Sidewalk & Patio', 'Commercial Properties', 'Fence & Deck Cleaning', 'Other'],
  landscaping:       ['Weekly Lawn Care', 'Landscape Design', 'Irrigation Systems', 'Sod Installation', 'Tree & Shrub Trimming', 'Seasonal Cleanups', 'Other'],
}

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm({ phone, niche, theme }: Props) {
  const [status, setStatus] = useState<Status>('idle')
  const services = SERVICES_BY_NICHE[niche] ?? SERVICES_BY_NICHE['plumbing']

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate form submission (real integration would POST to API)
    await new Promise(r => setTimeout(r, 1000))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className={`rounded-2xl ${theme.accentBgLight} border ${theme.accentBorder} p-10 text-center`}>
        <CheckCircle className={`mx-auto mb-4 h-12 w-12 ${theme.iconText}`} />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Message Received!</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Thanks for reaching out. We&apos;ll be in touch within 15 minutes during business hours.
          For emergencies, call us directly at{' '}
          <a href={`tel:${phone}`} className={`font-bold ${theme.accentText}`}>{phone}</a>.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="block text-xs font-bold text-gray-700 mb-1.5">
            Full Name *
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            placeholder="John Smith"
            className={`w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none
              focus:border-transparent focus:ring-2 ${theme.ring} focus:bg-white transition placeholder:text-gray-400`}
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className="block text-xs font-bold text-gray-700 mb-1.5">
            Phone Number *
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            required
            placeholder="(407) 555-0000"
            className={`w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none
              focus:border-transparent focus:ring-2 ${theme.ring} focus:bg-white transition placeholder:text-gray-400`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-email" className="block text-xs font-bold text-gray-700 mb-1.5">
          Email Address
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          placeholder="john@email.com"
          className={`w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none
            focus:border-transparent focus:ring-2 ${theme.ring} focus:bg-white transition placeholder:text-gray-400`}
        />
      </div>

      <div>
        <label htmlFor="cf-service" className="block text-xs font-bold text-gray-700 mb-1.5">
          Service Needed *
        </label>
        <select
          id="cf-service"
          name="service"
          required
          className={`w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none
            focus:border-transparent focus:ring-2 ${theme.ring} focus:bg-white transition`}
        >
          <option value="">Select a service...</option>
          {services.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cf-address" className="block text-xs font-bold text-gray-700 mb-1.5">
          Property Address
        </label>
        <input
          id="cf-address"
          name="address"
          type="text"
          placeholder="123 Main St, Orlando, FL"
          className={`w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none
            focus:border-transparent focus:ring-2 ${theme.ring} focus:bg-white transition placeholder:text-gray-400`}
        />
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-xs font-bold text-gray-700 mb-1.5">
          Describe the Problem *
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={4}
          placeholder="Briefly describe what's happening so we can be prepared when we arrive..."
          className={`w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none
            focus:border-transparent focus:ring-2 ${theme.ring} focus:bg-white transition placeholder:text-gray-400 resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className={`w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl text-sm font-bold transition
          ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''} ${theme.btnPrimary}`}
      >
        <Send className="h-4 w-4" />
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      <p className="text-center text-xs text-gray-400">
        We respond within 15 minutes · No spam · Your info stays private
      </p>
    </form>
  )
}
