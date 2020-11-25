import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useEpisodeContext } from '../contexts/EpisodeContext';
import { Typography } from '@material-ui/core';



const columns = [
  { id: 'title', label: 'Title', minWidth: 170 },
  { id: 'season', label: 'Season', minWidth: 100 },
  { id: 'episode', label: 'Episode Number', minWidth: 100 },
  {
    id: 'air_date',
    label: 'Original Air Date',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'characters',
    label: 'Appearances',
    minWidth: 170,
    align: 'right',
    format: (value) => value.join(', \n'),
  },
];

function createData(title, season, number, date, appears) {
  return { title, season, number, date, appears };
}



const useStyles = makeStyles({
  root: {
    width: '80%',
  },
  container: {
    maxHeight: 500,
  },
  table: {
    scrollbar: '#F5f5f5',
    minWidth: 650,
    color: '#111',
    backgroundColor: fade('#333', 0.45),
  },
  header: {
    backgroundColor: fade('#333', 0.45),
    fontSize: '3rem',
    padding: '1.5rem',
    color: '#222',
    textAlign: 'Center',
    textDecoration: 'underline',
  },
  row: {
    '&:hover': {
      backgroundColor: fade('#333', 0.25),
    },
  },
  
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const episodeContext = useEpisodeContext();
  const allEpisodes = episodeContext.episodes;
  const titles = allEpisodes.map((episode) => {
    return episode;
  });
  let rows = [createData(titles)];
  console.log(titles);
  console.log(rows[0].title);
  rows = rows[0].title
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Typography className={classes.header}>
          Full Breaking Bad Episode List
        </Typography>
        <Table stickyHeader aria-label='sticky table' className={classes.table}>
          <TableHead>
            <TableRow className={classes.table}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role='checkbox'
                    tabIndex={-1}
                    key={row.episode_id}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'string'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
