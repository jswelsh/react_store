
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'

import {
  Grid,
  Typography,
  Container,
  Button
} from '@material-ui/core'

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import SvgCart from './SvgCart'

const ProductDetails = () => {
  return (
  <ProductConsumer>
  {value => {
    const { id, company, img, info, price, title, inCart } = value.detailProduct
    return (
    <Grid
      container
      justify="center"
      alignItems="center">
      <Grid item>
        <img  src={img} alt={title} />
      </Grid>
      <Grid md={6} item >
        <Container maxWidth="md">
        <Grid
          container
          direction='column'
          justify="center"
          alignItems="center" >
          <Grid item children={
          <Typography
            color='textPrimary'
            variant='h4'
            children={title}/>}/>
          <Grid item children={
          <Typography
            color='primary'
            variant='subtitle1'
            children={'Price: $'+price}/>}/>
          <Grid item children={
          <Typography
            variant='subtitle2'
            children={'Product Info:'}/>}/>
          <Grid item children={
          <Typography
            color='textSecondary'
            variant='body1'
            children={info}/>}/>
            <Grid item container justify="space-between" children={<>
              <Button
                component={Link}
                children='back to products'
                style={{ margin: 8, padding:12}}
                variant={inCart ? 'contained' : 'text'}
                color={inCart ? 'primary' : 'default'}
                to={'/'}/>
              <Button
                startIcon={!inCart && <AddShoppingCartIcon />}
                endIcon={inCart && <SvgCart/> }
                children={inCart ? 'in cart' : 'add to cart'}
                style={{ margin: 8, padding:12}}
                disabled={inCart}
                variant='contained'
                color='primary'
                onClick={()=> value.addToCart(id) }
                // fullWidth={true}
                /> 
                </>}/>
        </Grid>
        </Container>
      </Grid>
    </Grid>
    )
  }}
  </ProductConsumer>
  )
}

export { ProductDetails }