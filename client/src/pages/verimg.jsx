import React from 'react'
import { useState } from 'react';
import fatherImage from '../images/father.jpg';
import pbImage from '../images/pb.jpg';
import kmanImage from '../images/kingsman.jpg';
import mandImage from '../images/mandela.jpg';
import Back from './back';
import { CiCircleAlert } from "react-icons/ci";
export default function Verimg() {
 
  
    const handletwo=()=>{
document.getElementById("twoimg").style.width='40%'
document.getElementById("oneimg").style.width='15%'
    }
    const handlethree=()=>{
        document.getElementById("threeimg").style.width='40%'
        document.getElementById("oneimg").style.width='15%'
            }
            const handlefour=()=>{
                document.getElementById("fourimg").style.width='40%'
                document.getElementById("oneimg").style.width='15%'
                    }

                    const handleouttwo=()=>{
                        document.getElementById("twoimg").style.width='15%'
                        document.getElementById("oneimg").style.width='40%'
                            }
                    const handleoutthree=()=>{
                        document.getElementById("threeimg").style.width='15%'
                        document.getElementById("oneimg").style.width='40%'
                            }
                    const handleoutfour=()=>{
                        document.getElementById("fourimg").style.width='15%'
                        document.getElementById("oneimg").style.width='40%'
                            }
     
  return (
    <>
    <Back />
    <div className=' hidden sm:flex  w-full h-screen  items-center gap-3 justify-center bg-black'>    
     <div  id='oneimg' className='w-[40%] border-[10px] border-white h-[90%] rounded-[50px] bg-center bg-no-repeat bg-cover transition-all ease-in-out duration-500  bg-red-800' style={{ backgroundImage: `url(${fatherImage})` }}></div>
     <div onMouseOver={handletwo} onMouseOut={handleouttwo}  id='twoimg'  className='border-[10px] border-white w-[15%] transition-all ease-in-out duration-500 h-[90%] rounded-[50px] bg-center bg-no-repeat bg-cover   bg-red-800' style={{ backgroundImage: `url(${pbImage})` }}></div>
     <div onMouseOver={handlethree} onMouseOut={handleoutthree} id='threeimg' className='border-[10px] border-white w-[15%] transition-all ease-in-out duration-500 h-[90%] rounded-[50px] bg-center bg-no-repeat bg-cover   bg-red-800' style={{ backgroundImage: `url(${kmanImage})` }}></div>
     <div onMouseOver={handlefour} onMouseOut={handleoutfour} id='fourimg' className='border-[10px] border-white w-[15%] transition-all ease-in-out duration-500 h-[90%] rounded-[50px] bg-center bg-no-repeat bg-cover   bg-red-800' style={{ backgroundImage: `url(${mandImage})` }}></div>
    
    </div>
    <div className='md:hidden flex w-full h-screen bg-slate-900 px-4  flex-col  justify-center items-center '>
        <Back />
        <CiCircleAlert className='text-orange-500 text-[100px]' />
            <p className='text-white text-[25px] text-center'> Use your computer to view this page</p>
            
           
        </div>    </>
  )
}
