import { useState } from 'react'
import {ProductConsumer} from '../context'

import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors';
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import SvgCart from './SvgCart'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {ProductsData} from './data'
import {storeProducts} from '../data'
import { Button } from '@material-ui/core';
import {Product} from './Product'

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
}));
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    // backgroundColor: blue[500],
    '&:hover': {
      // backgroundColor: blue[700],
    },
  },
}))(Button)

const Products = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.Title}>
      <Typography  variant="h1"> Products</Typography>
      </div>
      <GridList cellHeight={400} /* cols={3} rows={2} */ className={classes.gridList}>
{/*         <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Phones</ListSubheader>
        </GridListTile> */}
        <ProductConsumer>
          {(contextStore) =>
          contextStore.products.map((product) => (
          <Product 
            product={product}/>
        ))}
        </ProductConsumer>
      </GridList>
    </div>
  )
}

export { Products }