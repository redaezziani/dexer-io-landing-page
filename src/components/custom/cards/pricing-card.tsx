import { cn } from '@/lib/utils'
import React from 'react'

interface PricingCardProps {
    className?: string
    children?: React.ReactNode
}

const PricingCard = ({ className, children }: PricingCardProps) => {
    return (
        <section
            className={cn("w-full   aspect-[9/12]  p-2 col-span-1 border rounded-lg border-slate-400/35", className)}
        >
            {children}
        </section>
    )
}

export default PricingCard