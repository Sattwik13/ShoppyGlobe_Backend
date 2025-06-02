// const express = require('express');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db.js');
// const productRoutes = require('./routes/productRoutes.js');
// const cartRoutes = require('./routes/cartRoutes.js');
// const authRoutes = require('./routes/authRoutes.js');
// const errorMiddleware = require('./middleware/errorMiddleware.js');

import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import { fetchData } from "./data/data.js";


dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/auth', authRoutes);

app.use(errorMiddleware);

// it's need fetch data only once
fetchData();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
