'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import AnchorButton from '@/components/anchor-button'
import { cn } from '@/lib/utils'
import { useScroll, useMotionValueEvent } from 'framer-motion'

export function Header() {
  const {scrollY} = useScroll()
  const [isPinned, setIsPinned] = React.useState(true)
  const triggerPoint = 20

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > triggerPoint && isPinned) {
      setIsPinned(false)
    } else if (latest <= triggerPoint && !isPinned) {
      setIsPinned(true)
    }
  })

  return (
    <header
      className={cn(
        'sticky left-0 w-full px-4 py-6 md:px-8 transition-all duration-300 ease-out z-20',
        isPinned ? 'top-0' : 'top-5'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-center space-x-4">
        <div className="flex items-center space-x-4">
          <AnchorButton
            href="#llm-leaderboard"
            variant="base"
            className="w-[162px] h-[52px]"
          >
            How It Works
          </AnchorButton>
          <Button
            variant="gradient"
            size="default"
            className="w-[157px] h-[52px]"
          >
            Buy Salt AI
          </Button>
        </div>
      </nav>
    </header>
  )
}
