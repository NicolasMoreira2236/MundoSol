import Item from "./item"
import React from "react";


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
