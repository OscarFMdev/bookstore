import React from 'react';
import { useSelector } from 'react-redux';
import AddNewBook from './AddNewBook';
import BookCard from './BookCard';

const Books = () => {
  const books = useSelector((store) => store.books);
  return (
    <>
      {
        books.map(
          (book) => (
            <BookCard
              key={book.id}
              id={book.id}
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
