import React from 'react'
import { hero } from '../assets/images'

const Hero = () => {
  return (
    <div className="relative">
        <img
        src={ hero }
        alt='hero'
        />
        <p className="absolute">hii</p>
    </div>
  )
}

export default Hero