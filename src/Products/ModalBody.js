import { useState, forwardRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from "react-router-dom"

import {
  CardContent,
  CardHeader,
  Typography,
  Button,
  Card
} from '@material-ui/core'

import SvgCart from './SvgCart'

const getModalStyle =() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: `translate(-50%, -50%)`
})

const useStyles = makeStyles((theme) => ({
  Card: {
    textAlign:'center',
    position: 'absolute',
    borderRadius:'2%',
    backgroundColor: theme.palette.background.paper,
    outline:0,
    boxShadow: theme.shadows[5],
    width:500
  },
  overlay: {
    position: 'absolute',
    top: '5px',
  },
  Right: {
    right: '15px',
    color:'white',
    background:'rgba(63, 81, 181,0.8)',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      boxShadow: 'none',
    },
  },
  Title: {
    color: theme.palette.text.secondary
  },
  inCart: {
    color:'rgba(63, 81, 181,0.8)',
  },
  Left: {
    color: theme.palette.primary.main,
    left: '15px',
  },
  titleBar: {
    padding:8,
    background: 'rgba(63, 81, 181,0.8)',
  },
  GridListTile: {
    margin:16
  },
  price: {
    color: theme.palette.primary.dark,
    paddingBottom: theme.spacing(3),
  }
}))
const ModalBody =forwardRef(({title, price, img, handleClose, id, handleDetail}, ref) => {
  const classes = useStyles()
  const [modalStyle] = useState(getModalStyle)
  return (
  <Card tabIndex={-1} style={modalStyle} className={classes.Card} ref={ref}>
    <CardHeader
      style={{ background:'#3f51b5'}}
      title={ <Typography
        className={classes.Title}
        children='Nice!'
        variant='subtitle1'/>}
        subheader={<Typography
          style={{ fontWeight: 800, color: '#fff'}}
          children='Item Added To Cart'
          variant='h4'/> }/>
    <CardContent 
      style={{ paddingBottom:'32px'}}>
      <img
        src={img}
        alt={title}/>
      <Typography
        children={title}
        variant='h5'/>
      <Link 
        onClick={() => {
        handleDetail(id) }}
        style={{ textDecoration: 'none' }}
        to='/product_details'
        children={
        <Typography
          color='textPrimary'
          children='DETAILS'
          variant='subtitle2'/>}/>
      <Typography
        children={`PRICE: $${price}`}
        className={classes.price}
        variant='h6'/>
      <Button
        children='to products'
        style={{ margin: 8, padding:12}}
        variant='contained'
        onClick={() => handleClose()}
        color='inherit'/>
      <Button
        children='to cart'
        style={{ margin: 8, padding:12}}
        startIcon={<SvgCart color='#fff'/>}
        component={Link}
        variant="contained"
        color='primary'
        to={'/cart'}/>
    </CardContent>
  </Card>
  )
})
export {ModalBody}
