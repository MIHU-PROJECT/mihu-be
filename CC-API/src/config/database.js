const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { seedCategories } = require('../models/categoryModel');

dotenv.config();

const databaseUrl = process.env.MONGODB_URL;

mongoose.set("strictQuery", false);

const connectDatabase = async () => {
  try {
    await mongoose.connect(databaseUrl)

    await seedCategories()

      console.log('Koneksi MongoDB berhasil.')
  } catch (error) {
    console.error('Gagal terhubung ke MongoDB:', error.message)
    process.exit(1)
  }
};
module.exports = connectDatabase;
