import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './constants/router'
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {

  return (
    <div className='App'>
      <Navbar />
     <RouterProvider router={router} />
     <Footer />
    </div>
  );
}

export default App
