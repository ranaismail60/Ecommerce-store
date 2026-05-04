const CART_KEY = 'cloth_store_cart';

export const loadCart = () => {
  try {
    const json = localStorage.getItem(CART_KEY);
    return json ? JSON.parse(json) : [];
  } catch {
    return [];
  }
};

export const saveCart = (items) => {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
};

export const addCartItem = (items, product) => {
  const existing = items.find((item) => item.id === product.id);
  if (existing) {
    return items.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...items, { ...product, quantity: 1 }];
};

export const removeCartItem = (items, productId) =>
  items.filter((item) => item.id !== productId);

export const clearCart = () => [];

export const getCartTotalQuantity = (items) =>
  items.reduce((sum, item) => sum + item.quantity, 0);

export const getCartTotalPrice = (items) =>
  items.reduce((sum, item) => sum + item.quantity * item.price, 0);
