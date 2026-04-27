import { Metadata } from 'next'
import Link from 'next/link'
import { Layers, Sliders, Compass, Database, ShieldCheck, Rocket, ArrowRight } from 'lucide-react'
import styles from './services.module.css'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { CtaBanner } from '@/components/ui/CtaBanner'

export const metadata: Metadata = {
  title: 'Services',
  description: 'AI That Integrates Into How You Already Work. We build around you — not the other way around.'
}

export default function Services() {
  return (
    <main>
      
      {/* SECTION 1: Page Hero */}
      <section className={styles.pageHero}>
        <div className={`container ${styles.pageHeroGrid}`}>
          {/* Content */}
          <ScrollReveal selector=".hero-reveal" y={16} stagger={0.1}>
            <div className="hero-reveal">
              <SectionEyebrow>Our Services</SectionEyebrow>
              <h1>AI That Integrates Into How You Already Work</h1>
              <p className={styles.sub}>Every engagement starts with your stack, your team, and your constraints. We build around you — not the other way around.</p>
              
              <div className={styles.heroCtas}>
                <Link href="/contact" className="btn btn-primary">Start a Project</Link>
                <Link href="/services" className="btn btn-secondary">See Our Services</Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Visual (Desktop Only) */}
          <ScrollReveal selector={`.${styles.pageHeroVisual}`} x={20}>
            <div className={styles.pageHeroVisual} aria-hidden="true">
              <svg viewBox="0 0 450 120" width="100%" height="auto" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '450px' }}>
                <defs>
                  <marker id="arrowHead" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-primary)" fillOpacity="0.3" />
                  </marker>
                </defs>

                {/* Arrows */}
                <path d="M 120 60 L 170 60" stroke="var(--color-primary)" strokeOpacity="0.3" strokeWidth="1.5" markerEnd="url(#arrowHead)" />
                <path d="M 280 60 L 330 60" stroke="var(--color-primary)" strokeOpacity="0.3" strokeWidth="1.5" markerEnd="url(#arrowHead)" />
                
                {/* Box: Your Systems */}
                <rect x="0" y="36" width="120" height="48" rx="8" stroke="var(--color-border)" strokeWidth="1" />
                <text x="60" y="64" fontFamily="Inter, sans-serif" fontSize="12" fill="var(--color-text-muted)" textAnchor="middle">Your Systems</text>

                {/* Box: Motoneuron Layer */}
                <rect x="180" y="36" width="100" height="48" rx="8" stroke="var(--color-primary)" strokeWidth="1" fill="color-mix(in srgb, var(--color-primary) 5%, transparent)" />
                <text x="230" y="64" fontFamily="Inter, sans-serif" fontSize="12" fill="var(--color-primary)" textAnchor="middle">Motoneuron Layer</text>

                {/* Box: AI Models */}
                <rect x="340" y="36" width="110" height="48" rx="8" stroke="var(--color-border)" strokeWidth="1" />
                <text x="395" y="64" fontFamily="Inter, sans-serif" fontSize="12" fill="var(--color-text-muted)" textAnchor="middle">AI Models</text>
              </svg>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 2: Services Detail */}
      <section className={styles.servicesDetail} aria-labelledby="services-detail-heading">
        <h2 id="services-detail-heading" className={styles.srOnly}>Our Service Offerings</h2>
        <div className="container">
          
          <ScrollReveal selector={`.${styles.serviceItem}`} y={32} stagger={0.12}>
            <div>
              {/* Service 1 */}
              <article className={styles.serviceItem}>
                <div className={styles.serviceNum}>
                  <span>01</span>
                  <div className={styles.serviceNumIcon}><Layers size={24} /></div>
                </div>
                <div className={styles.serviceBody}>
                  <h3>Foundation Model Integration</h3>
                  <p>We connect GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, and Mistral to your internal systems through a unified API gateway with versioned endpoints, cost controls, and automatic model fallback logic. Your teams interact with one stable interface regardless of what&apos;s happening upstream with model providers.</p>
                  <ul className={styles.serviceDeliverables}>
                    <li>Unified API gateway with multi-provider routing</li>
                    <li>Per-request model selection based on cost/latency thresholds</li>
                    <li>Zero-downtime fallback if a provider degrades</li>
                    <li>Usage dashboards and cost attribution by team</li>
                  </ul>
                  <Link href="/contact" className={styles.serviceCtaLink}>Talk to us about this <ArrowRight size={16} /></Link>
                </div>
              </article>

              {/* Service 2 */}
              <article className={styles.serviceItem}>
                <div className={styles.serviceNum}>
                  <span>02</span>
                  <div className={styles.serviceNumIcon}><Sliders size={24} /></div>
                </div>
                <div className={styles.serviceBody}>
                  <h3>Enterprise Fine-tuning &amp; RLHF</h3>
                  <p>Generic models don&apos;t understand your compliance language, your product catalog, or your customer segments. We fine-tune base models on your proprietary data — with full data residency controls and audit trails — so the model adapts to your domain rather than the other way around.</p>
                  <ul className={styles.serviceDeliverables}>
                    <li>Domain-specific dataset curation and labeling</li>
                    <li>LoRA / QLoRA fine-tuning on GPU infrastructure</li>
                    <li>Human feedback loops for quality alignment</li>
                    <li>Model evaluation benchmarks vs. baseline</li>
                  </ul>
                  <Link href="/contact" className={styles.serviceCtaLink}>Talk to us about this <ArrowRight size={16} /></Link>
                </div>
              </article>

              {/* Service 3 */}
              <article className={styles.serviceItem}>
                <div className={styles.serviceNum}>
                  <span>03</span>
                  <div className={styles.serviceNumIcon}><Compass size={24} /></div>
                </div>
                <div className={styles.serviceBody}>
                  <h3>AI Strategy &amp; Roadmapping</h3>
                  <p>Before writing a single line of code, we audit your organization&apos;s AI readiness — data quality, tooling gaps, team capabilities, and regulatory exposure. We then map out a 12-month phased roadmap prioritized by ROI and feasibility, structured for executive sign-off.</p>
                  <ul className={styles.serviceDeliverables}>
                    <li>AI readiness assessment across 5 dimensions</li>
                    <li>Prioritized use case matrix with effort/value scoring</li>
                    <li>12-month phased implementation roadmap</li>
                    <li>Board-ready presentation with risk mitigation plans</li>
                  </ul>
                  <Link href="/contact" className={styles.serviceCtaLink}>Talk to us about this <ArrowRight size={16} /></Link>
                </div>
              </article>

              {/* Service 4 */}
              <article className={styles.serviceItem}>
                <div className={styles.serviceNum}>
                  <span>04</span>
                  <div className={styles.serviceNumIcon}><Database size={24} /></div>
                </div>
                <div className={styles.serviceBody}>
                  <h3>Data Pipeline Engineering</h3>
                  <p>AI is only as good as the data feeding it. We design and build ingestion pipelines, vector stores, and RAG architectures that keep your models grounded in fresh, accurate enterprise data — from ERP systems to real-time event streams.</p>
                  <ul className={styles.serviceDeliverables}>
                    <li>Automated ETL/ELT pipelines for structured and unstructured data</li>
                    <li>Vector database setup (Pinecone, Weaviate, pgvector)</li>
                    <li>RAG architecture with hybrid retrieval and re-ranking</li>
                    <li>Data freshness monitoring and alerting</li>
                  </ul>
                  <Link href="/contact" className={styles.serviceCtaLink}>Talk to us about this <ArrowRight size={16} /></Link>
                </div>
              </article>

              {/* Service 5 */}
              <article className={styles.serviceItem}>
                <div className={styles.serviceNum}>
                  <span>05</span>
                  <div className={styles.serviceNumIcon}><ShieldCheck size={24} /></div>
                </div>
                <div className={styles.serviceBody}>
                  <h3>Compliance &amp; Responsible AI</h3>
                  <p>Operating in healthcare, finance, or defense? We build governance frameworks, bias audits, and model explainability layers that satisfy your legal and regulatory requirements — without slowing down the product.</p>
                  <ul className={styles.serviceDeliverables}>
                    <li>Model explainability (SHAP, LIME) reporting</li>
                    <li>Bias detection and fairness auditing</li>
                    <li>Data governance and lineage documentation</li>
                    <li>Compliance mapping to GDPR, HIPAA, SOC 2</li>
                  </ul>
                  <Link href="/contact" className={styles.serviceCtaLink}>Talk to us about this <ArrowRight size={16} /></Link>
                </div>
              </article>

              {/* Service 6 */}
              <article className={styles.serviceItem}>
                <div className={styles.serviceNum}>
                  <span>06</span>
                  <div className={styles.serviceNumIcon}><Rocket size={24} /></div>
                </div>
                <div className={styles.serviceBody}>
                  <h3>Deployment &amp; MLOps</h3>
                  <p>From staging to production in days, not months. We containerize, orchestrate, and monitor your AI workloads on Kubernetes — with automated model versioning, drift detection, and rollback policies baked in from day one.</p>
                  <ul className={styles.serviceDeliverables}>
                    <li>Dockerized model serving (FastAPI / TorchServe)</li>
                    <li>Kubernetes orchestration with HPA autoscaling</li>
                    <li>Drift monitoring and automated retraining triggers</li>
                    <li>CI/CD pipelines for model updates</li>
                  </ul>
                  <Link href="/contact" className={styles.serviceCtaLink}>Talk to us about this <ArrowRight size={16} /></Link>
                </div>
              </article>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* SECTION 3: Engagement Model */}
      <section className={styles.engagementSection} aria-labelledby="engagement-heading">
        <div className="container">
          <ScrollReveal selector=".engagement-reveal" y={16} stagger={0.1}>
            <div className="engagement-reveal">
              <SectionEyebrow>How We Work</SectionEyebrow>
              <h2 id="engagement-heading">From First Call to First Deploy</h2>
            </div>
          </ScrollReveal>
          
          <ScrollReveal selector={`.${styles.engagementStep}`} y={20} stagger={0.1}>
            <div className={styles.engagementSteps}>
              {/* Step 1 */}
              <div className={styles.engagementStep}>
                <div className={styles.stepCircle}>1</div>
                <h3 className={styles.stepTitle}>Initial Call</h3>
                <p className={styles.stepDesc}>We learn your goals, constraints, and existing tech stack in 60 minutes.</p>
              </div>
              {/* Step 2 */}
              <div className={styles.engagementStep}>
                <div className={styles.stepCircle}>2</div>
                <h3 className={styles.stepTitle}>Use Case Scoping</h3>
                <p className={styles.stepDesc}>We identify 2–3 high-ROI AI applications and estimate effort and timeline.</p>
              </div>
              {/* Step 3 */}
              <div className={styles.engagementStep}>
                <div className={styles.stepCircle}>3</div>
                <h3 className={styles.stepTitle}>Phased Build</h3>
                <p className={styles.stepDesc}>Iterative delivery in 2-week sprints with weekly stakeholder reviews.</p>
              </div>
              {/* Step 4 */}
              <div className={styles.engagementStep}>
                <div className={styles.stepCircle}>4</div>
                <h3 className={styles.stepTitle}>Production &amp; Handoff</h3>
                <p className={styles.stepDesc}>We deploy, document, and train your team for sustainable ownership.</p>
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
