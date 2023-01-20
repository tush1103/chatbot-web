import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
