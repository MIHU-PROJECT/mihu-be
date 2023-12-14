const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Jobs',
        required: true
    },
    workerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workers',
        required: true
    },
    isCompleted: {
      type: Boolean,
      default: false,
      required: true
    },
}, { timestamps: true })

const Orders = mongoose.model('Orders', orderSchema)

module.exports = { Orders }
