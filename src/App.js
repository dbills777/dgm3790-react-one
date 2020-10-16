import './App.css';
import React from 'react';
import MenuAppBar from './Components/MenuAppBar';
import Card from './Components/Card';
import Quotes from './Components/Quote';
import Login from './Components/Login';
import { Switch, Route } from 'react-router-dom';
import { CharacterContextProvider } from './contexts/CharacterContext';

const App = () => {
  return (
    <CharacterContextProvider>
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
    </CharacterContextProvider>
  );
};

export default App;
