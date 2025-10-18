"use client"
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Reveal } from '@/components/reveal'

const services = [
  { title: 'Creative Strategy', desc: 'Exploring brand voice, value propositions and creative directions.' },
  { title: 'Visual Graphic Design', desc: 'Elegant, minimal and modern visual systems and marketing assets.' },
  { title: 'Strategy & Digital Marketing', desc: 'Campaign concepts, landing pages and performance-oriented design.' },
]

export function Services() {
  return (
    <section id="services" className="container-wide py-16 md:py-24">
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
            <Card className="p-8 hover:shadow-soft transition-shadow">
              <h3 className="text-xl font-medium mb-3">{s.title}</h3>
              <p className="text-secondary text-sm leading-relaxed">{s.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


