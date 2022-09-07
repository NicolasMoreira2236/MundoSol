import React from "react";


const Item = ({info}) => {
    const {imagen, nombre, precio } = info

    return (
        
        <div className="card col-md-4 d-flex align-items-center">
        <div className="text-center">
          <div>
            <img src={imagen} className="text-center" width="300" alt={nombre}/>
          </div>
          <div className="text-center">
            <div className="card-body">
              <h5 className="card-title card-titulo ">{nombre}</h5>
              <p className="card-text precio">$ {precio}</p>
            </div>
          </div>
        </div>
      </div>
      
    )

}
export default Item;