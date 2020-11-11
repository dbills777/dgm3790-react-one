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
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  header: {
    fontSize: '3rem',
    padding: '1.5rem',
    color: '#999',
    textAlign: 'Center'
  },
  characterWidth:{
    maxWidth: "300px"
  }
});

function createData(title, season, number, date, appears) {
  return { title, season, number, date, appears };
}

export default function BasicTable() {
  const classes = useStyles();
  const episodeContext = useEpisodeContext();
  const allEpisodes = episodeContext.episodes;
  const titles = allEpisodes.map((episode) => {
    return episode;
  });

  console.log(titles);
  const rows = [createData(titles)];
  console.log(rows);
  return (
    <TableContainer component={Paper}>
      <Typography className={classes.header}>
       Full Breaking Bad Episode List
      </Typography>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align='left'>Season</TableCell>
            <TableCell align='left'>Episode Number</TableCell>
            <TableCell align='left'>Original Air Date</TableCell>
            <TableCell align='left'>Appearnces</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.text}>
          {titles.map((row) => (
            <TableRow key={Math.random()}>
              <TableCell component='th' scope='row'>
                {row.title}
              </TableCell>
              <TableCell align='left'>Season: {row.season}</TableCell>
              <TableCell align='left'>Episode: #{row.episode}</TableCell>
              <TableCell align='left'>{row.air_date}</TableCell>
              <TableCell className={classes.characterWidth} align='left'>
                {row.characters.join(', \n')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
