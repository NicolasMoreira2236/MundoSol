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
            <Route excact path="/" element={ <ItemListContainer/> } />
            <Route excact path="/categoria/:categoria" element={ <ItemListContainer/> } />
            <Route excact path="/productos/:id" element={ <ItemDetailContainer/> } />
            <Route excact path="/cart" element={ <Cart /> } />
          </Routes>
    </BrowserRouter>

  );
}
export default App;