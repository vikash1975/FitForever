import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/home/About';
import Programs from './components/home/Programs';
import Navbar from './components/home/Navbar';
import Pricing from './components/home/Pricing';
import Registration from './pages/Registration';
import CustomCursor from './components/common/CustomCursor';
import Login from './pages/Login';
import Contact from './pages/Contact';
import AboutPrograms from './programs/AboutPrograms';
import Trainers from './trainers/Trainers';

const App = () => {
  return (
    <>
    <CustomCursor />
      
         {/* <Navbar /> */}
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/programs' element={<Programs />} />
          <Route path='/pricing' element={<Pricing />}  />
          <Route path='/register' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/program' element={<AboutPrograms />} />
          <Route path='/trainers' element={<Trainers />} />
         </Routes>
      
      
    </>
  )
}

export default App;