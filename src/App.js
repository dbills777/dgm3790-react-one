import React from 'react';
import './App.css';
import Header from './Components/Header';
import Card from './Components/Card';
import thrones from './Data/thrones.json';
import { Button } from '@material-ui/core';

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
        <div className='center'>
          {this.state.episodes.map((episode) => {
            return (
              <Card
                key={episode.id}
                src={episode.image.medium}
                name={episode.name}
                season={episode.season}
                number={episode.number}
              />
            );
          })}
        </div>
      );
    }
    let favorite = null;
    if (this.state.showFavorite) {
      favorite = (
        <div className='center'>
          {this.state.favoriteSeason.map((episode) => {
            return (
              <Card
                key={episode.id}
                src={episode.image.medium}
                name={episode.name}
                season={episode.season}
                number={episode.number}
              />
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
            Show All Episodes
          </Button>
        </div>
        <div className='button'>
          <Button variant='contained' onClick={this.showFavoriteSeason}>
            My Favorite Season
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
