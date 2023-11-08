import Sankelogin from './pages/sankelogin';
import Glowlogin from './pages/glowlogin';
import Sidebarblue from './pages/sidebarblue';
import Imageview from './pages/imageview';
import Verimg from './pages/verimg';
import Greensidebar from './pages/greensidebar';
import Purplelogin from './pages/purplelogin';
import Movingsignin from './pages/movingsignin';

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
       
      </Routes>
    </BrowserRouter>
  );

}