import { Link } from 'react-router-dom'

export default function ProductCard({ product, onAdd }) {
  return (
    <div style={{ border: '1px solid #eee', borderRadius: 8, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt={product.name} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
      </Link>
      <div style={{ padding: '0.75rem' }}>
        <h3 style={{ margin: 0, fontSize: 16 }}>{product.name}</h3>
        <p style={{ margin: '0.5rem 0', fontWeight: 600 }}>${product.price.toFixed(2)}</p>
        <button onClick={() => onAdd(product._id)} style={{ padding: '0.5rem 0.75rem', background: '#111', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}
