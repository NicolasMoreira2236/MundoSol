import React from 'react';

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
            <Route excact path="/" element={ <ItemListContainer/> } />
            <Route excact path="/categoria/:categoria" element={ <ItemListContainer/> } />
            <Route excact path="/productos/:id" element={ <ItemDetailContainer/> } />
          </Routes>
    </BrowserRouter>

  );
}
export default App;