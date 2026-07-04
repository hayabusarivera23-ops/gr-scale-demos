import Link from 'next/link'
import { getAllDemos } from '@/lib/demo-registry'

export default function IndexPage() {
  const demos = getAllDemos()
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-8">
      <div className="max-w-3xl w-full text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-2">GR Scale</p>
        <h1 className="text-4xl font-extrabold mb-4">Demo Factory</h1>
        <p className="text-slate-400 mb-12">
          Production-quality demo websites for local service businesses.
          Each demo is deployable to Vercel independently.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {demos.map(d => (
            <Link
              key={d.slug}
              href={`/${d.slug}`}
              className="rounded-xl border border-white/10 bg-white/5 p-5 text-left hover:border-sky-500/40 hover:bg-white/10 transition group"
            >
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">{d.industry}</p>
              <p className="text-base font-semibold text-white group-hover:text-sky-400 transition">{d.businessName}</p>
              <p className="text-xs text-slate-500 mt-1 truncate">{d.tagline}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
