import React from 'react';
import Item from './item'

export const ItemsList = ({datos = []})=>{
console.log(datos)
    return(
      <div>
          <div className="row">
            {datos.map(dato => <Item key={dato.id} info={dato} />)}
          </div>  
      </div>
    )
}
export default ItemsList;