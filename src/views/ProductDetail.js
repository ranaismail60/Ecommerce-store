import React, { useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchProductById } from '../controllers/ProductController';
import useCart from '../controllers/CartController';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [imageIndex, setImageIndex] = useState(0);

  const product = useMemo(
    () => fetchProductById(id),
    [id]
  );

  if (!product) {
    return (
      <div className="page-centered">
        <h2>Product not found</h2>
        <button className="button" onClick={() => navigate('/')}>Back to Shop</button>
      </div>
    );
  }

  const currentImage = product.images[imageIndex];

  return (
    <main className="detail-page">
      <div className="detail-actions">
        <Link className="button ghost" to="/">Back to shop</Link>
        <Link className="button ghost" to="/cart">View cart</Link>
      </div>

      <section className="detail-panel">
        <div className="detail-image-column">
          <div className="detail-image-frame">
            <img src={currentImage} alt={`${product.name} ${imageIndex + 1}`} />
            <button
              className="image-arrow left"
              onClick={() => setImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)}
            >
              ‹
            </button>
            <button
              className="image-arrow right"
              onClick={() => setImageIndex((prev) => (prev + 1) % product.images.length)}
            >
              ›
            </button>
          </div>
          <div className="thumbnail-row">
            {product.images.map((image, index) => (
              <button
                key={image}
                type="button"
                className={`thumb-button ${imageIndex === index ? 'active' : ''}`}
                onClick={() => setImageIndex(index)}
              >
                <img src={image} alt={`${product.name} thumbnail ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        <div className="detail-info-column">
          <span className="detail-badge">Product details</span>
          <h1>{product.name}</h1>
          <p className="detail-price">PKR {product.price.toLocaleString()}</p>

          <p className="detail-description">{product.description}</p>

          <button className="button primary" onClick={() => addToCart(product)}>
            Add to cart
          </button>

          <div className="detail-notice">
            No login required. No size or color selection. Add to cart instantly.
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
