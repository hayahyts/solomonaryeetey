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
    <section className="container-wide py-24 md:py-28">
      <Reveal>
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="h-px w-12 bg-black/15" />
          <h2 className="text-3xl md:text-4xl font-semibold">Experience</h2>
          <div className="h-px w-12 bg-black/15" />
        </div>
      </Reveal>

      <div className="space-y-3">
        {items.map((item, index) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="border rounded-lg p-4 md:p-5 bg-white"
          >
            <div className="grid grid-cols-[40px_1fr_auto] items-center gap-4">
              <div className="h-8 w-8 grid place-content-center border rounded-md text-[12px]">{index + 1}</div>
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


