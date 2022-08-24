import React from 'react'
import styled from 'styled-components'
import Carritopng from '../trolley-cart.png'

const CartWidget = () => {
  return (  
      <img src={Carritopng} alt="" width="40" class="border rounded-circle bg-danger" />  
  )
}

export default CartWidget;
const Boton = styled.div`
padding: 30;
`


