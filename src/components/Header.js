import React from 'react';
import SearchBar from './SearchBar';
import '../styles/tailwind.css';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container mx-auto header-container">
        <img
          src="/logo.png"
          alt="Logo"
          className="header-logo"
        />
         
        <nav className="header-nav">
          <a href="Home">Home</a>
          <a href="BookCategories">BookCategories</a>
          <a href="FeaturedBooks">FeaturedBooks</a>
          <a href="RecentlyAddedBooks">RecentlyAddedBooks</a>
          <a href="About">About</a>
        </nav>
        <SearchBar />

      </div>
    </header>
  );
};

export default Header;
