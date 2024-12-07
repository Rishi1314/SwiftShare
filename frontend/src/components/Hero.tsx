import React from 'react'
import UploadRetrieve from './UploadRetrieve'
import Image from 'next/image'
import blueWave from "../data/assets/bluewave.svg"
import HeroContent from './HeroContent'

const Hero = () => {
  return (
    <div className='w-full min-h-[100vh] flex flex-col items-center'>
      
      <UploadRetrieve />
      <HeroContent/>
    </div>
  )
}

export default Hero