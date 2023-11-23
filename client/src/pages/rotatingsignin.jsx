import React from 'react';
import Back from './back';
const Rotatingsignin = () => {
    return (
        <><Back />
        <div className='w-full h-[100%] bg-gray-900 flex justify-center items-center rounded-lg'>
            <div className=' overflow-hidden sm:w-[30%] w-[90%] h-[70%] rounded-lg bg-gray-950 flex justify-center items-center'>
                <div className='h-[1000px] w-[80%] rotating-div grid grid-rows-2'>
                <div className='bg-gradient-to-r from-gray-950 to-pink-600 '></div>
                    <div className='bg-gradient-to-r from-pink-600 to-gray-950 '></div>
                   
                    
                </div>
                <div className='absolute sm:h-[69vw] h-[69vh] sm:w-[29.5vw]  w-[89vw] bg-gray-900 rounded-lg gap-3 pt-4 px-8 grid grid-rows-5'>
                    <p className='text-2xl text-white font-sans flex justify-center ' >Sign In</p>
                    <div  >
                        <p className=' text-gray-100 '>Username</p>
                        <input type="text"  placeholder='' className=' focus:outline-none bg-gray-900 border-b-2 border-pink-600 pl-3 text-white w-[100%]' />
                    </div>
                    <div  >
                        <p className=' text-gray-100 '>Password</p>
                        <input type="password"  placeholder='' className='focus:outline-none bg-gray-900 border-b-2 border-pink-600 pl-3 text-white w-[100%]' />
                    </div>
                    <div className='flex justify-between items-center '>
                        <p className='  text-white'>forgot password</p>
                        <p className='text-pink-600 text-xl '>Sign up</p>
                    </div>
                    <button className='bg-pink-600 h-[40px] w-[45%] rounded-lg text-white font-sans text-xl '>SIGN IN</button>

                </div>
            </div>
        </div></>
    );
}

export default Rotatingsignin;
