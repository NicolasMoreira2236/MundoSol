import React from 'react';
import logo from './logoestetica.png';
import './App.css';
import Navbar from './components/NavBar.jsx';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (

    <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<ItemListContainer/>} />
            <Route exact path="/categoria/:categoria" element={ <ItemListContainer/> } />
            <Route exact path="/categoria/:id" element={ <ItemDetailContainer/> } />
          </Routes>
        <ItemListContainer/>
    </BrowserRouter>

  );
}
export default App