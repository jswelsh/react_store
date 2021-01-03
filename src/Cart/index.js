import { makeStyles } from '@material-ui/core/styles'
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

import { ProductConsumer } from '../context'
import { CartTotals } from './CartTotals'
import { EmptyCart } from './EmptyCart'
import { CartItem } from './CartItem'

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
const classes = useStyles()
  return (
  <ProductConsumer>
  {value => {
  const {cart, increment, decrement, removeItem} = value

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
            <Grid xs={8} item children={
              <Button
                children='continue shopping'
                startIcon={<ArrowBackIcon />}
                component={Link}
                // variant="outlined"
                color='primary'
                to={'/'}/>}/>
            <Grid
              xs={4}
              item
              container
              spacing={1}
              direction="row"
              alignItems="center"
              children={<CartTotals />}/>
          </Grid>
        </ListItem>
      </List>
    </Paper>)
  }}
  </ProductConsumer>
  )
}

export { Cart }