import './cardFilm.css';

import { Rate } from 'antd';
import React from 'react';

import { addRating } from '../../services/film';

class CardFilm extends React.Component {
  cutText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    let newText = text.slice(0, maxLength);
    let index = newText.lastIndexOf(' ');
    return newText.slice(0, index) + '...';
  };

  onAddRating = (rate) => {
    console.log(this.props.id, rate);
    addRating(this.props.id, rate);
  };

  render() {
    const { title, poster, release, voteAverage, overview, id } = this.props;
    const releaseYear = release.split('-');
    const vote = voteAverage.toString().slice(0, -2);

    const rate = {
      color: vote <= 4 ? 'red' : vote <= 6 ? 'green' : vote > 6 ? '#e4d804' : null,
    };

    const filmOverview =
      overview.length === 0 ? 'Описание не завезли' : this.cutText(overview, 130);

    return (
      <div className="film-card">
        <img
          className="film-poster"
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          alt="постер"
        />
        <div className="top">
          <h5 className="film-title">{title}</h5>
          <span className="film-date">{releaseYear[0]}</span>
        </div>
        <div className="film-overview">
          <p className="overview">{filmOverview}</p>
        </div>
        <div className="genres">
          <ul className="genre_list">
            <li className="genre">action</li>
            <li className="genre">action</li>
          </ul>
        </div>
        <div className="bottom">
          <Rate onChange={(count) => this.onAddRating(count)} />
          <span className="rate" style={rate}>
            {vote}/10
          </span>
        </div>
      </div>
    );
  }
}

export default CardFilm;
