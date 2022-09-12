import React from 'react'


const ItemDetail =({objeto})=>{
   
    return(
        <div  className="card ">
        <div  className="d-flex justify-content-center"> 
         
          <img src={objeto.imagen} className="img-fluid p-2" width="100" alt={objeto.nombre}/>
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">{objeto.nombre}</h5>
          <p className="card-text text-center">$ {objeto.precio}</p>
        </div>
       </div>
    )
}
export default ItemDetail;