const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: '',
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recruiters',
        required: true
    },
    isActive: {
      type: Boolean,
      default: true,
      required: true
    },
}, { timestamps: true })

const Jobs = mongoose.model('Jobs', jobSchema)

module.exports = { Jobs }
