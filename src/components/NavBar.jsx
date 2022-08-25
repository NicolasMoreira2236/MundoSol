
import logo from '../logoestetica.png'
import CartWidget from './CartWidget'

const Navbar = () => {
    return (
        <nav class="navbar sticky-top bg-dark d-flex justify-center align-items-center">
          
          <div class="container">
            <div class="col-lg-4">
            <img src={logo} alt="" width="40" class="d-inline-block mx-3 "/>
            
            <a class="navbar-brand text-white text-center  align-middle " href="">
              Mundo Cosmetica
            </a>
            </div>
            <ul class="navbar col-lg-3 text-white d-flex justify-content-around text-center">
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
