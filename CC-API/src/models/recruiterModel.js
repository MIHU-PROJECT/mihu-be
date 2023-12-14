const mongoose = require('mongoose')

const recruiterSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
});

const Recruiters = mongoose.model('Recruiters', recruiterSchema);

module.exports = { Recruiters }
