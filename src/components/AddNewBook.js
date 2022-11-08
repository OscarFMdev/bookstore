import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddNewBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const getTitle = ({ target }) => setTitle(target.value);
  const getAuthor = ({ target }) => setAuthor(target.value);
  const getCategory = (({ target }) => setCategory(target.value));

  const addToStore = (title, author) => {
    const book = {
      id: uuid(),
      title,
      author,
      category,
    };
    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
  };

  return (
    <section className="add-section">
      <h3>Add New Book</h3>
      <form className="d-flex">
        <input className="title-input" onChange={getTitle} type="text" placeholder="Book title" value={title} required />
        <input className="author-input" onChange={getAuthor} type="text" placeholder="Author" value={author} required />
        <select onChange={getCategory} required>
          <option value="Unkown" hidden>Genre</option>
          <option value="Action">Action</option>
          <option value="Programming">Programming</option>
          <option value="Economy">Economy</option>
          <option value="Math">Math</option>
          <option value="Thriller">thriller</option>
        </select>
        <button
          className="add-button"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            addToStore(title, author);
          }}
        >
          Add book

        </button>
      </form>
    </section>
  );
};

export default AddNewBook;
