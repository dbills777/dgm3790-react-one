import './App.css';
import React from 'react';
import MenuAppBar from './Components/MenuAppBar';
import Card from './Components/Card';
import Quotes from './Components/Quote';
import Episodes from './Components/Episodes';
import LoginFullScreen from './Components/LoginFullScreen';
import { Switch, Route } from 'react-router-dom';
import { CharacterContextProvider } from './contexts/CharacterContext';
import { LoginContextProvider } from './contexts/LoginContext';
import { EpisodeContextProvider } from './contexts/EpisodeContext';

const App = () => {
  return (
    <LoginContextProvider>
      <CharacterContextProvider>
        <EpisodeContextProvider>
          <>
            <MenuAppBar />
            <div className='image'></div>

            <div className='container'>
              <Switch>
                <Route path='/quotes' component={Quotes} />
                <Route path='/episodes' component={Episodes} />
                <Route path='/characters' component={Card} />
                <Route path='/' component={LoginFullScreen} />
              </Switch>
            </div>
          </>
        </EpisodeContextProvider>
      </CharacterContextProvider>
    </LoginContextProvider>
  );
};

export default App;
