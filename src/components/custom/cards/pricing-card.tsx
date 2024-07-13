import { cn } from '@/lib/utils'
import React from 'react'

interface PricingCardProps {
    className?: string
    children?: React.ReactNode
}

const PricingCard = ({ className, children }: PricingCardProps) => {
    return (
        <section
            className={cn("w-full bg-gradient-to-b from-red-700/15 to-transparent aspect-[9/14]  p-2 col-span-1 border rounded-lg border-red-700/20", className)}
        >
            {children}
        </section>
    )
}

export default PricingCard