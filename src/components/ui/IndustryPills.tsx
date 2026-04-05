'use client'

import { useState, useEffect } from 'react'
import styles from './IndustryPills.module.css'

const INDUSTRIES = [
  { icon: '🏥', label: 'Healthcare' },
  { icon: '🏦', label: 'Finance' },
  { icon: '🏭', label: 'Manufacturing' },
  { icon: '🛒', label: 'Retail' },
  { icon: '🛡️', label: 'Defense' }
]

export default function IndustryPills() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % INDUSTRIES.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.industryPills}>
      {INDUSTRIES.map((industry, index) => (
        <div 
          key={industry.label}
          className={`${styles.pill} ${index === activeIndex ? styles.active : ''}`}
        >
          {industry.icon} {industry.label}
        </div>
      ))}
    </div>
  )
}
