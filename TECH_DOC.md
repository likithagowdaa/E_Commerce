# MERN E-Commerce - Technical Documentation

## Overview
A minimal MERN e-commerce demo that lets users browse products, view details, and manage a simple cart. Products are stored in MongoDB; the cart is in-memory on the backend for simplicity.

## Architecture
- **Frontend (React + Vite)**
  - React Router for navigation
  - Context API for cart state synced with backend endpoints
- **Backend (Node + Express + Mongoose)**
  - REST API for products and cart
  - MongoDB Atlas for product storage
- **Cart**
  - In-memory array within the server process. Suitable for demos; use a DB for production/sessions.

## Folder Structure
```
E_Commerce/
  backend/
    src/
      config/db.js
      models/Product.js
      controllers/{productController.js, cartController.js}
      routes/{productRoutes.js, cartRoutes.js}
      seed/seed.js
      server.js
    package.json
    .env.example
  frontend/
    src/
      api/client.js
      components/{Navbar.jsx, ProductCard.jsx}
      context/CartContext.jsx
      pages/{Home.jsx, ProductDetails.jsx, Cart.jsx}
      styles/index.css
      App.jsx
      main.jsx
    index.html
    package.json
    vite.config.js
  TECH_DOC.md
  README.md
```

## API Routes
- `GET /api/products` → List products
- `GET /api/products/:id` → Product details
- `GET /api/cart` → Get current cart
- `POST /api/cart` → Add item to cart `{ productId, quantity }`
- `DELETE /api/cart/:productId` → Remove item

## Data Models
- `Product`:
  - `name: string`
  - `image: string`
  - `price: number`
  - `description: string`

## Data Flow
- Frontend calls `GET /api/products` to render Home.
- On Product Details, calls `GET /api/products/:id`.
- Cart actions call `/api/cart` to mutate in-memory cart; context updates with response.

## Setup
### Backend
1. Copy `backend/.env.example` to `.env` and set `MONGODB_URI`, `PORT`, `CLIENT_ORIGIN`.
2. Install deps:
   - `npm i` (in `backend`)
3. Seed sample products:
   - `npm run seed`
4. Start server:
   - `npm run dev`

### Frontend
1. Create `.env` in `frontend` (optional):
   - `VITE_API_BASE=http://localhost:5000/api`
2. Install deps:
   - `npm i` (in `frontend`)
3. Start dev server:
   - `npm run dev`

Open http://localhost:5173

## Notes & Best Practices
- Uses ES Modules and async/await.
- CORS configured via `CLIENT_ORIGIN`.
- Replace in-memory cart with a DB-backed cart for persistence and multi-user support.
