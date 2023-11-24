import React, { useState } from 'react';
import father from '../images/father.jpg';
import { FaAngleDown } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import Back from "../pages/back"
import { TbLogout2 } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";



export default function Blacksidebar() {
  const [homeVisible, setHomeVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(false);
  const [homebtncolor, sethomebtncolor] = useState('white');
  const [pagebtncolor, setpagebtncolor] = useState('white');
  const [leftmargin, setleftmarigin] = useState(0);
  const [leftmarginwin, setleftmariginwin] = useState(0);
  const [iconsign, seticonsign ]=useState(false); 
  const [iconsignwin, seticonsignwin ]=useState(false); 
  const [homesign, sethomesign]=useState(false);
  const [pagesign, setpagesign]=useState(false);


  const toggleHome = () => {
    setHomeVisible(!homeVisible);
    sethomesign(true)
    if(homebtncolor==="white")
    sethomebtncolor('orange')
else
sethomebtncolor('white')
    
  };



  const handleOrnage=()=>{
    seticonsign(!iconsign)
    if(leftmargin===0)
    setleftmarigin("-85%")

else
setleftmarigin(0)
  }



  const handleOrnagewin=()=>{
    seticonsignwin(!iconsignwin)
    if(leftmarginwin===0)
    setleftmariginwin("-25%")
else
setleftmariginwin(0)
  }



  const togglePage = () => {
    setpagesign(true)
    setPageVisible(!pageVisible);
    if(pagebtncolor==="white")
    setpagebtncolor('orange')
else
setpagebtncolor('white')
    
  };

  return (
      <>
      <Back />
    <div className='w-full sm:hidden  h-[100dvh] flex justify-start'>
      <div id='sidebar' className='w-[85%] sm:w-[25%] transition-all  ease-out duration-500 min-h-screen bg-black overflow-y-scroll flex flex-col justify-start items-center' style={{marginLeft:`${leftmargin}`}}>
        
        <div className=' flex justify-center items-center w-full h-[30%]'>
          <div className='w-[130px] h-[130px] rounded-full flex justify-center items-center bg-white border-2 border-orange-500'>
          <div className='w-[120px]  h-[120px] rounded-full bg-center bg-no-repeat bg-cover' style={{backgroundImage:`url(${father})`}}></div></div>
        </div>
        <div className='w-[80%] h-[65%]  flex flex-col gap-2'>
          <div onClick={toggleHome} id='homebtn'  className='cursor-pointer items-center flex justify-between border-b-[0.5px] w-full min-h-[50px]  text-[19px] font-sans text-left pb-2 border-orange-900' style={{color:`${homebtncolor}`}}>
            Home  {homeVisible?<IoIosArrowUp className='text-orange-500' />: <FaAngleDown className='text-orange-500' />}  
          </div>
          <ul className={`w-full pl-6 ${homeVisible ? '' : 'hidden'}  gap-1 transition-all ease-in-out duration-500`}>
            <li className='w-full border-b-[0.5px] min-h-[35px]  flex items-center  text-slate-300 text-[15px] font-sans text-left pb-1 border-orange-900'>Home1</li>
            <li className='w-full border-b-[0.5px] min-h-[35px]  flex items-center  text-slate-300 text-[15px] font-sans text-left pb-1 border-orange-900'>Home1</li>
            <li className='w-full border-b-[0.5px] min-h-[35px]  flex items-center  text-slate-300 text-[15px] font-sans text-left pb-1 border-orange-900'>Home1</li>
          </ul>
          <button className='border-b-[0.5px] w-full min-h-[50px] text-white text-[19px] font-sans text-left pb-2 border-orange-900'>
            About
          </button>
          <div onClick={togglePage} className=' cursor-pointer flex justify-between items-center border-b-[0.5px] w-full min-h-[50px] text-white text-[19px] font-sans text-left pb-2 border-orange-900 ' style={{color:`${pagebtncolor}`}}>
            Pages  {pageVisible?<IoIosArrowUp className='text-orange-500' />: <FaAngleDown className='text-orange-500' />} 
          </div>
          <ul className={`w-full pl-6 ${pageVisible ? '' : 'hidden'} transition-all ease-out duration-500 gap-1`}>
            <li className='w-full border-b-[0.5px] min-h-[35px]  flex items-center  text-slate-300 text-[15px] font-sans text-left pb-1 border-orange-900'>Page1</li>
            <li className='w-full border-b-[0.5px] min-h-[35px]  flex items-center  text-slate-300 text-[15px] font-sans text-left pb-1 border-orange-900'>page2</li>
          </ul>
          <button className='border-b-[0.5px] w-full min-h-[50px] text-white text-[19px] font-sans text-left pb-2 border-orange-900' >Portfolio  </button>
          <button className='border-b-[0.5px] w-full min-h-[50px] text-white text-[19px] font-sans text-left pb-2 border-orange-900' >Contact  </button>
          <div className='w-full min-h-[50px] bg-orange-500 mt-[15%]  flex justify-center items-center text-white gap-1 rounded-xl'><TbLogout2 className='text-white text-[25px] ' /> Log out </div>
          <br />
        </div>
      </div>
      <div className='sm:w-[75%] w-[10%] h-screen pt-5 pl-1 transition-all ease-in-out duration-300'>
<div onClick={handleOrnage} className='w-[40px] min-h-[40px] bg-orange-500 flex justify-center items-center rounded-lg'> {iconsign ?<TiThMenu className='text-white text-[30px]'  />: <IoMdClose className='text-white text-[30px]' />}</div>
      </div>
    </div>
    




    
    <div className='w-full hidden h-screen sm:flex justify-start'>
      <div id='sidebar' className='w-[25%] transition-all  ease-out duration-500 min-h-screen bg-black overflow-y-scroll flex flex-col justify-start items-center' style={{marginLeft:`${leftmarginwin}`}}>
        
        <div className=' flex justify-center items-center w-full h-[30%]'>
          <div className='w-[130px] h-[130px] rounded-full flex justify-center items-center bg-white border-2 border-orange-500'>
          <div className='w-[120px]  h-[120px] rounded-full bg-center bg-no-repeat bg-cover' style={{backgroundImage:`url(${father})`}}></div></div>
        </div>
        <div className='w-[80%] h-[65%]  flex flex-col gap-2'>
          <div onClick={toggleHome} id='homebtn'  className='cursor-pointer items-center flex justify-between border-b-[0.5px] w-full min-h-[50px]  text-[19px] font-sans text-left pb-2 border-orange-900' style={{color:`${homebtncolor}`}}>
            Home  {homeVisible?<IoIosArrowUp className='text-orange-500' />: <FaAngleDown className='text-orange-500' />}  
          </div>
          <ul className={`w-full pl-6 ${homeVisible ? '' : 'hidden'}  gap-1 transition-all ease-in-out duration-500`}>
            <li className='w-full border-b-[0.5px] min-h-[35px]  flex items-center  text-slate-300 text-[15px] font-sans text-left pb-1 border-orange-900'>Home1</li>
            <li className='w-full border-b-[0.5px] min-h-[35px]  flex items-center  text-slate-300 text-[15px] font-sans text-left pb-1 border-orange-900'>Home1</li>
            <li className='w-full border-b-[0.5px] min-h-[35px]  flex items-center  text-slate-300 text-[15px] font-sans text-left pb-1 border-orange-900'>Home1</li>
          </ul>
          <button className='border-b-[0.5px] w-full min-h-[50px] text-white text-[19px] font-sans text-left pb-2 border-orange-900'>
            About
          </button>
          <div onClick={togglePage} className=' cursor-pointer flex justify-between items-center border-b-[0.5px] w-full min-h-[50px] text-white text-[19px] font-sans text-left pb-2 border-orange-900 ' style={{color:`${pagebtncolor}`}}>
            Pages  {pageVisible?<IoIosArrowUp className='text-orange-500' />: <FaAngleDown className='text-orange-500' />} 
          </div>
          <ul className={`w-full pl-6 ${pageVisible ? '' : 'hidden'} transition-all ease-out duration-500 gap-1`}>
            <li className='w-full border-b-[0.5px] min-h-[35px]  flex items-center  text-slate-300 text-[15px] font-sans text-left pb-1 border-orange-900'>Page1</li>
            <li className='w-full border-b-[0.5px] min-h-[35px]  flex items-center  text-slate-300 text-[15px] font-sans text-left pb-1 border-orange-900'>page2</li>
          </ul>
          <button className='border-b-[0.5px] w-full min-h-[50px] text-white text-[19px] font-sans text-left pb-2 border-orange-900' >Portfolio  </button>
          <button className='border-b-[0.5px] w-full min-h-[50px] text-white text-[19px] font-sans text-left pb-2 border-orange-900' >Contact  </button>
          <div className='w-full min-h-[50px] bg-orange-500 mt-[15%]  flex justify-center items-center text-white gap-1 rounded-xl'><TbLogout2 className='text-white text-[25px] ' /> Log out </div>
          <br />
        </div>
      </div>
      <div className='sm:w-[75%] w-[10%] h-screen pt-5 pl-1 transition-all ease-in-out duration-300'>
<div onClick={handleOrnagewin} className='w-[40px] min-h-[40px] bg-orange-500 flex justify-center items-center rounded-lg'> {iconsignwin ?<TiThMenu className='text-white text-[30px]'  />: <IoMdClose className='text-white text-[30px]' />}</div>
      </div>
    </div>
    </>






  );
}
