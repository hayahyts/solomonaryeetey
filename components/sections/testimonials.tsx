"use client"
import Image from 'next/image'

export function Testimonials() {
  return (
    <section className="container-wide py-16 md:py-24">
      <h2 className="sr-only">Client Feedback</h2>
      <blockquote className="rounded-2xl border border-black/10 p-8 md:p-12 bg-white">
        <p className="text-xl md:text-2xl font-medium leading-relaxed">
          “I just wanted to share a quick note and let you know that you guys do a really good job.”
        </p>
        <div className="mt-8 flex items-center gap-4">
          <div className="relative h-14 w-14">
            <Image src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&auto=format&fit=crop" alt="Client" fill className="rounded-full object-cover" />
          </div>
          <div>
            <div className="font-medium">Rohan Sing</div>
            <div className="text-secondary text-sm">Project Manager, Airflow Inc.</div>
          </div>
        </div>
      </blockquote>
    </section>
  )
}


