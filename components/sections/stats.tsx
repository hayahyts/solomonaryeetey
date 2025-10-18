"use client"
import { useEffect, useState } from 'react'

function useCountTo(target: number, duration = 1200) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      setValue(Math.round(target * p))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])
  return value
}

const stats = [
  { label: 'Projects Done', value: 2450 },
  { label: 'Satisfied Clients', value: 1085 },
  { label: 'New Members', value: 7 },
  { label: 'Working Hours', value: 2790 },
]

function StatItem({ label, value }: { label: string; value: number }) {
  const v = useCountTo(value)
  return (
    <div className="text-center">
      <div className="mx-auto mb-3 h-8 w-8 rounded-full border grid place-content-center text-xs">★</div>
      <div className="text-3xl font-semibold">{v.toLocaleString()}</div>
      <div className="text-secondary text-sm mt-2">{label}</div>
    </div>
  )
}

export function Stats() {
  return (
    <section className="container-wide py-24 md:py-28">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <StatItem key={s.label} label={s.label} value={s.value} />
        ))}
      </div>
    </section>
  )
}


