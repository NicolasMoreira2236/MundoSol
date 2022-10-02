import React,{ useContext} from "react";
import { CartContext } from "./CartContext";
import Cart from "./cart";
import CarritoVacio from "./modalVacio";


const CartContainer = (()=>{
    const {cart} = useContext(CartContext);
   
    
    if (cart.length === 0) {
        return(
           <CarritoVacio/>
        )
      }

    return (
       <>
             <Cart/>
                           
       </>
    )
})

export default CartContainer;