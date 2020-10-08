import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuAppBar from './Components/MenuAppBar';
import Card from './Components/Card';
import Quote from './Components/Quote';
import Login from './Components/Login'
const App = (props) => {
  const [resourceType, setResourceType] = useState('characters?name');
  const [items, setItems] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/${resourceType}=${query}`
      );
      if (resourceType === 'characters?name') {
        setItems(result.data);
        console.log(result);
      }
      if (resourceType === 'quote/random?author') {
        setQuotes(result.data);
      }
      if (resourceType === 'episodes') {
        setResourceType('quote/random?author');
      }
    };
    fetchItems();
  }, [query, resourceType]);

  return (
    <>
      <MenuAppBar getQuery={(search) => setQuery(search)} />
      <div className='image'></div>
      <div className='buttons'>
        <button
          className='btn'
          onClick={() => setResourceType('characters?name')}
        >
          characters
        </button>
        <button
          className='btn'
          onClick={() => setResourceType('quote/random?author')}
        >
          Get a Random Quote
        </button>
        <button className='btn' onClick={() => setResourceType('episodes')}>
          NewQuote
        </button>
        <button className='btn' onClick={() => setResourceType('login')}>
          Login
        </button>
      </div>
      <div className='container'>
        {/* <Switch route = '/login'>
          <Login/>
        </Switch> */}
        {resourceType === 'characters?name' ? <Card items={items} /> : null}
        {resourceType === 'quote/random?author' ? (
          <Quote quotes={quotes} cast={items} key={items.id} />
        ) : null}
        {resourceType === 'login'? <Login/>: null}
      </div>
    </>
  );
};

export default App;
