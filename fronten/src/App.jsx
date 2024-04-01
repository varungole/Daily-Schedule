import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../src/components/Login'
import Navbar from '../src/components/Navbar'
import Home from './components/Home';
import Finance from './components/Finance';
import Sleep from './components/Sleep';

function App() {

  return (
    <div className='App'>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/' element={<Home />}></Route>
      <Route path='/finance' element={<Finance />}></Route>
      <Route path='/sleep' element={<Sleep />}></Route>
    </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App
