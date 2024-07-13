import Link from 'next/link'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import React from 'react'
import { Button } from '../ui/button'

const Links = [
    {
        name: 'Home',
        url: '/'
    },
    {
        name: 'About',
        url: '/about'
    },
    {
        name: 'Contact',
        url: '/contact'
    },
    {
        name: 'Services',
        url: '/services'
    },
]
const Header = () => {

    return (
        <header
            className=' w-full fixed max-w-7xl border-b border-slate-400/35 md:border-none   z-50 flex items-center justify-between px-5 py-5 backdrop-blur-sm '
        >
            <Link
            href={'/'}
            className="flex justify-center items-center gap-2">
                <svg width="25" height="25" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 6C0.5 2.68629 3.18629 0 6.5 0H34.5C37.8137 0 40.5 2.68629 40.5 6V34C40.5 37.3137 37.8137 40 34.5 40H6.5C3.18629 40 0.5 37.3137 0.5 34V6Z" fill="#09090B"/>
<path d="M19.6162 22.0209L13.5633 21.9199C13.1379 21.9155 12.842 21.7263 12.6754 21.3525C12.5089 20.9787 12.5626 20.6389 12.8366 20.3331L22.1605 9.77347C22.2362 9.68406 22.3307 9.61305 22.4442 9.56043C22.5577 9.50782 22.7153 9.47097 22.9171 9.44989C23.2533 9.41475 23.5241 9.52502 23.7292 9.7807C23.9344 10.0364 23.9681 10.3181 23.8303 10.626L21.1282 16.9725L27.1811 17.0735C27.6065 17.078 27.9024 17.2671 28.069 17.6409C28.2355 18.0148 28.1818 18.3546 27.9078 18.6603L18.5838 29.2199C18.5082 29.3094 18.4136 29.3804 18.3002 29.433C18.1867 29.4856 18.0291 29.5224 17.8273 29.5435C17.4911 29.5787 17.2203 29.4684 17.0151 29.2127C16.81 28.957 16.7763 28.6753 16.9141 28.3675L19.6162 22.0209Z" fill="white"/>
</svg>

                <h1
                    className=' text-slate-800 font-semibold text-sm '
                >
                   Dexle
                </h1>
            </Link>
            <WebNav />
            <MobileNav />
            
        </header>
    )
}

export default Header

const WebNav = () => {
    return (
        <nav className=" md:flex hidden  justify-center items-center gap-x-6 ">
            <ul className="flex gap-x-3 justify-center items-center">
                {Links.map((link, index) => (
                    <li key={index} className=" text-[0.75rem]   text-slate-700 font-medium  hover:opacity-95">
                        <Link href={link.url}>{link.name}</Link>
                    </li>
                ))}
            </ul>
            <div className="flex gap-x-2 justify-center items-center ">
              
                <Button
                size={'sm'}
                >
                    try for free
                </Button>
            </div>

        </nav>
    )
};

const MobileNav = () => {
    return (
        <nav className=" md:hidden block">
            <Sheet>
                <SheetTrigger>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                </SheetTrigger>
                <SheetContent>
                   
                    <ul className="flex flex-col gap-y-3">
                        {Links.map((link, index) => (
                            <li key={index} className="text-[0.75rem]  hover:opacity-95">
                                <Link href={link.url}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </SheetContent>
            </Sheet>
        </nav>
    )
}
