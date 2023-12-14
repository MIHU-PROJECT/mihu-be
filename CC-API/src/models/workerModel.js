const mongoose = require('mongoose')

const workerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
});

const Workers = mongoose.model('Workers', workerSchema);

module.exports = { Workers }

