import express from "express";
import { addToCart, updateCartItem, removeFromCart } from "../controllers/cartController.js";
import  authenticate from "../middleware/authMiddleware.js";

const router = express.Router();


// All cart routes require authentication
router.post('/add', authenticate, addToCart);
router.put('/:id', updateCartItem);
router.delete('/:id', authenticate, removeFromCart);

export default router;