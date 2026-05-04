/* eslint-disable unicode-bom */
import pic1a from '../images/Pic1(i).jpeg';
import pic1b from '../images/Pic1(ii).jpeg';
import pic1c from '../images/Pic1(iii).jpeg';
import pic2a from '../images/Pic2(i).jpeg';
import pic2b from '../images/Pic2(ii).jpeg';
import pic2c from '../images/Pic2(iii).jpeg';
import pic3a from '../images/Pic3(i).jpeg';
import pic3b from '../images/Pic3(ii).jpeg';
import pic3c from '../images/Pic3(iii).jpeg';
import pic4a from '../images/Pic4(i).jpeg';
import pic4b from '../images/Pic4(ii).jpeg';
import pic4c from '../images/Pic4(iii).jpeg';

const ITEMS_PER_PAGE = 20;

const LOCAL_PRODUCT_IMAGES = {
  '1': [pic1a, pic1b, pic1c],
  '2': [pic2a, pic2b, pic2c],
  '3': [pic3a, pic3b, pic3c],
  '4': [pic4a, pic4b, pic4c],
};

const getProductImages = (id) => LOCAL_PRODUCT_IMAGES[id.toString()] || [];

const products = Array.from({length: 40}, (_, index) => {
  const id = (index + 1).toString();
  const images = LOCAL_PRODUCT_IMAGES[id] || [];
  return {
    id,
    name: `Cloth Store Classic Tee ${id}`,
    price: 2999,
    description: 'A soft, everyday essential made for easy styling and clean lines. Perfect for jeans or relaxed pants.',
    images,
  
  };
});

export const getAllProducts = () => products;

export const getPaginatedProducts = (page, perPage = ITEMS_PER_PAGE) => {
  const start = (page - 1) * perPage;
  return products.slice(start, start + perPage);
};

export const getProductById = (id) =>
  products.find((item) => item.id === id);

export const getPageCount = (perPage = ITEMS_PER_PAGE) =>
  Math.ceil(products.length / perPage);

