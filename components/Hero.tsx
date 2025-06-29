'use client';
import Image from 'next/image';
import React from 'react'
import { TfiFaceSmile } from "react-icons/tfi";
import { motion } from 'motion/react';
function Hero() {
    return (
        <div className="flex relative w-full items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full pt-36 pb-20">
                <div className="text-4xl md:text-8xl font-black text-neutral-50 tracking-tighter mb-4 max-w-2xl text-center  uppercase flex flex-col">
                    Exceptional
                    <div className='text-pink-300 relative'>Digital
                        <span className='h-16 w-16 rounded-full bg-amber-500 p-2 absolute bottom-2 inline-flex text-neutral items-center justify-center group'><TfiFaceSmile size={42} className='text-neutral-900 group-hover:rotate-45 rotate-6 transition-all duration-300 ease-linear' /></span>

                    </div>
                    Experiences
                </div>
                <p className='max-w-2xl text-lg leading-8 tracking-tight text-center text-neutral-400'>Driving growth for leading brands and organisations through high-performing websites and results-driven digital marketing.</p>
            </div>

            <motion.div
                className='absolute top-6 right-52'
                animate={{ y: ['0%', '-6%', '0%'] }}
                transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: 'easeInOut',
                }}
            >
                <Image
                    src="https://eyekiller.s3-assets.com/homepage-hero/here-we-are-oliver-jeffers.jpg"
                    alt="Description of the image"
                    height={100}
                    width={100}
                    className="w-32 h-auto object-cover rounded-lg"
                />
            </motion.div>
            <motion.div
                className='absolute top-2 left-52'
                animate={{ y: ['0%', '-6%', '0%'] }}
                transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: 'easeInOut',
                }}
            >
                <Image
                    src="https://eyekiller.s3-assets.com/work/featured-image/grand-opera-house-website-featured-image.jpg"
                    alt="Description of the image"
                    height={100}
                    width={100}
                    className="w-24 h-auto object-cover rounded-lg"
                />
            </motion.div>
            <motion.div
                className='absolute bottom-12 left-52'
                animate={{ y: ['0%', '-6%', '0%'] }}
                transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: 'easeInOut',
                }}
            >
                <Image
                    src="https://eyekiller.s3-assets.com/homepage-hero/jamie-robinson-eyekiller-meeting-team.jpg"
                    alt="Description of the image"
                    height={100}
                    width={100}
                    className="w-36 h-auto object-cover rounded-lg"
                />
            </motion.div>
            <motion.div
                className='absolute bottom-2 right-52'
                animate={{ y: ['0%', '-6%', '0%'] }}
                transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: 'easeInOut',
                }}
            >
                <Image
                    src="https://eyekiller.s3-assets.com/homepage-hero/arts-council-website-homepage.jpg"
                    alt="Description of the image"
                    height={100}
                    width={100}
                    className="w-44 h-auto object-cover rounded-lg"
                />
            </motion.div>
        </div>
    )
}

export default Hero
