import products from "../models/Product.js";

//File to add multiple data of products in products collection using insertmany() method. 
//All data has to in array and we can insert that array using insertmany() method.



const productsData = [
  {
    name: 'Wireless Bluetooth Headphones',
    price: 59.99,
    description: 'High-quality over-ear headphones with noise cancellation and 20h battery life.',
    stock: 50,
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Smart Watch Series 7',
    price: 199.99,
    description: 'Stay fit and connected with a smartwatch featuring fitness tracking and call alerts.',
    stock: 30,
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Ergonomic Gaming Mouse',
    price: 29.99,
    description: 'High-precision wired mouse with RGB lighting and customizable buttons.',
    stock: 100,
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Mechanical Keyboard',
    price: 89.99,
    description: 'Tactile mechanical keyboard with customizable RGB backlighting.',
    stock: 40,
    image: 'https://via.placeholder.com/150'
  },
  {
    name: '4K Ultra HD Monitor',
    price: 349.99,
    description: '27-inch 4K monitor for sharp image quality, perfect for designers and gamers.',
    stock: 20,
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Portable Power Bank 10000mAh',
    price: 24.99,
    description: 'Charge your devices on-the-go with this compact power bank.',
    stock: 70,
    image: 'https://via.placeholder.com/150'
  }
];


  export async function fetchData(){
    await products.insertMany(productsData);
    console.log('Data fetched');
  }