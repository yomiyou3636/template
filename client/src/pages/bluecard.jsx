import React from 'react';
import father from '../images/father.jpg'
import Back from './back';
const Bluecard = () => {
    return (<>        <Back />
        <div className='w-full h-screen bg-slate-200 flex justify-center items-center'>
    
            <div className='w-[70%]  h-[60%]  grid grid-cols-3 gap-5 '>
<div className='rounded-[20px] overflow-hidden bg-white gird gird-rows-2  '>
    <div className='bg-[#3b82f6] h-[50%] rounded-[20px] flex justify-center items-center p-3 w-full '>
<div className='h-[80%] bg-white rounded-full w-[48%] flex justify-center items-center'>
<div className='h-[94%] bg-[#3b82f6] flex justify-center items-center rounded-full w-[94%]'>
<div className='h-[94%] bg-white rounded-full w-[94%] bg-cover bg-center bg-no-repeat  ' style={{backgroundImage:`url(${father})`}}></div>
</div>
</div>
    </div>
    <div className='bg-white   h-[50%] w-full p-3 flex flex-col justify-start items-center'>
       <div className='w-full flex justify-center items-center flex-col'><p className='text-[18px] '>John Moss</p>
        <p className='text-center'> consectetur dicta voluptatibus quo aperiam placeat, neacessitatibus nam, ad iusto, quibusdam deserunt cumque corrupti non ullam.</p></div> 
        <button className='bg-[#3b82f6] text-white rounded-lg p-2 mt-[5px] '>View more</button>
    </div>
    
</div>
<div className='rounded-[20px] overflow-hidden bg-white gird gird-rows-2 '>
    <div className='bg-[#3b82f6] h-[50%] rounded-[20px] flex justify-center items-center p-3 w-full'>
<div className='h-[80%] bg-white rounded-full w-[48%] flex justify-center items-center'>
<div className='h-[94%] bg-[#3b82f6] flex justify-center items-center rounded-full w-[94%]'>
<div className='h-[94%] bg-white rounded-full w-[94%] bg-cover bg-center bg-no-repeat  ' style={{backgroundImage:`url(${father})`}}></div>
</div>
</div>
    </div>
    <div className='bg-white   h-[50%] w-full p-3 flex flex-col justify-start items-center'>
       <div className='w-full flex justify-center items-center flex-col'><p className='text-[18px] '>John Moss</p>
        <p className='text-center'> consectetur dicta voluptatibus quo aperiam placeat, neacessitatibus nam, ad iusto, quibusdam deserunt cumque corrupti non ullam.</p></div> 
        <button className='bg-[#3b82f6] text-white rounded-lg p-2 mt-[5px] '>View more</button>
    </div>
    
</div>

<div className='rounded-[20px] overflow-hidden bg-white gird gird-rows-2 '>
    <div className='bg-[#3b82f6] h-[50%] rounded-[20px] flex justify-center items-center p-3 w-full'>
<div className='h-[80%] bg-white rounded-full w-[48%] flex justify-center items-center'>
<div className='h-[94%] bg-[#3b82f6] flex justify-center items-center rounded-full w-[94%]'>
<div className='h-[94%] bg-white rounded-full w-[94%] bg-cover bg-center bg-no-repeat  ' style={{backgroundImage:`url(${father})`}}></div>
</div>
</div>
    </div>
    <div className='bg-white   h-[50%] w-full p-3 flex flex-col justify-start items-center'>
       <div className='w-full flex justify-center items-center flex-col'><p className='text-[18px] '>John Moss</p>
        <p className='text-center'> consectetur dicta voluptatibus quo aperiam placeat, neacessitatibus nam, ad iusto, quibusdam deserunt cumque corrupti non ullam.</p></div> 
        <button className='bg-[#3b82f6] text-white rounded-lg p-2 mt-[5px] '>View more</button>
    </div>
    
</div>



            </div>
            
        </div></>
    );
}

export default Bluecard;
