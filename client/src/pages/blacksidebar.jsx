import React, { useState } from 'react';
import father from '../images/father.jpg';
import { FaAngleDown } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import Back from "../pages/back"

export default function Blacksidebar() {
  const [homeVisible, setHomeVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(false);
  const [homebtncolor, sethomebtncolor] = useState('white');
  const [pagebtncolor, setpagebtncolor] = useState('white');
  const [leftmargin, setleftmarigin] = useState(0);


  const toggleHome = () => {
    setHomeVisible(!homeVisible);
    if(homebtncolor==="white")
    sethomebtncolor('orange')
else
sethomebtncolor('white')
    
  };
  const handleOrnage=()=>{
    if(leftmargin===0)
    setleftmarigin("-25%")
else
setleftmarigin(0)
  }

  const togglePage = () => {
    setPageVisible(!pageVisible);
    if(pagebtncolor==="white")
    setpagebtncolor('orange')
else
setpagebtncolor('white')
    
  };

  return (
    <><Back />
    <div className='w-full h-screen flex justify-start'>
      <div id='sidebar' className='w-[25%] transition-all ease-out duration-500 h-screen bg-black flex flex-col justify-start items-center' style={{marginLeft:`${leftmargin}`}}>
        <div className=' flex justify-center items-center w-full h-[30%]'>
          <div className='w-[120px]  h-[120px] rounded-full bg-center bg-no-repeat bg-cover' style={{backgroundImage:`url(${father})`}}></div>
        </div>
        <div className='w-[80%] h-[65%]  flex flex-col gap-2'>
          <div onClick={toggleHome} id='homebtn'  className=' items-center flex justify-between border-b-[0.5px] w-full h-[50px]  text-[19px] font-sans text-left pb-2 border-gray-500' style={{color:`${homebtncolor}`}}>
            Home   <FaAngleDown className='text-white' />
          </div>
          <ul className={`w-full pl-6 ${homeVisible ? '' : 'hidden'}  gap-1 transition-all ease-in-out duration-500`}>
            <li className='w-full border-b-[0.5px] h-[35px]  flex items-center  text-slate-300 text-[15px] font-sans text-left pb-1 border-gray-500'>Home1</li>
            <li className='w-full border-b-[0.5px] h-[35px]  flex items-center  text-slate-300 text-[15px] font-sans text-left pb-1 border-gray-500'>Home1</li>
            <li className='w-full border-b-[0.5px] h-[35px]  flex items-center  text-slate-300 text-[15px] font-sans text-left pb-1 border-gray-500'>Home1</li>
          </ul>
          <button className='border-b-[0.5px] w-full h-[50px] text-white text-[19px] font-sans text-left pb-2 border-gray-500'>
            About
          </button>
          <div onClick={togglePage} className='flex justify-between items-center border-b-[0.5px] w-full h-[50px] text-white text-[19px] font-sans text-left pb-2 border-gray-500 ' style={{color:`${pagebtncolor}`}}>
            Pages  <FaAngleDown className='text-white' />
          </div>
          <ul className={`w-full pl-6 ${pageVisible ? '' : 'hidden'} transition-all ease-out duration-500 gap-1`}>
            <li className='w-full border-b-[0.5px] h-[35px]  flex items-center  text-slate-300 text-[15px] font-sans text-left pb-1 border-gray-500'>Page1</li>
            <li className='w-full border-b-[0.5px] h-[35px]  flex items-center  text-slate-300 text-[15px] font-sans text-left pb-1 border-gray-500'>page2</li>
          </ul>
          <button className='border-b-[0.5px] w-full h-[50px] text-white text-[19px] font-sans text-left pb-2 border-gray-500' >Portfolio  </button>
          <button className='border-b-[0.5px] w-full h-[50px] text-white text-[19px] font-sans text-left pb-2 border-gray-500' >Contact  </button>
        </div>
      </div>
      <div className='w-[75%] h-screen pt-5 pl-5 transition-all ease-in-out duration-300'>
<button onClick={handleOrnage} className='w-[40px] h-[40px] bg-orange-500 flex justify-center items-center rounded-lg'><TiThMenu className='text-white text-[30px]' /></button>
      </div>
    </div></>
  );
}
