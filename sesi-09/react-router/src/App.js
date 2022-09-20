import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import AboutCompany from './pages/AboutCompany';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import Item from './pages/Item';
import Items from './pages/Items';
import Member from './pages/Member';
import Members from './pages/Members';


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
        <Route path='items' element={<Items />}>
          <Route path=':itemId' element={<Item />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
