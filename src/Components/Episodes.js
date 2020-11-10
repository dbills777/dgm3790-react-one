import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useEpisodeContext } from '../contexts/EpisodeContext';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },

});

function createData(title, season, number, date, appears) {
  return { title, season, number, date, appears };
}

export default function BasicTable() {
  const classes = useStyles();
  const episodeContext = useEpisodeContext();
  const allEpisodes = episodeContext.episodes;
  //   console.log(allEpisodes);
  const titles = allEpisodes.map((episode) => {
    console.log(episode.characters);
    return episode;
  });

  console.log(titles);
  const rows = [createData(titles)];
  console.log(rows);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align='right'>Season</TableCell>
            <TableCell align='right'>Episode Number</TableCell>
            <TableCell align='right'>Air Date</TableCell>
            <TableCell align='right'>Starring</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.text}>
          {titles.map((row) => (
            <TableRow key={Math.random()}>
              <TableCell component='th' scope='row'>
                {row.title}
              </TableCell>
              <TableCell align='right'>{row.season}</TableCell>
              <TableCell align='right'>{row.episode}</TableCell>
              <TableCell align='right'>{row.air_date}</TableCell>
              <TableCell align='right'>{row.characters}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
