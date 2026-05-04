import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="page-centered">
    <h1>Page not found</h1>
    <p>The page you are looking for does not exist.</p>
    <Link className="button" to="/">Back to shop</Link>
  </div>
);

export default NotFound;