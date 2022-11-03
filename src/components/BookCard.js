import React from 'react';

const BookCard = () => (
  <div className="book-card d-flex">
    <div className="left-part d-flex flex-column">
      <p className="category">Action</p>
      <h2 className="book-title">The Hunger Games</h2>
      <blockquote className="book-author">Suzanne Collins</blockquote>
      <div className="options d-flex">
        <p className="option">Comments</p>
        <div className="line" />
        <p className="option">Remove</p>
        <div className="line" />
        <p className="option">Edit</p>
      </div>
    </div>
  </div>
);

export default BookCard;
