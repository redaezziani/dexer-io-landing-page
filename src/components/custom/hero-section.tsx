import React from 'react'
import { Button } from '../ui/button'
import BadgeTextGradient from './cards/text-shin'
import { BorderBeam } from '../magicui/border-beam'

const HeroSection = () => {
    return (
        <main className="w-full z-10 mt-40 max-w-7xl flex flex-col gap-4 justify-center items-center">
            <BadgeTextGradient>
              
                    dexel technologies
            </BadgeTextGradient>
            <h1
                className='text-3xl font-bold text-center text-slate-900'
            >
                Welcome to DEXEL Technologies 
            </h1>
            <p
            className='text-center text-slate-700 max-w-2xl text-[0.80rem]'
            >
                We are a team of professionals who are passionate about technology and its application to solve real-world problems. We are committed to delivering the best services to our clients.
            </p>

            <div className="flex gap-x-3">
                <Button
                variant={'outline'}
                size={'sm'}
                >
                    Our Services
                </Button>
                <Button
                size={'sm'}
                >
                    Contact Us
                </Button>
            </div>
            <div className="relative max-w-5xl overflow-hidden border border-border   rounded-lg mt-10 md:mt-20">
            <img src="/images/hero.png" alt="hero" className="  w-full    object-cover" />
            <BorderBeam size={250} duration={12} delay={9} />
            </div>
            
        </main>
    )
}

export default HeroSection


