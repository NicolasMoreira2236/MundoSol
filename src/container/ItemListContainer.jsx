import React, {useState, useEffect }from 'react';
import productos from '../ArrayItem';
import ItemList from '../components/itemList';


const ItemListContainer = () => {
    const [datos, setDatos] = useState ([]);

    useEffect (() => {   
    const getData = new Promise (resolve => {
        setTimeout (()=> {
            resolve(productos)
        },2000);
    });
        getData.then (respuesta => setDatos(respuesta));

    },[]);
        
    return ( 
            <div>
                <h1 class="text-center">
                    Bienvenidos a Mundo Cosmetica.
                </h1>
                <ItemList arrayProductos={datos} /> 
            </div>
            
        ) 
        
    }

export default  ItemListContainer;


    