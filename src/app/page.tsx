import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ChevronDown, Layers, Sliders, Compass, Database, Rocket } from 'lucide-react'
import styles from './home.module.css'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { CtaBanner } from '@/components/ui/CtaBanner'
import { CountUp } from '@/components/ui/CountUp'

export const metadata: Metadata = {
  title: 'Motoneuron Labs — Intelligence, Engineered for Your Business',
  description: 'Motoneuron Labs delivers production-grade AI services and custom AI applications for enterprise businesses, powered by Claude, OpenAI, Gemini, and more.',
}

export default function Home() {
  return (
    <main>
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroGlow}></div>
        
        <div className={`container ${styles.heroGrid}`}>
          
          {/* Left Column: Content */}
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <span>Where Enterprise</span>
              <span>Decisions <span className={styles.textAccent}>Meet</span></span>
              <span>Machine Intelligence.</span>
            </h1>
            
            <p className={styles.heroSubtitle}>
              Motoneuron Labs integrates Popular AI (Commercial and Open Source) Models like: Claude, GPT, Gemini, and other leading models into your workflows — tuned to your industry, your data, your rules.
            </p>
            
            <div className={styles.heroCtas}>
              <Link href="/contact" className="btn btn-primary">
                Start a Project
                <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn btn-secondary">
                See How It Works
              </Link>
            </div>
            
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Enterprise Clients</span>
              </div>
              <div className={`hidden md:flex ${styles.statDivider}`}></div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>3.2B</span>
                <span className={styles.statLabel}>Tokens Processed Monthly</span>
              </div>
              <div className={`hidden md:flex ${styles.statDivider}`}></div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>12</span>
                <span className={styles.statLabel}>Foundation Models Supported</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className={styles.heroVisual} aria-hidden="true">
            <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%', height: 'auto' }}>
              {/* Connection Lines */}
              <g stroke="var(--color-primary)" strokeOpacity="0.15" strokeWidth="1">
                <line x1="80" y1="120" x2="200" y2="80"/>
                <line x1="80" y1="120" x2="160" y2="240"/>
                <line x1="200" y1="80" x2="320" y2="160"/>
                <line x1="200" y1="80" x2="260" y2="280"/>
                <line x1="160" y1="240" x2="260" y2="280"/>
                <line x1="160" y1="240" x2="100" y2="340"/>
                <line x1="320" y1="160" x2="360" y2="280"/>
                <line x1="260" y1="280" x2="360" y2="280"/>
                <line x1="260" y1="280" x2="220" y2="360"/>
                <line x1="100" y1="340" x2="220" y2="360"/>
              </g>

              {/* Nodes */}
              <g stroke="var(--color-primary)" strokeWidth="1" fill="var(--color-primary)">
                <circle cx="80" cy="120" r="4" fillOpacity="0.3"/>
                {/* Pulsing Nodes */}
                <circle cx="200" cy="80" r="4" className={`${styles.nodePulse} ${styles.nodePulse1}`}/>
                <circle cx="160" cy="240" r="4" className={`${styles.nodePulse} ${styles.nodePulse2}`}/>
                
                <circle cx="320" cy="160" r="4" fillOpacity="0.3"/>
                <circle cx="260" cy="280" r="4" className={`${styles.nodePulse} ${styles.nodePulse3}`}/>
                
                <circle cx="100" cy="340" r="4" className={`${styles.nodePulse} ${styles.nodePulse4}`}/>
                <circle cx="360" cy="280" r="4" fillOpacity="0.3"/>
                <circle cx="220" cy="360" r="4" fillOpacity="0.3"/>
              </g>
            </svg>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <ChevronDown size={24} />
        </div>
      </section>

      {/* AI Partners Section */}
      <ScrollReveal selector={`.${styles.partnerLogo}`} stagger={0.08} y={16} start="top 85%">
        <section className={styles.partnersSection} role="region" aria-label="Our AI Platform Partners">
          <div className="container">
            <h2 className={styles.partnersLabel}>POWERED BY THE WORLD'S LEADING AI FOUNDATIONS</h2>
            
            <div className={styles.partnersGrid}>
              <a href="https://openai.com" target="_blank" rel="noopener noreferrer" className={styles.partnerLogo}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.998 5.998 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" fill="#606878"/>
                </svg>
                <span className={styles.partnerName}>OpenAI</span>
              </a>

              <a href="https://anthropic.com" target="_blank" rel="noopener noreferrer" className={styles.partnerLogo}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://cdn.simpleicons.org/anthropic/606878" width="80" height="80" alt="Anthropic logo" loading="lazy" />
                <span className={styles.partnerName}>Anthropic</span>
              </a>

              <a href="https://deepmind.google" target="_blank" rel="noopener noreferrer" className={styles.partnerLogo}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://cdn.simpleicons.org/google/606878" width="80" height="80" alt="Google logo" loading="lazy" />
                <span className={styles.partnerName}>Google</span>
              </a>

              <a href="https://ai.meta.com" target="_blank" rel="noopener noreferrer" className={styles.partnerLogo}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://cdn.simpleicons.org/meta/606878" width="80" height="80" alt="Meta logo" loading="lazy" />
                <span className={styles.partnerName}>Meta</span>
              </a>

              <a href="https://mistral.ai" target="_blank" rel="noopener noreferrer" className={styles.partnerLogo}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://cdn.simpleicons.org/mistralai/606878" width="80" height="80" alt="Mistral logo" loading="lazy" />
                <span className={styles.partnerName}>Mistral</span>
              </a>

              <a href="https://cohere.com" target="_blank" rel="noopener noreferrer" className={styles.partnerLogo}>
                <div className={styles.partnerLogoText}>Co</div>
                <span className={styles.partnerName}>Cohere</span>
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Services Section */}
      <ScrollReveal selector={`.${styles.bentoCard}`} stagger={0.1} y={24}>
        <section className={styles.servicesSection} aria-labelledby="services-heading">
          <div className="container">
            <div className={styles.servicesIntro}>
              <SectionEyebrow>WHAT WE DO</SectionEyebrow>
              <h2 id="services-heading">AI Services Built for Enterprise Complexity</h2>
              <p>From model selection to production deployment — every engagement is scoped to your stack, your team, and your timeline.</p>
            </div>
            
            <div className={styles.bentoGrid}>
              {/* Card A */}
              <div className={`${styles.bentoCard} ${styles.bentoCardA}`}>
                <Layers size={28} style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-6)' }} />
                <h3>Foundation Model Integration</h3>
                <p>Connect GPT-4o, Claude 3.5 Sonnet, and Gemini 1.5 Pro to your internal systems through secure, versioned API layers and custom middleware. Our unified model routing layer automatically selects the optimal model per request — balancing cost, latency, and capability thresholds. Built-in fallback logic ensures zero-downtime continuity when any upstream provider experiences degradation.</p>
                <div className={styles.serviceTags}>
                  <span className={styles.serviceTag}>Multi-model routing</span>
                  <span className={styles.serviceTag}>API gateway</span>
                  <span className={styles.serviceTag}>Cost optimization</span>
                  <span className={styles.serviceTag}>Fallback logic</span>
                </div>
                <Link href="/services" className={styles.cardLink}>Explore service &rarr;</Link>
              </div>
              
              {/* Card B */}
              <div className={`${styles.bentoCard} ${styles.bentoCardB}`}>
                <Sliders size={20} style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-3)' }} />
                <h3>Enterprise Fine-tuning</h3>
                <p>Adapt foundational models to your domain vocabulary, proprietary data formats, and compliance requirements.</p>
                <div className={styles.statBlock}>
                  <span className={styles.statBig}>4&times;</span>
                  <span className={styles.statLabelText}>faster domain adaptation vs. prompt engineering alone</span>
                </div>
              </div>
              
              {/* Card C */}
              <div className={`${styles.bentoCard} ${styles.bentoCardC}`}>
                <Compass size={20} style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-3)' }} />
                <h3>AI Strategy Consulting</h3>
                <p>Map your AI readiness, prioritize high-ROI use cases, and build a roadmap your board can actually approve.</p>
                <Link href="/contact" className="btn btn-secondary" style={{ fontSize: 'var(--text-xs)', height: '36px', padding: '0 var(--space-4)', width: 'fit-content', marginTop: 'auto' }}>Book a Call</Link>
              </div>
              
              {/* Card D */}
              <div className={`${styles.bentoCard} ${styles.bentoCardD}`}>
                <Database size={20} style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-3)' }} />
                <h3>Data Pipeline Engineering</h3>
                <p>Design and deploy production-grade ingestion pipelines, vector stores, and RAG architectures that keep your AI grounded in live enterprise data.</p>
              </div>
              
              {/* Card E */}
              <div className={`${styles.bentoCard} ${styles.bentoCardE}`}>
                <Rocket size={20} style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-3)' }} />
                <h3>Deployment &amp; MLOps</h3>
                <p>Containerized deployments on Kubernetes with automated model versioning, drift monitoring, and rollback — from staging to production in days, not months.</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Social Proof Section */}
      <section className={styles.proofSection} aria-labelledby="proof-heading">
        <div className={`container ${styles.proofGrid}`}>
          <ScrollReveal selector={`.${styles.proofStat}`} stagger={0.15} x={-20} y={0}>
            <div className={styles.proofStatsCol}>
              <div className={styles.proofStat}>
                <CountUp target={98} suffix="%" className={styles.proofNumber} />
                <span className={styles.proofLabel}>Client satisfaction across all engagements</span>
              </div>
              <div className={styles.proofStat}>
                <CountUp target={43} suffix="%" className={styles.proofNumber} />
                <span className={styles.proofLabel}>Average reduction in manual processing time</span>
              </div>
              <div className={styles.proofStat}>
                <span className={styles.proofNumber}>8 wks</span>
                <span className={styles.proofLabel}>Median time from kickoff to first production deployment</span>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal selector={`.${styles.proofQuote}`} x={20} y={0}>
            <div className={styles.proofQuote}>
              <div className={styles.quoteMark}>&quot;</div>
              <p className={styles.quoteText}>Motoneuron Labs didn&apos;t just integrate an AI layer — they rebuilt how our underwriting team makes decisions. We went from 3-day turnarounds to 4-hour cycles within the first month.</p>
              <div className={styles.quoteAttribution}>
                <div className={styles.quoteName}>Sarah Chen</div>
                <div className={styles.quoteTitle}>VP of Operations, Meridian Financial Group</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Banner */}
      <div className="cta-reveal">
        <CtaBanner />
      </div>

    </main>
  )
}
