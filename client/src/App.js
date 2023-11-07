import Sankelogin from './pages/sankelogin';
import Glowlogin from './pages/glowlogin';
import Sidebarblue from './pages/sidebarblue';
import Imageview from './pages/imageview';

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
       
      </Routes>
    </BrowserRouter>
  );

}