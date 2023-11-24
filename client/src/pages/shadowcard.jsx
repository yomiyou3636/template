import React from 'react'
import tokyo from '../images/tokyo.jpg'
import newyork from '../images/newyork.jpg'
import sheger from '../images/addisabeba.jpg'
import Back from './back'
function Shadowcard() {
  return (
    <>
    <Back />
    <div className='w-full sm:h-screen h-[180vh] bg-slate-900 sm:py-0 py-5  flex justify-center items-center'>
        <div className='sm:w-[60%] sm:h-[65%] h-full w-[90%]   grid gap-4 grid-rows-3 sm:grid-rows-1 sm:grid-cols-3'>
            <div className='bg-white rounded-2xl shadow-lg shadow-black flex  overflow-hidden flex-col'>
                <div className='w-full h-[40%]  bg-cover bg-no-repeat bg-center ' style={{backgroundImage:`url(${tokyo})`}}></div>
                <div className='w-full h-[60%] bg-neutral-900 gap-2  p-3 shadow-[0px_0px_50px_30px_rgba(0,0,0)] flex flex-col items-center  justify-start pt-5'>
<h1 className=' text-pink-500 text-[25px] font-bold'>TOKYO</h1>
<p className= ' text-center h-[50%] overflow-hidden font-mono  text-[14px] text-slate-300 '>Tokyo, a bustling metropolis, blends tradition with innovation in its vibrant cityscape.





</p>
<button className='text-neutral-800 bg-pink-500 font-bold py-2 rounded-xl text-[20px] w-[60%]'>VISIT</button>

                </div>

            </div>
            <div className='bg-white rounded-2xl shadow-lg shadow-black flex overflow-hidden flex-col'>
                <div className='w-full h-[40%]  bg-cover bg-no-repeat bg-center ' style={{backgroundImage:`url(${sheger})`}}></div>
                <div className=' w-full h-[60%] bg-neutral-900 gap-2  p-3 shadow-[0px_0px_50px_30px_rgba(0,0,0)]  flex flex-col  justify-start items-center pt-5'>
<h1 className=' text-blue-500 text-[25px] font-bold '>ADDIS ABABA</h1>
<p className= '  text-center h-[50%] overflow-hidden font-mono text-[14px] text-slate-300 '>
Addis Ababa, Ethiopia's vibrant capital, showcases a blend of rich history and modernity amidst stunning landscapes.</p>
<button className='text-neutral-800 bg-blue-500 font-bold py-2 rounded-xl text-[20px] w-[60%]'>VISIT</button>
                </div>

            </div>
            <div className='bg-white rounded-2xl shadow-lg shadow-black flex overflow-hidden flex-col'>
                <div className='w-full h-[40%]  bg-cover bg-no-repeat bg-center ' style={{backgroundImage:`url(${newyork})`}}></div>
                <div className='w-full h-[60%] bg-neutral-900 gap-2  p-3 shadow-[0px_0px_50px_30px_rgba(0,0,0)]  flex flex-col items-center justify-start pt-5'>
<h1 className=' text-green-400 text-[25px] font-bold'>NEW YORK</h1>
<p className='  text-center h-[50%] overflow-hidden font-mono text-[14px] text-slate-300 '>New York City, a cultural melting pot, epitomizes diversity and ambition in a bustling urban setting.</p>
<button className='text-neutral-800 bg-green-400 font-bold py-2 rounded-xl text-[20px] w-[60%]'>VISIT</button>

                </div>

            </div>
        </div>
    </div></>
  )
}

export default Shadowcard