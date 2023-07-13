import { Spin } from 'antd';
import React from 'react';

export default class SpinBlock extends React.Component {
  render() {
    return (
      <div className="spin-block">
        <Spin size="large" />
      </div>
    );
  }
}
