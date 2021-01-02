
import {Link} from 'react-router-dom'

import {ProductConsumer} from '../context'
import { Grid, Typography, Container, Button } from '@material-ui/core'

const ProductDetails = () => {
  return (
  <ProductConsumer>
    {value => (
      // {console.log(value.detailProduct.img)}
    <Grid
      container
      justify="center"
      alignItems="center">
        <Grid item>
          <img  src={value.detailProduct.img} alt={value.detailProduct.title} />
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
              children={value.detailProduct.title}/>}/>
            <Grid item children={
            <Typography
              color='primary'
              variant='subtitle1'
              children={'Price: $'+value.detailProduct.price}/>}/>
            <Grid item children={
            <Typography
              variant='subtitle2'
              children={'Product Info:'}/>}/>
            <Grid item children={
            <Typography
              color='textSecondary'
              variant='body1'
              children={value.detailProduct.info}/>}/>
              <Grid item container justify="space-between" children={<>
                <Button 
                  children='back to products'
                  component={Link}
                  to={'/'}/>
                <Button variant='contained' color='primary' children='add to cart' /> </>}/>
          </Grid>
          </Container>
        </Grid>
    </Grid>
    )}
  </ProductConsumer>
  )
}

export { ProductDetails }
/*       {value =>
      value.detailProduct.company} */
/* 
company: "google"
count: 0
id: 1
img: "img/product-1.png"
inCart: false
info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify."
price: 10
title: "Google Pixel - Black"
total: 0 */