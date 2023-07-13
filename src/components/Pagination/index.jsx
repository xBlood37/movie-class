import './pagination.css';

import { Pagination } from 'antd';
import React from 'react';

export default class PaginationBlock extends React.Component {
  render() {
    const { totalPages, onPaginationChange } = this.props;
    return (
      <div className="pagination-main">
        <Pagination
          onChange={(current) => onPaginationChange(current)}
          defaultCurrent={1}
          total={totalPages ? totalPages * 10 : 50}
          showSizeChanger={false}
        />
      </div>
    );
  }
}
