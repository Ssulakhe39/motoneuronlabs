'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme | null
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: null,
  toggleTheme: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    // Always resolve and set data-theme on mount to ensure theme works over network
    const currentTheme = document.documentElement.getAttribute('data-theme') as Theme | null
    let resolved: Theme

    if (currentTheme === 'dark' || currentTheme === 'light') {
      resolved = currentTheme
    } else {
      try {
        const stored = localStorage.getItem('theme') as Theme | null
        if (stored === 'dark' || stored === 'light') {
          resolved = stored
        } else {
          resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        }
      } catch {
        resolved = 'dark'
      }
      document.documentElement.setAttribute('data-theme', resolved)
    }

    setTheme(resolved)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    try { localStorage.setItem('theme', newTheme) } catch {}
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
