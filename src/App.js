import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"
import HomePage from "./pages/Home"
import Portfolio from "./pages/Portfolio";
import Kontak from "./pages/Kontak";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/kontak" element={<Kontak/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
