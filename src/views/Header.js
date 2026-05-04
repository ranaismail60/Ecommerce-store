import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="site-branding">
          <Link to="/">Cloth Store</Link>
        </div>
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
        <nav className={`site-nav ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setMobileMenuOpen(false)}>Products</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <Link to="/cart" onClick={() => setMobileMenuOpen(false)}>Cart ({cartCount})</Link>
        </nav>
      </div>
      <div className="header-marquee" aria-label="Promotional banner">
        <div className="marquee-track">
          <span>Fast delivery • New styles added every week • No login needed • Order via WhatsApp now</span>
          <span>Fast delivery • New styles added every week • No login needed • Order via WhatsApp now</span>
        </div>
      </div>
    </header>
  );
};

export default Header;