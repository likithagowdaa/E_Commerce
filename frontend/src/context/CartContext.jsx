import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { api } from '../api/client.js'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.getCart().then(setItems).catch(() => setItems([])).finally(() => setLoading(false))
  }, [])

  const addItem = async (productId, quantity = 1) => {
    const updated = await api.addToCart(productId, quantity)
    setItems(updated)
  }

  const removeItem = async (productId) => {
    const updated = await api.removeFromCart(productId)
    setItems(updated)
  }

  const value = useMemo(() => ({ items, addItem, removeItem, loading }), [items, loading])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
