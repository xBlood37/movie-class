import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    const { onInputChange } = this.props;
    return (
      <div className="search">
        <form className="form">
          <input
            className="form-search-input"
            type="text"
            placeholder="Type to search..."
            onChange={onInputChange}
          />
        </form>
      </div>
    );
  }
}
