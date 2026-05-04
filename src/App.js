import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router';
import { CartProvider } from './controllers/CartController';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
