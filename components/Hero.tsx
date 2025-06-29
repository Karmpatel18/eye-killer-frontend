import Image from 'next/image';
import React from 'react'
import { TfiFaceSmile } from "react-icons/tfi";

function Hero() {
    return (
        <div className="flex relative w-full items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full pt-36 pb-20">
            <div className="text-4xl md:text-8xl font-black text-neutral-50 tracking-tighter mb-4 max-w-2xl text-center  uppercase flex flex-col">
                Exceptional
                <div className='text-pink-300 relative'>Digital
                    <span className='h-16 w-16 rounded-full bg-amber-500 p-2 absolute bottom-2 inline-flex text-neutral items-center justify-center group'><TfiFaceSmile size={42} className='text-neutral-900 group-hover:rotate-45 rotate-6 transition-all duration-300 ease-linear'/></span>
                    
                </div>
                Experiences
            </div>
            <p className='max-w-2xl text-lg leading-8 tracking-tight text-center text-neutral-700'>Driving growth for leading brands and organisations through high-performing websites and results-driven digital marketing.</p>
        </div>

        <div className='absolute top-0 left-0'>
            <Image
                src="https://eyekiller.s3-assets.com/homepage-hero/here-we-are-oliver-jeffers.jpg"
                alt="Description of the image"
                layout="fill"
                objectFit="cover"
            />
        </div>
        </div>
    )
}

export default Hero
