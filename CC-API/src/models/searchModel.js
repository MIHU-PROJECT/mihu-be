const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
  jobName: {
    type: String,
    required: true,
  }, 
  jobCategory: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date, 
    default: Date.now,
  },
});

const Search = mongoose.model('Search', searchSchema);



// const Category = mongoose.model('Category', categorySchema);

module.exports = { Search };
