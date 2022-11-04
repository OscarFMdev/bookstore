import React from 'react';

const BookCard = () => (
  <div className="book-card d-flex">
    <div className="left-part flex-column">
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
    <div className="center-part d-flex">
      <div className="circular-progress" />
      <div className="data">
        <p className="percentage">64%</p>
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

export default BookCard;
