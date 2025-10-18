import * as React from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "min-h-[120px] w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm placeholder:text-secondary/70 focus:outline-none focus:ring-2 focus:ring-black/10",
        className
      )}
      {...props}
    />
  )
})

Textarea.displayName = 'Textarea'


