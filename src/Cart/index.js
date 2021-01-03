// import { useState } from 'react'
import { List, Button, ListItem, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {ProductConsumer} from '../context'
import { Link } from "react-router-dom"

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
    paddingTop:'24px',
    paddingBottom:'8px',
    margin:'auto',
    width: '90%',
  },
  Header:{
    marginLeft:'20px'
  }
}))

const Cart = () => {
  const classes = useStyles()
  
  return (
  <ProductConsumer>
  {value => {
  const {cart, increment, decrement, removeItem, cartSubTotal, cartTax, cartTotal} = value
  
  if(cart.length===0){
    return(
    <Paper className={classes.Paper} style={{textAlign:'center'}}>
      <Typography
        children="That's unfortunate,"
        variant='subtitle1'
        className={classes.Header}/>
      <Typography
        children='Your Cart Is Empty!'
        variant='h5'
        className={classes.Header}/>
      <Button
        children='continue shopping'
        startIcon={<ArrowBackIcon />}
        component={Link}
        // variant="outlined"
        color='primary'
        to={'/'}/>
    </Paper>
    )
  }
  else if(cart.length>0){
    return(
    <Paper className={classes.Paper}>
      <List>
        <Typography
          children='Shopping Cart'
          variant='h4'
          className={classes.Header}/>
        {cart.map(product => {
          const {id, img, title, price, count} = product
          return (
            <CartItem
              id={id}
              key={id}
              img={img}
              title={title}
              price={price}
              count={count}
              increment={increment}
              decrement={decrement}
              removeItem={removeItem}
            />)})}
          <ListItem>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center">
          <Grid xs={8} item children={
            <Button
            children='continue shopping'
            startIcon={<ArrowBackIcon />}
            component={Link}
            // variant="outlined"
            color='primary'
            to={'/'}/>
          }/>
          <Grid
            xs={4}
            item
            container
            spacing={1}
            direction="row"
            alignItems="center"
            children={<>
            <Grid container justify="flex-end" children={<>
            <Grid item children={
              <Typography 
                children='Subtotal:'
                variant="h5" 
                color="initial"/>}/>
            <Grid item children={
              <Typography
                variant="h6"
                color="initial"
                children={'$'+ cartSubTotal.toFixed(2)}/>}/></>}/>
            <Grid container justify="flex-end"  children={<>
            <Grid item children={
              <Typography 
                children='Tax:'
                variant="h5" 
                color="initial"/>}/>
            <Grid item children={
              <Typography
                variant="h6"
                color="initial"
                children={'$'+ cartTax.toFixed(2)}/>}/></>}/>
            <Grid container justify="flex-end" children={<>
            <Grid item children={
              <Typography 
                children='Total:'
                variant="h5" 
                color="initial"/>}/>
            <Grid item children={
              <Typography
                variant="h5"
                color="primary"
                children={'$'+ cartTotal.toFixed(2)}/>}/></>}/>
          </>}/>
        </Grid>
        </ListItem>
      </List>
    </Paper>)
  }
}}
  </ProductConsumer>
  )
}

export { Cart }


/* 
<Typography
          variant="h4"
          color="initial"
          children={'$'+ cart
          .reduce((accumulator, current) => (
            (current.price*current.) + accumulator) , 0.00)
          .toFixed(2)}/>}/>
*/