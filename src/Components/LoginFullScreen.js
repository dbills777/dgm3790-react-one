import React, { useState } from 'react';
import { useLoginContext } from '../contexts/LoginContext';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './Login.css';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '25vh',
  },
  image: {
    backgroundImage:
      'url(https://www.pngkit.com/png/full/364-3644816_related-wallpapers-los-pollos-hermanos-png.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'black',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide(props) {
  const classes = useStyles();

  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [member, setMember] = useState('');
  const authContext = useLoginContext();

  const submitHandler = (event) => {
    event.preventDefault();
    setMember({ first_name: first_name, last_name: last_name, email: email });
    authContext.login();
    authContext.setName(first_name);
  };

  console.log(member, first_name);

  return !authContext.isAuth ? (
    <Grid container component='main' className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign Up
          </Typography>
          <form className={classes.form} noValidate onSubmit={submitHandler}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='firstName'
              label='First Name'
              name='firstName'
              autoFocus
              value={first_name}
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
            <TextField
              variant='filled'
              margin='normal'
              required
              fullWidth
              id='lastName'
              label='Last Name'
              name='firstName'
              autoFocus
              value={last_name}
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              className={classes.submit}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  ) : (
    <h1>
      Hello {first_name} {last_name}! Thank You, You Are Signed up for our
      Mailing List
    </h1>
  );
}
