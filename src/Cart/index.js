import { List, Input, ListItem, ListItemAvatar, ListItemText, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Avatar from '@material-ui/core/Avatar'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'

import MoreVertIcon from '@material-ui/icons/MoreVert'
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
    width: 1200,
  },
  Title:{
    width:250
  },
  inline: {
    display: 'inline',
  },
  AmountField: {
    // flexGrow:1
    width:40
  },
  ListItem:{
    flexGrow:2
  }
}));

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
        alignItems="center"
      >
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
          <IconButton>
            <RemoveIcon />
          </IconButton>
          <Input
            className={classes.AmountField} 
            type="number" />
          <IconButton>
            <AddIcon />
          </IconButton>
        </Grid>
        <Grid item>
        <Typography>
          ${product.price}
        </Typography>
        </Grid>
        <Grid item>
        <IconButton>
          <CancelIcon />
        </IconButton>
        </Grid>
      
      </Grid>
      </ListItem>

      <ListItem  >
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
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
          <IconButton>
            <RemoveIcon />
          </IconButton>
          <Input
            className={classes.AmountField} 
            type="number" />
          <IconButton>
            <AddIcon />
          </IconButton>
        </Grid>
        <Grid item>

        <Typography>
          ${product2.price}
        </Typography>
        </Grid>
        <Grid item>
        <IconButton>
          <CancelIcon />
        </IconButton>
        </Grid>
      
      </Grid>
      </ListItem>

      </List>
    </Paper>
  )
}

export { Cart }