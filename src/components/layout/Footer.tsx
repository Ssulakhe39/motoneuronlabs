import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-upper">
          <div className="footer-brand">
            <Link href="/" className="brand-logo" aria-label="Motoneuron Labs Home">
              <Image src="/logo1.webp" alt="Motoneuron Labs" width={220} height={72} style={{ height: '64px', width: 'auto' }} />
            </Link>
            <p className="tagline">Intelligence, Engineered for Your Business.</p>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Services</h3>
            <div className="footer-col-links">
              <Link href="/services" className="footer-link">Model Integration</Link>
              <Link href="/services" className="footer-link">Fine-tuning</Link>
              <Link href="/services" className="footer-link">AI Strategy</Link>
              <Link href="/services" className="footer-link">Data Pipelines</Link>
              <Link href="/services" className="footer-link">MLOps</Link>
            </div>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Company</h3>
            <div className="footer-col-links">
              <Link href="/about" className="footer-link">About</Link>
              <Link href="#" className="footer-link">Blog</Link>
              <Link href="#" className="footer-link">Careers</Link>
            </div>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Contact</h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)' }}>
              Ready to explore what AI can do for your business?
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: 'var(--space-4)' }}>
              Start a Project
            </Link>
            <a href="mailto:sales@motoneuronlabs.com" className="footer-link">sales@motoneuronlabs.com</a>
          </div>
        </div>

        <div className="footer-lower">
          <span className="footer-copyright">&copy; 2026 Motoneuron Labs. All rights reserved.</span>
          <div className="footer-legal">
            <Link href="#" className="footer-link">Privacy Policy</Link>
            <Link href="#" className="footer-link">Terms of Service</Link>
            <Link href="#" className="footer-link">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
