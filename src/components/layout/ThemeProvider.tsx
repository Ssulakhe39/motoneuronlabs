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
    // Read from DOM on mount
    const currentTheme = document.documentElement.getAttribute('data-theme') as Theme
    if (currentTheme) {
      setTheme(currentTheme)
    } else {
      const stored = localStorage.getItem('theme') as Theme | null
      if (stored) {
        setTheme(stored)
        document.documentElement.setAttribute('data-theme', stored)
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const resolved = prefersDark ? 'dark' : 'light'
        setTheme(resolved)
        document.documentElement.setAttribute('data-theme', resolved)
      }
    }
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
