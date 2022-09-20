import React from "react";
import { Link } from "react-router-dom";



const Item = ({info}) => {
    const {id, imagen, nombre, precio } = info

    return (
      <div className= "col-md-4 d-flex justify-content-evenly text-center mt-5 mb-5 px-5 ">
        <div className="card col-md-6">
        <div className="text-center">
          <div>
            <img src={imagen} className="text-center" width="300" alt={nombre}/>
          </div>
          <div className="text-center">
            <div className="card-body">
              <h5 className="card-title card-titulo ">{nombre}</h5>
              <p className="card-text precio">$ {precio}</p>
              <Link to={"/productos/" + id}>
              <button>Ver Producto</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    )

}
export default Item;



