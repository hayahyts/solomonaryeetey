"use client"
import { Reveal } from '@/components/reveal'
import { motion } from 'framer-motion'

const items = [
  { company: 'Micro-interactions Awards Team', role: 'Lead UI/UX – Frelance', period: '2020 – 2024' },
  { company: 'Senior UI Designer', role: 'JoyLabs – Full-time', period: '2018 – 2020' },
  { company: 'Product Design', role: 'ZendApp Corp – Lead', period: '2016 – 2018' },
  { company: 'Webflow Team Manager', role: 'DesignX Team – PT', period: '2014 – 2016' },
]

export function Experience() {
  return (
    <section className="container-wide py-16 md:py-24">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Experience</h2>
      </Reveal>

      <div className="space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className={
              index % 2 === 0
                ? 'rounded-xl border border-black/10 p-5 md:p-6 bg-white'
                : 'rounded-xl p-5 md:p-6 bg-black/[0.02]'
            }
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="font-medium">{item.company}</div>
                <div className="text-secondary text-sm">{item.role}</div>
              </div>
              <div className="text-xs text-secondary uppercase tracking-wider">{item.period}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


