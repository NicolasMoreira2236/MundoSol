import logo from './logoestetica.png';
import './App.css';
import Navbar from './components/NavBar.jsx';
import ItemListContainer from './container/ItemListContainer';





function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>Mundo Cosmetica Sol</p>
        <button className="App-link" href="" target="_blank" rel="noopener noreferrer" class="border rounded px-5 py-2">
          Ingresa aqui!
        </button>
      </header>
    </div>
  );
}
export default App;