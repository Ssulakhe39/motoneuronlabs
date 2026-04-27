import { Metadata } from 'next'
import { Calendar, Users, Globe, Target, Shield, Layers, Eye, Zap, Code2 } from 'lucide-react'
import styles from './about.module.css'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { CtaBanner } from '@/components/ui/CtaBanner'

export const metadata: Metadata = {
  title: 'About',
  description: 'Motoneuron Labs is an AI services company building practical, production-grade AI for enterprise businesses.'
}

export default function About() {
  return (
    <main>
      
      {/* SECTION 1: Page Hero */}
      <section className={styles.pageHero}>
        <div className={`container ${styles.pageHeroGrid}`} style={{ gridTemplateColumns: '1fr', maxWidth: '860px' }}>
          <ScrollReveal selector=".hero-reveal" y={16} stagger={0.1}>
            <div className="hero-reveal">
              <SectionEyebrow>OUR STORY</SectionEyebrow>
              <h1>We Build AI That Earns Its Place in Production</h1>
              <p className={styles.sub}>Motoneuron Labs was founded on one belief: AI is only valuable when it solves a real problem reliably. Not demos. Not pilots that never ship. Production-grade AI, built to last.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 2: Mission & Founding Story */}
      <section className={styles.missionSection} aria-labelledby="mission-heading">
        <div className="container">
          <div className={styles.missionGrid}>
            
            {/* Left: Text Content */}
            <ScrollReveal selector={`.${styles.missionContent}`} x={-20} y={0}>
              <div className={styles.missionContent}>
                <SectionEyebrow>FOUNDED 2021</SectionEyebrow>
                <h2 id="mission-heading">Built for the Gap Between AI Research and Business Reality</h2>
                
                <p>Most enterprises don&apos;t lack AI ambition — they lack execution. They&apos;ve run the proof-of-concepts, attended the conferences, and watched the demos. What they haven&apos;t found is a partner who can take a messy real-world dataset, an existing tech stack, and a specific business objective — and ship something that works.</p>
                
                <p>Motoneuron Labs was founded to close that gap. We are not researchers publishing benchmarks. We are engineers and applied scientists who have shipped AI into production environments with real constraints: legacy systems, compliance requirements, limited labeled data, latency budgets, and skeptical end users.</p>
                
                <p>Every engagement starts with the outcome you&apos;re trying to move, not the model we want to use. Model selection, architecture, integration approach — all of it follows from the business objective.</p>
              </div>
            </ScrollReveal>

            {/* Right: Visual Stats */}
            <ScrollReveal selector={`.${styles.foundingStat}`} y={16} stagger={0.15}>
              <div className={styles.foundingVisual}>
                <div className={styles.foundingStat}>
                  <div className={styles.statIcon}>
                    <Calendar size={24} />
                  </div>
                  <div className={styles.statInfo}>
                    <span className={styles.statFig}>2021</span>
                    <span className={styles.statDesc}>Year founded</span>
                  </div>
                </div>

                <div className={styles.foundingStat}>
                  <div className={styles.statIcon}>
                    <Users size={24} />
                  </div>
                  <div className={styles.statInfo}>
                    <span className={styles.statFig}>60+</span>
                    <span className={styles.statDesc}>AI engineers and specialists</span>
                  </div>
                </div>

                <div className={styles.foundingStat}>
                  <div className={styles.statIcon}>
                    <Globe size={24} />
                  </div>
                  <div className={styles.statInfo}>
                    <span className={styles.statFig}>18</span>
                    <span className={styles.statDesc}>Countries with active clients</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* SECTION 3: Values */}
      <section className={styles.valuesSection} aria-labelledby="values-heading">
        <div className="container">
          <ScrollReveal selector={`.${styles.sectionHeader} > *`} y={16} stagger={0.1}>
            <div className={styles.sectionHeader}>
              <SectionEyebrow>HOW WE WORK</SectionEyebrow>
              <h2 id="values-heading">Principles, Not Platitudes</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal selector={`.${styles.valueCard}`} y={20} stagger={0.08}>
            <div className={styles.valuesGrid}>
              {/* Value 1 */}
              <article className={styles.valueCard}>
                <Target size={20} style={{ color: 'var(--color-primary)' }} />
                <h3 className={styles.valueTitle}>Outcome First</h3>
                <p className={styles.valueDesc}>We measure success by the metric that matters to your business, not by model accuracy scores. If it doesn&apos;t move the needle, we rebuild it.</p>
              </article>

              {/* Value 2 */}
              <article className={styles.valueCard}>
                <Shield size={20} style={{ color: 'var(--color-primary)' }} />
                <h3 className={styles.valueTitle}>Production Grade or Nothing</h3>
                <p className={styles.valueDesc}>Every system we build is designed to run reliably in production — monitored, recoverable, and maintainable by your team without us holding your hand.</p>
              </article>

              {/* Value 3 */}
              <article className={styles.valueCard}>
                <Layers size={20} style={{ color: 'var(--color-primary)' }} />
                <h3 className={styles.valueTitle}>Model Agnostic</h3>
                <p className={styles.valueDesc}>We have no financial incentive to push you toward any particular AI provider. We recommend the model stack that solves your problem most efficiently.</p>
              </article>

              {/* Value 4 */}
              <article className={styles.valueCard}>
                <Eye size={20} style={{ color: 'var(--color-primary)' }} />
                <h3 className={styles.valueTitle}>Radical Transparency</h3>
                <p className={styles.valueDesc}>You see our architecture decisions, our cost estimates, and our confidence levels in plain language. No black boxes in our process.</p>
              </article>

              {/* Value 5 */}
              <article className={styles.valueCard}>
                <Zap size={20} style={{ color: 'var(--color-primary)' }} />
                <h3 className={styles.valueTitle}>Pragmatic Speed</h3>
                <p className={styles.valueDesc}>We ship fast without cutting corners on observability or security. Our baseline includes logging, fallback handling, and rollback capability from day one.</p>
              </article>

              {/* Value 6 */}
              <article className={styles.valueCard}>
                <Code2 size={20} style={{ color: 'var(--color-primary)' }} />
                <h3 className={styles.valueTitle}>We Leave You Independent</h3>
                <p className={styles.valueDesc}>Our goal is for your team to own and maintain what we build. Every engagement includes knowledge transfer, documentation, and a clean handoff.</p>
              </article>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 5: CTA Banner */}
      <ScrollReveal selector=".cta-reveal" y={20} stagger={0.12} start="top 80%">
        <div className="cta-reveal">
          <CtaBanner secondaryHref="/contact" secondaryLabel="Talk to the Team" />
        </div>
      </ScrollReveal>

    </main>
  )
}
