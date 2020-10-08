import './App.css';
import React from 'react';
import MenuAppBar from './Components/MenuAppBar';
import Card from './Components/Card';
import Quotes from './Components/Quote';
import Login from './Components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
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

  return (
    <>
      <Router>
        <MenuAppBar />
        <div className='image'></div>

        {/* <div className='buttons'>
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
          Get a Random Quote
        </button>
        <button className='btn' onClick={() => setResourceType('login')}>
          Login
        </button>
      </div> */}
        <div className='container'>
          <Switch>
            <Route path='/characters'>
              <Card />
            </Route>
            <Route path='/quotes'>
              <Quotes />
            </Route>
            <Route path='/'>
              <Login />
            </Route>
          </Switch>
          {/* <Switch path='/characters' exact>
            {/* <Card /> */}
          {/* </Switch> */}
          {/* {resourceType === 'login'? <Login/>: null}
        {resourceType === 'characters?name' ? <Card items={items} /> : null}
        {resourceType === 'quote/random?author' ? (
          <Quote quotes={quotes} cast={items} key={items.id} />
        ) : null} */}
        </div>
      </Router>
    </>
  );
};

export default App;
