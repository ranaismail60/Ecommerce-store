import { Routes, Route } from 'react-router-dom';
import ProductList from '../views/ProductList';
import ProductDetail from '../views/ProductDetail';
import Cart from '../views/Cart';
import NotFound from '../views/NotFound';
import Header from '../views/Header';
import Footer from '../views/Footer';
import Home from '../views/Home';
import About from '../views/About';
import useCart from '../controllers/CartController';

const AppRoutes = () => {
  const { totalQuantity } = useCart();

  return (
    <>
      <Header cartCount={totalQuantity} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
