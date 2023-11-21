import React from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {BiSolidUserDetail} from "react-icons/bi"
import {AiOutlineLogout} from "react-icons/ai"
import {MdOutlineExplore} from "react-icons/md"
import {BiSolidDashboard} from "react-icons/bi"
import {ImStatsBars} from "react-icons/im"
import {AiOutlineSetting} from "react-icons/ai"
import {MdReportGmailerrorred} from "react-icons/md"
import {BsFillChatDotsFill} from "react-icons/bs"
import Back from './back';
function Sidebarblue() {
  return (
    <div className='w-full h-screen bg-gradient-to-t  bg-white'>
    <Back />  
     <nav className='absolute group pb-3 grid gap-4 grid-rows-9 rounded-r-lg h-screen w-[8vw] bg-gradient-to-t from-blue-800 to-blue-500  hover:w-[20vw] transition-all ease-in-out duration-500  pt-5 shadow-blue-500-lg '>
<div className='w-[90%] transition-all ease-in-out duration-500 hover:bg-black rounded-r-[40px] flex pl-5  justify-start items-center'>
    <div className='w-[50px] h-[50px] rounded-[50%] items-center justify-center flex bg-black'> <AiOutlineHome className='text-white text-3xl'/></div>

    <div className='  text-white text-[16px] ml-5 hidden group-hover:flex transition-all duration-300 ease-in-out'>Home</div>
     </div>
<div className='w-[90%] transition-all ease-in-out duration-500 hover:bg-black rounded-r-[40px] flex pl-5  justify-start items-center'>
    <div className='w-[50px] h-[50px] rounded-[50%] items-center justify-center flex bg-black'> <BiSolidDashboard className='text-white text-3xl'/></div>

    <div className='  text-white text-[16px] ml-5 hidden group-hover:flex transition-all duration-300 ease-in-out'>Dashboard</div>
     </div>
<div className='w-[90%] transition-all ease-in-out duration-500 hover:bg-black rounded-r-[40px] flex pl-5  justify-start items-center'>
    <div className='w-[50px] h-[50px] rounded-[50%] items-center justify-center flex bg-black'> <MdOutlineExplore className='text-white text-3xl'/></div>

    <div className='  text-white text-[16px] ml-5 hidden group-hover:flex transition-all duration-300 ease-in-out'>Explore</div>
     </div>
<div className='w-[90%] transition-all ease-in-out duration-500 hover:bg-black rounded-r-[40px] flex pl-5  justify-start items-center'>
    <div className='w-[50px] h-[50px] rounded-[50%] items-center justify-center flex bg-black'> <ImStatsBars className='text-white text-3xl'/></div>

    <div className='  text-white text-[16px] ml-5 hidden group-hover:flex transition-all duration-300 ease-in-out'>Analytics</div>
     </div>
<div className='w-[90%] transition-all ease-in-out duration-500 hover:bg-black rounded-r-[40px] flex pl-5  justify-start items-center'>
    <div className='w-[50px] h-[50px] rounded-[50%] items-center justify-center flex bg-black'> <AiOutlineSetting className='text-white text-3xl'/></div>

    <div className='  text-white text-[16px] ml-5 hidden group-hover:flex transition-all duration-300 ease-in-out'>Setting</div>
     </div>
<div className='w-[90%] transition-all ease-in-out duration-500 hover:bg-black rounded-r-[40px] flex pl-5  justify-start items-center'>
    <div className='w-[50px] h-[50px] rounded-[50%] items-center justify-center flex bg-black'> <MdReportGmailerrorred className='text-white text-3xl'/></div>

    <div className='  text-white text-[16px] ml-5 hidden group-hover:flex transition-all duration-300 ease-in-out'>Report</div>
     </div>
<div className='w-[90%] transition-all ease-in-out duration-500 hover:bg-black rounded-r-[40px] flex pl-5  justify-start items-center'>
    <div className='w-[50px] h-[50px] rounded-[50%] items-center justify-center flex bg-black'> <BsFillChatDotsFill className='text-white text-3xl'/></div>

    <div className='  text-white text-[16px] ml-5 hidden group-hover:flex transition-all duration-300 ease-in-out'>Message</div>
     </div>
<div className='w-[90%] transition-all ease-in-out duration-500 hover:bg-black rounded-r-[40px] flex pl-5  justify-start items-center'>
    <div className='w-[50px] h-[50px] rounded-[50%] items-center justify-center flex bg-black'> <BiSolidUserDetail className='text-white text-3xl'/></div>

    <div className='  text-white text-[16px] ml-5 hidden group-hover:flex transition-all duration-300 ease-in-out'>Profile</div>
     </div>
<div className='w-[90%] transition-all ease-in-out duration-500 hover:bg-black rounded-r-[40px] flex pl-5  justify-start items-center'>
    <div className='w-[50px] h-[50px] rounded-[50%] items-center justify-center flex bg-black'> <AiOutlineLogout className='text-white text-3xl'/></div>

    <div className='  text-white text-[16px] ml-5 hidden group-hover:flex transition-all duration-300 ease-in-out'>Log Out</div>
     </div>
     </nav>

    </div>
  )
}

export default Sidebarblue