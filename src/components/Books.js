import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';
import AddNewBook from './AddNewBook';
import BookCard from './BookCard';

const Books = () => {
  const books = useSelector((store) => store.books);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getBooks); }, []);
  return (
    <>
      {
        books.map(
          (book) => (
            <BookCard
              key={book.item_id}
              itemId={book.item_id}
              title={book.title}
              category={book.category}
              author={book.author}
            />
          ),
        )
      }
      <AddNewBook />
    </>
  );
};

export default Books;
