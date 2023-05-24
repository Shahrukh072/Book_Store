import React from 'react';
import '../styles/tailwind.css';
import '../styles/featuredbooks.css';

const FeaturedBooks = () => {
  const books = [
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
      image: '/images/books1.jpeg',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      image: '/images/books2.jpeg',
    },
    {
      id: 2,
      title: 'Book 3',
      author: 'Author 3',
      image: '/images/books3.jpeg',
    },
    {
      id: 2,
      title: 'Book 4',
      author: 'Author 4',
      image: '/images/books4.jpeg',
    },
    
  ];

  return (
    <div className="container ">
      <h2 className="container-text">Featured Books</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {books.map((book) => (
          <div key={book.id} className="book-container">
            <img
              src={book.image}
              alt={book.title}
              className="book-image"
            />
            <span className="book-title">{book.title}</span>
            <span className="book-author">{book.author}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
