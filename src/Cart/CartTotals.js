
import { ProductConsumer } from '../context'

import {
  Typography,
  Grid,
  Button
} from '@material-ui/core'


/* type ITotalsConstructor = {
  cartSubTotal:(id: number) => void
  cartTax:(id: number) => void
  cartTotal:(id: number) => void
  clearCart:(id: number) => void
} */

const totalsConstructor = (cartSubTotal, cartTax, cartTotal, clearCart) => (
{ 
  Buttons: [
    <Button
      children='clear cart'
      onClick={clearCart}
      color='secondary'
      variant='outlined'/>
  ],
  Subtotal: [
    <Typography
      children='Subtotal:'
      variant="h5"
      color="initial"/>,
    <Typography
      variant="h6"
      color="initial"
      children={'$'+ cartSubTotal.toFixed(2)}/>
  ],
  Tax: [
    <Typography
      children='Tax:'
      variant="h5"
      color="initial"/>,
    <Typography
      variant="h6"
      color="initial"
      children={'$'+ cartTax.toFixed(2)}/>
  ],
  Total: [
    <Typography 
      children='Total:'
      variant="h5" 
      color="initial"/>,
    <Typography
      variant="h5"
      color="primary"
      children={'$'+ cartTotal.toFixed(2)}/>
  ]
}
)
const CartTotals = () => {
  return (
  <ProductConsumer>
  {value => {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value
    return (
      Object
      .entries(totalsConstructor(cartSubTotal, cartTax, cartTotal, clearCart))
      .map(([key, value]) => (
      <Grid
      container
      justify="flex-end"
      children={<>
        {value.map(
          component => (<Grid item children={component}/>))}
      </>}/>
    )
    ))
  }}
  </ProductConsumer>
  )
}
export {CartTotals}