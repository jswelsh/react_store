import Avatar from '@material-ui/core/Avatar'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const Default = () => {
  return (
    <CardHeader
    avatar={
      <Avatar aria-label="">
      </Avatar>
    }
    action={
      <IconButton aria-label="">
        <MoreVertIcon />
      </IconButton>
    }
    title="404 Page Not Found"
    subheader="This is probably our fault, but if maybe it's yours..."
    />
  )
}

export { Default}