'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertTriangle } from 'lucide-react'
import type { DemoTheme } from '@/lib/theme'

interface QuoteFormConfig {
  phone: string
  niche: string
  services: string[]
  emergencyAvailable: boolean
  offerLine: string
}

interface Props {
  cfg: QuoteFormConfig
  theme: DemoTheme
}

type Status = 'idle' | 'sending' | 'success' | 'error'

const TIMELINE_OPTIONS = [
  'Emergency — need help ASAP',
  'Within 24 hours',
  'Within 2–3 days',
  'This week',
  'Within 2 weeks',
  'Just getting prices for now',
]

const PROPERTY_TYPES = [
  'Single-family home',
  'Condo / townhouse',
  'Multi-family / duplex',
  'Commercial / business',
  'Rental property',
]

export default function QuoteForm({ cfg, theme }: Props) {
  const [status, setStatus] = useState<Status>('idle')
  const [isEmergency, setIsEmergency] = useState(false)

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsEmergency(e.target.value.toLowerCase().includes('emergency'))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1200))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className={`rounded-2xl ${theme.accentBgLight} border ${theme.accentBorder} p-10 text-center`}>
        <CheckCircle className={`mx-auto mb-4 h-14 w-14 ${theme.iconText}`} />
        <h3 className="text-2xl font-extrabold text-gray-900 mb-3">Estimate Request Received!</h3>
        <p className="text-gray-600 leading-relaxed mb-5">
          We&apos;ll review your request and contact you within 15 minutes during business hours.
          If this is an emergency, please call us directly — we answer 24/7.
        </p>
        <a
          href={`tel:${cfg.phone}`}
          className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold transition ${theme.btnPrimary}`}
        >
          Call {cfg.phone}
        </a>
        <p className={`mt-4 text-xs font-semibold ${theme.accentText}`}>🎁 {cfg.offerLine}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Emergency alert */}
      {isEmergency && cfg.emergencyAvailable && (
        <div className="flex items-start gap-3 rounded-xl bg-red-50 border border-red-200 p-4">
          <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-red-700">Emergency? Call Us Directly</p>
            <p className="text-xs text-red-600 mt-0.5">
              For emergencies, calling is faster than this form. We answer 24/7.{' '}
              <a href={`tel:${cfg.phone}`} className="font-bold underline">{cfg.phone}</a>
            </p>
          </div>
        </div>
      )}

      {/* Name + Phone */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="qf-name" className="block text-xs font-bold text-gray-700 mb-1.5">Full Name *</label>
          <input
            id="qf-name" name="name" type="text" required placeholder="John Smith"
            className={`w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none
              focus:border-transparent focus:ring-2 ${theme.ring} focus:bg-white transition placeholder:text-gray-400`}
          />
        </div>
        <div>
          <label htmlFor="qf-phone" className="block text-xs font-bold text-gray-700 mb-1.5">Phone Number *</label>
          <input
            id="qf-phone" name="phone" type="tel" required placeholder="(407) 555-0000"
            className={`w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none
              focus:border-transparent focus:ring-2 ${theme.ring} focus:bg-white transition placeholder:text-gray-400`}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="qf-email" className="block text-xs font-bold text-gray-700 mb-1.5">Email Address</label>
        <input
          id="qf-email" name="email" type="email" placeholder="john@email.com"
          className={`w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none
            focus:border-transparent focus:ring-2 ${theme.ring} focus:bg-white transition placeholder:text-gray-400`}
        />
      </div>

      {/* Service + Property Type */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="qf-service" className="block text-xs font-bold text-gray-700 mb-1.5">Service Needed *</label>
          <select
            id="qf-service" name="service" required onChange={handleServiceChange}
            className={`w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none
              focus:border-transparent focus:ring-2 ${theme.ring} focus:bg-white transition`}
          >
            <option value="">Select a service...</option>
            {cfg.services.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="qf-type" className="block text-xs font-bold text-gray-700 mb-1.5">Property Type</label>
          <select
            id="qf-type" name="property_type"
            className={`w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none
              focus:border-transparent focus:ring-2 ${theme.ring} focus:bg-white transition`}
          >
            <option value="">Select type...</option>
            {PROPERTY_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      {/* Address */}
      <div>
        <label htmlFor="qf-address" className="block text-xs font-bold text-gray-700 mb-1.5">Property Address *</label>
        <input
          id="qf-address" name="address" type="text" required placeholder="123 Main St, Orlando, FL 32801"
          className={`w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none
            focus:border-transparent focus:ring-2 ${theme.ring} focus:bg-white transition placeholder:text-gray-400`}
        />
      </div>

      {/* Timeline */}
      <div>
        <label htmlFor="qf-timeline" className="block text-xs font-bold text-gray-700 mb-1.5">When Do You Need Service? *</label>
        <select
          id="qf-timeline" name="timeline" required
          className={`w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none
            focus:border-transparent focus:ring-2 ${theme.ring} focus:bg-white transition`}
        >
          <option value="">Select timeline...</option>
          {TIMELINE_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      {/* Problem Description */}
      <div>
        <label htmlFor="qf-desc" className="block text-xs font-bold text-gray-700 mb-1.5">Describe the Problem *</label>
        <textarea
          id="qf-desc" name="description" required rows={4}
          placeholder="Tell us what's going on so we can prepare the right tools and materials before we arrive..."
          className={`w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none
            focus:border-transparent focus:ring-2 ${theme.ring} focus:bg-white transition placeholder:text-gray-400 resize-none`}
        />
      </div>

      {/* Best contact time */}
      <div>
        <label htmlFor="qf-time" className="block text-xs font-bold text-gray-700 mb-1.5">Best Time to Call You</label>
        <select
          id="qf-time" name="best_time"
          className={`w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none
            focus:border-transparent focus:ring-2 ${theme.ring} focus:bg-white transition`}
        >
          <option value="">Any time</option>
          <option>Morning (7am – 12pm)</option>
          <option>Afternoon (12pm – 5pm)</option>
          <option>Evening (5pm – 8pm)</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className={`w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl text-base font-bold transition
          ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''} ${theme.btnPrimary}`}
      >
        <Send className="h-5 w-5" />
        {status === 'sending' ? 'Submitting...' : 'Request Free Estimate'}
      </button>

      <p className="text-center text-xs text-gray-400">
        No obligation · We respond within 15 minutes · Your info stays private
      </p>
    </form>
  )
}
