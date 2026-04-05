import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ThemeProvider from '@/components/layout/ThemeProvider'

export const metadata: Metadata = {
  title: { template: '%s — MotoNeuron Labs', default: 'MotoNeuron Labs' },
  description: 'Intelligence, Engineered for Your Business.',
  metadataBase: new URL('https://motoneuronlabs.ai'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            try {
              var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              var isDark = prefersDark;
              document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
            } catch (e) {}
          })()
        `}} />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
