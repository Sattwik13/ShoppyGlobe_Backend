# 🛒 ShoppyGlobe - E-commerce Application

ShoppyGlobe is a full-stack e-commerce web application built using **React**, **Redux**, **Node.js**, **Express.js**, and **MongoDB**. It allows users to browse products, view product details, add items to the cart, and complete a checkout process with authentication and cart persistence.

---

## 🚀 Tech Stack


**Backend**:  
- Node.js  
- Express.js  
- MongoDB with Mongoose  
- JWT Authentication

---

## 📂 Project Structure
```
/backend
├── controllers/
│ ├── productController.js
│ ├── authController.js
│ └── cartController.js
├── models/
│ ├── Product.js
│ ├── User.js
│ └── Cart.js
├── routes/
│ ├── productRoutes.js
│ ├── authRoutes.js
│ └── cartRoutes.js
├── middleware/
│ ├── authMiddleware.js
│ └── errorMiddleware.js
├── config/
│ └── db.js
├── data/
│ ├── data.js
│ └── dummyUsers.json
├── index.js
├── .env
└── .gitignore
```
---

## 🔧 Backend Features

- RESTful API using Express.js
- MongoDB integration using Mongoose
- JWT-based Authentication
- API Endpoints:
  - `GET /products` - Get all products
  - `GET /products/:id` - Get product by ID
  - `POST /cart` - Add to cart (protected)
  - `PUT  /cart/:id` - Update quantity (protected)
  - `DELETE /cart/:id` - Remove from cart (protected)
  - `POST /auth/register` - Register a user
  - `POST /auth/login` - Login a user

---

## 🔐 Authentication Flow

- Register user via `POST /auth/register`
- Login via `POST /auth/login` to receive JWT token
- Send token in `Authorization: Bearer <token>` header for all protected routes

---

## 🧪 API Testing (ThunderClient/Postman)

- All routes tested using Postman
- Screenshots included in `/screenshots` folder -- `document.pdf`

---

## 📦 Dummy Data

- Dummy product data available in `/data/dummyProducts.json`
- You can use `/data/Data.js` script to seed your MongoDB

---

## 🛠️ Setup Instructions

1. **Clone Repo**
   ```bash
   git clone https://github.com/Sattwik13/shoppyglobe.git
   cd shoppyglobe 
   ```

## Setup Backend
   ```
   cd backend
   npm install
   npm run dev
```
## Environment Variables
   
   Create `.env` in /server:

```
   MONGO_URI=your_mongodb_connection
   JWT_SECRET=your_jwt_secret
   PORT=5000
```   
---
# Author

SATTWIK MANNA