import React from 'react';
import Header from '../components/Header';
import BookCategories from '../components/BookCategories';
import FeaturedBooks from '../components/FeaturedBooks';
import RecentlyAddedBooks from '../components/RecentlyAddedBooks';
import Footer from '../components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <BookCategories />
        <FeaturedBooks />
        <RecentlyAddedBooks />
      </main>
      <Footer />
    </div>
  );
};

export default App;
