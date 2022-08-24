
import logo from '../logoestetica.png';

const Navbar = () => {
    return (
        <nav class="navbar bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="">
            <img src={logo} alt="" width="40" class="d-inline-block align-text-center"/>
            Bootstrap
          </a>
          <a href="">Quienes somos?</a>
          <a href="">Productos</a>
          <a href="">Contacto</a>
          </div>

          </nav>
        
    )

    
}

export default Navbar;