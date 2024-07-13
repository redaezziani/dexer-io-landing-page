import React from 'react'
import PricingCard from './cards/pricing-card'
import TextShine from './cards/text-shin'

const PricingSection = () => {
    return (
        <div className=" grid min-h-96  w-full grid-cols-3 max-w-5xl gap-3">

            <PricingCard
                className='-ml-2'
            >
                <div className="w-full flex justify-center items-center">
                  <TextShine>
                    Basic Plan
                  </TextShine>
                </div>
            </PricingCard>

            <PricingCard
            >

            </PricingCard>
            <PricingCard
                className='ml-2'
            >

            </PricingCard>

        </div>
    )
}

export default PricingSection