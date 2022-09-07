import { Switch, Route } from 'react-router-dom';
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
        <br />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create-meetup" component={CreateMeetup} />
          <Route exact path="/Explore" component={Explore}  />
          <Route exact path="/Login" component={Login} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
