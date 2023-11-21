import React from 'react'
import { BsGlobe2 } from "react-icons/bs";
import { LuGem } from "react-icons/lu";
import { IoRocketOutline } from "react-icons/io5";
import Back from './back';
function Holecard() {
  return (
    <>
    <Back />
    <div className='w-full h-screen bg-slate-900 flex justify-center items-center'>
        <div className='w-[80%] h-[70%]  grid grid-cols-3 gap-[50px]'>
        
            <div className='bg-white     rounded-b-full'>
                <div className='bg-indigo-300 w-full h-[97%] rounded-b-full'>
                    <div className='bg-gradient-to-t  from-indigo-500 to-pink-500  w-full h-[97%] rounded-b-full flex-col flex items-center px-4 gap-4 justify-start'>
                     <div className='mt-[-20%] w-[150px] h-[150px] rounded-full bg-pink-600'>
                     <div className='w-[150px] h-[140px] rounded-full bg-white'>
                     <div className='w-[150px] h-[130px] rounded-full bg-slate-900 flex justify-center items-center'>
                     <BsGlobe2 className='text-white text-[100px]' />
                    </div> 
                        </div> 
                    
                     </div>
                     <h1  className='text-white text-[30px] font-bold font-mono'>Card two</h1>
                     <p className='text-center text-white '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur doloribus libero necessitatibus possimus at obcaecati, rerum autem distinctio perspiciatis eum eveniet tempore sequi sed, ut exercitationem illum molestias nisi itaque.</p>
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
                     <h1  className='text-white text-[30px] font-bold font-mono'>Card three</h1>
                     <p className='text-center text-white '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur doloribus libero necessitatibus possimus at obcaecati, rerum autem distinctio perspiciatis eum eveniet tempore sequi sed, ut exercitationem illum molestias nisi itaque.</p>
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
                     <h1  className='text-white text-[30px] font-bold font-mono'>Card one</h1>
                     <p className='text-center text-white '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur doloribus libero necessitatibus possimus at obcaecati, rerum autem distinctio perspiciatis eum eveniet tempore sequi sed, ut exercitationem illum molestias nisi itaque.</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div></>
  )
}

export default Holecard