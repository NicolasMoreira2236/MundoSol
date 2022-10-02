import React from 'react'
import logo from '../logoestetica.png'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'  


const Navbar = () => {
    return (
        <nav className="navbar sticky-top bg-dark d-flex justify-center align-items-center">
          
          <div className="container">
            <div className="col-lg-4">
            <img src={logo} alt="" width="40" className="d-inline-block mx-3"/>
            
            <Link className="navbar-brand text-white text-center  align-middle" to="/">
              Mundo Cosmetica
            </Link>
            </div>
            <ul className="navbar col-lg-3 text-white d-flex justify-content-around text-center">
              <li className="nav-item">
              <Link className="nav-link text-danger" to="/">INICO</Link>
              </li>
            <li className="nav-item">
            <Link className="nav-link text-danger" to="/categoria/facial">Facial </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-danger" to="/categoria/masajeador">Masajeador </Link>
            </li>
            <CartWidget />
            </ul>
          </div>
          
        </nav>
          
    )
  

    
}


export default Navbar;
