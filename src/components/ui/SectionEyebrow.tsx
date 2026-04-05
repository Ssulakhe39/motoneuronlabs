import { ReactNode } from 'react'

export function SectionEyebrow({ children }: { children: string | ReactNode }) {
  return (
    <span className="eyebrow">{children}</span>
  )
}