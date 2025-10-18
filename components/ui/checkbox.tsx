import * as React from 'react'
import { cn } from '@/lib/utils'

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({ className, label, ...props }, ref) => {
  return (
    <label className="inline-flex items-center gap-3 cursor-pointer select-none">
      <input
        ref={ref}
        type="checkbox"
        className={cn(
          "h-5 w-5 appearance-none rounded-md border border-black/20 grid place-content-center transition-all",
          "checked:bg-black checked:border-black",
          className
        )}
        {...props}
      />
      {label && <span className="text-sm text-primary/80">{label}</span>}
    </label>
  )
})

Checkbox.displayName = 'Checkbox'


