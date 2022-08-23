import logo from './logoestetica.png';
import './App.css';
import Navbar from './components/NavBar.jsx';


function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>Mundo Cosmetica Sol</p>
        <a className="App-link" href="" target="_blank" rel="noopener noreferrer">
          Ingresa aqui!
        </a>
      </header>
    </div>
  );
}
export default App;
