import React, { useState } from 'react'
import Back from './back'
import { FaAngry } from "react-icons/fa";
import { FaSadTear } from "react-icons/fa";
import { FaSmileBeam } from "react-icons/fa";
import { FaFaceMeh } from "react-icons/fa6";
import { FaFaceGrinTongue } from "react-icons/fa6";
 function Human() {
    const [lefteyeheight, setletfeyeheight]=useState('100%')
    const [righteyeheight, setrighteyeheight]=useState('100%')
    const [lefteyetm, setletfeyetm]=useState('0px')
    const [righteyetm, setrighteyetm]=useState('0px')
    const [lefteyelash, setletfeyelash]=useState('0deg')
    const [righteyelash, setrighteyelash]=useState('0deg')
    const [theeth, settheeth]=useState('none')
    const [mouth, setmouth]=useState('70%')
    const [bord, setbord]=useState('#8d675c')
    const [toung, settoung]=useState('0px')
    const [mouthb, setmouthb]=useState('flex')

  const handletoung=()=>{
    settoung('70px')
    setmouthb('none')
    setletfeyelash('-5deg')
    setrighteyelash("5deg")
    setletfeyetm('0px')
    setrighteyetm('0px')
    setletfeyeheight('100%')
    setrighteyeheight('100%')
    settheeth('none')
    setmouth('70%')
    setbord('#8d675c')
    settoung('70px')
  

  }

    const handlesmile=()=>{
        settheeth('grid')
        setmouth('75%')
        setletfeyelash('-5deg')
        setrighteyelash("5deg")
        setletfeyetm('0px')
        setrighteyetm('0px')
        setletfeyeheight('100%')
        setrighteyeheight('100%')
        setbord('#774f44')
        settoung('0px')
        setmouthb('flex')
       
    }

  const handleAngry=()=>{
    setletfeyelash('12deg')
    setrighteyelash("-12deg")
    setletfeyetm('0px')
    setrighteyetm('0px')
    setletfeyeheight('100%')
    setrighteyeheight('100%')
    settheeth('none')
    setmouth('70%')
    setbord('#8d675c')
    settoung('0px')
    setmouthb('flex')


  }
  const handlesad=()=>{
    setletfeyetm('25px')
    setrighteyetm('25px')
    setletfeyeheight('10%')
    setrighteyeheight('10%')
    setletfeyelash('-12deg')
    setrighteyelash("12deg")
    settheeth('none')
    setmouth('70%')
    setbord('#8d675c')
    settoung('0px')
    setmouthb('flex')


}
  const handlenormal=()=>{
    setletfeyetm('0px')
    setrighteyetm('0px')
    setletfeyeheight('100%')
    setrighteyeheight('100%')
    setletfeyelash('0deg')
    setrighteyelash("0deg")
    settheeth('none')
    setmouth('70%')
    setbord('#8d675c')
    settoung('0px')
    setmouthb('flex')
 

}

  return (
    <div className='w-full h-screen '>
      
        <div className='absolute w-[20%] h-screen bg-neutral-900 p-3 flex justify-center items-center  '>
            <div className='w-full h-[60%] grid grid-rows-5 gap-2'>
            <div id='blink' onClick={handlenormal} className= ' flex justify-center items-center bg-slate-700 text-white gap-3 text-[20px] rounded-lg'><FaFaceMeh className='text-orange-500 text-[30px]' /> Normal</div>

            <div id='blink' onClick={handleAngry} className= ' flex justify-center items-center bg-slate-700 text-white gap-3 text-[20px] rounded-lg'><FaAngry className='text-orange-500 text-[30px]' /> Angry</div>
            <div id='blink' onClick={handlesmile} className= ' flex justify-center items-center bg-slate-700 text-white gap-3 text-[20px] rounded-lg'><FaSmileBeam className='text-orange-500 text-[30px]' /> Creepy</div>

            <div id='blink' onClick={handlesad} className= ' flex justify-center items-center bg-slate-700 text-white gap-3 text-[20px] rounded-lg'><FaSadTear className='text-orange-500 text-[30px]' /> Sad</div>
            <div id='blink' onClick={handletoung} className= ' flex justify-center items-center bg-slate-700 text-white gap-3 text-[20px] rounded-lg'><FaFaceGrinTongue className='text-orange-500 text-[30px]' /> Toung out</div>
          
            </div>

        </div>
        <Back />
         <div className="cont">
    <div className="earl">
        <div className="lear flex justify-start items-end " id="lte"> </div>
        <div className="lear" id="lbe"></div>
    </div>
        <div className="face">
            <div id="tophair"></div>
         <div id="midhair">
            <div></div>
            <div></div>
         </div>
        <div id="bothair">
            <div id="left"></div>
            <div id="right"></div>
        </div>
        <div className="eyelash">
            <div id="lashleft" style={{transform:`rotate(${lefteyelash})`}}></div>
            <div id="lashright" style={{ transform: `rotate(${righteyelash})` }}></div>
        </div>
        <div className="eyes">
            <div className='absolute  flex justify-center items-center  mt-[-2%] w-[30%] h-[120px]'>
            <div className='w-[5%] h-[3px] bg-black'></div>
                <div className=' w-[40%] h-[90%] rounded-full   border-[3px] border-black'></div>
                <div className='w-[9%] h-[3px] bg-black'></div>
                <div className=' w-[40%] h-[90%] rounded-full   border-[3px] border-black'></div>
                <div className='w-[5%] h-[3px] bg-black'></div>
            </div>
            <div id="eyeleft" style={{marginTop:`${lefteyetm}` , height:`${lefteyeheight}`}}  >
                <div id="ball" >

                </div>
            </div>
            <div id="eyeright"  style={{marginTop:`${righteyetm}`, height:`${righteyeheight}`}} >
                <div id="ball"></div>
            </div>
        </div>
        <div className="nosecont">
            <div className="nose">
                <div className="nosetop">
                    <div id="ntl">
                        
                    </div>
                    <div id="ntr"></div>
                    
                </div>
                <div className="nosebot">
                    <div id="llll"></div>
                    <div id="rrrr"></div>
                </div>
            </div>
        </div>

        <div className="mouthcont   ">
            <div className='w-[50%] h-full flex justify-center rounded-[400px] border-l-[2px] border-r-[2px]   items-center flex-col  ' style={{borderLeft:`2px  solid ${bord}`,borderRight:`2px  solid ${bord}`}}>
                <div className='w-[80%] h-[20px] flex justify-between items-center'>
                    <div className='w-[48%] h-full bg-black rounded-br-[10px] rotate-[-12deg] rounded-tl-[100%]'></div> 
                    <div className='w-[48%] h-full bg-black rounded-bl-[10px] rotate-[12deg] rounded-tr-[100%]'></div> 
                </div>
            <div className="mouth " style={{width:`${mouth}`}} >
                <div className="moutht">
                    <div id="tlt"></div>
                    <div id="trt"></div>
                </div>
                <div className=' hidden W-full transition-all ease-in-out duration-500 h-[15px] bg-[#8d675c]  grid-cols-6 gap-[1px] ' style={{display:`${theeth}`}}>
                    <div className='bg-white h-[50%] rounded-b-md rounded-bl-[500px]'></div>
                    <div className='bg-white  h-[80%]  z-10 rounded-b-md'></div>
                    <div className='bg-white h-[110%] rounded-b-md z-10'></div>
                    <div className='bg-white h-[110%] rounded-b-md z-10'></div>
                    <div className='bg-white  h-[80%]  z-10 rounded-b-md'></div>
                    <div className='bg-white  h-[50%]  rounded-b-md rounded-br-[500px]'></div>
                </div>
                <div className=' w-full h-[0px] flex justify-center transition-all ease-in-out duration-300 ' style={{height:`${toung}`}}>
                    <div className=' w-[90%] h-full rounded-b-full bg-gradient-to-b from-[#d77e8b] to-[#d0686b]' ></div>

                </div>
                <div className="mouthb " style={{display:`${mouthb}`}}>
                    <div id="tlb"></div>
                    <div id="trb"></div>
                </div>
            </div>
        </div>
        </div>

        <div className="beardcont">
             <div className="beard"></div>
        </div>
        </div>

        <div className="earr">
            <div className="rear" id="rte"></div>
        <div className="rear" id="rbe"></div>
        </div>
    </div>
    
    </div>

  )
}

export default Human