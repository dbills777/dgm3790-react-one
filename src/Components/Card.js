import React from 'react';
const card = (props) => {
  const { name, src, season, number } = props;

  return (
    <div className='card'>
      <p>
        <strong>Title:</strong> {name}
      </p>
      <img src={src} alt='episode pic'></img>
      <p>
        <strong>Season:</strong> {season} <strong>Episode:</strong>{' '}
        {number}
      </p>
    </div>
  );
};
export default card;
