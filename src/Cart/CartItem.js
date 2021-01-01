import React from "react"
import { makeStyles } from '@material-ui/core/styles'

import { useState } from 'react'
import { Divider, TextField, ListItem, ListItemAvatar, ListItemText, Typography, Grid } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'

import CancelIcon from '@material-ui/icons/Cancel'

const useStyles = makeStyles((theme) => ({
  Title:{
    width:150
  }
}))

const gridify = (component) => {
  return (
    <Grid item>
      {component}
    </Grid>
  )
}
function CartItem({product}) {
  const classes = useStyles()

  const components = [(
    <ListItemAvatar>
      <Avatar alt="" src={product.img} />
    </ListItemAvatar>),(
    <div className={classes.Title}>
      <ListItemText primary={product.title} />
    </div>),(
      <TextField 
      type="number" 
      style={{width: '50px'}} onInput={e => {
        e.target.value = Math
        .max(0, parseInt(e.target.value))
        .toString()
        .slice(0, 2)
      }} min={0} />),(
      <Typography>
        ${product.price}
      </Typography>),(
      <IconButton size='small'>
        <CancelIcon />
      </IconButton>)
    ]

  return (<>
    <ListItem>
      <Grid container direction="row" justify="space-between" alignItems="center">
        {components.map(component => {
          return gridify(component)})}
      </Grid>
    </ListItem>
    <Divider />
  </>);
}

export {CartItem}