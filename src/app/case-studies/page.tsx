import styles from "./case-studies.module.css";
import { ShieldCheck, Lock, Globe, Users } from "lucide-react";

import { CtaBanner } from "@/components/ui/CtaBanner";

export default function CaseStudiesPage() {
  return (
    <main>
      {/* SECTION 1: Page Hero */}
      <section className={styles.pageHero}>
        <div
          className={`container ${styles.pageHeroGrid}`}
          style={{ gridTemplateColumns: "1fr", maxWidth: "860px" }}
        >
          <div className="page-hero-content">
            <span className={styles.eyebrow}>CLIENT RESULTS</span>
            <h1>AI That Moves the Metric That Matters</h1>
            <p className={styles.sub}>
              Every engagement is measured against a specific business outcome. These are the results our clients have shared with us.
            </p>

            <div className={styles.heroStatsRow}>
              <div className={styles.statPill}>
                <span className={styles.pillNumber}>50+</span>
                <span className={styles.pillLabel}>Enterprise clients</span>
              </div>
              <div className={styles.statPill}>
                <span className={styles.pillNumber}>12</span>
                <span className={styles.pillLabel}>Foundation models</span>
              </div>
              <div className={styles.statPill}>
                <span className={styles.pillNumber}>3.2B</span>
                <span className={styles.pillLabel}>Tokens/month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Case Studies */}
      <section className={styles.caseStudiesSection} aria-labelledby="cs-heading">
        <div className="container">
          <h2 id="cs-heading" className={styles.srOnly}>
            Case Studies
          </h2>

          {/* Case Study 1 */}
          <div>
            <article className={styles.caseStudyItem}>
              <div className={styles.csContent}>
                <div className={styles.csMeta}>
                  <span className={styles.csTag}>Financial Services</span>
                  <span className={styles.csTagModel}>Claude 3.5 + GPT-4o</span>
                </div>
                <h3>Cutting Underwriting Cycle Time by 67%</h3>
                <p className={styles.csClient}>
                  Client: Mid-size specialty insurance carrier, North America
                </p>

                <p className={styles.csSectionLabel}>The Challenge</p>
                <p className={styles.csText}>
                  A specialty insurance carrier was processing commercial underwriting
                  submissions manually — a team of 12 underwriters reviewing PDF
                  submissions, cross-referencing policy databases, and composing coverage
                  rationale. Average cycle time was 9 business days. The backlog was
                  growing faster than headcount could.
                </p>

                <p className={styles.csSectionLabel}>Solution</p>
                <p className={styles.csText}>
                  MotoNeuron Labs built a dual-model pipeline: Claude 3.5 extracts and
                  reasons over submission documents (up to 200-page PDFs), while GPT-4o
                  generates structured coverage rationale using the carrier&apos;s
                  proprietary policy templates. Human underwriters now review a pre-filled
                  decision package rather than starting from scratch.
                </p>

                <p className={styles.csSectionLabel}>Tech Stack</p>
                <div className={styles.csStack}>
                  <span className={styles.serviceTag}>Claude 3.5</span>
                  <span className={styles.serviceTag}>GPT-4o</span>
                  <span className={styles.serviceTag}>FastAPI</span>
                  <span className={styles.serviceTag}>PostgreSQL</span>
                  <span className={styles.serviceTag}>AWS Lambda</span>
                </div>
              </div>
              <div className={styles.csMetrics}>
                <span className={styles.eyebrow}>RESULTS</span>
                <div className={styles.csMetric}>
                  <span className={styles.metricValue}>67%</span>
                  <span className={styles.metricLabel}>
                    Reduction in underwriting cycle time
                  </span>
                  <span className={styles.metricDetail}>From 9 days to 3 days</span>
                </div>
                <div className={styles.csMetric}>
                  <span className={styles.metricValue}>4.2×</span>
                  <span className={styles.metricLabel}>Throughput increase</span>
                  <span className={styles.metricDetail}>
                    Same headcount, 4x submission volume
                  </span>
                </div>
                <div className={styles.csMetric}>
                  <span className={styles.metricValue}>94%</span>
                  <span className={styles.metricLabel}>
                    Accuracy on coverage classification
                  </span>
                  <span className={styles.metricDetail}>vs. 87% manual baseline</span>
                </div>
                <div className={styles.csMetric}>
                  <span className={styles.metricValue}>$2.1M</span>
                  <span className={styles.metricLabel}>Projected annual savings</span>
                  <span className={styles.metricDetail}>
                    Based on 12-month extrapolation
                  </span>
                </div>
              </div>
            </article>
          </div>

          {/* Case Study 2 */}
          <div>
            <article className={`${styles.caseStudyItem} ${styles.caseStudyItemReversed}`}>
              <div className={styles.csMetrics}>
                <span className={styles.eyebrow}>RESULTS</span>
                <div className={styles.csMetric}>
                  <span className={styles.metricValue}>0</span>
                  <span className={styles.metricLabel}>
                    Unplanned downtime incidents post-deployment
                  </span>
                  <span className={styles.metricDetail}>6-month period</span>
                </div>
                <div className={styles.csMetric}>
                  <span className={`${styles.metricValue} ${styles.long}`}>72hrs</span>
                  <span className={styles.metricLabel}>
                    Average failure prediction lead time
                  </span>
                </div>
                <div className={styles.csMetric}>
                  <span className={styles.metricValue}>€1.4M</span>
                  <span className={styles.metricLabel}>Maintenance cost savings</span>
                  <span className={styles.metricDetail}>First year</span>
                </div>
                <div className={styles.csMetric}>
                  <span className={styles.metricValue}>99.2%</span>
                  <span className={styles.metricLabel}>
                    Model precision on failure classification
                  </span>
                </div>
              </div>
              <div className={styles.csContent}>
                <div className={styles.csMeta}>
                  <span className={styles.csTag}>Manufacturing</span>
                  <span className={styles.csTagModel}>Llama 3 (on-premise)</span>
                </div>
                <h3>Zero Unplanned Downtime Across 3 Production Lines</h3>
                <p className={styles.csClient}>
                  Client: Tier-1 automotive component manufacturer, Germany
                </p>

                <p className={styles.csSectionLabel}>The Challenge</p>
                <p className={styles.csText}>
                  Unplanned equipment failures were costing this manufacturer an average
                  of €380,000 per incident in lost production and emergency maintenance.
                  Traditional time-based maintenance schedules were missing early failure
                  signals buried in sensor telemetry.
                </p>

                <p className={styles.csSectionLabel}>Solution</p>
                <p className={styles.csText}>
                  We deployed Llama 3 entirely on-premise to satisfy the client&apos;s
                  strict IP and data residency requirements. The model was fine-tuned on
                  18 months of vibration, temperature, and pressure telemetry to predict
                  failure windows 72+ hours in advance. Maintenance teams receive
                  prioritized work orders through an internal dashboard — no cloud
                  dependency, no API latency.
                </p>

                <p className={styles.csSectionLabel}>Tech Stack</p>
                <div className={styles.csStack}>
                  <span className={styles.serviceTag}>Llama 3</span>
                  <span className={styles.serviceTag}>LoRA fine-tuning</span>
                  <span className={styles.serviceTag}>Kubernetes</span>
                  <span className={styles.serviceTag}>OPC-UA</span>
                  <span className={styles.serviceTag}>InfluxDB</span>
                </div>
              </div>
            </article>
          </div>

          {/* Case Study 3 */}
          <div>
            <article className={styles.caseStudyItem}>
              <div className={styles.csContent}>
                <div className={styles.csMeta}>
                  <span className={styles.csTag}>Healthcare</span>
                  <span className={styles.csTagModel}>GPT-4o + Cohere Embed</span>
                </div>
                <h3>Clinical Documentation Time Reduced by 58%</h3>
                <p className={styles.csClient}>
                  Client: Regional hospital network, 14 facilities, United States
                </p>

                <p className={styles.csSectionLabel}>The Challenge</p>
                <p className={styles.csText}>
                  Physicians at this hospital network were spending an average of 2.4
                  hours per shift on clinical documentation — updating EHR entries,
                  composing discharge summaries, and coding diagnoses. Burnout rates
                  were rising and documentation quality was inconsistent across
                  facilities.
                </p>

                <p className={styles.csSectionLabel}>Solution</p>
                <p className={styles.csText}>
                  We built a voice-to-EHR documentation layer using GPT-4o for
                  transcription and reasoning, combined with Cohere&apos;s embedding
                  models to match clinical notes against ICD-10 coding databases with
                  semantic search rather than keyword matching. Physicians dictate
                  naturally; the system generates structured, compliant EHR entries for
                  review.
                </p>

                <p className={styles.csSectionLabel}>Tech Stack</p>
                <div className={styles.csStack}>
                  <span className={styles.serviceTag}>GPT-4o</span>
                  <span className={styles.serviceTag}>Cohere Embed</span>
                  <span className={styles.serviceTag}>FHIR API</span>
                  <span className={styles.serviceTag}>Azure</span>
                  <span className={styles.serviceTag}>React</span>
                </div>
              </div>
              <div className={styles.csMetrics}>
                <span className={styles.eyebrow}>RESULTS</span>
                <div className={styles.csMetric}>
                  <span className={styles.metricValue}>58%</span>
                  <span className={styles.metricLabel}>
                    Reduction in documentation time per shift
                  </span>
                </div>
                <div className={styles.csMetric}>
                  <span className={`${styles.metricValue} ${styles.long}`}>
                    2.4hrs &rarr; 1.0hr
                  </span>
                  <span className={styles.metricLabel}>
                    Average daily documentation burden
                  </span>
                </div>
                <div className={styles.csMetric}>
                  <span className={styles.metricValue}>96%</span>
                  <span className={styles.metricLabel}>ICD-10 coding accuracy</span>
                  <span className={styles.metricDetail}>vs. 82% pre-deployment</span>
                </div>
                <div className={styles.csMetric}>
                  <span className={styles.metricValue}>31%</span>
                  <span className={styles.metricLabel}>
                    Reduction in documentation-related errors
                  </span>
                </div>
              </div>
            </article>
          </div>

          {/* Case Study 4 */}
          <div>
            <article className={`${styles.caseStudyItem} ${styles.caseStudyItemReversed}`}>
              <div className={styles.csMetrics}>
                <span className={styles.eyebrow}>RESULTS</span>
                <div className={styles.csMetric}>
                  <span className={styles.metricValue}>23%</span>
                  <span className={styles.metricLabel}>Lift in recommendation CTR</span>
                  <span className={styles.metricDetail}>vs. prior rule engine</span>
                </div>
                <div className={styles.csMetric}>
                  <span className={styles.metricValue}>18%</span>
                  <span className={styles.metricLabel}>Increase in average order value</span>
                </div>
                <div className={styles.csMetric}>
                  <span className={`${styles.metricValue} ${styles.long}`}>41ms</span>
                  <span className={styles.metricLabel}>Median recommendation latency</span>
                  <span className={styles.metricDetail}>p95: 67ms</span>
                </div>
                <div className={styles.csMetric}>
                  <span className={styles.metricValue}>2.8×</span>
                  <span className={styles.metricLabel}>ROI on first 6 months</span>
                  <span className={styles.metricDetail}>vs. implementation cost</span>
                </div>
              </div>
              <div className={styles.csContent}>
                <div className={styles.csMeta}>
                  <span className={styles.csTag}>Retail &amp; E-Commerce</span>
                  <span className={styles.csTagModel}>Gemini 1.5 + Cohere Embed</span>
                </div>
                <h3>23% Lift in Conversion Through AI Personalization</h3>
                <p className={styles.csClient}>
                  Client: Multi-brand e-commerce retailer, 4.2M monthly active users
                </p>

                <p className={styles.csSectionLabel}>The Challenge</p>
                <p className={styles.csText}>
                  Existing product recommendation rules were static — built on
                  collaborative filtering from 2019. With a catalog of 800,000+ SKUs and
                  customers browsing across 6 brands, the rule engine could not keep pace
                  with behavioral signals. CTR on recommendations had declined 18% over
                  two years.
                </p>

                <p className={styles.csSectionLabel}>Solution</p>
                <p className={styles.csText}>
                  We replaced the rule engine with a real-time personalization layer:
                  Gemini 1.5 processes multi-session browsing context (including image
                  interactions), while Cohere Embed powers the semantic product retrieval
                  layer. The system re-ranks recommendations on every page load using
                  live session signals, without requiring a full model inference call
                  each time.
                </p>

                <p className={styles.csSectionLabel}>Tech Stack</p>
                <div className={styles.csStack}>
                  <span className={styles.serviceTag}>Gemini 1.5</span>
                  <span className={styles.serviceTag}>Cohere Embed</span>
                  <span className={styles.serviceTag}>Redis</span>
                  <span className={styles.serviceTag}>Kafka</span>
                  <span className={styles.serviceTag}>GCP</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 3: Trust Signals Bar */}
      <section className={styles.trustSection} aria-label="Trust and compliance">
        <div className="container">
          <div className={styles.trustBar}>
            <div className={styles.trustItem}>
              <ShieldCheck width={16} height={16} color="var(--color-primary)" />
              <span>HIPAA &amp; SOC 2 compliant workflows</span>
            </div>
            <div className={styles.trustItem}>
              <Lock width={16} height={16} color="var(--color-primary)" />
              <span>On-premise deployment available</span>
            </div>
            <div className={styles.trustItem}>
              <Globe width={16} height={16} color="var(--color-primary)" />
              <span>Clients across North America, Europe &amp; APAC</span>
            </div>
            <div className={styles.trustItem}>
              <Users width={16} height={16} color="var(--color-primary)" />
              <span>50+ enterprise deployments</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CTA Banner */}
      <CtaBanner />
    </main>
  );
}
