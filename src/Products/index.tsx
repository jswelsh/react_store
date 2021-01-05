import { makeStyles } from '@material-ui/core/styles'
import { ProductConsumer } from '../context'

import {
  GridList
} from '@material-ui/core'

import { Product } from './Product'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper},
  gridList: {
    justifyContent: 'center'
  },
}))

const Products = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ProductConsumer>
      {contextStore => (
      <GridList
        cols={2}
        spacing={24}
        className={classes.gridList}
        children={
          // @ts-ignore
          contextStore.products
          .map((product) => (
            <Product product={product} />))
        }/>
      )}
      </ProductConsumer>
    </div>
  )
}

export { Products }