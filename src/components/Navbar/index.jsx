import './navbar.css';

import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import React from 'react';

import Form from '../Form';

class Navbar extends React.Component {
  render() {
    const { onInputChange, onRatedFilm, onAllFilm, rating } = this.props;

    return (
      <div className="navbar-form-container">
        <div className="navbar">
          <ul className="tabs-list">
            <li className="tabs-item">
              <Tooltip title="Search">
                <Button
                  shape="circle"
                  onClick={() => onAllFilm()}
                  icon={<SearchOutlined />}
                  type="primary"
                ></Button>
              </Tooltip>
            </li>
            <li className="tabs-item">
              <Button onClick={onRatedFilm}>Рейтинг</Button>
            </li>
          </ul>
        </div>
        <Form onInputChange={onInputChange} rating={rating} />
      </div>
    );
  }
}

export default Navbar;
