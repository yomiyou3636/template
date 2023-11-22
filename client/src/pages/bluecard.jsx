import React from 'react';
import avatar from '../images/avarat.jpg'
import { FaStar } from "react-icons/fa";
import Back from './back';
const Bluecard = () => {
    return (<>        <Back />
        <div className='w-full h-screen bg-slate-900 flex justify-center items-center'>
    <div className='w-[60%] h-[60%]  shadow-lg rounded-lg overflow-hidden shadow-black flex justify-start  '>
        <div className='w-[35%] h-full  bg-cover bg-center bg-no-repeat ' style={{backgroundImage: `url(${avatar})`}}></div>
 <div className='w-[65%] h-full  bg-black p-10'>
    <h1 className='w-full h-[15%]  text-white font-bold  text-[25px]'>AVATAR: THE WAY OF THE WATER</h1>
    <div className='h-[10%]  flex justify-between items-center w-[70%]'>
        <p className='text-white text-[14px] font-sans'>2022</p>
        <p className='text-white text-[14px] font-sans'>192 min</p>
        <p className='text-white text-[14px] font-sans'>Science fiction</p>
    </div>
    <div className='h-[10%]  justify-between items-center   w-full grid grid-cols-10'>
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
    <div className='h-[40%]  w-full'>
        <p className='text-white text-[15px] font-sans overflow-hidden '>
        Sixteen years after the Na'vi repelled the RDA invasion of Pandora, Jake Sully lives as chief of the Omatikaya clan and raises a family with Neytiri, which includes sons Neteyam and Lo'ak, daughter Tuk, and adopted daughter Kiri (born from Grace Augustine's inert avatar).
        </p>
    </div>
    <div className='h-[10%] w-full '>
        <p className='text-blue-500 text-[15px] font-sans '>Read more</p>
    </div>
    <div className='h-[15%] w-full   '>
        <button className='w-[35%] h-[90%] rounded-md border-2 text-right pr-2 border-blue-600 text-blue-500 '> WATCH TRAILER</button>
    </div>
 </div>
    </div>


            
        </div></>
    );
}

export default Bluecard;
