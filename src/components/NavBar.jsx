
import logo from '../logoestetica.png'
import CartWidget from './CartWidget'

const Navbar = () => {
    return (
        <nav class="navbar sticky-top bg-dark d-flex justify-center align-items-center">
          <div class="container col-lg-8 ">
            <a class="navbar-brand text-white " href="">
              <img src={logo} alt="" width="40" class="d-inline-block"/>
              Bootstrap
            </a>
            <ul class="navbar col-lg-4 text-white d-flex justify-content-around">
              <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
              </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <CartWidget />
            </ul>
          </div>
        </nav>
          
    )
  

    
}


export default Navbar;
