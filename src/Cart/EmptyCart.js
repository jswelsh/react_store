import React from "react"
import { Paper, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom"


const useStyles = makeStyles((theme) => ({
  Paper:{
    backgroundColor: theme.palette.background.paper,
    textAlign: 'center',
    margin: theme.spacing(6),
    padding: theme.spacing(3, 2, 1),
    width: '90%',
  },
  Button:{
    margin:theme.spacing(4)
  }
}))
const EmptyCart = () => {
const classes = useStyles()
  return (
  <Paper className={classes.Paper}>
    <Typography
      children="That's unfortunate,"
      variant='subtitle1'/>
    <Typography
      children='Your Cart Is Empty!'
      variant='h5'/>
    <Button
      children='continue shopping'
      startIcon={<ArrowBackIcon />}
      component={Link}
      className={classes.Button}
      variant="contained"
      color='primary' to={'/'} />
  </Paper>
  )
}
export { EmptyCart }
