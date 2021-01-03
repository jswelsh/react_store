import React from "react"
import clsx from 'clsx'
import { Link } from "react-router-dom"
import {ProductConsumer} from '../context'

import { borders } from '@material-ui/system'

import { makeStyles, withStyles } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'

import PropTypes from 'prop-types'

import {
  GridListTileBar,
  GridListTile,
  CardContent,
  CardHeader,
  Typography,
  IconButton,
  Button,
  Modal,
  Card,
} from '@material-ui/core'

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import SvgCart from './SvgCart'
import { MoreVert as MoreVertIcon } from '@material-ui/icons'

const getModalStyle =() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: `translate(-50%, -50%)`
})

const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign:'center',
    position: 'absolute',
    borderRadius:'2%',
    
    backgroundColor: theme.palette.background.paper,
    // border: '3px solid rgba(63, 81, 181,0.8)',
    outline:0,
    boxShadow: theme.shadows[5],
    width:500
    // padding: theme.spacing(4, 4, 3),
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
  Title:{
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
  price:{
    color: theme.palette.primary.dark,
    // paddingBottom: theme.spacing(1),
    paddingBottom: theme.spacing(3),
  },
  details:{
  }
}))
const ColorButton = withStyles((theme) => ({
  root: {
    marginRight: 16,
    color: theme.palette.getContrastText(blue[500])
  },
}))(Button)

/* <Typography
        style={{ fontWeight: 800, padding: '16px', color: '#fff'}}
        children='Item Added To Cart'
        variant='h4'/> */

const Body = React.forwardRef(({title, price, img, handleClose, id, handleDetail}, ref) => {
  const classes = useStyles()
  const [modalStyle] = React.useState(getModalStyle)
  return (
  <Card style={modalStyle} className={classes.paper} ref={ref}>
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
        className={classes.details}
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
const Product = ({product}) => {
  const classes = useStyles()
  const {title, price, img, id, inCart} = product
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const ref = React.createRef()

  return (
  <ProductConsumer> 
  {value => (
  <GridListTile
    className={classes.GridListTile}
    key={id}
    cols={1}
    rows={1}>
    <Link 
      to='/product_details'
      children={ 
      <img
        onClick={() => {
        value.handleDetail(id) }}
        src={img}
        alt={title}/>}/>
    <Typography
      children={'$'+price}
      className={clsx(classes.overlay, classes.Left)}
      variant='h3'/>
    <IconButton
      children={ inCart ? <SvgCart color='rgba(63, 81, 181,0.8)'/> : <AddShoppingCartIcon />}
      onClick={()=>{
        value.addToCart(id)
        handleOpen()
      }}
      variant="contained"
      disabled={inCart}
      className={clsx(
        classes.overlay,
        classes.Right,
        /* {[classes.inCart] : inCart} */)}/>
        
    <Modal
      open={open}
      onClose={handleClose}>
      {<Body
        handleClose={handleClose}
        handleDetail={value.handleDetail}
        ref={ref}
        id={id}
        title={title}
        price={price}
        img={img}
        />}
    </Modal>
    <GridListTileBar
      classes={{
        root: classes.titleBar,
        title: classes.TileTitle}}
        title={
        <Typography
          children={title}
          variant='h5'/>}
          subtitle={<Typography />}/>
  </GridListTile>
  )}
  </ProductConsumer>
  )
}

export {Product}

Product.propTypes = {
  product:PropTypes.shape({
    id:PropTypes.number,
    img:PropTypes.string,
    title:PropTypes.string,
    price:PropTypes.number,
    inCart:PropTypes.bool
  })
}