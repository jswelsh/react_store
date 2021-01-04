import { useState, forwardRef, createRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { Link } from "react-router-dom"
import { ProductConsumer } from '../context'
import { ModalBody } from './ModalBody'
import PropTypes from 'prop-types'

import {
  GridListTileBar,
  GridListTile,
  Typography,
  IconButton,
  Modal
} from '@material-ui/core'

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import SvgCart from './SvgCart'

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
}))

const Product = ({product}) => {
  const classes = useStyles()
  const {title, price, img, id, inCart} = product
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const ref = createRef()

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
      className={
        clsx(
          classes.overlay,
          classes.Left)}
      variant='h3'/>
    <IconButton
      children={
        inCart
        ? <SvgCart color='rgba(63, 81, 181,0.8)'/> 
        : <AddShoppingCartIcon />}
      onClick={()=>{
        value.addToCart(id)
        handleOpen()
      }}
      variant="contained"
      disabled={inCart}
      className={clsx(
        classes.overlay,
        classes.Right)}/>
    <Modal
      open={open}
      onClose={handleClose}
      children={
      <ModalBody
        handleClose={handleClose}
        handleDetail={value.handleDetail}
        ref={ref}
        id={id}
        title={title}
        price={price}
        img={img}/>}/>
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