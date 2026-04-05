import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import styles from './ai-partners.module.css'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { CtaBanner } from '@/components/ui/CtaBanner'

export const metadata: Metadata = {
  title: 'AI Partners',
  description: 'MotoNeuron Labs works with the world\'s leading AI foundation model providers.'
}

export default function AiPartners() {
  return (
    <main>
      
      {/* SECTION 1: Page Hero */}
      <section className={styles.pageHero}>
        <div className={`container ${styles.pageHeroGrid}`} style={{ gridTemplateColumns: '1fr', maxWidth: '860px' }}>
          {/* Content */}
          <ScrollReveal selector=".hero-reveal" y={16} stagger={0.1}>
            <div className="hero-reveal">
              <SectionEyebrow>AI Model Partnerships</SectionEyebrow>
              <h1>Every Leading Model. One Unified Layer.</h1>
              <p className={styles.sub}>We don&apos;t prescribe a single AI provider. We integrate whichever combination of Claude, GPT, Gemini, Mistral, Llama, and Cohere best fits your use case — with model routing, fallback logic, and cost controls baked in.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 2: Partner Cards Grid */}
      <section className={styles.partnersDetailSection} aria-labelledby="partners-heading">
        <div className="container">
          <h2 id="partners-heading" className={styles.srOnly}>Our AI Model Partners</h2>
          
          <ScrollReveal selector={`.${styles.partnerCard}`} y={24} stagger={0.1}>
            <div className={styles.partnersDetailGrid}>
              {/* Partner 1 */}
              <article className={styles.partnerCard}>
                <div className={styles.partnerCardHeader}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.simpleicons.org/openai/8b90a0" alt="OpenAI logo" className={styles.partnerLogoImg} />
                  <div className={styles.partnerNameBlock}>
                    <h3>OpenAI</h3>
                    <span className={styles.partnerType}>Large Language Model</span>
                  </div>
                </div>
                <p className={styles.partnerDesc}>GPT-4o delivers exceptional performance across reasoning, code generation, and multimodal tasks. It&apos;s our go-to model for broad-scope enterprise deployments where breadth of capability and ecosystem maturity are priorities.</p>
                <div className={styles.partnerStrengths}>
                  <span className={styles.strengthTag}>Broad capability</span>
                  <span className={styles.strengthTag}>Code generation</span>
                  <span className={styles.strengthTag}>Function calling</span>
                </div>
                <div className={styles.partnerFooter}>
                  <div className={styles.partnerFooterLeft}>
                    <span>Best for:</span>
                    <span>General-purpose enterprise AI</span>
                  </div>
                  <a href="https://openai.com" target="_blank" rel="noopener noreferrer" className={styles.partnerExtLink}>Visit site &rarr;</a>
                </div>
              </article>

              {/* Partner 2 */}
              <article className={styles.partnerCard}>
                <div className={styles.partnerCardHeader}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.simpleicons.org/anthropic/8b90a0" alt="Anthropic logo" className={styles.partnerLogoImg} />
                  <div className={styles.partnerNameBlock}>
                    <h3>Anthropic</h3>
                    <span className={styles.partnerType}>Large Language Model</span>
                  </div>
                </div>
                <p className={styles.partnerDesc}>Claude 3.5 Sonnet offers industry-leading performance on long-context reasoning, nuanced instruction following, and document analysis. We use Claude for workflows requiring high accuracy on complex, multi-step tasks with strict safety constraints.</p>
                <div className={styles.partnerStrengths}>
                  <span className={styles.strengthTag}>Long-context reasoning</span>
                  <span className={styles.strengthTag}>Safety alignment</span>
                  <span className={styles.strengthTag}>Document analysis</span>
                </div>
                <div className={styles.partnerFooter}>
                  <div className={styles.partnerFooterLeft}>
                    <span>Best for:</span>
                    <span>High-stakes decision workflows</span>
                  </div>
                  <a href="https://anthropic.com" target="_blank" rel="noopener noreferrer" className={styles.partnerExtLink}>Visit site &rarr;</a>
                </div>
              </article>

              {/* Partner 3 */}
              <article className={styles.partnerCard}>
                <div className={styles.partnerCardHeader}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.simpleicons.org/google/8b90a0" alt="Google logo" className={styles.partnerLogoImg} />
                  <div className={styles.partnerNameBlock}>
                    <h3>Google</h3>
                    <span className={styles.partnerType}>Multimodal Model</span>
                  </div>
                </div>
                <p className={styles.partnerDesc}>Gemini 1.5 Pro&apos;s breakthrough million-token context window and native multimodal capabilities make it the right choice for processing large codebases, video transcripts, and mixed-media documents in a single pass.</p>
                <div className={styles.partnerStrengths}>
                  <span className={styles.strengthTag}>Multimodal inputs</span>
                  <span className={styles.strengthTag}>1M token context</span>
                  <span className={styles.strengthTag}>Google ecosystem</span>
                </div>
                <div className={styles.partnerFooter}>
                  <div className={styles.partnerFooterLeft}>
                    <span>Best for:</span>
                    <span>Multimodal and long-document processing</span>
                  </div>
                  <a href="https://deepmind.google" target="_blank" rel="noopener noreferrer" className={styles.partnerExtLink}>Visit site &rarr;</a>
                </div>
              </article>

              {/* Partner 4 */}
              <article className={styles.partnerCard}>
                <div className={styles.partnerCardHeader}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.simpleicons.org/meta/8b90a0" alt="Meta logo" className={styles.partnerLogoImg} />
                  <div className={styles.partnerNameBlock}>
                    <h3>Meta</h3>
                    <span className={styles.partnerType}>Open-Weight Model</span>
                  </div>
                </div>
                <p className={styles.partnerDesc}>Llama 3 is our preferred model for air-gapped, on-premise, and cost-sensitive deployments. As a fully open-weight model, it runs entirely within your infrastructure — no data leaves, no API costs, no vendor lock-in.</p>
                <div className={styles.partnerStrengths}>
                  <span className={styles.strengthTag}>On-premise deployment</span>
                  <span className={styles.strengthTag}>Zero API costs</span>
                  <span className={styles.strengthTag}>Full data control</span>
                </div>
                <div className={styles.partnerFooter}>
                  <div className={styles.partnerFooterLeft}>
                    <span>Best for:</span>
                    <span>Secure &amp; on-premise deployments</span>
                  </div>
                  <a href="https://ai.meta.com" target="_blank" rel="noopener noreferrer" className={styles.partnerExtLink}>Visit site &rarr;</a>
                </div>
              </article>

              {/* Partner 5 */}
              <article className={styles.partnerCard}>
                <div className={styles.partnerCardHeader}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.simpleicons.org/mistral/8b90a0" alt="Mistral logo" className={styles.partnerLogoImg} />
                  <div className={styles.partnerNameBlock}>
                    <h3>Mistral AI</h3>
                    <span className={styles.partnerType}>Efficient Open Model</span>
                  </div>
                </div>
                <p className={styles.partnerDesc}>Mistral&apos;s models punch well above their weight class in reasoning and instruction following at a fraction of the inference cost of larger models. We use Mistral for latency-sensitive applications where sub-100ms response times are non-negotiable.</p>
                <div className={styles.partnerStrengths}>
                  <span className={styles.strengthTag}>Low latency inference</span>
                  <span className={styles.strengthTag}>Cost efficiency</span>
                  <span className={styles.strengthTag}>European data residency</span>
                </div>
                <div className={styles.partnerFooter}>
                  <div className={styles.partnerFooterLeft}>
                    <span>Best for:</span>
                    <span>Latency-critical production pipelines</span>
                  </div>
                  <a href="https://mistral.ai" target="_blank" rel="noopener noreferrer" className={styles.partnerExtLink}>Visit site &rarr;</a>
                </div>
              </article>

              {/* Partner 6 */}
              <article className={styles.partnerCard}>
                <div className={styles.partnerCardHeader}>
                  <div className={styles.partnerLogoText}>Co</div>
                  <div className={styles.partnerNameBlock}>
                    <h3>Cohere</h3>
                    <span className={styles.partnerType}>Enterprise Search &amp; RAG</span>
                  </div>
                </div>
                <p className={styles.partnerDesc}>Cohere Command and Embed are built specifically for enterprise search, retrieval-augmented generation, and semantic classification at scale. We use Cohere&apos;s embedding models as the backbone of our RAG architectures.</p>
                <div className={styles.partnerStrengths}>
                  <span className={styles.strengthTag}>Enterprise search</span>
                  <span className={styles.strengthTag}>Embeddings &amp; RAG</span>
                  <span className={styles.strengthTag}>Semantic classification</span>
                </div>
                <div className={styles.partnerFooter}>
                  <div className={styles.partnerFooterLeft}>
                    <span>Best for:</span>
                    <span>RAG pipelines and enterprise search</span>
                  </div>
                  <a href="https://cohere.com" target="_blank" rel="noopener noreferrer" className={styles.partnerExtLink}>Visit site &rarr;</a>
                </div>
              </article>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 3: Model Selection Explainer */}
      <section className={styles.modelSelectionSection} aria-labelledby="model-selection-heading">
        <div className="container">
          <div className={styles.modelSelectionGrid}>
            
            {/* Left Column */}
            <ScrollReveal selector={`.${styles.modelSelectionContent}`} x={-20}>
              <div className={`${styles.modelSelectionContent} text-left`}>
                <SectionEyebrow>How We Choose</SectionEyebrow>
                <h2 id="model-selection-heading">The Right Model for the Right Task</h2>
                <p>Not every task needs the most powerful model. Running GPT-4o on a simple classification task wastes 10x the budget needed. Our model routing layer profiles each incoming request — by task type, complexity, latency requirement, and compliance constraint — and selects the optimal model automatically.</p>
                <p>When a provider experiences downtime, traffic automatically shifts to the next best model with no changes to your API endpoint. Your teams see one stable interface. We manage the complexity behind it.</p>
                <Link href="/services" className={styles.serviceCtaLink}>See How Integration Works &rarr;</Link>
              </div>
            </ScrollReveal>

            {/* Right Column */}
            <ScrollReveal selector={`.${styles.modelTableContainer}`} x={20}>
              <div className="text-right">
                <div className={styles.modelTableContainer}>
                  <table className={styles.modelTable}>
                    <thead>
                      <tr>
                        <th>Task Type</th>
                        <th>Primary Model</th>
                        <th>Why</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={styles.tdTask}>Long document analysis</td>
                        <td className={styles.tdModel}>Claude 3.5</td>
                        <td className={styles.tdWhy}>200K context, precise recall</td>
                      </tr>
                      <tr>
                        <td className={styles.tdTask}>Code generation</td>
                        <td className={styles.tdModel}>GPT-4o</td>
                        <td className={styles.tdWhy}>Broad training, function calling</td>
                      </tr>
                      <tr>
                        <td className={styles.tdTask}>Multimodal processing</td>
                        <td className={styles.tdModel}>Gemini 1.5</td>
                        <td className={styles.tdWhy}>Native vision + audio</td>
                      </tr>
                      <tr>
                        <td className={styles.tdTask}>On-premise inference</td>
                        <td className={styles.tdModel}>Llama 3</td>
                        <td className={styles.tdWhy}>No API, full data control</td>
                      </tr>
                      <tr>
                        <td className={styles.tdTask}>Enterprise search/RAG</td>
                        <td className={styles.tdModel}>Cohere Embed</td>
                        <td className={styles.tdWhy}>Purpose-built embeddings</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* SECTION 4: CTA Banner */}
      <ScrollReveal selector=".cta-reveal" y={20} stagger={0.12} start="top 80%">
        <div className="cta-reveal">
          <CtaBanner 
            title="Ready to Build AI That Actually Works?"
            description="Talk to our team. We'll scope your first AI use case in 48 hours."
            secondaryHref="/case-studies" 
            secondaryLabel="Read Case Studies" 
          />
        </div>
      </ScrollReveal>

    </main>
  )
}
