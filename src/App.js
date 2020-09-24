// MJEroC1Zq5HQCntk68LN;

import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuAppBar from './Components/MenuAppBar';
import Card from './Components/Card';

const App = (props) => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);
  return (
    <>
      <MenuAppBar getQuery={(q) => setQuery(q)} />
      {/* <ImageGridList items={items}  /> */}
      <div className='container'>
        <Card items={items} />
      </div>
    </>
  );
};

export default App;
