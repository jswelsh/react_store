import { useState } from 'react'
import { List, Divider, Button, TextField, ListItem, ListItemAvatar, ListItemText, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CancelIcon from '@material-ui/icons/Cancel'

import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  Paper:{
    width: 800,
    alignItems: 'center'
  },
  PaperW:{
    margin:'auto',
    textAlign: 'center',
    width: '80%',
  },
  Title:{
    width:150
  },
  inline: {
    display: 'inline',
  },
  ListItem:{
    flexGrow:2
  }
}))

const Cart = () => {
  const classes = useStyles();
  const product = {
  id: 1,
  title: "Google Pixel - Black",
  img: "img/product-1.png",
  price: 10,
  company: "GOOGLE",
  info:
    "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
  inCart: false,
  count: 0,
  total: 0
  }
  const product2 = {
  id: 5,
  title: "HTC Desire 626s",
  img: "img/product-5.png",
  price: 24,
  company: "htc",
  info:
    "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
  inCart: false,
  count: 0,
  total: 0,
  featured: true
  }
  const cart = [product,product2]

  return (
    <Paper className={classes.PaperW}>
      <Typography variant='h3'>
        Shopping Cart
      </Typography>
    <List>
      <ListItem  >
      <Grid
        // spacing={1}
        container
        direction="row"
        justify="space-between"
        alignItems="center">
        <Grid item>
        <ListItemAvatar>
          <Avatar alt="" src={product.img} />
        </ListItemAvatar>
        </Grid>
        <Grid item>
        <div className={classes.Title}>
          <ListItemText primary={product.title}/>
        </div>
        </Grid>
        <Grid item>
 {/*          <IconButton size='small'>
            <RemoveIcon />
          </IconButton> */}
          <TextField 
            type="number"
            style ={{width: '50px'}}
            onInput={(e)=>{ 
                e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,2)
            }}
            min={0}
          />
{/*           <IconButton size='small'>
            <AddIcon />
          </IconButton> */}
        </Grid>
        <Grid item>
        <Typography>
          ${product.price}
        </Typography>
        </Grid>
        <Grid item>
        <IconButton size='small'>
          <CancelIcon />
        </IconButton>
        </Grid>
      </Grid>
      </ListItem>
      <Divider />
      <ListItem >
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center">
        <Grid item>
        <ListItemAvatar>
          <Avatar alt="" src={product2.img} />
        </ListItemAvatar>
        </Grid>
        <Grid item>
        <div className={classes.Title}>
          <ListItemText primary={product2.title}/>
        </div>
        </Grid>
        <Grid item>
{/*           <IconButton size='small'>
            <RemoveIcon />
          </IconButton> */}
          <TextField
            type="number"
            style ={{width: '50px'}}
            onInput={(e)=>{ 
                e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,2)
            }}
            min={0}
          />
{/*           <IconButton size='small'>
            <AddIcon />
          </IconButton> */}
        </Grid>
        <Grid item>
        <Typography>
          ${product2.price}
        </Typography>
        </Grid>
        <Grid item>
        <IconButton size='small'>
          <CancelIcon />
        </IconButton>
        </Grid>
      </Grid>
      </ListItem>

      <ListItem>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center">
      <Grid xs={9} item>
      <Button
        color='primary'
        variant={'outlined'}
        startIcon={<ArrowBackIcon />} >
        continue shopping
      </Button>
      </Grid>
      <Grid
        xs={3}
        item
        container
        spacing={1}
        direction="row"
        // justify="space-between"
        alignItems="center"

        >
        <Grid item>
          <Typography variant="h5" color="primary">Subtotal </Typography>
        </Grid>
{/*         <Grid item>

        <Divider orientation='vertical' />
        </Grid> */}
        <Grid item>
          <Typography variant="h4" color="initial">${cart.reduce((accumulator, current) => current.price + accumulator , 0.00).toFixed(2)}</Typography>
        </Grid>
        
      </Grid>

      </Grid>
      </ListItem>
      </List>
    </Paper>
  )
}

export { Cart }