import Sankelogin from './pages/sankelogin';
import Glowlogin from './pages/glowlogin';
import Sidebarblue from './pages/sidebarblue';
import Imageview from './pages/imageview';
import Verimg from './pages/verimg';
import Greensidebar from './pages/greensidebar';
import Purplelogin from './pages/purplelogin';
import Movingsignin from './pages/movingsignin';
import Rotatingsignin from './pages/rotatingsignin';
import Switchlogin from './pages/switchlogin';
import Purplesidebar from './pages/purplesidebar';
import Bluecard from './pages/bluecard';
import Blacksidebar from './pages/blacksidebar';
import Integratedsidebar from './pages/integratedsidebar';
import Inandout from './pages/inandout';
import Holecard from './pages/holecard';
import Codecards from './pages/codecards';
import Cornorcard from './pages/cornorcard';
import Shadowcard from './pages/shadowcard';
import Topcard from './pages/topcard';
import Human from './pages/human';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import './App.css';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         
          <Route path="/login2" element={<Sankelogin />} />
          <Route path="/login4" element={<Glowlogin />} />
          <Route path="/sidebar1" element={<Sidebarblue />} />
          <Route path="/imageview1" element={<Imageview />} />
          <Route path="/imageview2" element={<Verimg />} />
          <Route path="/sidebar2" element={<Greensidebar />} />
          <Route path="/login3" element={<Purplelogin />} />
          <Route path="/login1" element={<Movingsignin />} />
          <Route path="/login6" element={<Rotatingsignin />} />

          <Route path="/login5" element={<Switchlogin />} />
          <Route path="/sidebar3" element={<Purplesidebar />} />
          <Route path="/card1" element={<Bluecard />} />
          <Route path="/sidebar4" element={<Blacksidebar />} />
          <Route path="/sidebar5" element={<Integratedsidebar />} />
          <Route path="/sidebar6" element={<Inandout />} />
          <Route path="/card2" element={<Holecard />} />
          <Route path="/card3" element={<Codecards />} />
          <Route path="/card4" element={<Cornorcard />} />
          <Route path="/card5" element={<Shadowcard />} />
          <Route path="/card6" element={<Topcard />} />
          <Route path="/human" element={<Human />} />
       
      </Routes>
    </BrowserRouter>
  );

}