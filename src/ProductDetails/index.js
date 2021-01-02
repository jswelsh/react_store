import Avatar from '@material-ui/core/Avatar'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

import {ProductConsumer} from '../context'
import { Typography } from '@material-ui/core'

const ProductDetails = () => {
  return (
      <Typography>
    <ProductConsumer>
      {value =>
      value.detailProduct.company}
    </ProductConsumer>
      </Typography>
  )
}

export { ProductDetails }

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