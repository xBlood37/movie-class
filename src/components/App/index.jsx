import './app.css';

import { debounce } from 'lodash';
import React from 'react';

import { getFilm, searchFilm } from '../../services/film';
import CardList from '../CardList';
import Error from '../Error';
import Navbar from '../Navbar';
import PaginationBlock from '../Pagination';
import SpinBlock from '../SpinBlock';

class App extends React.Component {
  state = {
    movie: [],
    errors: false,
    totalPages: 0,
  };

  onError = () => {
    this.setState({
      errors: true,
    });
  };

  film = (fn, event) => {
    fn(event)
      .then((data) => {
        this.setState({
          movie: [...data.results],
          totalPages: data.total_pages,
        });
      })
      .catch(() => this.onError());
  };

  componentDidMount() {
    this.film(getFilm);
  }

  onInputChange = (e) => {
    if (e.target.value.trim() === '') {
      this.setState({ movie: [] });
      return this.film(getFilm);
    } else {
      this.setState({ movie: [] });
      this.film(searchFilm, e.target.value);
    }
  };

  onPaginationChange = (current) => {
    this.setState({ movie: [] });
    getFilm(current)
      .then((data) => {
        this.setState({ movie: [...data.results] });
      })
      .catch(() => this.onError());
  };

  render() {
    const { errors, movie, totalPages } = this.state;

    const cardList = <CardList movie={movie} />;
    const spinBlock = <SpinBlock />;
    const error = <Error />;

    const list = movie.length ? cardList : spinBlock;
    const movies = errors ? error : list;

    return (
      <>
        <div className="app">
          <header className="header">
            <Navbar onInputChange={debounce(this.onInputChange, 450)} />
          </header>
          <main className="main">{movies}</main>
          <PaginationBlock
            onPaginationChange={this.onPaginationChange}
            totalPages={totalPages}
          />
        </div>
      </>
    );
  }
}

export default App;
