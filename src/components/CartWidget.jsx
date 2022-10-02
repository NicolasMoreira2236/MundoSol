import React from 'react'
import Carritopng from '../trolley-cart.png'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from './CartContext';

const CartWidget = () => {
   const {cart, TotalProductos} = useContext(CartContext)  
   if (cart.length === 0) {
    return(
      <> 
       <div className="widge" >
       <span className="">Vacio</span>
       <img src={Carritopng} alt="" width="40" className="border rounded-circle bg-danger border-black border-info" />
       </div>
      
      
      </>

    )

   }

   return(
     <Link to="/cart" style={{ textDecoration: 'none'}} >
  <div className="widge" >
    <img src={Carritopng} alt="" width="40" className="border rounded-circle bg-danger border-black border-info" />  
     <span className="m-1">{TotalProductos() || '' }</span>
  </div>
  </Link>
)


  
}

export default CartWidget;



