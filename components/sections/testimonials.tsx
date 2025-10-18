"use client"
import Image from 'next/image'

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-28">
      <div className="container-wide relative">
        <div className="absolute right-2 top-2 text-black/30">×</div>
        <blockquote className="md:mx-auto">
          <p className="text-[clamp(1.6rem,3vw,2.2rem)] md:text-[clamp(2rem,4vw,3rem)] font-medium leading-tight max-w-4xl">
            “I just wanted to share a quick note and let you know that you guys do a really good job.”
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div>
              <div className="font-medium">Rohan Sing</div>
              <div className="text-secondary text-sm">Project Manager, Airflow Inc.</div>
            </div>
          </div>
        </blockquote>

        {/* Large cutout portrait on the right */}
        <div className="hidden md:block absolute -bottom-16 right-6 h-40 w-40">
          <Image src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop" alt="Client" fill className="object-cover rounded-full" />
        </div>
      </div>
    </section>
  )
}


