import React, { useState } from 'react';
import {AiOutlineCaretRight} from 'react-icons/ai'
import {BiLogoReact} from 'react-icons/bi'
import {AiOutlineCaretLeft} from 'react-icons/ai'
import {AiOutlineHome} from 'react-icons/ai'
import {LuLayoutDashboard} from 'react-icons/lu' 
import {ImStatsBars} from 'react-icons/im' 
import {MdOutlineNotificationsNone} from 'react-icons/md' 
import {BiWallet} from 'react-icons/bi' 
import {TbLogout2} from 'react-icons/tb' 
import {AiOutlineSetting} from 'react-icons/ai' 
import Back from './back';
const Purplesidebar = () => {
    const [display , setdisplay]= useState('none')
    const [displaysm , setdisplaysm]= useState('none')

    const handleclick = () => {
      const bar=  document.getElementById('connnt')
        if(bar.style.width==='7%' && display==='none'){
     bar.style.width='20%'
    setdisplay('block')
    } else {
        bar.style.width='7%'
        setdisplay('none')
        
  
            }}
            const handleclicksm = () => {
                const bar=  document.getElementById('connntsm')
                  if(bar.style.width==='23%' && displaysm==='none'){
               bar.style.width='80%'
              setdisplaysm('block')
              } else {
                  bar.style.width='23%'
                  setdisplaysm('none')
                  
            
                      }}
    
    return (
        <><Back />
        <div className=' overflow-hidden w-full h-screen  bg-indigo-100 '>
            <div className='w-[7%] hidden sm:flex  h-full bg-white   flex-col transition-all ease-out duration-500 justify-start px-3 pt-5 items-center 'id='connnt' >
                <div className='w-full h-[120px] flex flex-col   gap-3 justify-between pt-3 items-center mb-5'>
                <div className=' h-[30px] bg-indigo-700 cursor-pointer text-white text-3xl ml-[100%]  flex justify-center items-center w-[30px]  rounded-full p-2 ' onClick={handleclick} >  {(display === 'none' ? <AiOutlineCaretRight /> : <AiOutlineCaretLeft />)}</div>

                <div className='h-[50px] bg-indigo-700 text-white text-3xl flex justify-center items-center w-[50px]  rounded-lg '><BiLogoReact /></div>

                </div>
                <div className='h-[60%] w-[90%]  grid grid-rows-6 gap-2'>
                    <div className='hover:bg-indigo-700 hover:text-white text-slate-500 transition-all ease-in-out duration-300 text-2xl rounded-lg flex justify-start pl-5 items-center px-2 '><AiOutlineHome /> <span id='bars' style={{display}} className='hidden ml-3 text-[18px]'>Home</span> </div>
                    <div className='hover:bg-indigo-700 hover:text-white text-slate-500 transition-all ease-in-out duration-300 text-2xl rounded-lg flex justify-start pl-5 items-center px-2 '><LuLayoutDashboard /> <span id='bars' style={{display}} className='hidden ml-3 text-[18px]'>Dashboard</span> </div>
                    <div className='hover:bg-indigo-700 hover:text-white text-slate-500 transition-all ease-in-out duration-300 text-2xl rounded-lg flex justify-start pl-5 items-center px-2 '><ImStatsBars /> <span id='bars' style={{display}} className='hidden ml-3 text-[18px]'>Revenue</span> </div>
                    <div className='hover:bg-indigo-700 hover:text-white text-slate-500 transition-all ease-in-out duration-300 text-2xl rounded-lg flex justify-start pl-5 items-center px-2 '><MdOutlineNotificationsNone /> <span id='bars' style={{display}} className='hidden ml-3 text-[18px]'>Notification</span> </div>
                    <div className='hover:bg-indigo-700 hover:text-white text-slate-500 transition-all ease-in-out duration-300 text-2xl rounded-lg flex justify-start pl-5 items-center px-2 '><BiWallet /> <span id='bars' style={{display}} className='hidden ml-3 text-[18px]'>Wallet</span> </div>
                    <div className='hover:bg-indigo-700 hover:text-white text-slate-500 transition-all ease-in-out duration-300 text-2xl rounded-lg flex justify-start pl-5 items-center px-2 '><AiOutlineSetting /> <span id='bars' style={{display}} className='hidden ml-3 text-[18px]'>Setting</span> </div>
                </div>
                <hr className='w-full border-b-2 mb-8 ' />
                <div className='hover:bg-indigo-700  hover:text-white text-slate-500 transition-all ease-in-out duration-300 h-[50px] text-2xl rounded-lg flex justify-center pl-5 items-center px-2 '><TbLogout2 /> <span id='bars' style={{display}} className='hidden ml-3 text-[18px]'>Log out</span> </div>

            </div>


            <div className=' flex sm:hidden  w-[23%] h-full bg-white   flex-col transition-all ease-out duration-500 justify-start px-3 pt-5 items-center 'id='connntsm' >
                <div className='w-full h-[120px] flex flex-col   gap-3 justify-between pt-3 items-center mb-5'>
                <div className=' h-[30px] bg-indigo-700 cursor-pointer text-white text-3xl ml-[100%]  flex justify-center items-center w-[30px]  rounded-full p-2 ' onClick={handleclicksm} >  {(display === 'none' ? <AiOutlineCaretRight /> : <AiOutlineCaretLeft />)}</div>

                <div className='h-[50px] bg-indigo-700 text-white text-3xl flex justify-center items-center w-[50px]  rounded-lg '><BiLogoReact /></div>

                </div>
                <div className='h-[60%] w-[90%]  grid grid-rows-6 gap-2'>
                    <div className='hover:bg-indigo-700 hover:text-white text-slate-500 transition-all ease-in-out duration-300 text-2xl rounded-lg flex justify-start pl-5 items-center px-2 '><AiOutlineHome /> <span id='bars' style={{display :`${displaysm}`}} className='hidden ml-3 text-[18px]'>Home</span> </div>
                    <div className='hover:bg-indigo-700 hover:text-white text-slate-500 transition-all ease-in-out duration-300 text-2xl rounded-lg flex justify-start pl-5 items-center px-2 '><LuLayoutDashboard /> <span id='bars' style={{display :`${displaysm}`}} className='hidden ml-3 text-[18px]'>Dashboard</span> </div>
                    <div className='hover:bg-indigo-700 hover:text-white text-slate-500 transition-all ease-in-out duration-300 text-2xl rounded-lg flex justify-start pl-5 items-center px-2 '><ImStatsBars /> <span id='bars' style={{display :`${displaysm}`}} className='hidden ml-3 text-[18px]'>Revenue</span> </div>
                    <div className='hover:bg-indigo-700 hover:text-white text-slate-500 transition-all ease-in-out duration-300 text-2xl rounded-lg flex justify-start pl-5 items-center px-2 '><MdOutlineNotificationsNone /> <span id='bars' style={{display :`${displaysm}`}} className='hidden ml-3 text-[18px]'>Notification</span> </div>
                    <div className='hover:bg-indigo-700 hover:text-white text-slate-500 transition-all ease-in-out duration-300 text-2xl rounded-lg flex justify-start pl-5 items-center px-2 '><BiWallet /> <span id='bars' style={{display :`${displaysm}`}} className='hidden ml-3 text-[18px]'>Wallet</span> </div>
                    <div className='hover:bg-indigo-700 hover:text-white text-slate-500 transition-all ease-in-out duration-300 text-2xl rounded-lg flex justify-start pl-5 items-center px-2 '><AiOutlineSetting /> <span id='bars' style={{display :`${displaysm}`}} className='hidden ml-3 text-[18px]'>Setting</span> </div>
                </div>
                <hr className='w-full border-b-2 mb-8 ' />
                <div className='hover:bg-indigo-700  hover:text-white text-slate-500 transition-all ease-in-out duration-300 h-[50px] text-2xl rounded-lg flex justify-center pl-5 items-center px-2 '><TbLogout2 /> <span id='bars' style={{display :`${displaysm}`}} className='hidden ml-3 text-[18px]'>Log out</span> </div>

            </div>
        </div></>
    );
}

export default Purplesidebar;
