import React from 'react';
import Back from './back';
import fatherImage from '../images/father.jpg';
import motherImage from '../images/mother.jpg';
import sonImage from '../images/son.jpg';
import handImage from '../images/hand.jpg';
import daughterImage from '../images/daughter.jpg';
import babyImage from '../images/baby.jpg';
import interImage from '../images/inter.jpg';
import treeImage from '../images/tree.jpg';
import kingsmanImage from '../images/kingsman.jpg';
import pbImage from '../images/pb.jpg';
import gotImage from '../images/got.jpg';
import babImage from '../images/bab.jpg';
import mandelaImage from '../images/mandela.jpg';
import ronImage from '../images/ron.jpg';
import bbadImage from '../images/bbad.jpg';
import { CiCircleAlert } from "react-icons/ci";
const Imageview = () => {
    return (
        <>
        <div className='w-full h-[800px] bg-black  hidden md:flex  overflow-hidden'>
          
                <div className='absolute ml-4 mt-6 rotate-12 w-[20%] h-[40vh] bg-cover bg-center bg-no-repeat  border-[20px] border-white bg-red-800 ' style={{ backgroundImage: `url(${fatherImage})` }}></div>
                <div className='absolute ml-[20%] mt-0 -rotate-12 w-[20%] h-[40vh] bg-cover bg-center bg-no-repeat  border-[20px] border-white bg-red-800 ' style={{ backgroundImage: `url(${motherImage})` }}></div>
                <div className='absolute ml-[38%] mt-16 -rotate-[120deg] w-[20%] h-[40vh] bg-cover bg-center bg-no-repeat  border-[20px] border-white bg-red-800 ' style={{ backgroundImage: `url(${sonImage})` }}></div>
                <div className='z-10 absolute ml-[58%] mt-3 rotate-[20deg] w-[20%] h-[40vh] bg-cover bg-center bg-no-repeat  border-[20px] border-white bg-red-800 ' style={{ backgroundImage: `url(${handImage})` }}></div>
                <div className='absolute ml-[78%] mt-3 rotate-[40deg] w-[20%] h-[40vh] bg-cover bg-center bg-no-repeat  border-[20px] border-white bg-red-800 ' style={{ backgroundImage: `url(${daughterImage})` }}></div>
                <div className='absolute ml-[7%] mt-[13%] rotate-[40deg] w-[20%] h-[40vh] bg-cover bg-center bg-no-repeat  border-[20px] border-white bg-red-800 ' style={{ backgroundImage: `url(${babyImage})` }}></div>
                <div className='z-10 absolute ml-[27%] mt-[11%] -rotate-[10deg] w-[20%] h-[40vh] bg-cover bg-center bg-no-repeat  border-[20px] border-white bg-red-800 ' style={{ backgroundImage: `url(${interImage})` }}></div>
                <div className='absolute ml-[45%] mt-[12%] rotate-[10deg] w-[20%] h-[40vh] bg-cover bg-center bg-no-repeat  border-[20px] border-white bg-red-800 ' style={{ backgroundImage: `url(${treeImage})` }}></div>
                <div className='absolute ml-[63%] mt-[14%] rotate-[1deg] w-[20%] h-[40vh] bg-cover bg-center bg-no-repeat  border-[20px] border-white bg-red-800 ' style={{ backgroundImage: `url(${kingsmanImage})` }}></div>
                <div className='z-10 absolute ml-[80%] mt-[15%] -rotate-[50deg] w-[20%] h-[40vh] bg-cover bg-center bg-no-repeat  border-[20px] border-white bg-red-800 ' style={{ backgroundImage: `url(${pbImage})` }}></div>
                <div className='absolute ml-[0%] mt-[28%] -rotate-[25deg] w-[20%] h-[40vh] bg-cover bg-center bg-no-repeat  border-[20px] border-white bg-red-800 ' style={{ backgroundImage: `url(${gotImage})` }}></div>
                <div className='absolute ml-[20%] mt-[24%] rotate-[140deg] w-[20%] h-[40vh] bg-cover bg-center bg-no-repeat  border-[20px] border-white bg-red-800 ' style={{ backgroundImage: `url(${babImage})` }}></div>
                <div className='absolute ml-[38%] mt-[26%] rotate-[30deg] w-[20%] h-[40vh] bg-cover bg-center bg-no-repeat  border-[20px] border-white bg-red-800 ' style={{ backgroundImage: `url(${mandelaImage})` }}></div>
                <div className='absolute ml-[57%] mt-[25%] rotate-[100deg] w-[20%] h-[40vh] bg-cover bg-center bg-no-repeat  border-[20px] border-white bg-red-800 ' style={{ backgroundImage: `url(${ronImage})` }}></div>
                <div className='absolute ml-[80%] mt-[27%] -rotate-[50deg] w-[20%] h-[40vh] bg-cover bg-center bg-no-repeat  border-[20px] border-white bg-red-800 ' style={{ backgroundImage: `url(${bbadImage})` }}></div>
                <Back />
        </div>
        <div className='md:hidden flex w-full h-screen bg-slate-900 px-4  flex-col  justify-center items-center '>
        <Back />
        <CiCircleAlert className='text-orange-500 text-[100px]' />
            <p className='text-white text-[25px] text-center'> Use your computer to view this page</p>
            
           
        </div>
       
        </>
        
    );
}

export default Imageview;
