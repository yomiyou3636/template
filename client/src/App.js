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
         
          <Route path="/snakelogin" element={<Sankelogin />} />
          <Route path="/glowlogin" element={<Glowlogin />} />
          <Route path="/bluesidebar" element={<Sidebarblue />} />
          <Route path="/imageview" element={<Imageview />} />
          <Route path="/verimg" element={<Verimg />} />
          <Route path="/greensidebar" element={<Greensidebar />} />
          <Route path="/purplelogin" element={<Purplelogin />} />
          <Route path="/movingsignin" element={<Movingsignin />} />
          <Route path="/rotatingsignin" element={<Rotatingsignin />} />
          <Route path="/rotatingsignin" element={<Rotatingsignin />} />
          <Route path="/switchlogin" element={<Switchlogin />} />
          <Route path="/purplesidebar" element={<Purplesidebar />} />
          <Route path="/bluecard" element={<Bluecard />} />
          <Route path="/blacksidebar" element={<Blacksidebar />} />
          <Route path="/integratedsidebar" element={<Integratedsidebar />} />
          <Route path="/inandout" element={<Inandout />} />
          <Route path="/holecard" element={<Holecard />} />
          <Route path="/codecards" element={<Codecards />} />
          <Route path="/cornorcard" element={<Cornorcard />} />
          <Route path="/shadowcard" element={<Shadowcard />} />
          <Route path="/topcard" element={<Topcard />} />
          <Route path="/human" element={<Human />} />
       
      </Routes>
    </BrowserRouter>
  );

}