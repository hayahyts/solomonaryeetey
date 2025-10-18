"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const sections = [
  { id: 'about', label: "About" },
  { id: 'services', label: "Services" },
  { id: 'work', label: "Work" },
  { id: 'contact', label: "Contact" },
]

export function Navbar() {
  const [active, setActive] = useState<string>('about')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      for (const s of sections) {
        const el = document.getElementById(s.id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(s.id)
          break
        }
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={cn(
      "fixed inset-x-0 top-0 z-50 transition-all",
      scrolled ? "backdrop-blur-md bg-white/70 border-b" : "bg-transparent"
    )}>
      <div className="container-wide flex items-center justify-between h-16">
        <Link href="#about" className="font-heading text-xl">it’s me</Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {sections.map(s => (
            <a key={s.id} href={`#${s.id}`} className={cn(
              "py-2 transition-colors",
              active === s.id ? "text-primary" : "text-secondary hover:text-primary"
            )}>{s.label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}


