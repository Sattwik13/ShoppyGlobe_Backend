import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    // email already present
    if (existingUser) return res.status(400).json({ error: 'Email already exists' });

    const user = new User({ username, email, password });
    await user.save();

    // Create JWT using id, name, email
    const token = jwt.sign({
       ...user
      }, JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.status(201).json({
      token,
      user: {
        _id: user._id,
        name: user.username,
        email: user.email
      },
      message: 'User registered successfully'
  });
  } catch (err) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid email ' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid email or password' });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1d' });
    
    return res.json({ token, message: "You are Login" });

  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
};