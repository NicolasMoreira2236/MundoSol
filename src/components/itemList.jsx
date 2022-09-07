import React from 'react';
import Item from './item'

export const ItemsList = ({arrayProductos = []})=>{

    return(
      <div>
          <div className="row">
            {arrayProductos.map(objeto => <Item key={arrayProductos.id} info={objeto} />)}
          </div>  
      </div>
    )
}
export default ItemsList;