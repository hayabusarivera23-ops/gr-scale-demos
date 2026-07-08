import { notFound } from 'next/navigation'
import { getDemo } from '@/lib/demo-registry'
import { getTheme } from '@/lib/theme'
import DemoNav from '@/components/demo/DemoNav'
import DemoFooter from '@/components/demo/DemoFooter'

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{ niche: string }>
}

export default async function NicheLayout({ children, params }: LayoutProps) {
  const { niche } = await params
  const cfg = getDemo(niche)
  if (!cfg) notFound()

  const theme = getTheme(cfg.primaryColor)

  return (
    <>
      {/* Agency demo banner */}
      <div className="bg-slate-900 text-center py-2 px-4 text-xs">
        <span className="text-slate-400">
          🎨 <span className="text-white font-semibold">{cfg.agencyTag}</span>
          {' · '}
          <a
            href="https://gr-scale-website.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:underline"
          >
            Get one like this for your business →
          </a>
        </span>
      </div>

      <DemoNav
        businessName={cfg.businessName}
        phone={cfg.phone}
        niche={niche}
        theme={theme}
        emergencyAvailable={cfg.emergencyAvailable}
      />

      <main className="min-h-screen">{children}</main>

      <DemoFooter cfg={cfg} niche={niche} theme={theme} />
    </>
  )
}
