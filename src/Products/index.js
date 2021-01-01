import {ProductConsumer} from '../context'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'

import {
  GridList,
  Typography,
  Button
} from '@material-ui/core'

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
  },
  some:{
    flexGrow: 1,
  },
  overlay: {
    position: 'absolute',
    top: '5px',
    color: theme.palette.primary.main
  },
  Right: {
    right: '15px'
  },
  Left: {
    left: '15px'
  },
  gridList: {
    width: 800
  },
  titleBar: {
    padding:10,
    background: 'rgba(63, 81, 181,0.8)'
  },
}))
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
  },
}))(Button)

const Products = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.Title}>
      <Typography  variant="h1"> Products</Typography>
      </div>
      <GridList 
        cellHeight={400}
        className={classes.gridList}>
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