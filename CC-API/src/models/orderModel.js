const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Jobs',
        required: true
    },
    takenBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recruiters',
        required: true
    },
    isDone: {
      type: Boolean,
      default: true,
      required: true
    },
}, { timestamps: true })

const Orders = mongoose.model('Orders', orderSchema)

module.exports = { Orders }
