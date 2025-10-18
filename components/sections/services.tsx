"use client"
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Reveal } from '@/components/reveal'

const services = [
  { title: 'Creative Strategy', desc: 'Exploring brand voice, value propositions and creative directions.', tone: 'dark' },
  { title: 'Visual Graphic Design', desc: 'Elegant, minimal and modern visual systems and marketing assets.', tone: 'light' },
  { title: 'Strategy & Digital Marketing', desc: 'Campaign concepts, landing pages and performance‑oriented design.', tone: 'light' },
]

export function Services() {
  return (
    <section id="services" className="container-wide py-24 md:py-28">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">What I’m Offering</h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
          >
            <Card className={
              s.tone === 'dark'
                ? 'p-8 transition-shadow bg-black text-white border-black'
                : 'p-8 transition-shadow'
            }>
              <div className="mb-5 h-8 w-8 rounded-full border grid place-content-center">
                <span className={s.tone === 'dark' ? 'opacity-80' : 'opacity-60'}>*</span>
              </div>
              <h3 className="text-xl font-medium mb-3">{s.title}</h3>
              <p className={s.tone === 'dark' ? 'text-white/80 text-sm leading-relaxed' : 'text-secondary text-sm leading-relaxed'}>{s.desc}</p>
              <a href="#" className={
                s.tone === 'dark'
                  ? 'mt-6 inline-flex items-center gap-2 text-sm underline underline-offset-4'
                  : 'mt-6 inline-flex items-center gap-2 text-sm text-primary hover:underline'
              }>
                Explore
              </a>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


