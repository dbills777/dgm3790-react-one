import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    height: '100%',
    backgroundColor: 'gray',
    margin: '10px',
  },
  media: {
    width: '100%',
    height: '300px',

    paddingTop: '56.25%', // 16:9
  },
  clicked:{
    color: 'red'
  },

  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    width: '100%',
    padding: '2px',
    margin: '5px',
    borderRadius: '50%',
    backgroundColor: 'black',
  },
}));
const favoriteClicked = () => {
  // className={classes.clicked}
};
export default function ListCard(props) {
  const {items}= props
console.log(items)
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return(
  items.map((item)=>{
return (
  <Card key={item.char_id} className={classes.root}>
    <CardHeader
      avatar={
        <Avatar aria-label='recipe' className={classes.avatar}>
          ID {item.char_id}
        </Avatar>
      }
      action={
        <IconButton aria-label='settings'>
          <MoreVertIcon />
        </IconButton>
      }
      title={classes.title}
      subheader={item.name}
    />
    <CardMedia
      className={classes.media}
      image={item.img}
      title='Paella dish'
    />
    <CardContent>
      <Typography variant='body2' color='textSecondary' component='p'>
        <strong>Nick Name: </strong>
        {item.nickname}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label='add to favorites'>
        <FavoriteIcon onClick={favoriteClicked}/>
      </IconButton>
      <IconButton aria-label='share'>
        <ShareIcon />
      </IconButton>
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label='show more'
      >
        <ExpandMoreIcon />
      </IconButton>
    </CardActions>
    <Collapse in={expanded} timeout='auto' unmountOnExit>
      <CardContent>
        <Typography paragraph>Info</Typography>
        <Typography paragraph>
          <strong>Occupation: </strong>
          {item.occupation.join(", ")}
        </Typography>
        <Typography paragraph>
          <strong>Portrayed by : </strong>
          {item.portrayed}
        </Typography>
        <Typography paragraph>
          <strong>Living Status: </strong>
          {item.status}
        </Typography>
      </CardContent>
    </Collapse>
  </Card>
);
  })
  )
}
