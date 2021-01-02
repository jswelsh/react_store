import {ProductConsumer} from '../context'
import { makeStyles } from '@material-ui/core/styles'
// import useMediaQuery from '@material-ui/core/useMediaQuery'

import {
  GridList,
  Typography
} from '@material-ui/core'

import {Product} from './Product'

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow:1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper},
  Title: {
    // width:'100%',
    textAlign: 'center'},
  gridList: {
    justifyContent: 'center'
  },
}))

const Products = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ProductConsumer>
      {(contextStore) => (<>
      <GridList
        // cellHeight={400}
        col={2}
        spacing={24}
        className={classes.gridList}
        >
          {contextStore.products.map((product) => (
          <Product
            product={product} />))}
      </GridList> </>)
      }
      </ProductConsumer>
    </div>
  )
}

export { Products }