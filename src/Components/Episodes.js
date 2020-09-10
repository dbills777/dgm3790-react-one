import React from 'react';
import thrones from '../Data/thrones.json';
// import SimpleSelect from './Select';
import { Button, Typography } from '@material-ui/core';

console.log(thrones._embedded.episodes);

class Episodes extends React.Component {
  state = {
    episodeArray: thrones._embedded.episodes,
    season1: thrones._embedded.episodes.filter((season) => season.season === 1),
    // season2: thrones._embedded.episodes.filter((season) => season.season === 2),
    // season3: thrones._embedded.episodes.filter((season) => season.season === 3),
    // season4: thrones._embedded.episodes.filter((season) => season.season === 4),
    // season5: thrones._embedded.episodes.filter((season) => season.season === 5),
    season6: thrones._embedded.episodes.filter((season) => season.season === 6),
  };

  HandleSeason = (value) => {
    const seasons = [...this.state.episodeArray];
    this.setState({
      episodeArray: this.state.season6
    })
    console.log('you clicked')
  };

  render() {
    return (
      <React.Fragment>
        <div className='center'>
          <Typography variant='h3' gutterBottom>
            Game of Thrones Episodes
          </Typography>
          <Button
            color='primary'
            variant='contained'
            onClick={this.HandleSeason}
          >
           Filter Season 6
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
