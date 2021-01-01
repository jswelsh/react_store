import React from "react"
import clsx from 'clsx'

import { makeStyles, withStyles } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors';

import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


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
    // margin:'auto'
  },
  some:{
    flexGrow: 1,
  },
  overlay: {
    position: 'absolute',
    top: '5px',
    color: theme.palette.primary.main,
    // backgroundColor:
  },
  Right: {
    right: '15px',
  },
  Left: {
    left: '15px',
  },
  gridList: {
    width: 800,
    // height: 450,
    // width: '80%'
  },
  titleBar: {
    padding:10,
    background: 'rgba(63, 81, 181,0.8)',  
      // 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}))

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    // backgroundColor: blue[500],
    '&:hover': {
      // backgroundColor: blue[700],
    },
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
        variant='h3'>
          </Typography>
      <Button 
        // to={'/cart'}
        children='add'
        variant="outlined" // color='inherit'
        edge="start" startIcon={<AddShoppingCartIcon />}
        className={clsx(
          classes.overlay,
          classes.Right)}/>
      <GridListTileBar
        classes={{
          root: classes.titleBar,
          title: classes.TileTitle}} 
        title={
        <Typography variant='h5'>
          {product.title}
        </Typography>} 
        subtitle={
        <Typography 
        variant='subtitle2'/>}
  /*               subtitle={   
      <Typography variant='subtitle2'>Company: {product.company}</Typography>} */
        actionIcon={//refactor this all too SvgCart!
        <ColorButton variant="outlined">
                  details
                </ColorButton>} />
    </GridListTile>
  )
}

export {Product}