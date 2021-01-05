import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Link } from "react-router-dom"

import {
  List,
  Paper,
  Button,
  ListItem,
  Typography,
  Grid
} from '@material-ui/core'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import { ProductContext } from '../context'
import { CartTotals } from './CartTotals'
import { EmptyCart } from './EmptyCart'
import { CartItem } from './CartItem'
import { PayPalButton } from './PayPalButton'

const useStyles = makeStyles((theme) => ({
  Paper:{
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(6),
    padding: theme.spacing(3, 2, 1),
    width: '90%',
  },
  Header:{
    margin: theme.spacing(0, 3, 3)
  }
}))

const Cart = () => {
  const { cart, increment, decrement, removeItem, clearCart } = React.useContext(ProductContext) as ContextType
  const classes = useStyles()
  const matched = useMediaQuery('(min-width:600px)')

  return (
  cart.length === 0
  ? <EmptyCart />
  : <Paper className={classes.Paper}>
      <List>
        <Typography
          children='Shopping Cart'
          variant='h4'
          className={classes.Header}/>
        {cart.map(product => (
        <CartItem
          key={product.id}
          product={product}
          increment={increment}
          decrement={decrement}
          removeItem={removeItem}/>))}
        <ListItem>
          <Grid container direction="row">
            <Grid xs={5} justify="space-between" spacing={2} item container >
              <Grid lg={6} md={12} sm={12} xs={12} item children={
                <Button
                  children={matched ? 'continue shopping' :'to products' }
                  startIcon={ matched ? <ArrowBackIcon /> : null}
                  component={Link}
                  // variant="outlined"
                  color='primary'
                  fullWidth={true}
                  to={'/'}/>}/>
{/*               <Grid lg={6} md={12} sm={12} xs={12} item children={
                <Button
                  children='clear cart'
                  onClick={clearCart}
                  color='secondary'
                  fullWidth={true}
                  variant='outlined'/>}/> */}
              <Grid xs={12} item children={ <PayPalButton />}/>
            </Grid>
            <Grid
              xs={7}
              item
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-end"
              children={<CartTotals />}/>
          </Grid>
        </ListItem>
      </List>
    </Paper>
  )
}

export { Cart }