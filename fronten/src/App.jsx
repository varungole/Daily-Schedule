import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './constants/router'
import Navbar from './components/Navbar';


function App() {

  return (
    <div className='App'>
     <Navbar />
     <RouterProvider router={router} />
    </div>

  );
}

export default App
