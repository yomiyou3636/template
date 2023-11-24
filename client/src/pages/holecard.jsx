import React from 'react'
import { BsGlobe2 } from "react-icons/bs";
import { LuGem } from "react-icons/lu";
import { IoRocketOutline } from "react-icons/io5";
import Back from './back';
function Holecard() {
  return (
    <>
    <Back />
    <div className='w-full h-[180dvh] sm:pt-0 pt-[20%] pb-5 sm:h-screen bg-slate-900 flex justify-center items-center'>
        <div className='w-[80%] sm:h-[70%] h-full grid grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 gap-[100px]'>
        
            <div className='bg-white  rounded-b-full'>
                <div className='bg-indigo-300 w-full h-[97%] rounded-b-full'>
                    <div className='bg-gradient-to-t  from-indigo-500 to-pink-500  w-full h-[97%] rounded-b-full flex-col flex items-center px-4 gap-4 justify-start'>
                     <div className='mt-[-20%] w-[150px] h-[150px] rounded-full bg-pink-600'>
                     <div className='w-[150px] h-[140px] rounded-full bg-white'>
                     <div className='w-[150px] h-[130px] rounded-full bg-slate-900 flex justify-center items-center'>
                     <BsGlobe2 className='text-white text-[100px]' />
                    </div> 
                        </div> 
                    
                     </div>
                     <h1  className='text-white text-[30px] font-bold font-mono '>Card One</h1>
                     <p className='text-center text-white h-[40%]   '>Lorem ipsum  sed, ut exercitationem illum molestias nisi itaque.</p>
                    </div>
                </div>
            </div>
            <div className='bg-white     rounded-b-full'>
                <div className='bg-pink-300 w-full h-[97%] rounded-b-full'>
                    <div className='bg-gradient-to-t  from-pink-500 to-orange-300  w-full h-[97%] rounded-b-full flex-col flex items-center px-4 gap-4 justify-start'>
                     <div className='mt-[-20%] w-[150px] h-[150px] rounded-full bg-orange-400'>
                     <div className='w-[150px] h-[140px] rounded-full bg-white'>
                     <div className='w-[150px] h-[130px] rounded-full bg-slate-900 flex justify-center items-center'>
                     <LuGem className='text-white text-[100px]' />
                    </div> 
                        </div> 
                    
                     </div>
                     <h1  className='text-white text-[30px] font-bold font-mono'>Card Two</h1>
                     <p className='text-center text-white '>Lorem ipsum dolor sit amet consectetur, adipisicieum i itaque.</p>
                    </div>
                </div>
            </div>
            <div className='bg-white     rounded-b-full'>
                <div className='bg-blue-300 w-full h-[97%] rounded-b-full'>
                    <div className='bg-gradient-to-t  from-blue-500 to-green-500  w-full h-[97%] rounded-b-full flex-col flex items-center px-4 gap-4 justify-start'>
                     <div className='mt-[-20%] w-[150px] h-[150px] rounded-full bg-green-800'>
                     <div className='w-[150px] h-[140px] rounded-full bg-white'>
                     <div className='w-[150px] h-[130px] rounded-full bg-slate-900 flex justify-center items-center'>
                     <IoRocketOutline className='text-white text-[100px]' />
                    </div> 
                        </div> 
                    
                     </div>
                     <h1  className='text-white text-[30px] font-bold font-mono'>Card Three</h1>
                     <p className='text-center text-white '>Lorem rerum autem tempore sequi, illum molestias nisi itaque.</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div></>
  )
}

export default Holecard