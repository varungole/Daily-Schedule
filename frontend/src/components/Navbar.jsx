import React from 'react'
import { useNavigate } from 'react-router-dom'

  function Navbar() {

    const navigate = useNavigate();

    const handleNavigate = (path) => {
      navigate(path);
    };

    return (
      <div className='navbar-main'>
        <nav>
              <ul className="navbar-items">
                  <li onClick={()=>handleNavigate('/')}>Home</li>
                  <li onClick={()=>handleNavigate('/finance')}>Finances</li>
                  <li onClick={()=>handleNavigate('/sleep')}>Sleep</li>
                  <li className='login' onClick={() => handleNavigate('/login')}>Login</li>
              </ul>
          </nav>
      </div>
    )
  }

  export default Navbar