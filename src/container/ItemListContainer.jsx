import { collection, getDocs, query, where } from 'firebase/firestore';
import React, {useState, useEffect }from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/itemList';
import { db } from '../configuracionFirebase';


const ItemListContainer = () => {
    const [datos, setDatos] = useState ([]);
    const {categoria}= useParams();
  
    useEffect(() => {
            
        const colecionProductos = collection(db, 'productos') 
        const refCategoria = categoria 
        ? query(colecionProductos, where('categoria', '==', categoria)) 
        : colecionProductos;

        getDocs(refCategoria)
        .then((res) =>{
           const productos = res.docs.map((prod) => {
             return {
               id: prod.id, ...prod.data(),
             }
           })
           setDatos(productos)
        })

      
        
   }, [categoria])
    return (
        <div className="container-fluid ">
                <h5 className="card-title text-center">Bienvenidos a Sol Estetica Online</h5>
                    <ItemList datos={datos} />
            </div>
)
}
export default  ItemListContainer;