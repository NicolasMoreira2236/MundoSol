import styled from 'styled-components';
import ItemCount from '../components/ItemCount';

const ItemListContainer = (greeting) => {
        const {contenido} = greeting

        const onAdd = (quantity) => {
            console.log(`Compraste ${quantity} unidades`);
        }

        return ( 
        <Greet>
            <div>
                <h1 class="text-center">
                    Bienvenidos a Mundo Cosmetica.
                </h1> 
                {contenido}
                <ItemCount initial={1} stock={5} onAdd={onAdd} />
            </div>
            
        </Greet>
        
        
        ) 
        
    }

    export default  ItemListContainer;


    const Greet = styled.div`

    h1{
        color: #cf1717;
        background-color: black;
        text-transform: uppercase;
        text-transform: bold;
        margin: 0;
    }`
