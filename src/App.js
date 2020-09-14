import React from 'react';
import './App.css';
import Header from './Components/Header';
// import Card from './Components/Card';
import thrones from './Data/thrones.json';
import { Button } from '@material-ui/core';
import ComplexGrid from './Components/Card';

class App extends React.Component {
  state = {
    episodes: thrones._embedded.episodes,
    showEpisodes: false,
    favoriteSeason: thrones._embedded.episodes.filter(
      (season) => season.season === 4
    ),
    showFavorite: false,
  };
  toggleEpisodesHandler = () => {
    const toggleEpisodes = this.state.showEpisodes;
    console.log(this.state.showEpisodes);
    this.setState({
      showEpisodes: !toggleEpisodes,
    });
  };
  showFavoriteSeason = () => {
    const favorite = this.state.showFavorite;
    console.log(this.state.favoriteSeason);
    this.setState({
      showFavorite: !favorite,
    });
  };
  render() {
    let episodes = null;
    if (this.state.showEpisodes) {
      episodes = (
        <div className=' container'>
          {this.state.episodes.map((episode) => {
            return (
              <div className='card' key={episode.id}>
                <ComplexGrid
                  src={episode.image.original}
                  name={episode.name}
                  season={episode.season}
                  number={episode.number}
                  date={episode.airdate}
                />
              </div>
            );
          })}
        </div>
      );
    }
    let favorite = null;
    if (this.state.showFavorite) {
      favorite = (
        <div className='center container'>
          {this.state.favoriteSeason.map((episode) => {
            return (
              <div className='card' key={episode.id}>
                <ComplexGrid
                  src={episode.image.original}
                  name={episode.name}
                  season={episode.season}
                  number={episode.number}
                  date={episode.airdate}
                />
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <div className='App'>
        <Header />
        <div className='button'>
          <Button variant='contained' onClick={this.toggleEpisodesHandler}>
            Show/Hide All Episodes
          </Button>
        </div>
        <div className='button'>
          <Button variant='contained' onClick={this.showFavoriteSeason}>
            Show/Hide My Favorite Season
          </Button>
        </div>
        {episodes}
        {favorite}
        {/* <Episodes /> */}
      </div>
    );
  }
}

export default App;
