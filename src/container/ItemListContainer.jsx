import styled from 'styled-components';

const ItemListContainer = (greeting) => {
        const {contenido} = greeting
        return ( 
        <Greet>
            <div>
                <h1 class="text-center">
                    Bienvenidos a Mundo Cosmetica.
                </h1> 
                {contenido}
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
