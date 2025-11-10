import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function Navbar() {
  const { items } = useCart()
  const count = items.reduce((a, c) => a + c.quantity, 0)

  return (
    <header style={{ borderBottom: '1px solid #eee', marginBottom: '1rem' }}>
      <nav style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '1rem', maxWidth: 1200, margin: '0 auto' }}>
        <Link to="/" style={{ fontWeight: 700, fontSize: 20 }}>Shop</Link>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '1rem' }}>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart ({count})</Link>
        </div>
      </nav>
    </header>
  )
}
