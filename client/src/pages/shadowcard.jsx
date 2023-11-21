import React from 'react'
import tokyo from '../images/tokyo.jpg'
import newyork from '../images/newyork.jpg'
import sheger from '../images/addisabeba.jpg'
import Back from './back'
function Shadowcard() {
  return (
    <>
    <Back />
    <div className='w-full h-screen bg-white flex justify-center items-center'>
        <div className='w-[60%] h-[65%]  grid gap-4 grid-cols-3'>
            <div className='bg-white rounded-2xl shadow-lg shadow-black flex  overflow-hidden flex-col'>
                <div className='w-full h-[40%]  bg-cover bg-no-repeat bg-center ' style={{backgroundImage:`url(${tokyo})`}}></div>
                <div className='w-full h-[60%] bg-neutral-900 gap-2  p-3 shadow-[0px_0px_50px_30px_rgba(0,0,0)] flex flex-col items-center  justify-start pt-5'>
<h1 className=' text-pink-500 text-[25px] font-bold'>Post One</h1>
<p className='text-[14px] text-slate-300 text-left'>Lorem ipsum antium, harum, magnam fuga ipsam nemo molestias voluptas labore consequuntur illum voluptatum quasi veniam pariatur eum temporibus ex dignissimos. Quis.</p>
<button className='text-neutral-800 bg-pink-500 font-bold py-2 rounded-xl text-[20px] w-[60%]'>VISIT</button>

                </div>

            </div>
            <div className='bg-white rounded-2xl shadow-lg shadow-black flex overflow-hidden flex-col'>
                <div className='w-full h-[40%]  bg-cover bg-no-repeat bg-center ' style={{backgroundImage:`url(${sheger})`}}></div>
                <div className=' w-full h-[60%] bg-neutral-900 gap-2  p-3 shadow-[0px_0px_50px_30px_rgba(0,0,0)]  flex flex-col  justify-start items-center pt-5'>
<h1 className=' text-pink-500 text-[25px] font-bold '>Post Two</h1>
<p className='text-[14px] text-slate-300 text-left'>Lorem ipsum antium, harum, magnam fuga ipsam nemo molestias voluptas labore consequuntur illum voluptatum quasi veniam pariatur eum temporibus ex dignissimos. Quis.</p>
<button className='text-neutral-800 bg-pink-500 font-bold py-2 rounded-xl text-[20px] w-[60%]'>VISIT</button>
                </div>

            </div>
            <div className='bg-white rounded-2xl shadow-lg shadow-black flex overflow-hidden flex-col'>
                <div className='w-full h-[40%]  bg-cover bg-no-repeat bg-center ' style={{backgroundImage:`url(${newyork})`}}></div>
                <div className='w-full h-[60%] bg-neutral-900 gap-2  p-3 shadow-[0px_0px_50px_30px_rgba(0,0,0)]  flex flex-col items-center justify-start pt-5'>
<h1 className=' text-pink-500 text-[25px] font-bold'>Post Three</h1>
<p className='text-[14px] text-slate-300 text-left'>Lorem ipsum antium, harum, magnam fuga ipsam nemo molestias voluptas labore consequuntur illum voluptatum quasi veniam pariatur eum temporibus ex dignissimos. Quis.</p>
<button className='text-neutral-800 bg-pink-500 font-bold py-2 rounded-xl text-[20px] w-[60%]'>VISIT</button>

                </div>

            </div>
        </div>
    </div></>
  )
}

export default Shadowcard