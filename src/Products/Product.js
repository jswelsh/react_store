import React from "react"
import clsx from 'clsx'
import { Link } from "react-router-dom"

import { makeStyles, withStyles } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'

import PropTypes from 'prop-types'

import {
  Button,
  Typography,
  GridListTileBar,
  GridListTile, 
  IconButton
} from '@material-ui/core'

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

const useStyles = makeStyles((theme) => ({
  Title: {
    // width:'100%',
    textAlign: 'center'
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
  }
}))
const ColorButton = withStyles((theme) => ({
  root: {
    marginRight: 16,
    color: theme.palette.getContrastText(blue[500])
  },
}))(Button)

const Product = ({product}) => {
  const classes = useStyles()
  const {title, price, img, id, inCart} = product

  return (
  <GridListTile
    className={classes.GridListTile}
    key={id}
    onClick={() => console.log('hello')}
    cols={1}
    rows={1}
    > {/* product.featured ? 2 : 1 */}
    <img src={img} alt={title} />
    <Typography
      children={'$'+price}
      className={clsx(classes.overlay, classes.Left)}
      variant='h3'/>
    <IconButton
      children={<AddShoppingCartIcon />}
      variant="contained"
      disabled={inCart}
      className={clsx(
        classes.overlay,
        classes.Right)}/>
    <GridListTileBar
      classes={{
        root: classes.titleBar,
        title: classes.TileTitle}} 
      title={
        <Typography
          children={title}
          variant='h5'/>}
      subtitle={<Typography />}
      actionIcon={
        <Link
          style={{ textDecoration: 'none' }}
          to='/product_details'>
        <ColorButton
          children='details'
          variant="outlined"/></Link>}/>
  </GridListTile>
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