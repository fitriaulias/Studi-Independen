import React from 'react';

//Buka comment line dibawah untuk membuka Main (style)
// import Main from './typeofCSS/Main';

//Buka comment line dibawah untuk membuka FirstReactApp
import FirstReactApp from './bootstrap-manual/first-react-app';
//Buka dua comment line dibawah untuk menggunakan bootstrap npm
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <FirstReactApp />
      {/* <Main /> */}
    </>
  );
}

export default App;
