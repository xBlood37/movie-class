import './emptyCardListError.css';

import React from 'react';

export default class EmptyCardListError extends React.Component {
  render() {
    return (
      <div className="empty-card-list-error">
        <div className="empty-list-container">
          <p className="empty-error-massage">
            Ой! Похоже, у вас возникли проблемы с загрузкой фильмов. Попробуйте обновить
            страницу или зайти позже.
          </p>
        </div>
      </div>
    );
  }
}
