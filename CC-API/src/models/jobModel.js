const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    id: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    }
})

const Jobs = mongoose.model('Jobs', jobSchema)

module.exports = { Jobs }