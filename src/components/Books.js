import React from 'react';
import { useSelector } from 'react-redux';
import AddNewBook from './AddNewBook';
import BookCard from './BookCard';

const Books = () => {
  const books = useSelector((store) => store.bookReducer);

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

  // <BookCard
  //   bookData={
  //   {
  //     title: 'The Hunger Games',
  //     category: 'Action',
  //     author: 'Suzanne Collins',
  //     percentage: '64',
  //     chapter: 'Chapter 17',
  //   }
  // }
  // />
  // <BookCard
  //   bookData={
  //   {
  //     title: 'Dune',
  //     category: 'Science fiction',
  //     author: 'Frank Herbert',
  //     percentage: '8',
  //     chapter: 'Chapter3:"A Lesson Learned"',
  //   }
  // }
  // />
  // <BookCard
  //   bookData={
  //   {
  //     title: 'Capital in the Twenty-First Century',
  //     category: 'Economy',
  //     author: 'Thomas Piketty',
  //     percentage: '0',
  //     chapter: 'Introduction',
  //   }
  // }
  // />

  // <div className="horizontal-line" />

  // <AddNewBook />
};

export default Books;
