// MJEroC1Zq5HQCntk68LN;

import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuAppBar from './Components/MenuAppBar';
import { GridList } from '@material-ui/core';
import ImageGridList from './Components/GridList'
import Card from './Components/Card';

const App = (props) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters`);
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);
  return (
    <>
      <MenuAppBar search={onchange}/>
      {/* <ImageGridList items={items}  /> */}
      <div className='container'>
        <Card items={items} />
      </div>
    </>
  );
};

export default App;
