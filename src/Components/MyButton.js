import React from 'react';
import { Button, Typography } from '@material-ui/core';

function MyButton() {
  return (
    <div className='center'>
      <Typography variant='h3' gutterBottom>
        Game of Thrones Episodes
      </Typography>
      <Button color='primary' variant='contained'>
        This is My Button
      </Button>
    </div>
  );
}
export default MyButton;
