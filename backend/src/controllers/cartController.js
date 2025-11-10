// Simple in-memory cart for demo purposes
let cart = [];

export const getCart = (req, res) => {
  res.json(cart);
};

export const addToCart = (req, res) => {
  const { productId, quantity = 1 } = req.body || {};
  if (!productId) return res.status(400).json({ message: 'productId is required' });
  const existing = cart.find((c) => c.productId === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }
  res.status(201).json(cart);
};

export const removeFromCart = (req, res) => {
  const { productId } = req.params;
  const before = cart.length;
  cart = cart.filter((c) => c.productId !== productId);
  if (cart.length === before) return res.status(404).json({ message: 'Item not in cart' });
  res.json(cart);
};
