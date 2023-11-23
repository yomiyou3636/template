import React, { useState } from 'react'
import { FaReact } from "react-icons/fa";
import Back from './back';
function Integratedsidebar() {
    const [welcome,setwelcom]=useState('white')
    const [who,setwho]=useState('gray')
    const [what,setwhat]=useState('gray')
    const [get,setget]=useState('gray')


    const handlewell=()=>{
        setwelcom('white')
        setwhat('gray')
        setget('gray')
        setwho('gray')
   }
    const handlewho=()=>{
        setwelcom('gray')
        setwhat('gray')
        setget('gray')
        setwho('white')
  
    }
    const handlewhat=()=>{
        setwelcom('gray')
        setwhat('white')
        setget('gray')
        setwho('gray')
     
    }
    const handleget=()=>{
        setwelcom('gray')
        setwhat('gray')
        setget('white')
        setwho('gray')

    }
  return (
    <><Back />
    
    <div className='w-full h-screen bg-white flex  justify-start'>
        <div className='sm:w-[25%] w-[80%] h-screen bg-indigo-950 flex-col  flex items-start'>
        <div className='w-full h-[25%]  flex justify-center items-center' >
        <FaReact className='text-purple-400 text-[70px] ' />
        </div>
<div className='w-full h-[50%]  grid grid-rows-4 px-10 '>
<div onClick={handlewell} className=' cursor-pointer bg-gradient-to-r from-indigo-900 to-purple-500 flex justify-center items-start'>
    <div  className='bg-indigo-950 w-full h-[97%] text-white flex justify-end items-end pb-2  text-[17px] font-sans'> <span style={{color:`${welcome}`}} >WELCOME</span> </div>
</div>
<div onClick={handlewho} className=' cursor-pointer bg-gradient-to-r from-indigo-900 to-purple-500 flex justify-center items-start'>
    <div  className='bg-indigo-950 w-full h-[97%] text-slate-400 flex justify-end items-end pb-2  text-[17px] font-sans'><span style={{color:`${who}`}} >WHO WE ARE</span> </div>
</div>
<div onClick={handlewhat}className=' cursor-pointer bg-gradient-to-r from-indigo-900 to-purple-500 flex justify-center items-start'>
    <div className='bg-indigo-950 w-full h-[97%] text-slate-400 flex justify-end items-end pb-2  text-[17px] font-sans'><span style={{color:`${what}`}} >WHAT WE DO</span> </div>
</div>
<div onClick={handleget} className=' cursor-pointer bg-gradient-to-r from-indigo-900 to-purple-500 flex justify-center items-start'>
    <div  className='bg-indigo-950 w-full h-[97%] text-slate-400 flex justify-end items-end pb-2  text-[17px] font-sans'><span style={{color:`${get}`}} >GET IN TOUCH</span> </div>
</div>



</div>
        </div>



    </div></>
  )
}

export default Integratedsidebar;