import styles from "./contact.module.css";
import { Mail, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import ContactForm from "./ContactForm";


export default function ContactPage() {
  return (
    <main>
      {/* SECTION 1: Page Hero */}
      <section className={styles.pageHero}>
        <div className={`container ${styles.pageHeroGrid}`}>
          <div className="page-hero-content">
            <span className={styles.eyebrow}>LET&apos;S BUILD SOMETHING</span>
            <h1>Start a Conversation, Ship in Weeks</h1>
            <p className={styles.sub}>
              No sales decks. No 6-week discovery phases. Tell us your problem &mdash;
              we&apos;ll come back with a scoped proposal in 48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Contact Layout */}
      <section className={styles.contactSection} aria-labelledby="contact-heading">
        <div className="container">
          <h2 id="contact-heading" className={styles.srOnly}>
            Contact MotoNeuron Labs
          </h2>

          <div className={styles.contactGrid}>
            {/* LEFT: CONTACT FORM */}
            <div>
              <h3 className={styles.formTitle}>Send Us Your Brief</h3>
              <ContactForm />
            </div>

            {/* RIGHT: CONTACT INFO */}
            <div>
              <div className="contact-methods">
                <h3 className={styles.infoHeading}>Other Ways to Reach Us</h3>

                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <Mail width={20} height={20} />
                  </div>
                  <div className={styles.methodBody}>
                    <span className={styles.methodLabel}>EMAIL</span>
                    <span className={styles.methodValue}>
                      <a href="mailto:hello@motoneuronlabs.ai">
                        hello@motoneuronlabs.ai
                      </a>
                    </span>
                    <span className={styles.methodNote}>
                      Typical response: within 24 hours
                    </span>
                  </div>
                </div>

                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <Calendar width={20} height={20} />
                  </div>
                  <div className={styles.methodBody}>
                    <span className={styles.methodLabel}>DISCOVERY CALL</span>
                    <span className={styles.methodValue}>
                      <Link href="#" className={styles.methodLink}>
                        Book a 30-min scoping call
                      </Link>
                    </span>
                    <span className={styles.methodNote}>
                      Available Mon&ndash;Fri, 9am&ndash;6pm IST / CET / EST
                    </span>
                  </div>
                </div>

                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <MapPin width={20} height={20} />
                  </div>
                  <div className={styles.methodBody}>
                    <span className={styles.methodLabel}>HEADQUARTERS</span>
                    <span className={styles.methodValue}>Hyderabad, India</span>
                    <span className={styles.methodNote}>
                      Remote-first. Clients worldwide.
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.responseBox}>
                <h4>What happens next?</h4>

                <div className={styles.nextStep}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <span className={styles.stepTitle}>We review your brief</span>
                    <span className={styles.stepDesc}>
                      Our team reads every submission personally. No auto-responders.
                    </span>
                  </div>
                </div>

                <div className={styles.nextStep}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <span className={styles.stepTitle}>Scoped proposal in 48 hours</span>
                    <span className={styles.stepDesc}>
                      We come back with a specific technical approach, timeline, and cost
                      range.
                    </span>
                  </div>
                </div>

                <div className={styles.nextStep}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <span className={styles.stepTitle}>Kick off on your terms</span>
                    <span className={styles.stepDesc}>
                      Fixed-scope engagement or ongoing retainer &mdash; your choice. No
                      lock-in.
                    </span>
                  </div>
                </div>
              </div>

              <p className={styles.contactReassurance}>
                MotoNeuron Labs does not use your submitted information for marketing
                purposes. We contact you only in relation to your inquiry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Contact Footer Line */}
      <section className={styles.contactFooterLine} aria-hidden="true">
        <p>
          MotoNeuron Labs · Hyderabad, India ·{" "}
          <a href="mailto:hello@motoneuronlabs.ai">hello@motoneuronlabs.ai</a>
        </p>
      </section>
    </main>
  );
}
