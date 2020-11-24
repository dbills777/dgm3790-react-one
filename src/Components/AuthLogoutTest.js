import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';
import {  Redirect } from 'react-router-dom';

const AuthLogoutTest = () => {
  const { logout } = useAuth0();

  return (
    <Redirect to="/">
      <Button color='default' variant='contained' onClick={() => logout()} >
        Logout
      </Button>
    </Redirect>
  );
};

export default AuthLogoutTest;
