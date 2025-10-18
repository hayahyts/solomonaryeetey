"use client"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Reveal } from '@/components/reveal'

export function Hero() {
  return (
    <section id="about" className="relative pt-24 md:pt-28">
      {/* Accent blob */}
      <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full blur-2xl opacity-70" style={{ background: 'radial-gradient(circle at 30% 30%, var(--accent-from), transparent 60%), radial-gradient(circle at 70% 70%, var(--accent-to), transparent 50%)' }} />

      <div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <Reveal>
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 text-xs text-secondary uppercase tracking-wider">Product Designer</span>
            <h1 className="text-[clamp(2.6rem,5vw,4rem)] leading-[1.05] font-semibold">
              Hello! I’m Madhu
              <br />
              <span className="font-semibold">Product Designer</span>
            </h1>
            <p className="max-w-xl text-secondary">
              I design delightful, conversion-driven interfaces that are simple, clean and modern.
            </p>
            <div className="flex items-center gap-4">
              <Button className="relative">
                <span className="relative z-10">Let’s Talk</span>
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto md:mx-0 w-[260px] h-[260px] md:w-[360px] md:h-[360px]">
            {/* abstract circle */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="absolute inset-0 rounded-full bg-white shadow-soft" />
            <Image
              src="https://picsum.photos/600/600"
              alt="Profile"
              fill
              className="rounded-full object-cover p-3"
              priority
            />
          </div>
        </Reveal>
      </div>

      {/* small decorative elements */}
      <div className="absolute left-6 top-24 hidden md:block text-secondary/30">—</div>
    </section>
  )
}


