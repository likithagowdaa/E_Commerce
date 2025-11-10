import { useEffect, useMemo, useState } from 'react'
import { useCart } from '../context/CartContext.jsx'
import { api } from '../api/client.js'

export default function Cart() {
  const { items, removeItem } = useCart()
  const [products, setProducts] = useState([])

  useEffect(() => {
    api.getProducts().then(setProducts)
  }, [])

  const detailed = items.map((i) => ({ ...i, product: products.find((p) => p._id === i.productId) }))
  const total = useMemo(() => detailed.reduce((a, c) => a + (c.product?.price || 0) * c.quantity, 0), [detailed])

  if (!items.length) return <p>Your cart is empty.</p>

  return (
    <div>
      {detailed.map((i) => (
        <div key={i.productId} style={{ display: 'flex', gap: '1rem', alignItems: 'center', borderBottom: '1px solid #eee', padding: '0.75rem 0' }}>
          <img src={i.product?.image} alt={i.product?.name} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 8 }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600 }}>{i.product?.name}</div>
            <div>Qty: {i.quantity}</div>
          </div>
          <div style={{ width: 120, textAlign: 'right', fontWeight: 700 }}>${((i.product?.price || 0) * i.quantity).toFixed(2)}</div>
          <button onClick={() => removeItem(i.productId)} style={{ marginLeft: '1rem', padding: '0.4rem 0.6rem', background: '#e11', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Remove</button>
        </div>
      ))}

      <h3 style={{ textAlign: 'right' }}>Total: ${total.toFixed(2)}</h3>
    </div>
  )
}
