import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutCompany from './pages/AboutCompany';
import AboutMe from './pages/AboutMe';
import About from './pages/About';
import Item from './pages/Item';
import Items from './pages/Items';
import Member from './pages/Member';
import Members from './pages/Members';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';


function App() {
  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />}>
          <Route path='about-company' element={<AboutCompany />} />
          <Route path='about-me' element={<AboutMe />} />
        </Route>
        <Route path='/members' element={<Members />}>
          <Route path=':memberName' element={<Member />} />
        </Route>
        <Route path='items' element={
        <ProtectedRoute>
        <Items />
        </ProtectedRoute>}>
          <Route path=':itemId' element={<Item />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
