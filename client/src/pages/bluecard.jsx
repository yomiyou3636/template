import React from 'react';
import avatar from '../images/avarat.jpg'
import { FaStar } from "react-icons/fa";
import Back from './back';
const Bluecard = () => {
    return (<>        <Back />
        <div className='w-full h-screen bg-slate-900 flex justify-center items-center'>
    <div className='sm:w-[60%] w-[80%] sm:h-[60%]  h-[80%] shadow-lg rounded-lg overflow-hidden shadow-black flex-col sm:flex-row flex justify-start  '>
        <div className='sm:w-[35%]  sm:h-full w-full h-[35%]  bg-cover sm:bg-center bg-top  bg-no-repeat ' style={{backgroundImage: `url(${avatar})`}}></div>
 <div className='sm:w-[65%] sm:h-full w-full h-[65%]  bg-black p-3 sm:p-3'>
    <h1 className='w-full h-[17%]  sm:h-[15%] text-white font-bold text-[20px]  sm:text-[25px]'>AVATAR: THE WAY OF THE WATER</h1>
    <div className='sm:h-[10%] h-[7%] flex justify-between items-center  w-[70%] '>
        <p className='text-white text-[14px] font-sans'>2022</p>
        <p className='text-white text-[14px] font-sans'>192 min</p>
        <p className='text-white text-[14px] font-sans'>Science fiction</p>
    </div>
    <div className='h-[8%] sm:h-[10%]  justify-between items-center   w-full grid grid-cols-10'>
    <FaStar className='text-blue-500 text-[20px] ' />
    <FaStar className='text-blue-500 text-[20px] ' />
    <FaStar className='text-blue-500 text-[20px] ' />
    <FaStar className='text-blue-500 text-[20px] ' />
    <FaStar className='text-blue-500 text-[20px] ' />
    <FaStar className='text-blue-500 text-[20px] ' />
    <FaStar className='text-blue-500 text-[20px] ' />
    <FaStar className='text-blue-500 text-[20px] ' />
    <FaStar className='text-blue-500 text-[20px] ' />
    <FaStar className='text-white text-[20px] ' />
    </div>
    <div className='   h-[40%] w-full sm:overflow-hidden overflow-y-scroll '>
        <p className='text-white text-[15px]  font-sans '>
        Sixteen years after the Na'vi repelled the RDA invasion of Pandora, Jake Sully lives as chief of the Omatikaya clan and raises a family with Neytiri, which includes sons Neteyam and Lo'ak, daughter Tuk, and adopted daughter Kiri (born from Grace Augustine's inert avatar).
        </p>
    </div>
    <div className='h-[10%] w-full flex justify-start items-center '>
        <p className='text-blue-500 text-[15px] font-sans '>Read more</p>
    </div>
    <div className='h-[15%] w-full  flex items-center justify-center sm:items-center sm:justify-start '>
        <button className='sm:w-[35%] sm:h-[90%]  w-[60%] h-[70%] rounded-md border-2 text-right pr-2 border-blue-600 text-blue-500 '> WATCH TRAILER</button>
    </div>
 </div>
    </div>


            
        </div></>
    );
}

export default Bluecard;
