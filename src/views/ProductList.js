import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  fetchProductsPage,
  fetchProductPageCount,
} from '../controllers/ProductController';

const ProductList = () => {
  const [page, setPage] = useState(1);

  const pageCount = useMemo(() => fetchProductPageCount(), []);

  const visibleProducts = useMemo(() => fetchProductsPage(page), [page]);

  return (
    <main className="product-page">
      <section className="hero-panel">
        <div>
          <p className="tagline">New Arrivals & Essentials</p>
          <h1>Shop the Cloth Store Collection</h1>
          <p>Minimal styling, bold look, and easy shopping</p>
        </div>
      </section>

      <section className="product-grid">
        {visibleProducts.map((product) => (
          <Link key={product.id} className="product-card" to={`/product/${product.id}`}>
            <div className="product-image-wrap">
              {product.badge && <span className="product-badge">{product.badge}</span>}
              <img src={product.images[0]} alt={product.name} />
            </div>
            <div className="product-info">
              <h2>{product.name}</h2>
              <p className="price">PKR {product.price.toLocaleString()}</p>

            </div>
          </Link>
        ))}
      </section>

      <section className="pagination-row">
        <button
          disabled={page === 1}
          onClick={() => setPage((cur) => Math.max(cur - 1, 1))}
        >
          Previous
        </button>
        <span>
          Page {page} of {pageCount}
        </span>
        <button
          disabled={page === pageCount}
          onClick={() => setPage((cur) => Math.min(cur + 1, pageCount))}
        >
          Next
        </button>
      </section>
    </main>
  );
};

export default ProductList;
