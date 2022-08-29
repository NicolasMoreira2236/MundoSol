import styled from 'styled-components';
import React,{useState} from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);

    const decrease = () => {
        setCount (count - 1);
    }

        const increase = () => {
            setCount (count + 1);
    }
    
    return (
        <CarritoMix >
        <div className='counter'>
            <button disabled={count <= 1} className='px-1' onClick={decrease}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={increase}>+</button>
        <div>
            <button>Agregar al carrito</button>
        </div>
        </div>
        </CarritoMix>
    );
    }
    export default ItemCount;

    
    const CarritoMix = styled.div`


    div{
    background-color: #e67899;

    button{
        background-color: #f1cdd8;
        font-weight: bold;
        border-radius: 5px
    }

        
        
    }`

