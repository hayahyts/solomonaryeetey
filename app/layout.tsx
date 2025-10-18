import type { Metadata } from 'next'
import './globals.css'
import { Poppins, Inter } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','600','700','800'], variable: '--font-heading' })
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: "Madhu – Product Designer",
  description: "Portfolio of Madhu, Product Designer. Built with Next.js, Tailwind and Framer Motion.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}> 
      <body>{children}</body>
    </html>
  )
}


