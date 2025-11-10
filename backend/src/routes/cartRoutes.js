import { Router } from 'express';
import { getCart, addToCart, removeFromCart } from '../controllers/cartController.js';

const router = Router();

router.get('/', getCart);
router.post('/', addToCart);
router.delete('/:productId', removeFromCart);

export default router;
