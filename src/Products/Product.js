import React from "react"
import clsx from 'clsx'

import { makeStyles, withStyles } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'

import {
  Button,
  Typography,
  GridListTileBar,
  GridListTile 
} from '@material-ui/core'

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  Title: {
    width:'100%',
    textAlign: 'center'
  },
  overlay: {
    position: 'absolute',
    top: '5px',
    color: theme.palette.primary.main,
  },
  Right: {
    right: '15px',
  },
  Left: {
    left: '15px',
  },
  gridList: {
    width: 800,
  },
  titleBar: {
    padding:10,
    background: 'rgba(63, 81, 181,0.8)',  
  },
}))

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[500])
  },
}))(Button)

const Product = ({product}) => {
  const classes = useStyles()

  return (
  <GridListTile
    key={product.id}
    cols={1} rows={1}> {/* product.featured ? 2 : 1 */}
    <img src={product.img} alt={product.title} />
    <Typography
      children={'$'+product.price}
      className={clsx(classes.overlay, classes.Left)}
      variant='h3'/>
    <Button
      children='add'
      variant="outlined"
      edge="start" startIcon={<AddShoppingCartIcon />}
      className={clsx(
        classes.overlay,
        classes.Right)}/>
    <GridListTileBar
      classes={{
        root: classes.titleBar,
        title: classes.TileTitle}} 
      title={
        <Typography
          children={product.title}
          variant='h5'/>}
      subtitle={<Typography />}
      actionIcon={
        <ColorButton
          children='details'
          variant="outlined"/>}/>
  </GridListTile>
  )
}

export {Product}