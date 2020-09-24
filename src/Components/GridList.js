import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    padding: 10,
    width: "100%",
    height: '25vh',
  },
}));



 
export default function ImageGridList(props) {
  const {items}=props
  const classes = useStyles();

  return (
    <div key={props.id} className={classes.root}>
      <GridList cellHeight={150} className={classes.gridList} cols={3}>
        {items.map((tile) => (
          <GridListTile key={tile.id} cols={tile.cols || 1}>
            <img src={tile.image} alt={props.name} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
