import React from 'react';
import '../styles/tailwind.css';
import '../styles/bookcategories.css';

const BookCategories = () => {
  const categories = ['Fiction', 'Non-Fiction', 'Mystery', 'Sci-Fi', 'Romance'];

  return (
    <div className="container ">
      <h2 className="category">Book Categories</h2>
      <div className="category-container">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-card"
          >
            <span className="category-text">{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCategories;
