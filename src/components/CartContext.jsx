import React, { createContext } from 'react';
import { useState } from 'react';

export const CartContext = createContext ([])

const CartProvider = (props)=>{
    const[cart, setCart ] = useState([]);
    console.log(cart)
    const AddItem = (item, quantity)=>{
        if (IsInCart(item.id)){
           setCart(cart.map(prod => {
              return prod.id === item.id ? {...prod, cantidad: prod.cantidad + quantity}: prod}));
        } else {
           setCart([...cart, {...item, cantidad:quantity}]);
        }

    }; //agrega cantidad de items al carrito

    const IsInCart= (id)=>{
        return cart.some((prod) => prod.id === id);
    };// saber si se encuentra producto en el carrito 

    const ClearCart = ()=>{
        setCart([]);
    }; //Elimina carrito
    
    const RemoveItem = (id)=>{
        setCart(cart.filter(prod => prod.id !== id));     
    }; //elimina items del carrito x id
    
    const TotalPrecio =()=>{
        const productos = [...cart];
        let total = 0; 
        productos.forEach((producto)=>{
            total = total + producto.precio * producto.cantidad; 
        })
        return total;
    }
    

    const TotalProductos =()=>{
        const productos = [...cart];
        let cantidad = 0; 
        productos.forEach((producto)=>{
            cantidad = cantidad + producto.cantidad; 
        })
        return cantidad;
    }




   return(
    <CartContext.Provider value={{cart, AddItem, IsInCart, ClearCart,RemoveItem,TotalPrecio,TotalProductos }} > 
       {props.children}
    </CartContext.Provider>

   );

}
export default CartProvider;