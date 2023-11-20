import peakpx from "../images/peakpx.jpg"
import React from 'react';
import Back from './back'

const Switchlogin = () => {
    return (
        <> <Back />
<div className='w-full h-screen bg-slate-200 flex justify-center items-center'>
    <div className='w-[60%] h-[90%] rounded-2xl bg-white flex flex-col overflow-hidden'>
        <div className='w-full h-[25%] bg-cover bg-center bg-opacity-25 bg-no-repeat flex justify-center items-center ' style={{background:`url(${peakpx})`}}>
<h1 className="text-[35px] text-white font-bold">LOGIN</h1>
        </div>

        <div className="w-full h-[70%] pt-5 flex justify-center items-start ">
            <from className="w-[80%] h-full ">
             <div className="w-full h-[20%]  flex items-center justify-start ">
               <label htmlFor="" className="text-gray-400 text-[20px] mr-[20px] font-mono">Username</label>
               <input type="text" className="border-b-[1.5px] border-gray-300 h-[80%]  w-[80%] px-[17px] focus:outline-none " placeholder="Enter username"/>
             </div>
             <div className="w-full h-[20%]  flex items-center justify-start ">
               <label htmlFor="" className="text-gray-400 text-[20px] mr-[20px] font-mono">Password</label>
               <input type="text" className="border-b-[1.5px] border-gray-300 h-[80%]  w-[80%] px-[17px] focus:outline-none " placeholder="Enter password"/>
             </div>
             <div className="w-full h-[20%]  flex items-center justify-end gap-[40%] pr-5">
               
              <span className="text-gray-400 cursor-pointer">Remember me</span>
              <span className="text-gray-400 cursor-pointer">forgot password?</span>
             </div>
             <div className="w-full h-[20%]  flex items-center justify-between pl-[20%]  gap-[40%] pr-5">
               
               <button className="h-[80%] rounded-xl  text-white  text-[20px] w-[25%] bg-gradient-to-l from-blue-800 to-blue-400" >Login</button>
               <span className="text-gray-400 cursor-pointer">Sign up</span>
              </div>
            </from>
        </div>
    </div>

</div></>
    );
}

export default Switchlogin;
