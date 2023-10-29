import React from 'react'
import { logo } from '../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (

    <div className="flex flex-col bg-[#000000ef] w-full px-7 pt-5 opacity-100  " >
        
         
        <ul className="flex flex-row p-2  space-between space-x-4 w-full justify-between ">
          <li className="px-12">      

        <img src={ logo }
        alt='logo'
        width={150}
        height={23}
        className="w-[150] h-[23]"
        />
        
          </li>
<li>
<FontAwesomeIcon icon="fa-sharp fa-solid fa-camera-movie" />
</li>
        <li className="" >
          <button className="bg-red-600 rounded-lg px-3 py-1 text-white font-bold cursor-pointer"> Sign in</button>
        </li>
        </ul>
        

        </div>
  
 
    )
}

export default Nav