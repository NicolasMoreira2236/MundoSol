import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';

export const ItemDetailContainer = () => {
    const {id} = useParams();  
    const [item, setItem]= useState({});
       
       
       useEffect(() => {
          fetch ('../main.json')
             .then ((res) => res.json())
             .then (json =>{
                 
                 const encontrado = json.find (item => item.id === parseInt(id));
                 setItem(encontrado) 
             });
            
       }, [id])
 
    return (
          <div className="container d-flex justify-content-center">
              <ItemDetail objeto={item}  />
            
         </div>
    )
 }
 export default ItemDetailContainer;
 