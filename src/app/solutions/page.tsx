import { Metadata } from 'next'
import Link from 'next/link'
import { HeartPulse, TrendingUp, Factory, ShoppingCart, Shield, Lock, GitBranch, Users, Activity, ArrowRight } from 'lucide-react'
import styles from './solutions.module.css'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { CtaBanner } from '@/components/ui/CtaBanner'
import IndustryPills from '@/components/ui/IndustryPills'

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'AI Built for the Complexity of Your Industry.'
}

export default function Solutions() {
  return (
    <main>
      
      {/* SECTION 1: Page Hero */}
      <section className={styles.pageHero}>
        <div className={`container ${styles.pageHeroGrid}`}>
          {/* Content */}
          <ScrollReveal selector=".hero-reveal" y={16} stagger={0.1}>
            <div className="hero-reveal">
              <SectionEyebrow>Industry Solutions</SectionEyebrow>
              <h1>AI Built for the Complexity of Your Industry</h1>
              <p className={styles.sub}>Generic AI deployments fail because they ignore industry context. Our solutions are pre-scoped to your regulatory environment, data patterns, and operational workflows.</p>
              
              <div className={styles.heroCtas}>
                <a href="#solutions-grid" className="btn btn-secondary">Explore Solutions &darr;</a>
                <Link href="/contact" className="btn btn-primary">Talk to a Specialist</Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Visual (Desktop Only) */}
          <ScrollReveal selector={`.${styles.pageHeroVisual}`} x={20}>
            <div className={styles.pageHeroVisual} aria-hidden="true">
              <IndustryPills />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 2: Solutions Grid */}
      <section className={styles.solutionsSection} id="solutions-grid" aria-labelledby="solutions-heading">
        <div className="container">
          <ScrollReveal selector=".solutions-header-reveal" y={16} stagger={0.1}>
            <div className="solutions-header-reveal">
              <SectionEyebrow>What We Solve</SectionEyebrow>
              <h2 id="solutions-heading">Five Industries. One Proven Framework.</h2>
              <p className={styles.solutionsSectionSub}>We apply the same disciplined methodology across verticals — adapting scope, compliance posture, and data architecture to the specific demands of each industry.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal selector={`.${styles.solutionCard}`} y={24} stagger={0.1}>
            <div className={styles.solutionsGrid}>
              {/* Card 1 */}
              <article className={styles.solutionCard}>
                <div className={styles.cardIcon}><HeartPulse size={28} /></div>
                <span className={styles.cardIndustry}>Healthcare &amp; Life Sciences</span>
                <h3>Clinical Decision Support &amp; Documentation</h3>
                <p className={styles.cardDesc}>Reduce administrative burden and improve diagnostic accuracy. We integrate AI into EHR workflows, automate clinical note generation, and build models that flag anomalies in lab results — all within HIPAA-compliant boundaries.</p>
                <ul className={styles.cardUsecases}>
                  <li>Prior authorization automation</li>
                  <li>Clinical note summarization</li>
                  <li>Anomaly detection in diagnostics</li>
                </ul>
                <Link href="/contact" className={styles.cardLink}>Learn more <ArrowRight size={16} /></Link>
              </article>

              {/* Card 2 */}
              <article className={styles.solutionCard}>
                <div className={styles.cardIcon}><TrendingUp size={28} /></div>
                <span className={styles.cardIndustry}>Financial Services</span>
                <h3>Intelligent Underwriting &amp; Fraud Detection</h3>
                <p className={styles.cardDesc}>Accelerate underwriting cycles and reduce fraud losses with models trained on your historical transaction and claims data. Our compliance layer ensures every decision is explainable and auditable under FINRA and Basel III requirements.</p>
                <ul className={styles.cardUsecases}>
                  <li>Automated underwriting scoring</li>
                  <li>Real-time fraud signal detection</li>
                  <li>Regulatory reporting automation</li>
                </ul>
                <Link href="/contact" className={styles.cardLink}>Learn more <ArrowRight size={16} /></Link>
              </article>

              {/* Card 3 */}
              <article className={styles.solutionCard}>
                <div className={styles.cardIcon}><Factory size={28} /></div>
                <span className={styles.cardIndustry}>Manufacturing &amp; Supply Chain</span>
                <h3>Predictive Maintenance &amp; Demand Forecasting</h3>
                <p className={styles.cardDesc}>Cut unplanned downtime and optimize inventory levels with models trained on your sensor data and supply chain events. We connect to SCADA systems, OPC-UA feeds, and ERP platforms with zero disruption to existing operations.</p>
                <ul className={styles.cardUsecases}>
                  <li>Equipment failure prediction</li>
                  <li>Dynamic reorder point optimization</li>
                  <li>Supplier risk scoring</li>
                </ul>
                <Link href="/contact" className={styles.cardLink}>Learn more <ArrowRight size={16} /></Link>
              </article>

              {/* Card 4 */}
              <article className={styles.solutionCard}>
                <div className={styles.cardIcon}><ShoppingCart size={28} /></div>
                <span className={styles.cardIndustry}>Retail &amp; E-Commerce</span>
                <h3>Personalization at Scale &amp; Inventory Intelligence</h3>
                <p className={styles.cardDesc}>Move beyond rule-based recommendations. Our models learn from individual customer behavior to drive conversion — while AI-powered inventory forecasting reduces stockouts and markdowns across every SKU.</p>
                <ul className={styles.cardUsecases}>
                  <li>Real-time product recommendations</li>
                  <li>Demand-driven inventory replenishment</li>
                  <li>Customer churn prediction</li>
                </ul>
                <Link href="/contact" className={styles.cardLink}>Learn more <ArrowRight size={16} /></Link>
              </article>

              {/* Card 5 */}
              <article className={`${styles.solutionCard} ${styles.solutionCardWide}`}>
                <div className={styles.cardIcon}><Shield size={28} /></div>
                <span className={styles.cardIndustry}>Aerospace &amp; Defense</span>
                <h3>Mission-Critical AI for Secure Environments</h3>
                <p className={styles.cardDesc}>Air-gapped deployments. Adversarial robustness. Latency-optimized inference at the edge. We build AI systems that meet MIL-SPEC operational requirements — from ISR data processing to autonomous asset coordination — with full audit trails and zero reliance on cloud connectivity.</p>
                <ul className={styles.cardUsecases}>
                  <li>Edge inference on embedded hardware</li>
                  <li>ISR imagery analysis pipelines</li>
                  <li>Autonomous system decision logging</li>
                </ul>
                <Link href="/contact" className={styles.cardLink}>Learn more <ArrowRight size={16} /></Link>
              </article>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 3: Cross-Industry Capabilities */}
      <section className={styles.capabilitiesSection} aria-labelledby="capabilities-heading">
        <div className="container">
          <ScrollReveal selector=".capabilities-intro" y={16} stagger={0.1}>
            <div className="capabilities-intro">
              <SectionEyebrow>Regardless of Industry</SectionEyebrow>
              <h2 id="capabilities-heading">What Every Engagement Includes</h2>
            </div>
          </ScrollReveal>
          
          <ScrollReveal selector={`.${styles.capabilityItem}`} y={16} stagger={0.1}>
            <div className={styles.capabilitiesGrid}>
              <div className={styles.capabilityItem}>
                <div className={styles.capabilityItemIcon}><Lock size={20} /></div>
                <h3>Data Residency Controls</h3>
                <p>Your data never leaves your chosen infrastructure boundary.</p>
              </div>
              <div className={styles.capabilityItem}>
                <div className={styles.capabilityItemIcon}><GitBranch size={20} /></div>
                <h3>Model Version Management</h3>
                <p>Every model version tracked, auditable, and rollback-ready.</p>
              </div>
              <div className={styles.capabilityItem}>
                <div className={styles.capabilityItemIcon}><Users size={20} /></div>
                <h3>Team Enablement</h3>
                <p>We train your engineers and data teams to own the system post-handoff.</p>
              </div>
              <div className={styles.capabilityItem}>
                <div className={styles.capabilityItemIcon}><Activity size={20} /></div>
                <h3>Continuous Monitoring</h3>
                <p>Drift detection and performance alerting in production from day one.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 4: CTA Banner */}
      <ScrollReveal selector=".cta-reveal" y={20} stagger={0.12} start="top 80%">
        <div className="cta-reveal">
          <CtaBanner 
            title="Ready to Build AI That Actually Works?"
            description="Talk to our team. We'll scope your first AI use case in 48 hours."
            secondaryHref="/services" 
            secondaryLabel="See Our Services" 
          />
        </div>
      </ScrollReveal>

    </main>
  )
}
