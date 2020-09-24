// MJEroC1Zq5HQCntk68LN;

import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuAppBar from './Components/MenuAppBar';
import Card from './Components/Card';
import Quote from './Components/Quote'

const App = (props) => {
  const [resourceType, setResourceType] = useState('characters?name');
  const [items, setItems] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/${resourceType}=${query}`
      )
      if(resourceType=='characters?name'){
        setItems(result.data);
        console.log(items)
        console.log(resourceType)
      }
      if (resourceType == 'quote/random?author') {
        setQuotes(result.data);
        console.log(quotes);
        console.log(resourceType);
      }
      if (resourceType == 'episodes') {
        // setQuotes(result.data);
        console.log(quotes);
        setResourceType('quote/random?author')
      }
    };
    fetchItems();
  }, [query, resourceType]);

  useEffect(() => {
    console.log('render')
    
  }, [resourceType])
  return (
    <>
      <MenuAppBar getQuery={(search) => setQuery(search)} />
      <div className='image'></div>
      <div className='buttons'>
        <button onClick={() => setResourceType('characters?name')}>
          characters
        </button>
        <button onClick={() => setResourceType('quote/random?author')}>
          Get a Random Quote
        </button>
        <button onClick={() => setResourceType('episodes')}>NewQuote</button>
      </div>
      <div className='container'>
        {resourceType == 'characters?name' ? <Card items={items} /> : null}
        {resourceType == 'quote/random?author' ? (
          <Quote quotes={quotes} cast={items} />
        ) : null}
      </div>
    </>
  );
};

export default App;
