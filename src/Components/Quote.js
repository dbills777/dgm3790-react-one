import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Quote() {
  const [quotes, setQuotes] = useState([]);
  const [quotechange, SetQuotechange] = useState('something')

  const style = {
    color: 'white',
    fontSize: '1.5rem',
    maxWidth: '75%',
  };
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/quote/random?author`
      );
      setQuotes(result.data);
      console.log(result.data);
    };
    fetchItems();
    SetQuotechange(quotes)
  }, [quotechange]);
  const getNewQuote = () => {
    SetQuotechange(quotes)
  };
  return quotes.map((item) => {
    // const author = item.author;

    // const image = cast.filter((person) => {
    //   return person.name === author || person.nickname === author;
    // });
    // const photo = image.map((person) => person.img);
    return (
      <div key={item.quote_id} style={style}>
        <em className='italics'>
          <h1>
            <strong></strong> "{item.quote}"
          </h1>
        </em>
        <p className='flex'>
          {/* {image.length ? (
            <img alt={photo.id} className='img' src={photo}></img>
          ) : null} */}
          <strong></strong> -{item.author}, {item.series}
        </p>
        <button onClick={getNewQuote}>New quote</button>
      </div>
    );
  });
}
