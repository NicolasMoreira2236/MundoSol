import React from "react";


const Item = ({producto}) => {
    return (
        <div className="card-item">
            <div className="container">
            <img src={producto.imagen} alt="img"/>
                <h4>{producto.id}</h4>
                <p>${producto.precio}</p>
                <button className="button1">Agregar producto</button>
            </div>
        </div>
    )

}
export default Item;