import { makeStyles } from '@material-ui/core/styles'
import { useLocation } from 'react-router-dom'

import { Link } from "react-router-dom"
import SvgBrushFireIcon from './SvgBrushFireIcon'
import SvgCart from './SvgCart'

import React from "react";
import {
  Button,
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core'
export const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  toolbarButtons: {
    marginLeft: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  }
}));

const NaviBar = () => {
  const location = useLocation()
  const classes = useStyles()
  console.log(location.pathname)
  return (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Button 
        children={
        <Typography
          children='brushfire'
          variant="h6"/>}
        startIcon={ <SvgBrushFireIcon />}
        component={Link}
        color="inherit"
        to={'/'}
        edge="start"
        aria-label="menu" />
        <div className={classes.toolbarButtons}>
        {location.pathname !== '/cart' ?
      (
      <Button
        children='cart'
        startIcon={<SvgCart />}
        component={Link}
        variant="outlined"
        color='inherit'
        to={'/cart'}/>) 
      : (
      <Button
        children='Products'
        component={Link}
        variant="outlined"
        color='inherit'
        to={'/'}/>)}
        
    </div>
    </Toolbar>
  </AppBar>
  )
}
export { NaviBar }
