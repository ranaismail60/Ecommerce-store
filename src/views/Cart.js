import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../controllers/CartController';

const WA_NUMBER = '923425848375';
const formatWhatsAppText = (items) => {
  const lines = ['Hello Cloth Store, I want to order:'];
  items.forEach((item) => {
    lines.push(`- ${item.name} x${item.quantity} @ PKR ${item.price.toLocaleString()}`);
  });
  lines.push(`Total items: ${items.reduce((sum, item) => sum + item.quantity, 0)}`);
  return encodeURIComponent(lines.join('\n'));
};

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const whatsappLink = `https://wa.me/${WA_NUMBER}?text=${formatWhatsAppText(cartItems)}`;

  return (
    <main className="cart-page">
      <div className="cart-header">
        <div>
          <h1>Your cart</h1>
          <p>{cartItems.length === 0 ? 'Your cart is empty.' : 'Review your selected items and place your order via WhatsApp.'}</p>
        </div>
        <Link className="button ghost" to="/">Continue shopping</Link>
      </div>

      {cartItems.length === 0 ? (
        <div className="page-centered">
          <p>Add products from the store and they will appear here.</p>
        </div>
      ) : (
        <section className="cart-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.images[0]} alt={item.name} />
              <div>
                <h2>{item.name}</h2>
                <p>Quantity: {item.quantity}</p>
                <p>PKR {item.price.toLocaleString()}</p>
                <button className="button ghost small" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <p>Total items: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}</p>
            <p>
              Total price: PKR{' '}
              {cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0).toLocaleString()}
            </p>
            <div className="cart-actions">
              <button className="button secondary" onClick={clearCart}>
                Clear cart
              </button>
              <a className="button primary" href={whatsappLink} target="_blank" rel="noreferrer">
                Order via WhatsApp
              </a>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Cart;