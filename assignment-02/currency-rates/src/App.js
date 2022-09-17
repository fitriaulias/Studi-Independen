// import { useState } from 'react';
import About from './components/about';
import Currency from './components/currency';
import Description from './components/description';


function App() {
  return (
    <div className='currencies'>
      <Currency />
      <br />
      <Description />
      <br />
      <About />
    </div>
    
  );
}

export default App;
