import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookCard = ({
  itemId, title, author, category,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="book-card d-flex">
      <div className="left-part flex-column">
        <p className="category">{category}</p>
        <h2 className="book-title">{title}</h2>
        <blockquote className="book-author">{author}</blockquote>
        <div className="options d-flex">
          <p className="option">Comments</p>
          <div className="line" />
          <button
            type="button"
            className="delete"
            onClick={() => {
              dispatch(removeBook(itemId));
            }}
          >
            Remove

          </button>
          <div className="line" />
          <p className="option">Edit</p>
        </div>
      </div>
      <div className="center-part d-flex">
        <div className="circular-progress" />
        <div className="data">
          <p className="percentage">64 %</p>
          <p className="completed gray">Completed</p>
        </div>
      </div>
      <div className="big-line" />
      <div className="right-part flex-column">
        <p className="gray">Current chapter</p>
        <p>Chapter 17</p>
        <button type="button" className="update-btn">Update progress</button>

      </div>
    </div>

  );
};

BookCard.propTypes = {
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookCard;
