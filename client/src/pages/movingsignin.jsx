import React, { useState } from 'react';

const Movingsignin = () => {
    const [marginLeft, setMarginLeft] = useState('0px');
    const [marginRight, setMarginRight] = useState('25%');
    const [leftslider, setsleftlidder]=useState(true)
    const [rightslider, setsrightlidder]=useState(false)

    const moveLeft = () => {
        setMarginLeft('0%');
// document.getElementById('onee').style.transition='500s'
        setsleftlidder(true);
        setsrightlidder(false)

    }

    const moveRight = () => {
        setMarginLeft('25%');
        // document.getElementById('twoo').style.transition='500s'
        setsleftlidder(false);
        setsrightlidder(true)


    }

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div id='jskdfh' className='w-[50%] h-[75%] transition-all ease-in-out duration-500  shadow-lg flex  shadow-gray-700'>
                <div id='sign' className='min-w-[50%] transition-all ease-in-out duration-500  h-full'></div>
                <div id='log' className='min-w-[50%] h-full'></div>
              

                 { 
                  leftslider && (
                    <div id='onee' style={{ marginLeft, marginRight }} className='gap-4 transition-all flex flex-col justify-center items-center ease-in-out duration-300 absolute w-[25%] h-[75%] bg-gradient-to-r from-red-500 to-pink-600'>
                         <h1 className='text-[30px] text-white font-bold'>Welcome Back</h1>
                         <p className='text-white'>Enter your personal detail to login</p>
     
                         <button  className=' w-[130px] h-[40px] text-white text-[20px] rounded-3xl border-2 border-white' onClick={moveRight}>Sign up</button> </div>
                 ) } 
                 { 
                  rightslider && (
                    <div id='twoo' style={{ marginLeft, marginRight }} className='gap-4 transition-all flex flex-col justify-center items-center ease-in-out duration-300 absolute w-[25%] h-[75%] bg-gradient-to-r from-red-500 to-pink-600'>
                         <h1 className='text-[30px] text-white font-bold'>Hello. Friend</h1>
                         <p className='text-white'>Enter your detail to log in</p>
     
     
                         <button className='w-[130px] h-[40px] text-white text-[20px] rounded-3xl border-2 border-white' onClick={moveLeft} >Sign in</button>
                         </div>
                 ) } 
               
            </div>
        </div>
    );
}

export default Movingsignin;
