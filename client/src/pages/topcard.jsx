import React from 'react'
import tokyo from '../images/tokyo.jpg'
import newyork from '../images/newyork.jpg'
import sheger from '../images/addisabeba.jpg'
import man1 from '../images/madiba.jpg'
import man2 from '../images/man2.webp'
import man3 from '../images/man3.webp'
import south from '../images/southafr.jpg'
import fergi from '../images/fergi.jpg'
import manun from '../images/manunited.webp'
import elon from '../images/elon.jpg'
import spacex from '../images/sapcex.jfif'
import Back from './back'

function Shadowcard() {
  return (
    <>
    <Back />
    <div className='w-full h-screen bg-slate-800 flex justify-center items-center'>
        <div className='w-[60%] h-[65%]  grid gap-4 grid-cols-3'>
            <div className='bg-white  shadow-lg  flex  overflow-hidden flex-col'>
                <div className='w-full h-[40%]  bg-cover bg-no-repeat bg-center ' style={{backgroundImage:`url(${south})`}}></div>
                <div className='w-full h-[60%] bg-neutral-900 gap-1  p-3  flex flex-col   justify-start pt-5'>
                  <div className='w-[80px] mt-[-30%] min-h-[80px] bg-center bg-cover  bg-no-repeat rounded-full   border-[2px] border-blue-500' style={{backgroundImage:`url(${man1})`}}></div>
<h1 className=' text-white text-[25px] '>
Nelson Mandela</h1>
<p className='text-[13px] text-blue-500'>Freedom Fighter</p>
<p className='text-[14px] text-slate-300 text-left font-mono h-[30%] overflow-hidden  '>Nelson Mandela,
 Anti-apartheid leader, advocate for justice and equality.</p>
<div className=' mt-3 flex justify-between  gap-2'>
  <button className= 'border-2 border-blue-500 text-blue-500 bg-neutral-900  py-1  text-[17px] w-[45%]'>Follow</button>
  <button className= 'border-2  text-white bg-neutral-900  py-1  text-[14px] w-[45%]'>MORE INFO</button>
  </div>


                </div>

            </div>
            <div className='bg-white  shadow-lg  flex  overflow-hidden flex-col'>
                <div className='w-full h-[40%]  bg-cover bg-no-repeat bg-center ' style={{backgroundImage:`url(${manun})`}}></div>
                <div className='w-full h-[60%] bg-neutral-900 gap-1  p-3  flex flex-col   justify-start pt-5'>
                  <div className='w-[80px] mt-[-30%] min-h-[80px] bg-center bg-cover  bg-no-repeat rounded-full   border-[2px] border-red-500' style={{backgroundImage:`url(${fergi})`}}></div>
<h1 className=' text-white text-[25px] '>Sir Alex Ferguson</h1>
<p className='text-[13px] text-red-500'>Football Manager</p>
<p className='text-[14px] text-slate-300 text-left h-[30%] overflow-hidden font-mono'> Legendary football manager, led Manchester United to unparalleled success.





</p>
<div className=' mt-3 flex justify-between  gap-2'>
  <button className= 'border-2 border-red-500 text-red-500 bg-neutral-900  py-1  text-[17px] w-[45%]'>Follow</button>
  <button className= 'border-2  text-white bg-neutral-900  py-1  text-[14px] w-[45%]'>MORE INFO</button>
  </div>


                </div>

            </div>


          
            <div className='bg-white  shadow-lg  flex  overflow-hidden flex-col'>
                <div className='w-full h-[40%]  bg-cover bg-no-repeat bg-center ' style={{backgroundImage:`url(${spacex})`}}></div>
                <div className='w-full h-[60%] bg-neutral-900 gap-1  p-3  flex flex-col   justify-start pt-5'>
                  <div className='w-[80px] mt-[-30%] min-h-[80px] bg-center bg-cover  bg-no-repeat rounded-full border-[2px] border-green-500 ' style={{backgroundImage:`url(${elon})`}}></div>
<h1 className=' text-white text-[25px] '> Elon Musk </h1>
<p className='text-[13px] text-green-500'>Businessman</p>
<p className='text-[14px] text-slate-300 text-left h-[30%] overflow-hidden font-mono'>revolutionizing space travel, electric vehicles, and renewable energy.  </p>
<div className=' mt-3 flex justify-between  gap-2'>
  <button className= 'border-2 border-green-500 text-green-500 bg-neutral-900  py-1  text-[17px] w-[45%]'>Follow</button>
  <button className= 'border-2  text-white bg-neutral-900  py-1  text-[14px] w-[45%]'>MORE INFO</button>
  </div>


                </div>

            </div>
        </div>
    </div></>
  )
}

export default Shadowcard