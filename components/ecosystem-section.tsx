'use client'

import { CompanyLogos } from '@/components/company-logos'
import { useEcosystemAnimation } from '@/hooks/use-ecosystem-animation'

export function EcosystemSection() {
  const { ref, isVisible } = useEcosystemAnimation()

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 py-7">
      <div className="mx-auto text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-16 leading-tight">
          Projects integrated into the Arrakis AI Ecosystem
        </h1>
        <CompanyLogos isVisible={isVisible} />
      </div>
    </section>
  )
}
