import './pagination.css';

import { Pagination } from 'antd';
import React from 'react';

export default class PaginationBlock extends React.Component {
  render() {
    const { totalPages, onPaginationChange, rating } = this.props;
    return (
      <div className="pagination-main">
        <Pagination
          onChange={(current) => onPaginationChange(current)}
          defaultCurrent={1}
          total={!rating ? totalPages : null}
          showSizeChanger={false}
        />
      </div>
    );
  }
}
