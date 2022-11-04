import React from 'react';

const AddNewBook = () => (
  <section className="add-section">
    <h3>Add New Book</h3>
    <form className="d-flex">
      <input className="title-input" type="text" placeholder="Book title" required />
      <input className="author-input" type="text" placeholder="Author" required />
      <button className="add-button" type="submit">Add book</button>
    </form>
  </section>
);

export default AddNewBook;
