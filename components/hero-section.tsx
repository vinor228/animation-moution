'use client'

import * as React from 'react'
import {
  motion,
  useScroll,
  useAnimation,
  useMotionValueEvent
} from 'framer-motion'
import { Button } from '@/components/ui/button'
import AnchorButton from '@/components/anchor-button'
import clsx from 'clsx'

export default function HeroStatsSection() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = React.useState(false)
  const heroControls = useAnimation()
  const headingControls = useAnimation()
  const triggerPoint = 20

  const stats = [
    { number: '1,873', label: 'LLM models', delay: 0 },
    { number: '$326,734', label: 'Paid to data scientists', delay: 0.2 },
    { number: '6,557', label: 'Developers', delay: 0.4 }
  ]

  const itemVariants = {
    hidden: (delay:number) => ({
      opacity: 0,
      y: 50,
      transition: { duration: 0.6, ease: 'easeOut',delay}
    } ),
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay }
    })
  }

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const wasScrolled = scrolled
    if (!wasScrolled && latest > triggerPoint) {
      setScrolled(true)
      heroControls.start({
        y: '-20%',
        transition: { duration: 0.8, ease: 'easeOut' }
      })
      headingControls.start({
        WebkitTextFillColor: 'rgba(255,255,255,1)',
        transition: { duration: 0.8, ease: 'easeOut' }
      })
    } else if (wasScrolled && latest <= 0) {
      setScrolled(false)
      heroControls.start({ y: '0%', transition: { duration: 0.8, ease: 'easeOut' } })
      headingControls.start({ WebkitTextFillColor: 'rgba(255,255,255,0)', transition: { duration: 0.8, ease: 'easeOut' } })
    }
  })

  return (
    <section className="relative px-4 py-16 md:px-8">
      <motion.div
        className="max-w-6xl text-left"
        initial={{ y: '0%' }}
        animate={heroControls}
      >
        <motion.h1
          className={clsx(
            'mb-0 text-6xl font-bold leading-tight md:text-6xl lg:text-7xl',
            'bg-clip-text text-transparent bg-gradient-to-r from-[#963488] via-[#FC6F32] to-[#FF4A59]'
          )}
          style={{ WebkitTextFillColor: 'rgba(255,255,255,0)' }}
          animate={headingControls}
        >
          A new economic primitive for funding decentralized AI
        </motion.h1>
        <p className="mb-8 text-lg text-white/80 md:text-xl lg:text-2xl">
          We track, rank and pay for the best open source decentralized LLMs to
          compete against OpenAI
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-start sm:gap-6">
          <Button
            variant="gradient"
            size="large"
            className="w-[220px] h-[75px]"
          >
            Buy Salt AI
          </Button>
          <AnchorButton href="#" variant="base" className="w-[160px] h-[75px]">
            Try Now
          </AnchorButton>
        </div>
      </motion.div>

      <div className="mt-12 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              initial="hidden"
              animate={scrolled ? 'visible' : 'hidden'}
              custom={stat.delay}
              className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="text-3xl font-bold text-white mb-2 md:text-4xl lg:text-5xl">
                {stat.number}
              </div>
              <div className="text-white/70 text-lg md:text-xl">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
