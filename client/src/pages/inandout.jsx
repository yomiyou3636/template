import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlinePerson } from "react-icons/md";
import { IoStatsChartOutline } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import Back from './back';
function Inandout() {
  return (
<> <Back />
    <div className='w-full h-screen '>
       
<div className='w-[15%] h-screen bg-white flex flex-col justify-center items-start gap-1'>
<div className='w-[100px] h-[80px]   flex group hover:w-full  '>
    <div className='z-10 w-[100px] group bg-red-900 h-full flex justify-center items-center text-white text-3xl '><IoHomeOutline /></div>
    <div className=' absolute w-[150px] group-hover:ml-[100px] transition-all ease-in-out duration-300 h-[80px] ml-[-150px]  bg-red-900 text-white text-[20px] flex justify-start pl-5 items-center'> Home</div>
</div>
<div className=' h-[80px] w-[100px]  hover:w-full flex group '>
    <div className='z-10 w-[100px] group bg-red-900 h-full flex justify-center items-center text-white text-3xl '><IoIosNotificationsOutline /> </div>
    <div className=' absolute w-[150px] group-hover:ml-[100px] transition-all ease-in-out duration-300 h-[80px] ml-[-150px]  bg-red-900 text-white text-[20px] flex justify-start pl-5 items-center'> Notification</div>
</div>
<div className='w-[100px] h-[80px] hover:w-full  flex group '>
    <div className='z-10 w-[100px] group bg-red-900 h-full flex justify-center items-center text-white text-3xl '><IoStatsChartOutline /></div>
    <div className=' absolute w-[150px] group-hover:ml-[100px] transition-all ease-in-out duration-300 h-[80px] ml-[-150px]  bg-red-900 text-white text-[20px] flex justify-start pl-5 items-center'> Statstics</div>
</div>
<div className='w-[100px] h-[80px] hover:w-full   flex group '>
    <div className='z-10 w-[100px] group bg-red-900 h-full flex justify-center items-center text-white text-3xl '><MdOutlinePerson /></div>
    <div className=' absolute w-[150px] group-hover:ml-[100px] transition-all ease-in-out duration-300 h-[80px] ml-[-150px]  bg-red-900 text-white text-[20px] flex justify-start pl-5 items-center'> Profile</div>
</div>
<div className='hover:w-full w-[100px]  h-[80px]   flex group '>
    <div className='z-10 w-[100px] group bg-red-900 h-full flex justify-center items-center text-white text-3xl '><RiLogoutCircleLine /></div>
    <div className=' absolute w-[150px] group-hover:ml-[100px] transition-all ease-in-out duration-300 h-[80px] ml-[-150px]  bg-red-900 text-white text-[20px] flex justify-start pl-5 items-center'> log out</div>
</div>

</div>
    </div></>
  )
}

export default Inandout