import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineLogin} from 'react-icons/ai'
import {BsBox2} from 'react-icons/bs'
import {BsReverseLayoutTextSidebarReverse} from 'react-icons/bs'
import {BiArrowBack} from 'react-icons/bi'
import {AiOutlineHome} from 'react-icons/ai'
import {BsImages} from 'react-icons/bs'
import snakeloginimg from '../images/snake.png';
import glowimg from '../images/glow.png';
import bluesideimg from '../images/bluesidebar.PNG';
import frameimg from '../images/frame.png';
import imgviewwide from '../images/imgviewwide.PNG';
import navgreen from '../images/navgreen.png';
import purplesign from '../images/purplesign.png';   
import movable from '../images/movable.PNG'; 
import pinksignin from '../images/pinksignin.png'  
import indigologin from '../images/indigologin.png'  
import bluecard from '../images/bluecard.png'  

const Home = () => {
  const [loginVisible, setLoginVisible] = useState(true);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [imageviewVisible, setImageviewVisible] = useState(false);
  const [infoboxVisible, setInfoboxVisible] = useState(false);

  const handleLogin = () => {
    setLoginVisible(true);
    setSidebarVisible(false);
    setImageviewVisible(false)
    setInfoboxVisible(false)
  }
  const handleSidebar = () => {
    setSidebarVisible(true);
    setLoginVisible(false);
    setImageviewVisible(false)
    setInfoboxVisible(false)
  }
  const handleImageview = () => {
    setSidebarVisible(false);
    setLoginVisible(false);
    setImageviewVisible(true)
    setInfoboxVisible(false)
  }
  const handleInfobox = () => {
    setSidebarVisible(false);
    setLoginVisible(false);
    setImageviewVisible(false)
    setInfoboxVisible(true)
  }

  return (
    <div className='w-full h-screen bg-gray-900  flex overflow-hidden'>
     
      <div className='h-screen w-[20%] bg-gray-950 flex justify-center items-start  pl-5 rounded-r-lg flex-col gap-2'>
      <Link to='https://yomiyou.onrender.com' className=' flex w-[90%] h-[55px] justify-start pl-8 items-center text-md gap-6 rounded-lg bg-gray-700 text-white '><BiArrowBack className='text-orange-400 text-xl' /> Finish Tour</Link>
       <hr className='w-[90%] border-[1px]  border-orange-400'/><br />
        <span className='text-white flex justify-center items-center w-[90%] mb-3 '>Components</span>
        <div className='w-[90%] h-[70%]  grid grid-cols-1 gap-2 grid-rows-6'>

        
          <button onClick={handleLogin} className=' flex justify-start pl-8 items-center text-md gap-6 rounded-lg bg-gray-700 text-white '><AiOutlineLogin className='text-orange-400 text-xl' /> Login</button>
          <button onClick={handleSidebar} className=' flex justify-start pl-8 items-center text-md gap-6 rounded-lg bg-gray-700 text-white '><BsReverseLayoutTextSidebarReverse className='text-orange-400 text-xl'  /> Sidebar</button>
          <button onClick={handleImageview} className=' flex justify-start pl-8 items-center text-md gap-6 rounded-lg bg-gray-700 text-white '><BsImages className='text-orange-400 text-xl' /> Image view</button>
          <button onClick={handleInfobox} className=' flex justify-start pl-8 items-center text-md gap-6 rounded-lg bg-gray-700 text-white '><BsBox2 className='text-orange-400 text-xl' /> Card</button>
         

               
        </div>
      </div>

      <div className='w-[80%] h-screen '>
        {loginVisible && (
          <div id="login" className='w-full h-screen  grid grid-cols-3 grid-rows-2 gap-5 px-10 py-8'>
            <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/movingsignin" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${movable})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>This is a login page with a multiple three glowing  ringes that rotate  around the login form .</div>
           </div>    
            <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/snakelogin" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${snakeloginimg})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>This is a login page with a background that have individual components that change color when hovered.</div>
           </div>
           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/purplelogin" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${purplesign})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>This is a login page with a multiple three glowing  ringes that rotate  around the login form .</div>
           </div>

           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/glowlogin" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${glowimg})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>This is a login page with a multiple three glowing  ringes that rotate  around the login form .</div>
           </div>            
           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/rotatingsignin" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${pinksignin})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>This is a login page with a multiple three glowing  ringes that rotate  around the login form .</div>
           </div>            
           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/switchlogin" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${pinksignin})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>This is a login page with a multiple three glowing  ringes that rotate  around the login form .</div>
           </div>            
                      
                   
          </div>
          
        )}

{sidebarVisible && (
          <div id="login" className='w-full h-screen  grid grid-cols-3 grid-rows-2 gap-5 px-10 py-8'>
              <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/bluesidebar" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bluesideimg})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>this is a cool sidebar that widens when hovered. Individual buttons also change color when hovered</div>
              </div>
              <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/greensidebar" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${navgreen})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>this is a cool sidebar that widens when hovered. Individual buttons also change color when hovered</div>
           </div>
              <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/purplesidebar" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${indigologin})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>this is a cool sidebar that widens when hovered. Individual buttons also change color when hovered</div>
           </div>
          
          </div>
        )}

        {imageviewVisible && (
          <div id="login" className='w-full h-screen  grid grid-cols-3 grid-rows-2 gap-5 px-10 py-8'>
              <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/imageview" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${frameimg})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>This is a way of displaying images in a way that look like scrammbled photos</div>
           </div>
           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/verimg" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${imgviewwide})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>This is a login page with a multiple three glowing  ringes that rotate  around the login form .</div>
           </div>
           
          </div>
        )}

{infoboxVisible && (
          <div id="login" className='w-full h-screen  grid grid-cols-3 grid-rows-2 gap-5 px-10 py-8'>
              <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/bluecard" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bluecard})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>This is a way of displaying images in a way that look like scrammbled photos</div>
           </div>
           <div className='border-8 border-gray-800 bg-red-700 flex flex-col '>
              <Link to="/verimg" className='w-full h-[70%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${frameimg})` }}></Link>
              <div className='w-full h-[30%] bg-slate-800 text-sm p-2 text-slate-200 text-wrap'>This is a login page with a multiple three glowing  ringes that rotate  around the login form .</div>
           </div>
           
          </div>
        )}
      </div>
      
    </div>
  );
}

export default Home;
