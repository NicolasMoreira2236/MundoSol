import Item from "./item"
import React, { useState,useEffect } from "react";

const [carrito, SetCarrito] = useState([])
const [productos, SetProductos] = useState([])

const BuscarProductos = async() => {
    try {
        const response = await fetch('../src/ArrayItem.json')
        const data = await response.json();
        SetProductos(data.results);
    }catch(e){
    }
}

useEffect(() => { 
    
    BuscarProductos()}, [] )

const ItemList = ({productos}) => {
    return (
    productos.map ((producto) => {
        return (
            <Item producto={producto}/>
        );
    })
    )
}

export default ItemList;
