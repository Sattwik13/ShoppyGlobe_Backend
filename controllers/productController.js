// const Product = require('../models/Product.js');
import Product from "../models/Product.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.json(products);
    
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    return res.json(product);

  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
};