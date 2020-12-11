import React, { useState } from 'react';
import { useLoginContext } from '../contexts/LoginContext';
import './MenuAppBar.css';
import {
  Drawer,
  List,
  ListItem,
  Divider,
  Toolbar,
  Button,
  IconButton,
  AppBar,
  fade,
  makeStyles,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import AuthLogoutTest from './AuthLogoutTest';

const useStyles = makeStyles((theme) => ({
  // appBar: {
  //   backgroundColor: '#018619',
  //   background: "rgba(255, 255, 255, 0)",
  //   height: '7rem',
  // },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: 'white',

    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },


  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  navLinks: {
    marginRight: '1rem',
    color: '#fff',
    textDecoration: 'none',
  },
  notActive: {
    marginRight: '1rem',
    color: '#999',
    textDecoration: 'none',
    cursor: 'not-allowed',
  },
}));

export default function PrimarySearchAppBar({ getQuery, props }) {
  const classes = useStyles();
  const authContext = useLoginContext();
  const { user, isAuthenticated } = useAuth0();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const alertMessage = () => {
    alert('sign up to view pages');
  };

  return (
    <div className={classes.appBar}>
      <AppBar
        style={{
          background: 'transparent',
          boxShadow: 'none',
          backgroundColor: 'rgba(100, 100, 100, 0.4)',
        }}
      >
        <Toolbar className={classes.appBar}>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            open={drawerOpen}
            onClose={handleDrawerToggle}
            className='drawer'
          >
            <h3 className='drawer-header'>Breaking Bad Application</h3>
            <Divider />
            <List className='color'>
              <ListItem>
                <NavLink
                  to='/characters'
                  className={classes.navLinks}
                  onClick={handleDrawerToggle}
                >
                  Characters
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink
                  to='/quotes'
                  onClick={handleDrawerToggle}
                  className={classes.navLinks}
                >
                  Quotes
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink
                  to='/episodes'
                  className={classes.navLinks}
                  onClick={handleDrawerToggle}
                >
                  Episodes
                </NavLink>
              </ListItem>
            </List>
          </Drawer>
          {!authContext.isAuth && !isAuthenticated ? (
            <>
              <div>
                <NavLink
                  className={classes.notActive}
                  to='#'
                  onClick={alertMessage}
                >
                  Characters
                </NavLink>
                <NavLink
                  className={classes.notActive}
                  to='#'
                  onClick={alertMessage}
                >
                  Quotes
                </NavLink>
                <NavLink
                  className={classes.notActive}
                  to='#'
                  onClick={alertMessage}
                >
                  Episode Table
                </NavLink>
              </div>
            </>
          ) : (
            <div>
              <NavLink className={classes.navLinks} to='/characters'>
                Characters
              </NavLink>
              <NavLink className={classes.navLinks} to='/quotes'>
                Quotes
              </NavLink>
              <NavLink className={classes.navLinks} to='/episodes'>
                Episodes Table
              </NavLink>
            </div>
          )}

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge='end'
              aria-label='account of current user'
              aria-haspopup='true'
              color='inherit'
            >
              {/* <AccountCircle /> */}
            </IconButton>
          </div>

          <NavLink className={classes.navLinks} to='/'>
            {!isAuthenticated ? (
              <>
                <Button> Sign UP </Button>
              </>
            ) : (
              <>
                <p>
                  <AuthLogoutTest onClick={() => isAuthenticated.logout()} />
                  {user.name}{' '}
                  <img
                    className={'profile-pic'}
                    src={user.picture}
                    alt={user.name}
                  ></img>{' '}
                </p>
              </>
            )}
            {!authContext.isAuth ? (
              <Button></Button>
            ) : (
              <>
                <Button onClick={() => authContext.login()}>Logout</Button>
                <img
                  className={'profile-pic'}
                  src={
                    'https://www.pngitem.com/pimgs/m/79-797310_breaking-bad-heisenberg-logo-hd-png-download.png'
                  }
                  alt={'alt'}
                ></img>
              </>
            )}
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}
