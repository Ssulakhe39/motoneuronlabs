'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sun, Moon, Menu, X, ArrowRight } from 'lucide-react'
import { useTheme } from '@/components/layout/ThemeProvider'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/ai-partners', label: 'AI Partners' },
  { href: '/case-studies', label: 'Case Studies' },
]

export default function Navbar() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <nav className="site-nav">
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="brand-logo" aria-label="MotoNeuron Labs Home">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M16 2.66663L2.66663 10V22L16 29.3333L29.3333 22V10L16 2.66663Z" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M16 8L8 12.5V19.5L16 24L24 19.5V12.5L16 8Z" fill="var(--color-primary)" fillOpacity="0.2" stroke="var(--color-primary)" strokeWidth="2" strokeLinejoin="round" />
              <circle cx="16" cy="16" r="3" fill="var(--color-primary)" />
            </svg>
            MotoNeuron Labs
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                // Do not apply aria-current to the Contact/Get Started button, navigation loops handle this separately
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {/* Only show inverse of current so we can transition them via CSS or just conditionally render */}
              {theme === 'dark' ? <Sun size={20} className="icon-sun" /> : <Moon size={20} className="icon-moon" />}
              {/* Using CSS fallback if theme isn't fully mounted -> will render both but hide 1 via CSS as per user's HTML */}
              {theme === null && (
                 <>
                   <Sun size={20} className="icon-sun" />
                   <Moon size={20} className="icon-moon" />
                 </>
              )}
            </button>
            <Link href="/contact" className="btn btn-primary hidden md:inline-flex">
              Get Started
            </Link>

            <button
              className="mobile-menu-btn md:hidden"
              aria-label="Open mobile menu"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU DRAWER */}
      <div
        className={`mobile-menu-backdrop ${isMobileMenuOpen ? 'open' : ''}`}
        id="mobileMenuBackdrop"
        aria-hidden="true"
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
      <div
        className={`mobile-menu-drawer ${isMobileMenuOpen ? 'open' : ''}`}
        id="mobileMenuDrawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="drawer-header">
          <Link href="/" className="brand-logo" aria-label="MotoNeuron Labs Home">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M16 2.66663L2.66663 10V22L16 29.3333L29.3333 22V10L16 2.66663Z" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M16 8L8 12.5V19.5L16 24L24 19.5V12.5L16 8Z" fill="var(--color-primary)" fillOpacity="0.2" stroke="var(--color-primary)" strokeWidth="2" strokeLinejoin="round" />
              <circle cx="16" cy="16" r="3" fill="var(--color-primary)" />
            </svg>
            MotoNeuron
          </Link>
          <button
            className="drawer-close"
            id="closeMenuBtn"
            aria-label="Close menu"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <div className="drawer-links">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="drawer-footer">
          <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>
            Get Started
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  )
}
