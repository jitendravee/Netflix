import React from 'react'
import { hero } from '../assets/images'
import { logo } from '../assets/images';


const Hero = () => {
  return (
    <div>
   
<div class="relative w-full h-700 bg-[#000000ef]">
        <img src={ hero } alt="Avatar"
        width={ 230 }
        height={ 76 }
        class=" w-full h-full opacity-75" />
        
         

  
        <div className="absolute w-full h-full top-5 text-white flex  flex-col justify-center  items-center" >
          <h1 className="
         text-2xl font-extrabold mt-4 sm:3xl">The biggest Indian hits. The best Indian stories.     All streaming here.</h1>
          <p className="text-white text-xl sm:text-2xl p-4">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="text-white text-xl sm:text-2xl p-2">
Ready to watch? Enter your email to create or restart your membership.
          </p>
          <div><input type='text' placeholder='Enter Email Address' className="bg-[#00000066] border px-8 py-2 h-55  text-start rounded mb-16" />
<button className="justify-center text-white bg-red-500 px-3 py-2 rounded m-6 text-lg w-200">Get Started</button>

</div>
          </div>
          

          
      </div>
    </div>
  )
}

export default Hero