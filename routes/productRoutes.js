// const express = require('express');
// const { getAllProducts, getProductById } = require('../controllers/productController.js');

import express from "express";
import { getAllProducts, getProductById } from "../controllers/productController.js";

const router = express.Router();

// GET /products
router.get('/', getAllProducts);

// GET /products/:id
router.get('/:id', getProductById);

export default router;