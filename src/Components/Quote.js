import { Divider } from '@material-ui/core';
import React, { useState } from 'react';

export default function Quote(props) {
  const { quotes, cast } = props;
  const style = {
      color: "white",
      fontSize: '1.5rem',
      maxWidth: '50%'
  }  

  console.log(quotes)
  
  return quotes.map((item) => {
      const author = item.author
       const image = cast.filter((person)=>{
        return person.name===author
    })
    const photo = image.map(person=>person.img)
    console.log(image)
    return (
      <div style={style}>
        <em>
          <h1>
            <strong></strong> "{item.quote}"
          </h1>
        </em>
        <p className="flex">
          <img className='img' src={photo}></img>
          <strong></strong> -{item.author}, {item.series}
        </p>
      </div>
    );
  });
  
}
