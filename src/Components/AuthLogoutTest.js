import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const AuthLogoutTest = () => {
  const { logout } = useAuth0();

  return (
    <NavLink to = '/login'>
    <Button color='default' variant = 'contained' onClick={() => logout()}>
      Logout
    </Button>

    </NavLink>
  );
};

export default AuthLogoutTest;
