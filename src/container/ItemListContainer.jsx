import React, {useState, useEffect }from 'react';
import { useParams } from 'react-router-dom';
import productos from '../ArrayItem';
import ItemList from '../components/itemList';


const ItemListContainer = () => {
    const [datos, setDatos] = useState ([]);
    const {categoria}= useParams();

    useEffect (() => {   
    fetch ('../main.json')
    .then((res) => res.json())
    .then((json) => {
        if (categoria === undefined){
            setDatos(json)
        }else {
            const arrayCategoria = json.filter(producto => producto.categoria === categoria);
            setDatos(arrayCategoria)
        }
    });
    }, [categoria])

    return (
        <div className="container-fluid ">
                <h5 className="card-title text-center">Bienvenido</h5>
                    <ItemList datos={datos} />
            </div>
)
}
export default  ItemListContainer;