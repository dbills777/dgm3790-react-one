import './App.css';
import React from 'react';
import MenuAppBar from './Components/MenuAppBar';
import Card from './Components/Card';
import Quotes from './Components/Quote';
import Login from './Components/Login';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <MenuAppBar />
      <div className='image'></div>

      <div className='container'>
        <Switch>
          <Route path='/quotes' component={Quotes} />
          <Route path='/characters' component={Card} />
          <Route path='/' exact component={Login} />
        </Switch>
      </div>
    </>
  );
};

export default App;
  // const [resourceType, setResourceType] = useState('login');
  // const [items, setItems] = useState([]);
  // const [quotes, setQuotes] = useState([]);
  // const [query, setQuery] = useState('');

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     const result = await axios(
  //       `https://www.breakingbadapi.com/api/${resourceType}=${query}`
  //     );
  //     if (resourceType === 'characters?name') {
  //       setItems(result.data);
  //       console.log(result);
  //     }
  //     if (resourceType === 'quote/random?author') {
  //       setQuotes(result.data);
  //     }
  //     if (resourceType === 'episodes') {
  //       setResourceType('quote/random?author');
  //     }
  //   };
  //   fetchItems();
  // }, [query, resourceType]);