// const Cart = require('../models/Cart.js');
// const Product = require('../models/Product.js');

import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

export const addToCart = async (req, res) => {

  const { name, productId, quantity } = req.body;

  try {
    const product = await Product.findById(productId);

    // console.log(product);
    // console.log(productId);
    // console.log(req.userId);
    console.log(quantity);
    console.log(req.body);
    

    if (!product) return res.status(404).json({ error: 'Product not found' });

    // userId for authentication id
    const existingItem = await Cart.find({ userId: req.userId, productId });

    if(existingItem.length!=0){
      await Cart.updateOne({productId},{$inc: {quantity}})
    }
    

    const cartItem = await Cart.insertOne({ userId: req.userId, productId, quantity });
    
    
    return res.status(201).json({
      message:`Product '${name}' already in cart, updated quantity in cart`,
      cartItem});

  } catch (err) {
    res.status(500).json({ error: 'Failed to add to cart' });
  }
};

export const updateCartItem = async (req, res) => {

  const { quantity } = req.body;
  const productId= req.params.id; 
  try {
    const cartItem = await Cart.findByIdAndUpdate( productId, {quantity} , {new:true});

    if (!cartItem) return res.status(404).json({ error: 'Cart item not found' });

    return res.status(200).json({
            message:`Product quantity updated succesfully And item Id:${productId}`,
            cartItem
        });

  } catch (err) {
    res.status(500).json({ error: 'Failed to update cart item' });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const userId = req.userId; // populated from auth middleware
    const deleteProductId = req.params.id;

    // Check if the product exists in the user's cart
    const cartItem = await Cart.findOne({ _id: deleteProductId, userId });

    if (!cartItem) {
      return res.status(404).json({ message: 'Cart item not found or unauthorized' });
    }

    // Delete the cart item
    await Cart.findByIdAndDelete(deleteProductId);

    return res.status(200).json({ message: 'Product removed from cart successfully' });
    
  } catch (err) {
    res.status(500).json({ error: 'Failed to remove from cart' });
  }
};