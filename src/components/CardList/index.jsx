import './cardList.css';

import React from 'react';

import CardFilm from '../CardFilm';
import EmptyCardListError from '../EmptyCardListError';

class CardList extends React.Component {
  movieLength(mov) {
    if (!mov.length) return <EmptyCardListError />;

    return (
      <div className="cardlist">
        {mov.map((obj) => {
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

  render() {
    const { movie } = this.props;

    return this.movieLength(movie);
  }
}

export default CardList;
