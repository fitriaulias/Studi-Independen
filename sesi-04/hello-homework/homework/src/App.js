import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Home from './pages/main/Home'
import CreateMeetup from './pages/create-meetup/createMeetup';
import Explore from './pages/explore/Explore';
import Login from './pages/login/Login';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navigation />
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/createMeetup" component={CreateMeetup} />
          <Route path="/Explore" component={Explore}  />
          <Route path="/Login" component={Login} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
