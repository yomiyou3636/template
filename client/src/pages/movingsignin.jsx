import React, { useState } from 'react';
import {BiLogoFacebook} from 'react-icons/bi'
import {BiLogoLinkedin} from 'react-icons/bi'
import {AiOutlineGooglePlus} from 'react-icons/ai'
import Back from './back';
const Movingsignin = () => {
    const [marginLeft, setMarginLeft] = useState('0px');
    const [marginRight, setMarginRight] = useState('25%');
    const [marginTop, setmarginTop] = useState('0dvh');
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
    const movebot=()=>{
        setmarginTop('45dvh')
        setsleftlidder(false);
        setsrightlidder(true)
    }
    const movetop=()=>{
        setmarginTop('0dvh')
        setsleftlidder(true);
        setsrightlidder(false)

    }


    return (<> <Back className='z-20' />
        <div className=' z-[5] w-full h-screen flex justify-center items-center'> 
            <div id='jskdfh' className='sm:w-[50%] w-[80%] sm:h-[75%]  h-[90dvh]  transition-all  ease-in-out duration-500  shadow-lg flex sm:flex-row flex-col  shadow-gray-700'>
                
                
            <div id='sign' className='sm:min-w-[50%]  w-full sm:h-full h-[50%] font-sans flex flex-col  items-center    '>
         <h1 className='text-black font-bold text-[40px] mb-5'>Sign up</h1>
         
     
         <div className='w-[80%] h-[60%]  grid gird-rows-4 gap-2 mt-2'>
            <input type="text" placeholder='Username' className='focus:outline-none pl-3 bg-slate-100 text-[17px] rounded-lg' />
            <input type="text" placeholder='Email' className='focus:outline-none pl-3 bg-slate-100 text-[17px] rounded-lg' />
            <input type="text" placeholder='Password' className='focus:outline-none pl-3 bg-slate-100 text-[17px] rounded-lg'/>
            
            <div className='flex justify-center items-center  '><button className='bg-gradient-to-r from-red-500 to-pink-700 w-[60%] sm:h-[70%]  h-full text-white rounded-lg'>SIGN UP</button></div>
            

         </div>
                </div>
                <div id='sign' className='sm:min-w-[50%]  w-full sm:h-full h-[50%]  font-sans flex flex-col items-center  pt-4 '>
         <h1 className='text-black font-bold text-[40px]'>Sign in</h1>
         <div className='w-full h-[40px]  flex justify-center items-center gap-4 text-[27px]'>
<BiLogoFacebook  className='border-[2px] p-[2px] border-slate-30000 rounded-full' /> <AiOutlineGooglePlus  className='border-[2px] p-[2px] border-slate-30000 rounded-full'/><BiLogoLinkedin  className='border-[2px] p-[2px] border-slate-30000 rounded-full' />
         </div>
         <p className=' sm:mt-6 mt-1 font-sans'>or use your account</p>
         <div className='w-[80%] sm:h-[60%] h-[45%]   grid gird-rows-4 gap-2 mt-2'>
            <input type="text" placeholder='Email' className='focus:outline-none pl-3 h bg-slate-100 text-[17px] rounded-lg' />
            <input type="text" placeholder='Password' className='focus:outline-none pl-3 bg-slate-100 text-[17px] rounded-lg'/>
            <p className=' justify-center items-center sm:flex hidden '>Forgot password ?</p> 
            <div className='flex justify-center items-center'><button className='bg-gradient-to-r from-red-500 to-pink-700 w-[60%] sm:h-[70%] h-full text-white rounded-lg'>SIGN IN</button></div>
            

         </div>
                </div>
              
                <div id='onee' style={{ marginLeft, marginRight }} className='sm:flex hidden gap-4 transition-all  flex-col justify-center items-center ease-in-out duration-300 absolute w-[25%]   h-[75%] bg-gradient-to-r from-red-500 to-pink-600'>

                 { 
                  leftslider && (<>
                         <h1 className='text-[30px] text-white font-bold'>Welcome Back</h1>
                         <p className='text-white'>Enter your personal detail to login</p>
     
                         <button  className=' w-[130px] h-[40px] text-white text-[20px] rounded-3xl border-2 border-white' onClick={moveRight}>Sign up</button> 
                         </> ) } 
                 { 
                  rightslider && (<>
                         <h1 className='text-[30px] text-white font-bold'>Hello, Friend</h1>
                         <p className='text-white'>Enter your detail to Sign up</p>
     
     
                         <button className='w-[130px] h-[40px] text-white text-[20px] rounded-3xl border-2 border-white' onClick={moveLeft} >Sign in</button>
                         
                         </> ) } 
               </div>
               <div id='onee' style={{marginTop:`${ marginTop}` }} className='gap-4 z-[10]  sm:hidden transition-all flex flex-col justify-center items-center ease-in-out duration-300 absolute  w-[80%]  h-[45dvh]  bg-gradient-to-r from-red-500 to-pink-600'>

                 { 
                  leftslider && (<>
                         <h1 className='text-[30px] text-white font-bold'>Welcome Back</h1>
                         <p className='text-white'>Enter your personal detail to login</p>
     
                         <button  className=' w-[130px] h-[40px] text-white text-[20px] rounded-3xl border-2 border-white' onClick={movebot}>Sign up</button> 
                         </> ) } 
                 { 
                  rightslider && (<>
                         <h1 className='text-[30px] text-white font-bold'>Hello, Friend</h1>
                         <p className='text-white'>Enter your detail to Sign up</p>
     
     
                         <button className='w-[130px] h-[40px] text-white text-[20px] rounded-3xl border-2 border-white' onClick={movetop} >Sign in</button>
                         
                         </> ) } 
               </div>
            </div>
        </div> </>
    );
}

export default Movingsignin;
