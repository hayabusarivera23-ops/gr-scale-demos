'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { DemoTheme } from '@/lib/theme'
import type { FAQItem } from '@/lib/types'

interface Props {
  faqs: FAQItem[]
  theme: DemoTheme
}

export default function FAQAccordion({ faqs, theme }: Props) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {faqs.map((item, i) => (
        <div
          key={i}
          className={`rounded-2xl border transition-all overflow-hidden
            ${open === i ? `${theme.accentBgLight} ${theme.accentBorder}` : 'border-gray-100 bg-gray-50'}`}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 p-6 text-left"
          >
            <span className={`text-base font-bold ${open === i ? 'text-gray-900' : 'text-gray-800'}`}>
              {item.q}
            </span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 transition-transform ${
                open === i ? `rotate-180 ${theme.iconText}` : 'text-gray-400'
              }`}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-6">
              <p className="text-gray-600 leading-relaxed text-sm">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
