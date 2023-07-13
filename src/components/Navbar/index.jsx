import './navbar.css';

import React from 'react';

import { getRateFilm } from '../../services/film';
import Form from '../Form';

class Navbar extends React.Component {
  render() {
    const { onInputChange } = this.props;

    return (
      <>
        <div className="navbar">
          <ul className="tabs-list">
            <li className="tabs-item">
              <button className="tabs">Поиск</button>
            </li>
            <li className="tabs-item">
              <button onClick={getRateFilm} className="tabs">
                Рейтинг
              </button>
            </li>
          </ul>
        </div>
        <Form onInputChange={onInputChange} />
      </>
    );
  }
}

export default Navbar;
