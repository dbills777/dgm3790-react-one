import './App.css';
import React from 'react';
import MenuAppBar from './Components/MenuAppBar';
import Card from './Components/Card';
import Quotes from './Components/Quote';
// import Login from './Components/Login';
import LoginFullScreen from './Components/LoginFullScreen';
import { Switch, Route } from 'react-router-dom';
import { CharacterContextProvider } from './contexts/CharacterContext';
import { LoginContextProvider } from './contexts/LoginContext';
// import SignUp from './Components/Form';

const App = () => {
  return (
    <LoginContextProvider>
    <CharacterContextProvider>
      <>
        <MenuAppBar />
        <div className='image'></div>

        <div className='container'>
          <Switch>
            <Route path='/quotes' component={Quotes} />
            <Route path='/characters' component={Card} />
            <Route path='/' exact component={LoginFullScreen} />
          </Switch>
        </div>
      </>
    </CharacterContextProvider>
    </LoginContextProvider>
  );
};

export default App;
