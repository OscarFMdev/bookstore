import React from 'react';
import PropTypes from 'prop-types';

const BookCard = ({ bookData }) => (
  <div className="book-card d-flex">
    <div className="left-part flex-column">
      <p className="category">{bookData.category}</p>
      <h2 className="book-title">{bookData.title}</h2>
      <blockquote className="book-author">{bookData.author}</blockquote>
      <div className="options d-flex">
        <p className="option">Comments</p>
        <div className="line" />
        <p className="option">Remove</p>
        <div className="line" />
        <p className="option">Edit</p>
      </div>
    </div>
    <div className="center-part d-flex">
      <div className="circular-progress" />
      <div className="data">
        <p className="percentage">
          {bookData.percentage}
          {' '}
          %
        </p>
        <p className="completed gray">Completed</p>
      </div>
    </div>
    <div className="big-line" />
    <div className="right-part flex-column">
      <p className="gray">Current chapter</p>
      <p>{bookData.chapter}</p>
      <button type="button" className="update-btn">Update progress</button>

    </div>
  </div>
);

BookCard.propTypes = {
  bookData: PropTypes.shape.isRequired,
};

export default BookCard;
