import './App.css';
import Clock from './components/clock';
import Halu from './components/halu';
import TodoFunction from './components/todoFunction';
import ErrorBoundary from './components/errorBoundary'

function App() {
  return (
    <>
      <div className='App'>
        <Clock />
        <hr />
        <ErrorBoundary>
        <Halu />
        <hr />
        <TodoFunction />
      </ErrorBoundary>
      </div>
    </>
  );
}

export default App;
