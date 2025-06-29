'use client'
import { motion, scale } from 'motion/react'
import { IoAccessibility } from "react-icons/io5";
const services = [{
    title: "WORK",
    href: "#"
}, {
    title: "SERVICES",
    href: "#"
}, {
    title: "CAREERS",
    href: "#"
}, {
    title: "BLOGS",
    href: "#"
},
{
    title: "ABOUT",
    href: "#"
}]


export default function Greeting() {
    return <div className="flex w-full justify-between px-6 py-8 text-xl font-semibold tracking-tight items-center text-neutral-50">
        <div>EYE KILLER</div>
        <div className='flex items-center gap-8 text-base'>
            {
                services.map((services, idx) => <div key={services.title} className='hover:text-amber-500 hover:underline underline-offset-2 transition-all duration-300 cursor-pointer'>{services.title}</div>)
            }


        </div>

        <div className='gap-3 flex items-center'>
            <div className='relative inline-flex border-2 border-amber-500 h-[48px] w-[48px] items-center justify-center text-white rounded-full group cursor-pointer'>
                <IoAccessibility />
                <span className='absolute border-2 border-amber-500 rounded-full opacity-0  group-hover:inset-[-8px] group-hover:opacity-100  inset-0 transition-all duration-300'></span>
            </div>
            <div className='relative inline-block text-base bg-amber-500 px-6 py-3 text-neutral-800 rounded-full group cursor-pointer font-bold'>
                LET'S TALK
                <span className='absolute border-2 border-amber-500 rounded-full opacity-0  group-hover:inset-[-6px] group-hover:opacity-100  inset-0 transition-all duration-300'></span>
            </div>
        </div>



    </div>;
}