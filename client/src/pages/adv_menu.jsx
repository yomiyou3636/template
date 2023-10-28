import React from 'react';
import {BsMoon} from 'react-icons/bs'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {AiOutlineClockCircle} from 'react-icons/ai'

const AdvMenu = () => {
    return (
        <div className='w-full h-screen bg-black flex justify-center items-center'>
            <div className='hover:p-2  w-[50px] bg-neutral-900 h-[50px] hover:w-[300px] hover:h-[300px] transition-all duration-500 grid grid-rows-3 gap-2'>

                <div className='w-full  bg-neutral-900  grid grid-cols-3 gap-2'>
                    <div className='h-full w-full rounded-[50%] bg-neutral-600 flex justify-center items-center'><BsMoon className='text-[50%] hover:green text-white '/></div>
                    <div className='h-full w-full rounded-[50%] bg-neutral-600'><BiMessageRoundedDots /></div>
                    <div className='h-full w-full rounded-[50%] bg-neutral-600'><AiOutlineClockCircle /></div>
                </div>
                <div className='w-full  bg-neutral-900  grid grid-cols-3 gap-2'>
                <div className='h-full w-full rounded-[50%] bg-neutral-600'></div>
                    <div className='h-full w-full rounded-[50%] bg-neutral-600'></div>
                    <div className='h-full w-full rounded-[50%] bg-neutral-600'></div>
                </div>
                <div className='w-full  bg-neutral-900  grid grid-cols-3 gap-2'>
                <div className='h-full w-full rounded-[50%] bg-neutral-600'></div>
                    <div className='h-full w-full rounded-[50%] bg-neutral-600'></div>
                    <div className='h-full w-full rounded-[50%] bg-neutral-600'></div>
                </div>
            </div>
        </div>
    );
}

export default AdvMenu;
