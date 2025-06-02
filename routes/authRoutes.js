// const express = require('express');
// const { registerUser, loginUser } = require('../controllers/authController.js');
import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";

const router = express.Router();

// POST /register
router.post('/register', registerUser);

// POST /login
router.post('/login', loginUser);

export default router;
