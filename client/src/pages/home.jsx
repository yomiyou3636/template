import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineLogin} from 'react-icons/ai'
import {BsBox2} from 'react-icons/bs'
import {BsReverseLayoutTextSidebarReverse} from 'react-icons/bs'
import {BiArrowBack} from 'react-icons/bi'
import {BsImages} from 'react-icons/bs'
// import snakeloginimg from '../images/snake.png';
import glowimg from '../images/glow.png';
import bluesidebar1 from '../images/bluesidebar1.PNG'
import frameimg from '../images/frame.png';
import imgviewwide from '../images/imgviewwide.PNG';
import navgreen from '../images/navgreen.png';
import purplesign from '../images/purplesign.png';   
import movable from '../images/movable.PNG'; 
import pinksignin from '../images/pinksignin.png'  
import indigologin from '../images/indigologin.png'  
import bluetoplogin from '../images/bluetoplogin.PNG'  
import balcksidebar from '../images/balcksidebar.PNG'  
import interact from '../images/interact.PNG'  
import brownsidebar from '../images/brownsidebar.PNG'  
import colorscard from '../images/colorscard.PNG'  
import codecard from '../images/codecard.PNG'  
import cornorcard from '../images/cornorcard.PNG'  
import citybox from '../images/citycard.PNG'  
import topbox from '../images/topcard.PNG'  
import avtcard from '../images/avtcard.PNG'  
import human from '../images/human.PNG'  
import snakepic from '../images/snakelogin.png'  
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Home = () => {
  const [loginVisible, setLoginVisible] = useState(true);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [imageviewVisible, setImageviewVisible] = useState(false);
  const [infoboxVisible, setInfoboxVisible] = useState(false);
  const [content, setcontent] = useState('flex');
  const [sideleftmar, setsideleftmar] = useState('-90%');
  const [topbtn, settopbtm] = useState(true);

 
  
  const handlesidebar=()=>{
   if(content==='none'){
      setcontent('flex')
  
   }
   else{setcontent('none')
   
}

   if(sideleftmar==='-90%'){
      setsideleftmar('0%') 
      settopbtm(false)}
   else{
      setsideleftmar('-90%') 
   settopbtm(true)}
 
   
}
  const handleLogin = () => {
    setLoginVisible(true);
    setSidebarVisible(false);
    setImageviewVisible(false)
    setInfoboxVisible(false)
    setcontent('flex')
    setsideleftmar('-90%')
    settopbtm(true)
  }
  const handleSidebar = () => {
    setSidebarVisible(true);
    setLoginVisible(false);
    setImageviewVisible(false)
    setInfoboxVisible(false)
    setcontent('flex')
    setsideleftmar('-90%')
    settopbtm(true)
  }
  const handleImageview = () => {
    setSidebarVisible(false);
    setLoginVisible(false);
    setImageviewVisible(true)
    setInfoboxVisible(false)
    setcontent('flex')
    setsideleftmar('-90%')
    settopbtm(true)
  }
  const handleInfobox = () => {
    setSidebarVisible(false);
    setLoginVisible(false);
    setImageviewVisible(false)
    setInfoboxVisible(true)
    setcontent('flex')
    setsideleftmar('-90%')
    settopbtm(true)
  }
  

  return (
    <div  className='w-full sm:h-screen h-[260vh] bg-gray-900    flex overflow-hidden'>
      <button onClick={handlesidebar}  className='   fixed sm:hidden z-10  bg-orange-500 text-white text-[25px] mt-3 ml-[85vw] w-[35px] h-[35px] rounded-xl flex justify-center items-center'>{topbtn?<GiHamburgerMenu />:<IoClose />}</button>
      <div style={{marginLeft:`${sideleftmar}`}} className='pt-10 h-screen min-w-[90vw] fixed z-1  transition-all ease-in-out duration-500   sm:hidden bg-gray-950   justify-center items-center  pl-5 rounded-r-lg flex-col gap-2'>
      <Link to='https://yomiyou.onrender.com' className=' flex w-[90%] h-[55px] justify-start pl-8 items-center text-md gap-6 rounded-lg bg-gray-700 text-white '><BiArrowBack className='text-orange-400 text-xl' /> Finish Tour</Link>
       <hr className='w-[90%] border-[1px]  border-orange-400'/><br />
        <span className='text-white flex justify-center items-center w-[90%] mb-3 '>Components</span> 
        <div className='w-[90%] h-[70%]  grid grid-cols-1 gap-2 grid-rows-6'>

        
          <button onClick={handleLogin} className=' flex justify-start pl-8 items-center text-md gap-6 rounded-lg bg-gray-700 text-white '><AiOutlineLogin className='text-orange-400 text-xl' /> Login</button>
          <button onClick={handleSidebar} className=' flex justify-start pl-8 items-center text-md gap-6 rounded-lg bg-gray-700 text-white '><BsReverseLayoutTextSidebarReverse className='text-orange-400 text-xl'  /> Sidebar</button>
          <button onClick={handleInfobox} className=' flex justify-start pl-8 items-center text-md gap-6 rounded-lg bg-gray-700 text-white '><BsBox2 className='text-orange-400 text-xl' /> Card</button>

          <button onClick={handleImageview} className=' flex justify-start pl-8 items-center text-md gap-6 rounded-lg bg-gray-700 text-white '><BsImages className='text-orange-400 text-xl' /> Web Art</button>
         

               
        </div>
        
        
      </div>
      <div className='h-screen w-[20%] hidden sm:flex   bg-gray-950  justify-center items-start  pl-5 rounded-r-lg flex-col gap-2'>
      <Link to='https://yomiyou.onrender.com' className=' flex w-[90%] h-[55px] justify-start pl-8 items-center text-md gap-6 rounded-lg bg-gray-700 text-white '><BiArrowBack className='text-orange-400 text-xl' /> Finish Tour</Link>
       <hr className='w-[90%] border-[1px]  border-orange-400'/><br />
        <span className='text-white flex justify-center items-center w-[90%] mb-3 '>Components</span>
        <div className='w-[90%] h-[70%]  grid grid-cols-1 gap-2 grid-rows-6'>

        
          <button onClick={handleLogin} className=' flex justify-start pl-8 items-center text-md gap-6 rounded-lg bg-gray-700 text-white '><AiOutlineLogin className='text-orange-400 text-xl' /> Login</button>
          <button onClick={handleSidebar} className=' flex justify-start pl-8 items-center text-md gap-6 rounded-lg bg-gray-700 text-white '><BsReverseLayoutTextSidebarReverse className='text-orange-400 text-xl'  /> Sidebar</button>
          <button onClick={handleInfobox} className=' flex justify-start pl-8 items-center text-md gap-6 rounded-lg bg-gray-700 text-white '><BsBox2 className='text-orange-400 text-xl' /> Card</button>

          <button onClick={handleImageview} className=' flex justify-start pl-8 items-center text-md gap-6 rounded-lg bg-gray-700 text-white '><BsImages className='text-orange-400 text-xl' /> Web Art</button>
         

               
        </div>
        
        
      </div>

      <div style={{display:`${content}`}} className='  w-full flex sm:max-w-[0%] sm:z-[-100] h-full sm:h-screen  '>
        {loginVisible && (

         <div className='h-full w-full flex flex-col'>
         <div className=' fixed w-full h-[60px] flex justify-center font-bold items-end   text-white text-[30px] pb-2 bg-slate-900 '>LOG IN</div>
          <div id="login" className='w-full h-full ms:h-screen  grid-col-1 grid-rows-6 px-6  grid sm:grid-cols-3 sm:grid-rows-2 pt-3 mt-[60px] gap-5  py-8'>
            <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/movingsignin" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${movable})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>It's has a slider – when you hit the sign-in or sign-up button, it reveals the corresponding part of the page.</div>
           </div>  
           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/snakelogin" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${snakepic})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>It's a login page with a backdrop where each part changes color when you hover over it.</div>
           </div>  
           
           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/purplelogin" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${purplesign})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'> It reveals the sign-in page when pressing "Sign In" and the sign-up page by moving up and down.</div>
           </div>

           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/glowlogin" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${glowimg})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>This is a login page with a  three glowing  ringes that rotate  above the login form .</div>
           </div>  
           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/switchlogin" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bluetoplogin})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>A straightforward login page with a blue-tinted image on top and monospaced text.</div>
           </div>           
           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/rotatingsignin" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${pinksignin})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>A login page featuring a rotating pink-bordered section for a captivating touch.</div>
           </div>            
                      
                      
                   
          </div>
          
          </div> )}

{sidebarVisible && (
   
   <div className='h-full w-full flex flex-col'>
         <div className=' fixed w-full h-[60px] flex justify-center font-bold items-end  text-white text-[30px] pb-2 bg-slate-900 '>SIDEBAR</div>
          <div id="login" className='w-full h-full ms:h-screen  grid-col-1 grid-rows-6  grid sm:grid-cols-3 sm:grid-rows-2 pt-3 mt-[60px] gap-5 px-6 py-8'>
              <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/bluesidebar" className='w-full h-[70%] bg-cover bg-start bg-no-repeat' style={{ backgroundImage: `url(${bluesidebar1})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>A sidebar in blue expands its width on hover while altering button color to black on hover.</div>
              </div>
              <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/greensidebar" className='w-full h-[70%] bg-cover bg-start bg-no-repeat' style={{ backgroundImage: `url(${navgreen})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>A sidebar featuring a button that shifts right on click and forms a rounded green border around it.</div>
           </div>
              <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/purplesidebar" className='w-full h-[70%] bg-cover bg-start bg-no-repeat' style={{ backgroundImage: `url(${indigologin})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>

              A sidebar with an indigo touch widens on arrow button click and displays an indigo background on hover.</div>
           </div>
           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/blacksidebar" className='w-full h-[70%] bg-cover bg-start bg-no-repeat' style={{ backgroundImage: `url(${balcksidebar})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>
A black and orange sidebar holds nested buttons, a profile picture, and a menu button revealing the sidebar on click.</div>
           </div>
           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/Integratedsidebar" className='w-full h-[70%] bg-cover bg-start bg-no-repeat' style={{ backgroundImage: `url(${interact})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>A purple sidebar with subtly colored buttons that change their text color when clicked.</div>
           </div>
           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/inandout" className='w-full h-[70%] bg-cover bg-start bg-no-repeat' style={{ backgroundImage: `url(${brownsidebar})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>A simple white sidebar featuring brown buttons that expand in width when hovered or clicked.</div>
           </div>
          
          </div></div>
        )}

        {imageviewVisible && (
         
         <div className='h-full w-full flex flex-col'>
                <div className=' fixed w-full h-[60px] flex justify-center font-bold items-end  text-white text-[30px] pb-2 bg-slate-900 '>WEB ART</div>
          <div id="login" className='w-full h-full ms:h-screen  grid-col-1 grid-rows-6  grid sm:grid-cols-3 sm:grid-rows-2 pt-3 mt-[60px] gap-5 px-6  py-8'>
             <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/human" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${human})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>A human model with mustash built fully with html css and js that takes any order you give it . Have fun with it 

</div>
           </div>
              <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/imageview" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${frameimg})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>Images crafted in a captivating jigsaw arrangement, giving the impression of scrambled snapshots.</div>
           </div>
           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/verimg" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${imgviewwide})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>Multiple images in a frame that expand upon hovering.</div>
           </div>
          
           
          </div></div>
        )}

{infoboxVisible && (
   
   <div className='h-full w-full flex flex-col'>
         <div className=' fixed w-full h-[60px] flex justify-center font-bold items-end  text-white text-[30px] pb-2 bg-slate-900 '>CARD</div>
          <div id="login" className='w-full h-full ms:h-screen  grid-col-1 grid-rows-6  grid sm:grid-cols-3 sm:grid-rows-2 pt-3 mt-[60px] gap-5 px-6  py-8'>
              <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/bluecard" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${avtcard})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>A versatile web card to highlight movies, music, or theaters, presenting ratings and brief descriptions.</div>
           </div>
           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/holecard" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${colorscard})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>
A card featuring a subtle depression at the top, housing icons, and a gradient background for the remaining body.</div>
           </div>
           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/codecards" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${codecard})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>A two-part card with icons on top with a gradient background and a smooth curve at the bottom right corner.
</div>
           </div>
           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/cornorcard" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${cornorcard})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>
A card with sleek display of   icons  at the top corner  and   information  display below.
</div>
           </div>
           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/shadowcard" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${citybox})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>

              A dual-section card featuring an image on top and information below, casting a shadow to create a fading effect.</div>           </div>
           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/topcard" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${topbox})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>This is a login page with a multiple three glowing  ringes that rotate  around the login form .</div>
           </div>
           
           
           
          </div></div>
        )}
        
      </div>





{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */} 
{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */} 
{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */} 
{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */} 
{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */} 
{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */} 


      <div className='sm:flex hidden w-full h-full sm:h-screen sm:w-[80%]  '>
        {loginVisible && (
         
         <div className='h-full w-full flex flex-col'>
         <div className=' w-full h-[60px] flex justify-center font-bold items-end  text-white text-[30px] '>LOG IN</div>
          <div id="login" className='w-full h-full ms:h-screen  grid-col-1 grid-rows-6  grid sm:grid-cols-3 sm:grid-rows-2 gap-5 px-10 pt-3 pb-8'>
            <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/movingsignin" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${movable})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>It's has a slider – when you hit the sign-in or sign-up button, it reveals the corresponding part of the page</div>
           </div>    
            <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/snakelogin" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${snakepic})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>It's a login page with a backdrop where each part changes color when you hover over it.</div>
           </div>
           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/purplelogin" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${purplesign})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'> It reveals the sign-in page when pressing "Sign In" and the sign-up page by moving up and down.</div>
           </div>

           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/glowlogin" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${glowimg})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>This is a login page with a  three glowing  ringes that rotate  around the login form .</div>
           </div>  
           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/switchlogin" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bluetoplogin})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>A straightforward login page with a blue-tinted image on top and monospaced text.</div>
           </div>           
           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/rotatingsignin" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${pinksignin})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>A login page featuring a rotating pink-bordered section for a captivating touch.</div>
           </div>            
                      
                      
                   
          </div></div>
          
        )}

{sidebarVisible && (
   
   <div className='h-full w-full flex flex-col'>
   <div className=' w-full h-[60px] flex justify-center font-bold items-end  text-white text-[30px] '>SIDEBAR</div>
          <div id="login" className='w-full h-full ms:h-screen  grid grid-col-1 grid-rows-6   sm:grid-cols-3 sm:grid-rows-2 gap-5 px-10 pb-8 pt-3'>
              <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/bluesidebar" className='w-full h-[70%] bg-cover bg-start bg-no-repeat' style={{ backgroundImage: `url(${bluesidebar1})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>A sidebar in blue expands its width on hover while altering button color to black on hover.</div>
              </div>
              <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/greensidebar" className='w-full h-[70%] bg-cover bg-start bg-no-repeat' style={{ backgroundImage: `url(${navgreen})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>A sidebar featuring a buttons that shifts right on click and forms a rounded green border around it.</div>
           </div>
              <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/purplesidebar" className='w-full h-[70%] bg-cover bg-start bg-no-repeat' style={{ backgroundImage: `url(${indigologin})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>

              A sidebar with an indigo touch widens on arrow button click and displays an indigo background on hover.</div>
           </div>
           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/blacksidebar" className='w-full h-[70%] bg-cover bg-start bg-no-repeat' style={{ backgroundImage: `url(${balcksidebar})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>
A black and orange sidebar holds nested buttons, a profile picture, and a menu button revealing the sidebar on click.</div>
           </div>
           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/Integratedsidebar" className='w-full h-[70%] bg-cover bg-start bg-no-repeat' style={{ backgroundImage: `url(${interact})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>A purple sidebar with subtly colored buttons that change their text color when clicked.</div>
           </div>
           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/inandout" className='w-full h-[70%] bg-cover bg-start bg-no-repeat' style={{ backgroundImage: `url(${brownsidebar})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>A simple white sidebar featuring brown buttons that expand in width when hovered or clicked.</div>
           </div>
          
          </div></div>
        )}

        {imageviewVisible && (
         
         <div className='h-full w-full flex flex-col'>
         <div className=' w-full h-[60px] flex justify-center font-bold items-end  text-white text-[30px] '>WEB ART</div>
         
          <div id="login" className='w-full h-screen sm:h-full grid-col-1 grid-rows-6 gap-5  grid sm:grid-cols-3 sm:grid-rows-2 px-10 pt-3 pb-8'>
             <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/human" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${human})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>A human model with mustash built fully with html css and js that takes any order you give it . Have fun with it 

</div>
           </div>
              <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/imageview" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${frameimg})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>Images crafted in a captivating jigsaw arrangement, giving the impression of scrambled snapshots.</div>
           </div>
           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/verimg" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${imgviewwide})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>Multiple images in a frame that expand upon hovering.






</div>
           </div>
          
           
          </div></div>
        )}

{infoboxVisible && (
   
   <div className='h-full w-full flex flex-col'>
   <div className=' w-full h-[60px] flex justify-center font-bold items-end  text-white text-[30px] '>CARD</div>
          <div id="login" className='w-full h-full ms:h-screen  grid-col-1 grid-rows-6  grid sm:grid-cols-3 sm:grid-rows-2 gap-5 px-10 bt-3 pb-8'>
              <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/bluecard" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${avtcard})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>A versatile web card to highlight movies, music, or theaters, presenting ratings and brief descriptions.</div>
           </div>
           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/holecard" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${colorscard})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>
A card featuring a subtle depression at the top, housing icons, and a gradient background for the remaining body.</div>
           </div>
           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/codecards" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${codecard})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>A two-part card with icons on top with a gradient background and a smooth curve at the bottom right corner.
</div>
           </div>
           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/cornorcard" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${cornorcard})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>
A card with sleek display of   icons  at the top corner  and   information  display below.
</div>
           </div>
           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/shadowcard" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${citybox})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>

              A dual-section card featuring an image on top and information below, casting a shadow to create a fading effect.</div>
           </div>
           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/topcard" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${topbox})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>A card highlighting notable individuals and their life achievements, depicted with an image reflecting their accomplishments.</div>
           </div>
           
           
           
          </div></div>
        )}
        
      </div>


      
   
    </div>
  );
}

export default Home;
