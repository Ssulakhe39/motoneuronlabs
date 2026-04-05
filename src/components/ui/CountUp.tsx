'use client'

import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  target: number
  suffix?: string
  className?: string
}

export function CountUp({ target, suffix = '', className }: CountUpProps) {
  const [count, setCount] = useState<number | string>(0)
  const nodeRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    // Media query check for reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(target)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let startTime: number | null = null
            const duration = 1800

            const step = (timestamp: number) => {
              if (!startTime) startTime = timestamp
              const progress = Math.min((timestamp - startTime) / duration, 1)
              const easeOutProgress = 1 - Math.pow(1 - progress, 3)
              const current = Math.floor(easeOutProgress * target)
              
              setCount(current)
              
              if (progress < 1) {
                window.requestAnimationFrame(step)
              } else {
                setCount(target)
              }
            }
            window.requestAnimationFrame(step)
            if (nodeRef.current) {
              observer.unobserve(nodeRef.current)
            }
          }
        })
      },
      { threshold: 0.5 }
    )

    if (nodeRef.current) {
      observer.observe(nodeRef.current)
    }

    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={nodeRef} className={className}>
      {count}{suffix}
    </span>
  )
}
