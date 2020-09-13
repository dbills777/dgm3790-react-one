import React from 'react';
import thrones from '../Data/thrones.json';
// import SimpleSelect from './Select';

import { Button, Typography } from '@material-ui/core';

// console.log(thrones._embedded.episodes);

class Episodes extends React.Component {
  state = {
    episodeArray: thrones._embedded.episodes,

    season4: thrones._embedded.episodes.filter((season) => season.season === 4),
  };

  HandleSeason = () => {
    // const seasons = [...this.state.episodeArray];
    this.setState({
      episodeArray: this.state.season4,
    });
  };
  ShowAllSeasons = () => {
    this.setState({
      episodeArray: thrones._embedded.episodes,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className='center'>
          <Typography variant='h3' gutterBottom>
            Game of Thrones Episode Data
          </Typography>
          <div className='button'>
            <Button variant='contained' onClick={this.HandleSeason}>
              My Favorite Season
            </Button>
          </div>
          <Button
            variant='contained'
            onClick={this.ShowAllSeasons}
          >
            Show All Seasons
          </Button>
        </div>
        <div className='container'>
          {/* <SimpleSelect /> */}
          {this.state.episodeArray.map((episode) => {
            return (
              <div className='card' key={episode.id}>
                <p>
                  <strong>Title:</strong> {episode.name}
                </p>
                <img src={episode.image.medium} alt='episode pic'></img>
                <p>
                  <strong>Season:</strong> {episode.season}{' '}
                  <strong>Episode:</strong> {episode.number}
                </p>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
export default Episodes;
