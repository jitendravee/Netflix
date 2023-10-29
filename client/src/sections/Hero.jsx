import React from 'react'
import { hero } from '../assets/images'

const Hero = () => {
  return (
    <div>
   
<div class="relative w-full h-700 bg-[#000000ef]">
        <img src={ hero } alt="Avatar" class=" w-full h-full opacity-75" />
        <div className="absolute w-full h-full top-5 text-white flex  flex-col justify-center  items-center" >
          <h1 className="
         text-3xl font-extrabold">The biggest Indian hits. The best Indian stories.     All streaming here.</h1>
          <p className="text-white text-2xl p-5">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="text-white text-2xl p-5">
Ready to watch? Enter your email to create or restart your membership.
          </p>
          <div><input type='text' placeholder='Enter Email Address' className="bg-[#00000066] border px-8 py-2 text-start" />
<button className="justify-center text-white bg-red-500 px-3 py-2 rounded m-6 text-lg">Get Started</button>

</div>
          </div>
          

          
      </div>
    </div>
  )
}

export default Hero