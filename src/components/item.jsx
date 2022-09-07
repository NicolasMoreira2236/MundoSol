import React from "react";


const Item = ({info}) => {
    const {imagen, nombre, precio } = info

    return (
        <div className="card mb-3">
        <div className="row g-0 ">
          <div className="col-md-4 p-1">
            <img src={imagen} className="img-fluid" width="300" alt={nombre}/>
          </div>
          <div className="col-md-8">
            <div className="card-body text-center">
              <h5 className="card-title card-titulo ">{nombre}</h5>
              <p className="card-text precio ">$ {precio}</p>
            </div>
          </div>
        </div>
      </div>
    )

}
export default Item;