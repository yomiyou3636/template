import React from 'react'
import { FaPenNib } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";
import { GiBearFace } from "react-icons/gi";
import Back from './back';
function Cornorcard
() {
  return (
    <>
    <Back />
    <div className='w-full h-[150vh] sm:h-screen bg-neutral-800 flex justify-center items-center'>
        <div className='sm:w-[65%] w-[90%] h-[90%] sm:h-[60%]  grid  grid-rows-3 sm:grid-rows-1   sm:grid-cols-3 gap-3'>
            <div className=' border-[8px] border-[#269ff6] bg-neutral-800 rounded-[15px] rounded-tl-[70px] overflow-hidden '>
<div className=' w-full h-[40%] flex justify-start items-start'>
    <div className='w-[50%] h-full  border-[#269ff6]   border-[8px] rounded-tl-[40%] rounded-br-[50%] flex justify-center items-center'>
    <FaPenNib className='text-[70px] text-[#269ff6]'/>
    </div>

</div>
<div className='w-full h-[60%] flex flex-col items-center justify-center gap-2 p-2'>
    <h1 className='text-white font-bold font-sans text-[25px]'>DESIGN</h1>
    <p className='text-white font-sans text-center '> Lorovident dict dolor sit amet consectetur adipisicitis eum numquam? aepe accusantium a molestiae ipsum. ex.</p>
    <button className='text-[23px]  rounded-xl font-bold text-neutral-800 bg-[#269ff6] p-2 w-[50%] h[35px]'>Design</button>
</div>
            </div>
            <div className=' border-[8px] border-[#ff206b] bg-neutral-800 rounded-[15px] rounded-tl-[70px] overflow-hidden '>
<div className=' w-full h-[40%] flex justify-start items-start'>
    <div className='w-[50%] h-full  border-[#ff206b]   border-[8px] rounded-tl-[40%] rounded-br-[50%] flex justify-center items-center'>
    <FaRocket className='text-[70px] text-[#ff206b]'/>
    </div>

</div>
<div className='w-full h-[60%] flex flex-col items-center justify-center gap-2 p-2'>
    <h1 className='text-white font-bold font-sans text-[25px]'>DESIGN</h1>
    <p className='text-white font-sans text-center '> Lorovident dict dolor sit amet consectetur adipisicitis eum numquam? aepe accusantium a molestiae ipsum. ex.</p>
    <button className='text-[23px]  rounded-xl font-bold text-neutral-800 bg-[#ff206b] p-2 w-[50%] h[35px]'>Design</button>
</div>
            </div>
            <div className=' border-[8px] border-[#99fe26] bg-neutral-800 rounded-[15px] rounded-tl-[70px] overflow-hidden '>
<div className=' w-full h-[40%] flex justify-start items-start'>
    <div className='w-[50%] h-full  border-[#99fe26]   border-[8px] rounded-tl-[40%] rounded-br-[50%] flex justify-center items-center'>
    <GiBearFace className='text-[70px] text-[#99fe26]'/>
    </div>

</div>
<div className='w-full h-[60%] flex flex-col items-center justify-center gap-2 p-2'>
    <h1 className='text-white font-bold font-sans text-[25px]'>DESIGN</h1>
    <p className='text-white font-sans text-center '> Lorovident dict dolor sit amet consectetur adipisicitis eum numquam? aepe accusantium a molestiae ipsum. ex.</p>
    <button className='text-[23px]  rounded-xl font-bold text-neutral-800 bg-[#99fe26] p-2 w-[50%] h[35px]'>Design</button>
</div>
            </div>
        </div>

    </div></>
  )
}

export default Cornorcard
