'use client'

/**
 * Premium interaction systems — shared by every demo.
 * Reveal (scroll animations) · AnimatedStat (count-up) ·
 * BeforeAfterSlider (interactive) · StickyCallBar (mobile conversion bar)
 *
 * All animations respect prefers-reduced-motion and are IO-driven
 * (no scroll listeners) to protect Lighthouse scores.
 */

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Phone, ArrowRight } from 'lucide-react'

// ─── Reveal: fade/slide sections in on scroll ────────────────────────────────

export function Reveal({ children, delay = 0, className = '' }: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setShown(true); return }
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setShown(true); io.disconnect() } },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : 'translateY(24px)',
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}

// ─── AnimatedStat: numbers count up when visible ─────────────────────────────

export function AnimatedStat({ value, suffix = '', label, accentClass = 'text-sky-600', bgClass = 'bg-sky-50' }: {
  value: number
  suffix?: string
  label: string
  accentClass?: string
  bgClass?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setDisplay(value); return }
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return
      started.current = true
      const dur = 1400
      const t0 = performance.now()
      const tick = (t: number) => {
        const p = Math.min((t - t0) / dur, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        setDisplay(Math.round(eased * value))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
      io.disconnect()
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [value])

  return (
    <div ref={ref} className={`rounded-2xl ${bgClass} p-6 text-center`}>
      <p className={`text-4xl font-extrabold ${accentClass} mb-1 tabular-nums`}>
        {display.toLocaleString()}{suffix}
      </p>
      <p className="text-sm text-gray-600 leading-tight">{label}</p>
    </div>
  )
}

// ─── BeforeAfterSlider: interactive drag comparison ──────────────────────────

export function BeforeAfterSlider({ label, desc, beforeClass, afterClass, accentBg, img }: {
  label: string
  desc: string
  beforeClass: string
  afterClass: string
  accentBg: string
  /** Real photo: rendered clean on the After side, worn-filtered on Before */
  img?: string
}) {
  const [pos, setPos] = useState(55)
  const trackRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  function setFromClientX(clientX: number) {
    const el = trackRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(92, Math.max(8, pct)))
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div
        ref={trackRef}
        className="relative h-52 select-none cursor-ew-resize touch-none"
        onPointerDown={e => { dragging.current = true; (e.target as HTMLElement).setPointerCapture?.(e.pointerId); setFromClientX(e.clientX) }}
        onPointerMove={e => { if (dragging.current) setFromClientX(e.clientX) }}
        onPointerUp={() => { dragging.current = false }}
        role="slider"
        aria-label={`${label} before and after comparison`}
        aria-valuenow={Math.round(pos)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === 'ArrowLeft')  setPos(p => Math.max(8, p - 5))
          if (e.key === 'ArrowRight') setPos(p => Math.min(92, p + 5))
        }}
      >
        {/* After (full) */}
        <div className={`absolute inset-0 ${img ? '' : afterClass}`}>
          {img && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={img} alt={`${label} — completed work`} loading="lazy" decoding="async"
              className="absolute inset-0 h-full w-full object-cover" draggable={false} />
          )}
          <span className="absolute bottom-3 right-3 z-10 rounded-md bg-black/50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">After</span>
        </div>
        {/* Before (clipped) */}
        <div className={`absolute inset-0 ${img ? '' : beforeClass}`} style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          {img && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={img} alt="" aria-hidden loading="lazy" decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ filter: 'grayscale(0.9) brightness(0.62) sepia(0.25) contrast(0.92)' }} draggable={false} />
          )}
          <span className="absolute bottom-3 left-3 z-10 rounded-md bg-black/50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">Before</span>
        </div>
        {/* Handle */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)]" style={{ left: `${pos}%` }}>
          <div className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-9 w-9 items-center justify-center rounded-full ${accentBg} text-white shadow-lg`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/></svg>
          </div>
        </div>
      </div>
      <div className="px-5 py-4">
        <p className="text-sm font-bold text-gray-900">{label}</p>
        <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
      </div>
    </div>
  )
}

// ─── StickyCallBar: mobile conversion bar (appears after scrolling the hero) ─

export function StickyCallBar({ phone, cta, quoteHref, btnPrimary }: {
  phone: string
  cta: string
  quoteHref: string
  btnPrimary: string
}) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 md:hidden border-t border-gray-200 bg-white/95 backdrop-blur px-3 py-2.5 flex gap-2 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] transition-transform duration-300"
      style={{ transform: visible ? 'translateY(0)' : 'translateY(110%)' }}
    >
      <a href={`tel:${phone}`}
        className={`flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold ${btnPrimary}`}>
        <Phone className="h-4 w-4" /> {cta}
      </a>
      <a href={quoteHref}
        className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border-2 border-gray-900 px-4 py-3 text-sm font-bold text-gray-900">
        Free Quote <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  )
}
