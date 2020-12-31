import { List, Input, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Avatar from '@material-ui/core/Avatar'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'

import MoreVertIcon from '@material-ui/icons/MoreVert'
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  Paper:{
    width: 800,
  },
  PaperW:{
    display: 'flex',
    width: 1200
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
    <div>
    <Paper className={classes.PaperW}>
<span>

        <Typography variant='h3'>
          Shopping Cart
        </Typography>
</span>


    <Paper className={classes.Paper}>
    <List className={classes.root}>
      <ListItem  >
        <ListItemAvatar className={classes.ListItem}>
          <Avatar alt="" src={product.img} />
        </ListItemAvatar>
        <ListItemText
          className={classes.ListItem}
          primary={product.title}
        />
        <div className={classes.ListItem}>
          <Input
            className={classes.AmountField} 
            type="number" />
        </div>
        <Typography
        className={classes.ListItem}>
          ${product.price}
        </Typography>
        <IconButton edge="end" >
          <CancelIcon />
        </IconButton>
      </ListItem>

      <ListItem >
        <ListItemAvatar className={classes.ListItem}>
          <Avatar alt="" src={product2.img} />
        </ListItemAvatar>
        <ListItemText
          className={classes.ListItem}
          primary={product2.title}
        />
        <div className={classes.ListItem}>
          <Input
            className={classes.AmountField} 
            type="number" />
        </div>
        <Typography
          className={classes.ListItem}>
          ${product2.price}
        </Typography>

        <IconButton edge="end">
          <CancelIcon />
        </IconButton>
      </ListItem>
      </List>
      </Paper>
    </Paper>
    </div>
  )
}

export { Cart }