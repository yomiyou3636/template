import React from 'react';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUnorderedList} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BiMessageRounded} from 'react-icons/bi'
import {FiSettings} from 'react-icons/fi'
import Back from './back';
const Greensidebar = () => {
    const handleHome=()=>{
document.getElementById('homebar').style.marginRight='-60%'
document.getElementById('homebar').style.border='solid 7px #39FF14 '
document.getElementById('homepoint').style.display='flex'

document.getElementById('userbar').style.marginRight='0'
document.getElementById('userbar').style.border='none'
document.getElementById('userpoint').style.display='none'

document.getElementById('messagebar').style.marginRight='0'
document.getElementById('messagebar').style.border='none'
document.getElementById('messagepoint').style.display='none'

document.getElementById('listbar').style.marginRight='0'
document.getElementById('listbar').style.border='none'
document.getElementById('listpoint').style.display='none'

document.getElementById('settingbar').style.marginRight='0'
document.getElementById('settingbar').style.border='none'
document.getElementById('settingpoint').style.display='none'
    }

const handleUser=()=>{
    document.getElementById('userbar').style.marginRight='-60%'
    document.getElementById('userbar').style.border='solid 7px #39FF14 '
    document.getElementById('userpoint').style.display='flex'

    document.getElementById('homebar').style.marginRight='0'
document.getElementById('homebar').style.border='none'
document.getElementById('homepoint').style.display='none'

document.getElementById('messagebar').style.marginRight='0'
document.getElementById('messagebar').style.border='none'
document.getElementById('messagepoint').style.display='none'

document.getElementById('listbar').style.marginRight='0'
document.getElementById('listbar').style.border='none'
document.getElementById('listpoint').style.display='none'

document.getElementById('settingbar').style.marginRight='0'
document.getElementById('settingbar').style.border='none'
document.getElementById('settingpoint').style.display='none'



        }
const handleMessage=()=>{
    document.getElementById('messagebar').style.marginRight='-60%'
    document.getElementById('messagebar').style.border='solid 7px #39FF14 '
    document.getElementById('messagepoint').style.display='flex'

    document.getElementById('homebar').style.marginRight='0'
    document.getElementById('homebar').style.border='none'
    document.getElementById('homepoint').style.display='none'
    
    document.getElementById('userbar').style.marginRight='0'
    document.getElementById('userbar').style.border='none'
    document.getElementById('userpoint').style.display='none'
    
    document.getElementById('listbar').style.marginRight='0'
    document.getElementById('listbar').style.border='none'
    document.getElementById('listpoint').style.display='none'
    
    document.getElementById('settingbar').style.marginRight='0'
    document.getElementById('settingbar').style.border='none'
    document.getElementById('settingpoint').style.display='none'

        }
const handleList=()=>{
    document.getElementById('listbar').style.marginRight='-60%'
    document.getElementById('listbar').style.border='solid 7px #39FF14 '
    document.getElementById('listpoint').style.display='flex'

    document.getElementById('homebar').style.marginRight='0'
    document.getElementById('homebar').style.border='none'
    document.getElementById('homepoint').style.display='none'
    
    document.getElementById('messagebar').style.marginRight='0'
    document.getElementById('messagebar').style.border='none'
    document.getElementById('messagepoint').style.display='none'
    
    document.getElementById('userbar').style.marginRight='0'
    document.getElementById('userbar').style.border='none'
    document.getElementById('userpoint').style.display='none'
    
    document.getElementById('settingbar').style.marginRight='0'
    document.getElementById('settingbar').style.border='none'
    document.getElementById('settingpoint').style.display='none'
    
        }
const handleSetting=()=>{
    document.getElementById('settingbar').style.marginRight='-60%'
    document.getElementById('settingbar').style.border='solid 7px #39FF14 '
    document.getElementById('settingpoint').style.display='flex'

    document.getElementById('homebar').style.marginRight='0'
    document.getElementById('homebar').style.border='none'
    document.getElementById('homepoint').style.display='none'
    
    document.getElementById('messagebar').style.marginRight='0'
    document.getElementById('messagebar').style.border='none'
    document.getElementById('messagepoint').style.display='none'
    
    document.getElementById('userbar').style.marginRight='0'
    document.getElementById('userbar').style.border='none'
    document.getElementById('userpoint').style.display='none'
    
    document.getElementById('listbar').style.marginRight='0'
    document.getElementById('listbar').style.border='none'
    document.getElementById('listpoint').style.display='none'
    
        }
    return (<><Back />
        <div className='w-full h-screen bg-slate-600'>
            <nav className='w-[8%] h-screen bg-slate-900 flex justify-center items-center '>
                <div className='w-full h-[70%]  grid grid-rows-5 gap-2'>
                   <div className='w-full h-full p-2 flex items-center justify-around '>
                    <div id='homepoint' className='  w-[5px] rounded-full shadow-lg shadow-[#39FF14] h-[5px]  bg-[#39FF14]'></div> 
                    <div id='homebar' className='  bg-slate-900  p-2  rounded-full transition-all ease-in-out duration-200 border-[7px] mr-[-60%] border-[#39FF14] ' onClick={handleHome}> <AiOutlineHome className='text-white text-3xl' /></div>  
                   </div>
                   <div className='w-full h-full p-2 flex items-center justify-around '>
                    <div id='userpoint' className=' hidden w-[5px] rounded-full shadow-lg shadow-[#39FF14] h-[5px]  bg-[#39FF14]'></div> 
                    <div id='userbar' className='  bg-slate-900  p-2  rounded-full transition-all ease-in-out duration-200 ' onClick={handleUser}> <BiUser className='text-white text-3xl' /></div>  
                   </div>
                   <div className='w-full h-full p-2 flex items-center justify-around '>
                    <div id='messagepoint' className=' hidden w-[5px] rounded-full shadow-lg shadow-[#39FF14] h-[5px]  bg-[#39FF14]'></div> 
                    <div id='messagebar' className='  bg-slate-900  p-2  rounded-full transition-all ease-in-out duration-200 ' onClick={handleMessage}> <BiMessageRounded className='text-white text-3xl' /></div>  
                   </div>
                   <div className='w-full h-full p-2 flex items-center justify-around '>
                    <div id='listpoint' className=' hidden w-[5px] rounded-full shadow-lg shadow-[#39FF14] h-[5px]  bg-[#39FF14]'></div> 
                    <div id='listbar' className='  bg-slate-900  p-2  rounded-full transition-all ease-in-out duration-200 ' onClick={handleList}> <AiOutlineUnorderedList className='text-white text-3xl' /></div>  
                   </div>
                   <div className='w-full h-full p-2 flex items-center justify-around '>
                    <div id='settingpoint' className=' hidden w-[5px] rounded-full shadow-lg shadow-[#39FF14] h-[5px]  bg-[#39FF14]'></div> 
                    <div id='settingbar' className='  bg-slate-900  p-2  rounded-full transition-all ease-in-out duration-200 ' onClick={handleSetting}> <FiSettings className='text-white text-3xl' /></div>  
                   </div>
                </div>
            </nav>
        </div></>
    );
}

export default Greensidebar;
