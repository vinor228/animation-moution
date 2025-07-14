'use client'

import React, { useState, AnchorHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export interface AnchorButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: VariantProps<typeof anchorStyles>['variant']
  className?: string
}

const anchorStyles = cva(
  'inline-flex items-center justify-center transition-all ease-in-out',
  {
    variants: {
      variant: {
        base: 'text-white',
        gradientText:
          'bg-clip-text text-transparent bg-gradient-to-r from-[#963488] via-[#FC6F32] to-[#FF4A59]',
      },
    },
    defaultVariants: { variant: 'base' },
  }
)

const AnchorButton: React.FC<AnchorButtonProps> = ({ href, variant, className = '', children, ...props }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        anchorStyles({ variant: isHovered ? 'gradientText' : variant }),
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}

export default AnchorButton
