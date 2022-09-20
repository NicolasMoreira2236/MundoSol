import React from 'react'
import logo from '../logoestetica.png'
import CartWidget from './CartWidget'


const Navbar = () => {
    return (
        <nav className="navbar sticky-top bg-dark d-flex justify-center align-items-center">
          
          <div className="container">
            <div className="col-lg-4">
            <img src={logo} alt="" width="40" className="d-inline-block mx-3"/>
            
            <a className="navbar-brand text-white text-center  align-middle" href="!#">
              Mundo Cosmetica
            </a>
            </div>
            <ul className="navbar col-lg-3 text-white d-flex justify-content-around text-center">
              <li className="nav-item">
                <a className="nav-link text-danger" href="!#">Inicio</a>
              </li>
            <li className="nav-item">
                <a className="nav-link text-danger" href="!#">Productos</a>
            </li>
            <CartWidget />
            </ul>
          </div>
          
        </nav>
          
    )
  

    
}


export default Navbar;
