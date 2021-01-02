// import { useState } from 'react'
import { List, Button, ListItem, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { CartItem } from './CartItem'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  Paper:{
    marginTop:'48px',
    paddingLeft:'16px',
    paddingRight:'16px',
    margin:'auto',
    width: '90%',
  },
  Header:{
    marginLeft:'20px'
  }
}))
  const product = {
  id: 1,
  title: "Google Pixel - Black",
  img: "img/product-1.png",
  price: 10,
  company: "GOOGLE",
  info:
    "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
  inCart: false,
  count: 0,
  total: 0
  }
  const product2 = {
  id: 5,
  title: "HTC Desire 626s",
  img: "img/product-5.png",
  price: 24,
  company: "htc",
  info:
    "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
  inCart: false,
  count: 0,
  total: 0,
  featured: true
  }
  const cart = [product,product2]

const Cart = () => {
  const classes = useStyles()
  
  return (
  <Paper className={classes.Paper}>
    <List>
      <Typography
        children='Shopping Cart'
        variant='h5'
        className={classes.Header}/>
      {cart.map(product => {
        return <CartItem product={product}/>})}
        <ListItem>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center">
        <Grid xs={8} item children={
          <Button
            color='primary'
            variant={'outlined'}
            children='continue shopping'
            startIcon={<ArrowBackIcon />}/>
        }/>
        <Grid
          xs={4}
          item
          container
          spacing={1}
          direction="row"
          alignItems="center"
          children={<>
          <Grid item children={
            <Typography 
              children='Subtotal'
              variant="h5" 
              color="primary"/>}/>
          <Grid item children={
            <Typography
              variant="h4"
              color="initial"
              chidlren={'$'+ cart
              .reduce((accumulator, current) => (
                current.price + accumulator) , 0.00)
              .toFixed(2)}/>}/>
        </>}/>
      </Grid>
      </ListItem>
    </List>
  </Paper>
  )
}

export { Cart }
