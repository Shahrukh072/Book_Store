import React from 'react';
import '../styles/tailwind.css';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto flex justify-between items-center footer-container">
        <span className="text-gray-400">© 2023 Books Store App. All rights reserved.</span>
        <nav className="footer-nav">
          <a href="Privacy Policy" className="footer-link">Privacy Policy</a>
          <a href="Terms of Service" className="footer-link">Terms of Service</a>
          <a href="Contact US" className="footer-link">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
