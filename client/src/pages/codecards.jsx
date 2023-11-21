import React from 'react'
import { FaReact } from "react-icons/fa6";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import Back from './back';
function Codecards() {
  return (
    <>
    <Back />
    <div className='w-full h-screen bg-gray-400 flex justify-center items-center'>
        <div className='w-[80%] h-[65%] grid grid-cols-4 gap-6'>
            <div className='bg-white rounded-[30px] p-1 flex flex-col items-center '>
                <div className='w-full min-h-[55%]  rounded-t-[30px] rounded-br-[60%] bg-gradient-to-tr from-yellow-500 to-red-600 flex justify-center items-center text-white text-[80px] text-bold '>
                     
                <FaReact/>
            </div>
            <h1 className='text-center text-gray-700 font-bold text-[25px] font-sans'>Title</h1>
            <p className=' h-[20%]  text-center text-gray-600 font-mono'>Dolore deserunt Laboriosam commodi fugit consequatur inventore</p>
            <button className=' w-[60%] h-[35px] bg-gradient-to-r rounded-full from-yellow-500 text-white font-bold text-[17px] to-red-500 '>Code</button>
            </div>


            <div className='bg-white rounded-[30px] p-1 flex flex-col items-center '>
                <div className='w-full min-h-[55%]  rounded-t-[30px] rounded-br-[60%] bg-gradient-to-tr from-pink-500 to-purple-800 flex justify-center items-center text-white text-[80px] text-bold '>
                     
                <AiOutlineHtml5/>
            </div>
            <h1 className='text-center text-gray-700 font-bold text-[25px] font-sans'>Title</h1>
            <p className=' h-[20%]  text-center text-gray-600 font-mono'>Dolore deserunt Laboriosam commodi fugit consequatur inventore</p>
            <button className=' w-[60%] h-[35px] bg-gradient-to-r rounded-full from-pink-500 text-white font-bold text-[17px] to-purple-800 '>Code</button>
            </div>
            <div className='bg-white rounded-[30px] p-1 flex flex-col items-center '>
                <div className='w-full min-h-[55%]  rounded-t-[30px] rounded-br-[60%] bg-gradient-to-tr from-blue-300 to-blue-900 flex justify-center items-center text-white text-[80px] text-bold '>
                     
                <IoLogoCss3/>
            </div>
            <h1 className='text-center text-gray-700 font-bold text-[25px] font-sans'>Title</h1>
            <p className=' h-[20%]  text-center text-gray-600 font-mono'>Dolore deserunt Laboriosam commodi fugit consequatur inventore</p>
            <button className=' w-[60%] h-[35px] bg-gradient-to-r rounded-full from-blue-300 text-white font-bold text-[17px] to-blue-900 '>Code</button>
            </div>
            <div className='bg-white rounded-[30px] p-1 flex flex-col items-center '>
                <div className='w-full min-h-[55%]  rounded-t-[30px] rounded-br-[60%] bg-gradient-to-tr from-green-300 to-green-800 flex justify-center items-center text-white text-[80px] text-bold '>
                     
                <SiJavascript className='rounded-lg'/>
            </div>
            <h1 className='text-center text-gray-700 font-bold text-[25px] font-sans'>Title</h1>
            <p className=' h-[20%]  text-center text-gray-600 font-mono'>Dolore deserunt Laboriosam commodi fugit consequatur inventore</p>
            <button className=' w-[60%] h-[35px] bg-gradient-to-r rounded-full from-green-300 text-white font-bold text-[17px] to-green-800 '>Code</button>
            </div>
         
        </div>
    </div></>
  )
}

export default Codecards