import React from "react"
import { makeStyles } from '@material-ui/core/styles'

import {
  Divider,
  Button,
  TextField,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Grid } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import CancelIcon from '@material-ui/icons/Cancel'

const useStyles = makeStyles((theme) => ({
  Title:{ width:150}
}))
/*
<TextField 
      type="number" 
      style={{width: '50px'}} onInput={e => {
        e.target.value = Math
        .max(0, parseInt(e.target.value))
        .toString()
        .slice(0, 2)
      }} min={0} />
*/
function CartItem({
  id,
  img,
  title,
  price,
  count,
  increment,
  decrement,
  removeItem
  }) {
  const classes = useStyles()

  const components = [
    <ListItemAvatar children={
      <Avatar alt="" src={img}/>}/>,
    <div className={classes.Title}>
      <ListItemText primary={title} />
    </div>,
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