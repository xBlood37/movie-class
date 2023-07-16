import './navbar.css';

import React from 'react';

import Form from '../Form';

class Navbar extends React.Component {
  render() {
    const { onInputChange, onRatedFilm, onAllFilm, rating } = this.props;

    return (
      <>
        <div className="navbar">
          <ul className="tabs-list">
            <li className="tabs-item">
              <button className="tabs" onClick={() => onAllFilm()}>
                Поиск
              </button>
            </li>
            <li className="tabs-item">
              <button onClick={onRatedFilm} className="tabs">
                Рейтинг
              </button>
            </li>
          </ul>
        </div>
        <Form onInputChange={onInputChange} rating={rating} />
      </>
    );
  }
}

export default Navbar;
