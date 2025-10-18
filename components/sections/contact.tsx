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
    <section id="contact" className="container-wide py-24 md:py-28">
      <h2 className="text-3xl md:text-4xl font-semibold mb-2">Say Hi! and tell me about your idea</h2>
      <p className="text-secondary text-sm mb-8">Have a nice works? reach out and let’s chat..</p>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="John" className="mt-2 input-underline" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" className="mt-2 input-underline" />
        </div>
        <div>
          <Label htmlFor="company">Company name</Label>
          <Input id="company" placeholder="Company" className="mt-2 input-underline" />
        </div>
        <div>
          <Label htmlFor="website">Company website</Label>
          <Input id="website" placeholder="https://" className="mt-2 input-underline" />
        </div>
        <div className="md:col-span-2">
          <Label>What is your need?</Label>
          <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
            {types.map((t) => (
              <label key={t} className="inline-flex">
                <Checkbox className="hidden" />
                <span className="px-3 py-2 border rounded-full text-sm text-secondary hover:text-primary">{t}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Tell me a bit about your project..." className="mt-2 textarea-underline" />
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


