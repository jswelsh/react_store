import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import {ProductConsumer} from '../context'

const totalsConstructor = (cartSubTotal,cartTax,cartTotal) => (
{
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
    const {cartSubTotal, cartTax, cartTotal} = value
    return (
      Object
      .entries(totalsConstructor(cartSubTotal, cartTax, cartTotal))
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