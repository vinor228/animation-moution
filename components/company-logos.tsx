'use client'

import { motion } from 'framer-motion'
import { SolanaLogo } from '@/components/logos/solana-logo'
import { ArweaveLogo } from '@/components/logos/arweave-logo'
import { BittensorLogo } from '@/components/logos/bittensor-logo'
import { CircleLogo } from '@/components/logos/circle-logo'
import { TelegramLogo } from '@/components/logos/telegram-logo'

const baseLogos = [
  { component: TelegramLogo, name: 'Telegram' },
  { component: SolanaLogo, name: 'Solana' },
  { component: ArweaveLogo, name: 'Arweave' },
  { component: BittensorLogo, name: 'Bittensor' },
  { component: CircleLogo, name: 'Circle' },
]

const logos = [...baseLogos, { component: TelegramLogo, name: 'Telegram (duplicate)' }]

interface CompanyLogosProps {
  isVisible: boolean
}

export function CompanyLogos({ isVisible }: CompanyLogosProps) {
  return (
    <div className="relative overflow-hidden  w-[950px] py-4">
      <motion.div
        className="flex items-center gap-8 md:gap-12 lg:gap-16"
        initial={{ x: 320 }}
        animate={{ x: isVisible ? '-120px' : 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        {logos.map((logo, index) => {
          const LogoComponent = logo.component
          return (
            <div
              key={index}
              className="flex-shrink-0 w-[120px] h-auto flex items-center justify-center"
            >
              <LogoComponent />
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}
