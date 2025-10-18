"use client"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Reveal } from '@/components/reveal'

export function Hero() {
  return (
    <section id="about" className="relative pt-24 md:pt-28">
      {/* Multicolor accent blob behind portrait */}
      <div
        className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 h-[360px] w-[360px] md:h-[440px] md:w-[440px] rounded-full blur-3xl opacity-80"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, #7dd3fc 0%, transparent 55%), radial-gradient(circle at 65% 35%, #fca5a5 0%, transparent 50%), radial-gradient(circle at 35% 70%, #fde047 0%, transparent 50%)'
        }}
      />

      <div className="container-wide grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <Reveal>
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 text-[11px] text-secondary uppercase tracking-wider">
              <span>Product Designer</span>
              <span>•</span>
              <span>Available for work</span>
            </div>
            <h1 className="text-[clamp(3rem,6vw,4.5rem)] leading-[1.04] font-semibold">
              Hello! I’m Madhu
            </h1>
            <ul className="text-secondary text-sm space-y-2 max-w-xl">
              <li>– Minimal, modern, conversion‑focused design.</li>
              <li>– Clean systems and scalable patterns.</li>
              <li>– Detail‑obsessed, pragmatic, friendly.</li>
            </ul>
            <div className="flex items-center gap-4">
              <Button className="relative">
                <span className="relative z-10">Let’s Talk</span>
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {/* Portrait without circular mask to mimic cutout */}
          <div className="relative mx-auto md:mx-0 w-[320px] h-[420px] md:w-[380px] md:h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1636041249689-11084f098c7b?q=80&w=800&auto=format&fit=crop"
              alt="Profile"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </Reveal>
      </div>

      {/* Black category strip under hero */}
      <div className="mt-10 bg-black text-white">
        <div className="container-wide">
          <div className="flex flex-wrap items-center text-[12px] uppercase tracking-wide">
            {['Web design','App design','Development','Webflow','Branding'].map((t, i) => (
              <div key={t} className="flex items-center">
                <span className="px-4 py-3">{t}</span>
                {i < 4 && <span className="text-white/20">/</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


