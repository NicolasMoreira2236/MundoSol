
import logo from '../logoestetica.png'
import CartWidget from './CartWidget'

const Navbar = () => {
    return (
        <nav class="navbar sticky-top bg-dark d-flex justify-center align-items-center">
          <div class="container col-lg-7 ">
            
            <img src={logo} alt="" width="40" class="d-inline-block"/>
            
            <a class="navbar-brand text-white col-lg-7 " href="">
              Mundo Cosmetica
            </a>
            <ul class="navbar col-lg-4 text-white d-flex justify-content-around">
              <li class="nav-item">
                <a class="nav-link" href="#">Inicio</a>
              </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Productos</a>
            </li>
            <CartWidget />
            </ul>
          </div>
        </nav>
          
    )
  

    
}


export default Navbar;
