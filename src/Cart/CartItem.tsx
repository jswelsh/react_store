import {FC} from 'react'
import { makeStyles } from '@material-ui/core/styles'

import {
  Divider,
  Avatar,
  Button,
  ListItem,
  IconButton,
  ListItemAvatar,
  ListItemText,
  Typography,
  Grid
} from '@material-ui/core'

import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import CancelIcon from '@material-ui/icons/Cancel'

const useStyles = makeStyles((theme) => ({
  Title:{ width:150}
}))
type IProduct = {
  id:number
  img:string
  title:string
  price:number
  count:number
}
type ICartItem = {
  product:IProduct
  increment:(id: number) => void
  decrement:(id: number) => void
  removeItem:(id: number) => void
}

const CartItem: FC<ICartItem> = ({
  product,
  increment,
  decrement,
  removeItem
  }) => {
  const classes = useStyles()
  const {id, img, title, price, count} = product
  const components = [
    <ListItemAvatar children={
      <Avatar alt="" src={img}/>}/>,
    <ListItemText className={classes.Title} primary={title} />,
    <>
      <IconButton
        children={<RemoveIcon />}
        onClick={()=>decrement(id)}
        size='small'/>
      <Button
        style={{color:'black'}}
        disabled={true}
        children={count}/>
      <IconButton
        children={<AddIcon />}
        onClick={()=>increment(id)}
        size='small'/>
    </>,
    <Typography
      children={'$'+price} />,
    <IconButton
      children={<CancelIcon />}
      onClick={()=>removeItem(id)}
      size='small'/>
    ]
  return (<>
  <ListItem
    children={
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      children={
        components.map(
          component => (
          <Grid children={component} item/>))}/>}/>
  <Divider />
  </>);
}

export {CartItem}