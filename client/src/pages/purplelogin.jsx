import React from 'react';
import Back from './back';
import purplebg from '../images/purlpe.jpg';

const Purplelogin = () => {
    const hendlesignup=()=>{
document.getElementById('login').style.marginTop='0'
document.getElementById('log').style.fontSize='20px'
document.getElementById('sign').style.fontSize='40px'

    }
    const hendlesignin=()=>{
        document.getElementById('login').style.marginTop='-80%'
        document.getElementById('sign').style.fontSize='20px'
        document.getElementById('log').style.fontSize='40px'

            }
    return (<><Back />
<div className='h-[100dvh] sm:h-screen w-full bg-gradient-to-t from-indigo-950 via-indigo-900  to-indigo-950 flex justify-center items-center'>
            <div  className=' overflow-hidden sm:w-[25%] sm:h-[75%] w-[90%] h-[50%]  rounded-lg bg-cover bg-no-repeat bg-center pt-[4%] flex flex-col justify-start items-center' style={{ backgroundImage: `url(${purplebg})` }} >

<h1 className='text-white text-[40px] font-sans font-bold cursor-pointer h-[15%]  transition-all duration-300 ease-in-out 'id='sign' onClick={hendlesignup}>Sign up</h1>
<div  className='w-[80%] min-h-[70%]  grid grid-rows-4 p-4 gap-3'>
    <input type="text" placeholder='Username' className='pl-3 text-gray-700 text-[17px] rounded-lg focus:outline-none'/>
    <input type="text" placeholder='Email' className='pl-3 text-gray-700 text-[17px] rounded-lg focus:outline-none'/>
    <input type="text" placeholder='Password' className='pl-3 text-gray-700 text-[17px] rounded-lg focus:outline-none'/>
    <button className='bg-indigo-900 rounded-lg text-white text-[17px]'>Sign up</button>
    
</div>
<div id='login' className=' pt-4 transition-all ease-in-out duration-500 w-full min-h-[80%] bg-white flex flex-col justify-start items-center rounded-t-[100px] '>
<h1 className='text-indigo-900 text-[20px] font-sans font-bold cursor-pointer transition-all duration-300 ease-in-out ' id='log' onClick={hendlesignin}>Sign In</h1>
<div className='w-[80%] h-[600px]  grid grid-rows-4 p-4 gap-3'>
    <input type="text" placeholder='Username' className='pl-3 text-black bg-indigo-50 text-[17px] rounded-lg focus:outline-none'/>
    <input type="text" placeholder='Password' className='pl-3 text-black bg-indigo-50 text-[17px] rounded-lg focus:outline-none'/>
    <button className='bg-indigo-900 rounded-lg text-white text-[17px]'>Log in</button>
    </div>
</div>
            </div> 
        </div></>
    );
}

export default Purplelogin;
