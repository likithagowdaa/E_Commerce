import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../api/client.js'
import { useCart } from '../context/CartContext.jsx'

export default function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { addItem } = useCart()

  useEffect(() => {
    api.getProduct(id).then(setProduct).catch(() => setError('Failed to load')).finally(() => setLoading(false))
  }, [id])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (!product) return <p>Not found</p>

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: 8, objectFit: 'cover' }} />
      <div>
        <h1 style={{ marginTop: 0 }}>{product.name}</h1>
        <p style={{ fontSize: 24, fontWeight: 700 }}>${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        <button onClick={() => addItem(product._id, 1)} style={{ padding: '0.75rem 1rem', background: '#111', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}
