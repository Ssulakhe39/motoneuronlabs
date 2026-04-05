'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ScrollRevealProps {
  children: React.ReactNode
  selector: string      // CSS selector to animate
  y?: number            // default 24
  x?: number            // default 0
  stagger?: number      // default 0
  duration?: number     // default 0.6
  start?: string        // default 'top 75%'
  delay?: number        // default 0
}

export default function ScrollReveal({
  children,
  selector,
  y = 24,
  x = 0,
  stagger = 0,
  duration = 0.6,
  start = 'top 75%',
  delay = 0,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (!prefersReduced && containerRef.current) {
        gsap.fromTo(
          selector,
          { opacity: 0, y, x },
          {
            opacity: 1,
            y: 0,
            x: 0,
            stagger,
            duration,
            delay,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start,
            },
          }
        )
      }
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className="scroll-reveal-container">
      {children}
    </div>
  )
}
