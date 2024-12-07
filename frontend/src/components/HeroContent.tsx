import Image from 'next/image'
import React from 'react'
import blueWave from "../data/assets/bluewave.svg"

const HeroContent = () => {
    return (
        <div className='w-full'>
            <Image alt="Wave" className='w-full max-h-fit' src={blueWave} />

            <div className='bg-[#74aafa]'>
                <p className='text-white font-bold text-4xl text-center'>
                    How to use?
                </p>
            </div>
        </div>

    )
}

export default HeroContent