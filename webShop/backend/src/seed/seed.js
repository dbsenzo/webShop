const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const Product = require('../models/Product');

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    seedDatabase();
  })
  .catch(err => console.log('Error connecting to MongoDB:', err));

const products = [
  { name: "Germinal 1", desc: "description germinal 1", price: 10, imageUrl: "image1.webp" },
  { name: "Germinal 2", desc: "description germinal 2", price: 20, imageUrl: "image2.webp" },
  { name: "Germinal 3", desc: "description germinal 3", price: 30, imageUrl: "image3.webp" },
  { name: "Germinal 4", desc: "description germinal 4", price: 40, imageUrl: "image4.webp" },
  { name: "Germinal 5", desc: "description germinal 5", price: 50, imageUrl: "image5.webp" },
  { name: "Germinal 6", desc: "description germinal 6", price: 60, imageUrl: "image6.webp" },
  { name: "Germinal 7", desc: "description germinal 7", price: 70, imageUrl: "image7.webp" },
  { name: "Germinal 8", desc: "description germinal 8", price: 80, imageUrl: "image8.webp" },
  { name: "Germinal 9", desc: "description germinal 9", price: 90, imageUrl: "image9.webp" },
  { name: "Germinal 10", desc: "description germinal 10", price: 100, imageUrl: "image10.webp" },
  { name: "Germinal 11", desc: "description germinal 11", price: 110, imageUrl: "image11.webp" },
];

async function seedDatabase() {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('Database seeded!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
    mongoose.connection.close();
  }
}
