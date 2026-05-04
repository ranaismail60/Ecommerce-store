import {
  getAllProducts,
  getPaginatedProducts,
  getProductById,
  getPageCount,
} from '../models/ProductModel';

export const fetchAllProducts = () => getAllProducts();

export const fetchProductById = (id) => getProductById(id);

export const fetchProductsPage = (page, perPage) => getPaginatedProducts(page, perPage);

export const fetchProductPageCount = () => getPageCount();

