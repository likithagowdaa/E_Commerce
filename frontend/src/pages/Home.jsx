import { useEffect, useState } from 'react'
import { api } from '../api/client.js'
import { useCart } from '../context/CartContext.jsx'
import ProductCard from '../components/ProductCard.jsx'

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { addItem } = useCart()

  useEffect(() => {
    api.getProducts().then(setProducts).catch(() => setError('Failed to load')).finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
      {products.map((p) => (
        <ProductCard key={p._id} product={p} onAdd={(id) => addItem(id, 1)} />
      ))}
    </div>
  )
}
