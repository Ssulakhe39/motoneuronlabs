import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import styles from './CtaBanner.module.css'

interface CtaBannerProps {
  title?: string
  description?: string
  secondaryHref?: string
  secondaryLabel?: string
}

export function CtaBanner({
  title = "Ready to Build AI That Actually Works?",
  description = "Talk to our team. We'll scope your first AI use case in 48 hours.",
  secondaryHref = "/case-studies",
  secondaryLabel = "Read Case Studies"
}: CtaBannerProps) {
  return (
    <section className={styles.ctaBanner} aria-label="Start a project with MotoNeuron Labs">
      <div className="container">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.ctaActions}>
          <Link 
            href="/contact" 
            className="btn btn-primary" 
            style={{ fontSize: 'var(--text-base)', height: '52px', padding: '0 var(--space-8)' }}
          >
            Schedule a Discovery Call 
            <ArrowRight size={18} />
          </Link>
          <Link 
            href={secondaryHref} 
            className="btn btn-secondary" 
            style={{ height: '52px', padding: '0 var(--space-8)' }}
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
