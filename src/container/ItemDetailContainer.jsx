import React, {useState, useEffect} from 'react';
import productos from '../ArrayItem';
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = () => {
    const [objeto, setObjeto] = useState({});
    
    useEffect(() => {
        const getData =new Promise (resolve => {
            const encontrado = productos.find((prod) => prod.id === 1);
                setTimeout(() => {
                resolve(encontrado)
                }, 2000);
            });
    
            getData.then((info)=>{
                setObjeto(info);
            })
        }, [])

    return (
            <div className="container-fluid ">
                <div className="row d-flex justify-content-center">
                    <h5 className="card-title text-center">Detalle de Producto</h5>
                        <ItemDetail objeto={objeto} />
                </div>
            </div>
    )
 }
 export default ItemDetailContainer;
 