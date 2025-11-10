import dotenv from 'dotenv';
import { connectDB } from '../config/db.js';
import { Product } from '../models/Product.js';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const sample = [
  {
    name: 'Wireless Headphones',
    image: 'https://images.unsplash.com/photo-1518443895914-6f828d79aa2b?q=80&w=1200&auto=format&fit=crop',
    price: 99.99,
    description: 'Comfortable over-ear wireless headphones with noise cancellation.'
  },
  {
    name: 'Smart Watch',
    image: 'https://images.unsplash.com/photo-1557180295-76eee20ae8aa?q=80&w=1200&auto=format&fit=crop',
    price: 149.0,
    description: 'Track your fitness and stay connected with a stylish smart watch.'
  },
  {
    name: 'Mechanical Keyboard',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
    price: 79.99,
    description: 'Tactile mechanical keyboard with RGB backlighting.'
  },
  {
    name: '4K Monitor',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
    price: 299.99,
    description: 'Stunning 27-inch 4K monitor for productivity and entertainment.'
  }
];

const run = async () => {
  try {
    if (!MONGODB_URI) throw new Error('MONGODB_URI missing');
    await connectDB(MONGODB_URI);
    await Product.deleteMany({});
    await Product.insertMany(sample);
    console.log('Database seeded with products');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

run();
