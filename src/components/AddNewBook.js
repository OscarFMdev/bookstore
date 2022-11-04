import React from 'react';

const AddNewBook = () => (
  <section className="add-section">
    <h3>Add New Book</h3>
    <form className="d-flex">
      <input className="title-input" type="text" placeholder="Book title" required />
      <select className="category-input" required>
        <option className="placeholder" value="" disabled selected hidden>Category</option>
        <option value="action">Action</option>
        <option value="action">Economy</option>
        <option value="action">Science fiction</option>
      </select>
      <button className="add-button" type="submit">Add book</button>
    </form>
  </section>
);

export default AddNewBook;
