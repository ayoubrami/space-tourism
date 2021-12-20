import './App.css';
import Home from './pages';
import Destination from './pages/destination';
import Crew from './pages/crew';
import Technology from './pages/technology';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/destination' element={<Destination/>}/>
          <Route path='/crew' element={<Crew/>}/>
          <Route path='/technology' element={<Technology/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
