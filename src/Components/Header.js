import React from 'react';
import { Typography } from '@material-ui/core';

function Header() {
  return (
    <div className='center header'>
      <Typography variant='h5' gutterBottom>
        First Course Project
      </Typography>
      <div className='center'>
          <Typography variant='h3' gutterBottom>
            Game of Thrones Episode Data
          </Typography>
          </div>
      
    </div>
  );
}
export default Header;
