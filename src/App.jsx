import React from 'react';

import './App.css';
import Navbar from './components/NavBar.jsx';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/cart';


function App() {
  return (

    <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route  path="/" element={ <ItemListContainer/> } />
            <Route  path="/categoria/:categoria" element={ <ItemListContainer/> } />
            <Route  path="/productos/:id" element={ <ItemDetailContainer/> } />
            <Route  path="/cart" element={ <Cart /> } />
          </Routes>
    </BrowserRouter>

  );
}
export default App;