import React from 'react';
import Back from './back';
const Glowlogin = () => {
    return (
        <>  
        <Back />
        <div className='w-screen h-[100dvh] sm:h-screen bg-black flex justify-center sm:pt-0 pt-[20%]  sm:items-center items-start'>
          
        <div  className=' z-10 bg-black mt-[25dvh] sm:mt-0   absolute sm:w-[25%] sm:h-[55dvh] w-[90%] h-[40%]   rounded-[40%] flex pt-10 flex-col justify-start items-center gap-4'>
                <p className='text-white font-bold text-3xl '>Log in</p>
                <input className='w-[90%] bg-black rounded-[40px] h-[17%] border-2 text-white border-gray-400 pl-4 text-xl' placeholder='Username' type="text" />
                <input className='w-[90%] bg-black rounded-[40px] h-[17%] border-2 text-white border-gray-400 pl-4 text-xl' placeholder='Username' type="text" />
                
                
                <button id='but'  className='w-[90%] bg-green-400 rounded-[35px] h-[20%]  pl-4 text-xl text-white '  type="text" >Log In</button>

            </div>

            <div id='one' className=' rotate-45 rounded-tl-[33%] rounded-tr-[30%] rounded-br-[35%] rounded-bl-[40%] absolute border-2 border-blue-400 sm:w-[400px] h-[150px] w-[150px]  sm:h-[400px]'></div>
            <div id='two' className=' rotate-12  rounded-tl-[39%] rounded-tr-[35%] rounded-b-[30%] absolute border-2 border-green-300 sm:w-[400px] h-[150px] w-[150px]  sm:h-[400px]'></div>
            <div id='three' className=' rotate-90 rounded-bl-[43%] rounded-br-[37%] rounded-t-[35%]  absolute border-2 border-yellow-300 sm:w-[400px] h-[150px] w-[150px]  sm:h-[400px]'></div>
           
        </div></>
    );
}

export default Glowlogin;
