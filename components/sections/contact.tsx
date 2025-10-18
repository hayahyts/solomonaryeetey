"use client"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

const types = [
  'Mobile App',
  'Website Design',
  'Branding',
  'Webflow development',
  'App design',
  'Graphic design',
  'Wordpress',
]

export function Contact() {
  return (
    <section id="contact" className="container-wide py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8">Say Hi! and tell me about your idea</h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="John" className="mt-2" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" className="mt-2" />
        </div>
        <div>
          <Label htmlFor="company">Company name</Label>
          <Input id="company" placeholder="Company" className="mt-2" />
        </div>
        <div>
          <Label htmlFor="website">Company website</Label>
          <Input id="website" placeholder="https://" className="mt-2" />
        </div>
        <div className="md:col-span-2">
          <Label>What is your need?</Label>
          <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
            {types.map((t) => (
              <Checkbox key={t} label={t} />
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Tell me a bit about your project..." className="mt-2" />
        </div>

        <div className="md:col-span-2">
          <Button className="group">
            <span className="transition-transform group-hover:-translate-y-0.5">Send Me</span>
          </Button>
        </div>
      </form>
    </section>
  )
}


