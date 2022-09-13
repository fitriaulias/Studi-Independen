//Penggunaan functional component
import Counter from "./latihan/Counter";

function Header() {
  return (
    <header className='header'>
      <h1>My First React App</h1>
    </header>
  )
}

function Content() {
  return (
  <div className='content'>
    <p>
      Silahkan isikan dengan paragraf yang kamu kehendaki
    </p>
  </div>
  )
}

function Footer() {
  return (
    <div className='footer'>
      <p>&copy; Myself - 2022</p>
    </div>
  )
}

function App() {
  return (
    <div className='container'>
      <Header />
      <hr />
      <Content />
      <Counter />
      <hr />
      <br />
      <Footer />
    </div>
  );
}

export default App;
