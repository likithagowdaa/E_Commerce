const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';

export const api = {
  async getProducts() {
    const res = await fetch(`${API_BASE}/products`);
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
  },
  async getProduct(id) {
    const res = await fetch(`${API_BASE}/products/${id}`);
    if (!res.ok) throw new Error('Failed to fetch product');
    return res.json();
  },
  async getCart() {
    const res = await fetch(`${API_BASE}/cart`);
    if (!res.ok) throw new Error('Failed to fetch cart');
    return res.json();
  },
  async addToCart(productId, quantity = 1) {
    const res = await fetch(`${API_BASE}/cart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId, quantity })
    });
    if (!res.ok) throw new Error('Failed to add to cart');
    return res.json();
  },
  async removeFromCart(productId) {
    const res = await fetch(`${API_BASE}/cart/${productId}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to remove from cart');
    return res.json();
  }
};
