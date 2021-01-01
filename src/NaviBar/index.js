import { makeStyles } from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub'

import { Link } from "react-router-dom"
import SvgBrushFireIcon from './SvgBrushFireIcon'
import SvgCart from './SvgCart'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import LinkItem from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import React from "react";

export const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  toolbarButtons: {
    marginLeft: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const NaviBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Button
        component={Link}
        color="inherit"
        to={'/'}
        edge="start"
        aria-label="menu"
        startIcon={ <SvgBrushFireIcon /> }>
          <Typography variant="h6">
            brushfire
          </Typography>
        </Button>
        
        <div className={classes.toolbarButtons}>
        {/* <IconButton onClick={() => handleThemeChange()}> */}
          {/* {darkState ? <Brightness4Icon/> : <Brightness7Icon/>} */}
        {/* </IconButton> */}
        <Button
          component={Link}
          variant="outlined"
          color='inherit'
          to={'/cart'}
          // edge="start"
          startIcon={<SvgCart />}
          > cart
        </Button>
{/*         <LinkItem
          component={IconButton}
          color='inherit'
          target="_blank"
          href={'https://github.com/jswelsh'}>
          <GitHubIcon  fontSize={'medium'}/>
        </LinkItem> */}
      </div>
      </Toolbar>
    </AppBar>
  )
}
export { NaviBar }
