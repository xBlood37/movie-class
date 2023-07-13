import './cardList.css';

import React from 'react';

import CardFilm from '../CardFilm';

class CardList extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div className="cardlist">
        {movie.map((obj) => {
          return (
            <CardFilm
              key={obj.id}
              id={obj.id}
              title={obj.title}
              poster={obj.poster_path}
              voteAverage={obj.vote_average}
              release={obj.release_date}
              overview={obj.overview}
            />
          );
        })}
      </div>
    );
  }
}

export default CardList;
