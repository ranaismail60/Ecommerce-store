import React from 'react';
import { Link } from 'react-router-dom';
import { fetchProductsPage } from '../controllers/ProductController';

const Home = () => {
  const featuredProducts = fetchProductsPage(1, 4);

  return (
    <main className="home-page">
      <section className="home-hero">
        <div>
          <p className="tagline">Fresh collection launch</p>
          <h1>Discover your next look</h1>
          <p>
            Browse our curated cloth designs, view each product with multiple photos, and order directly via WhatsApp.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/products">
              Browse Products
            </Link>
            <Link className="button ghost" to="/about">
              About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="home-preview">
        <div className="section-heading">
          <h2>Featured Designs</h2>
          <p>Tap any product to see the details.</p>
        </div>
        <div className="preview-grid">
          {featuredProducts.map((product) => (
            <Link key={product.id} className="preview-card" to={`/product/${product.id}`}>
              <img src={product.images[0]} alt={product.name} />
              <div className="preview-card-body">
                <h3>{product.name}</h3>
                <p>PKR {product.price.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
