"use client"
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    title: 'Web Design for fintech payment solutions',
    desc: 'Designing a modern website for a fast-growing fintech startup.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Minimal Agency website for startups business',
    desc: 'Clean and minimal patterns that scale with brand growth.',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'SaaS web and app design project',
    desc: 'End-to-end product design for a SaaS analytics platform.',
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop',
  },
]

export function CaseStudies() {
  return (
    <section id="work" className="container-wide py-24 md:py-28">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8">Case Study</h2>

      {/* Featured */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Card className="overflow-hidden">
          <div className="relative aspect-[21/9]">
            <Image src={projects[0].image} alt={projects[0].title} fill className="object-cover" />
          </div>
          <div className="p-6">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide mb-2">
              <span className="px-2 py-1 border rounded-full">Web Design</span>
            </div>
            <h3 className="text-xl font-medium mb-1">{projects[0].title}</h3>
            <p className="text-secondary text-sm">{projects[0].desc}</p>
            <Link href="#" className="mt-3 inline-flex items-center gap-2 text-sm hover:underline">
              See Details →
            </Link>
          </div>
        </Card>
      </motion.div>

      {/* Stacked list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.slice(1).map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <Card className="overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image src={p.image} alt={p.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide mb-2">
                  <span className="px-2 py-1 border rounded-full">New Design</span>
                </div>
                <h3 className="text-xl font-medium mb-1">{p.title}</h3>
                <p className="text-secondary text-sm">{p.desc}</p>
                <Link href="#" className="mt-3 inline-flex items-center gap-2 text-sm hover:underline">
                  See Details →
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


