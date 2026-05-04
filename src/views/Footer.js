import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div>
          <p className="footer-brand">Cloth Store</p>
          <p>Designed to showcase your clothing products with multiple image previews and clear navigation.</p>
        </div>
        <nav className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About Us</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </div>
      <div className="footer-copy">© 2026 Cloth Store. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
