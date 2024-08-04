import './form.css';

import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    const { onInputChange, rating } = this.props;

    const input = {
      display: rating ? 'none' : 'block',
    };

    return (
      <div className="search">
        <form className="form">
          <div className="search-input">
            <span className="material-symbols-outlined search-icon">search</span>
            <input
              style={input}
              className="form-search-input"
              type="text"
              placeholder="Type to search..."
              onChange={onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
