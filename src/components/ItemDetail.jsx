import React,{useState, useEffect}  from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import ItemCount from './ItemCount';


const ItemDetail =({objeto})=>{
  console.log(objeto);
  const [irCarrito, setIrCarrito] = useState(false);
  const [cantidad, setCantidad] = useState(objeto.stock)
  const {AddItem} = useContext(CartContext)
  
   
  const onAdd = (quantity)=> {
      setIrCarrito(true)
      setCantidad(objeto.stock - quantity)
      AddItem(objeto, quantity);

    }

    useEffect(() => { 
      setCantidad(objeto.stock)
  }, [objeto.stock]);




    return(
        <div  className="card ">
        <div  className="d-flex justify-content-center"> 
         
          <img src={objeto.imagen} className="img-fluid p-2" width="100" alt={objeto.nombre}/>
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">{objeto.nombre}</h5>
          <p className="card-text text-center">${objeto.precio}</p>
          <p className="card-text text-center">Cantidad: {cantidad} </p>
        </div>
        { irCarrito
         ? <Link to ='/cart'>Ir a Carrito</Link>
         : <ItemCount initial ={1} stock={objeto.stock} onAdd={onAdd}/>
        }
       </div>
    )
}
export default ItemDetail;