import React from 'react';

import './App.css';
import Navbar from './components/NavBar.jsx';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import CartProvider from './components/CartContext';
import CartContainer from './components/CartContainer';
import Form from '../src/components/Formulario';
import Orden from './components/orden';


function App() {

  return (

    <BrowserRouter>
       <CartProvider >
         <Navbar/>
          <Routes>
            <Route path="/" element={ <ItemListContainer/> } />
            <Route path="/categoria/:categoria" element={ <ItemListContainer/> } />
            <Route path="/productos/:id" element={ <ItemDetailContainer/> } />
            <Route path="/cart" element={ <CartContainer/> } />
            <Route path="/formulario" element={ <Form/> } />
            <Route path="/formulario" element={ <Orden/> } />
          </Routes>
       </CartProvider>
    </BrowserRouter>

  );
}
export default App;